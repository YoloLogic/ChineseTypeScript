// ChineseTypeScript 语言服务桥（无依赖 LSP 客户端）
// 作用：启动 chtsc --lsp --stdio，把 VS Code 的补全/悬浮/诊断接到我们自己的编译器上。
// 为什么必须自己写：VS Code 的 TS 扩展只认 JS 版 tsserver，而我们的语言服务是 Go 的。
const vscode = require("vscode");
const cp = require("child_process");
const fs = require("fs");
const path = require("path");

let out;
let logFile;
function log(msg) {
  const line = "[chts " + new Date().toISOString().slice(11, 19) + "] " + msg;
  if (out) out.appendLine(line);
  try { if (logFile) fs.appendFileSync(logFile, line + "\n"); } catch (e) { /* ignore */ }
}

class LspClient {
  constructor(bin, cwd) {
    this.bin = bin; this.cwd = cwd;
    this.buf = Buffer.alloc(0); this.nextId = 0;
    this.pending = new Map(); this.diagHandlers = [];
  }
  start() {
    log("启动语言服务: " + this.bin + " --lsp --stdio");
    this.child = cp.spawn(this.bin, ["--lsp", "--stdio"], { cwd: this.cwd, stdio: ["pipe", "pipe", "pipe"] });
    this.child.stdout.on("data", (c) => this.onData(c));
    this.child.stderr.on("data", (d) => { const t = d.toString().trim(); if (t) log("stderr: " + t.slice(0, 400)); });
    this.child.on("exit", (c) => log("语言服务退出 code=" + c));
    this.child.on("error", (e) => log("语言服务启动失败: " + e.message));
  }
  onData(chunk) {
    this.buf = Buffer.concat([this.buf, chunk]);
    for (;;) {
      const sep = this.buf.indexOf("\r\n\r\n");
      if (sep < 0) return;
      const m = /Content-Length:\s*(\d+)/i.exec(this.buf.slice(0, sep).toString());
      if (!m) { this.buf = this.buf.slice(sep + 4); continue; }
      const len = parseInt(m[1], 10);
      if (this.buf.length < sep + 4 + len) return;
      const body = this.buf.slice(sep + 4, sep + 4 + len).toString("utf8");
      this.buf = this.buf.slice(sep + 4 + len);
      let msg; try { msg = JSON.parse(body); } catch (e) { continue; }
      this.dispatch(msg);
    }
  }
  dispatch(msg) {
    if (msg.id !== undefined && msg.method) {
      let result = null;
      if (msg.method === "workspace/configuration") result = (msg.params.items || []).map(() => ({}));
      this.send({ jsonrpc: "2.0", id: msg.id, result: result });
      return;
    }
    if (msg.id !== undefined) { const r = this.pending.get(msg.id); if (r) { this.pending.delete(msg.id); r(msg); } return; }
    if (msg.method === "textDocument/publishDiagnostics") { for (const h of this.diagHandlers) h(msg.params.uri, msg.params.diagnostics); }
  }
  send(msg) {
    const body = Buffer.from(JSON.stringify(msg), "utf8");
    this.child.stdin.write("Content-Length: " + body.length + "\r\n\r\n");
    this.child.stdin.write(body);
  }
  notify(method, params) { this.send({ jsonrpc: "2.0", method: method, params: params }); }
  request(method, params) {
    const id = ++this.nextId;
    const self = this;
    return new Promise((resolve) => { self.pending.set(id, resolve); self.send({ jsonrpc: "2.0", id: id, method: method, params: params }); });
  }
  dispose() { try { this.child.kill(); } catch (e) { /* ignore */ } }
}

function toUri(doc) { return "file:///" + doc.uri.path.replace(/^\//, "").replace(/\\/g, "/"); }
function toVscodeRange(r) {
  const P = vscode.Position;
  return new vscode.Range(new P(r.start.line, r.start.character), new P(r.end.line, r.end.character));
}

function activate(context) {
  out = vscode.window.createOutputChannel("ChineseTypeScript 语言服务");
  const cfg = vscode.workspace.getConfiguration("chts");
  const bin = cfg.get("serverPath") || process.env.CHTSC || "chtsc";
  const wf = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0];
  const cwd = (wf && wf.uri.fsPath) || process.cwd();
  logFile = process.env.CHTS_EXT_LOG || "";
  if (logFile) { try { fs.writeFileSync(logFile, ""); } catch (e) { /* ignore */ } }
  log("激活：工作区=" + cwd + "，编译器=" + bin);

  const client = new LspClient(bin, cwd);
  const diags = vscode.languages.createDiagnosticCollection("chts");
  context.subscriptions.push(diags);
  context.subscriptions.push(out);
  context.subscriptions.push({ dispose: function () { client.dispose(); } });

  const opened = new Set();
  const timers = new Map();

  function applyDiags(uri, raw) {
    const list = raw.map(function (d) {
      const diag = new vscode.Diagnostic(toVscodeRange(d.range), d.message, (d.severity || 1) - 1);
      diag.source = "chts";
      if (d.code !== undefined) diag.code = d.code;
      return diag;
    });
    diags.set(vscode.Uri.parse(uri), list);
    log("诊断 " + decodeURIComponent(uri.substring(uri.lastIndexOf("/") + 1)) + " => " + list.length + " 条");
  }

  async function pull(uri) {
    const res = await client.request("textDocument/diagnostic", { textDocument: { uri: uri }, identifier: "chts" });
    const items = (res.result && res.result.items) || [];
    applyDiags(uri, items);
  }

  function schedulePull(uri) {
    clearTimeout(timers.get(uri));
    timers.set(uri, setTimeout(function () { pull(uri).catch(function (e) { log("拉取诊断失败: " + e.message); }); }, 250));
  }

  client.diagHandlers.push(function (uri, raw) { applyDiags(uri, raw); });

  const ready = (async function () {
    client.start();
    const root = wf ? wf.uri.toString() : "file:///";
    const init = await client.request("initialize", {
      processId: process.pid,
      rootUri: root,
      rootPath: cwd,
      workspaceFolders: [{ uri: root, name: path.basename(cwd) }],
      capabilities: {
        workspace: { configuration: true, workspaceFolders: true },
        textDocument: {
          synchronization: { dynamicRegistration: false },
          completion: { completionItem: { snippetSupport: true, documentationFormat: ["markdown", "plaintext"] } },
          hover: { contentFormat: ["markdown", "plaintext"] },
          diagnostic: { dynamicRegistration: false, relatedDocumentSupport: false },
        },
      },
      initializationOptions: {},
      locale: vscode.env.language,
    });
    const si = (init.result && init.result.serverInfo) || {};
    log("服务端=" + si.name + " 版本=" + si.version);
    client.notify("initialized", {});
  })();

  async function openDoc(doc) {
    await ready;
    const uri = doc.uri.toString();
    if (opened.has(uri)) return;
    opened.add(uri);
    client.notify("textDocument/didOpen", { textDocument: { uri: uri, languageId: "typescript", version: doc.version, text: doc.getText() } });
    schedulePull(uri);
  }

  function changeDoc(doc) {
    const uri = doc.uri.toString();
    client.notify("textDocument/didChange", { textDocument: { uri: uri, version: doc.version }, contentChanges: [{ text: doc.getText() }] });
    schedulePull(uri);
  }

  function isTs(d) { return d.languageId === "typescript" || d.languageId === "typescriptreact"; }
  vscode.workspace.textDocuments.forEach(function (d) { if (isTs(d)) openDoc(d).catch(function () {}); });
  context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(function (d) { if (isTs(d)) openDoc(d).catch(function () {}); }));
  context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(function (e) { if (isTs(e.document)) changeDoc(e.document); }));
  context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(function (d) {
    const uri = d.uri.toString();
    opened.delete(uri);
    client.notify("textDocument/didClose", { textDocument: { uri: uri } });
    diags.delete(d.uri);
  }));

  context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: "typescript", scheme: "file" }, {
    provideCompletionItems: async function (document, position) {
      await ready;
      const uri = document.uri.toString();
      const res = await client.request("textDocument/completion", {
        textDocument: { uri: uri },
        position: { line: position.line, character: position.character },
        context: { triggerKind: 1 },
      });
      const raw = res.result ? (res.result.items || res.result) : [];
      if (!raw.length) return undefined;
      const items = raw.map(function (it) {
        const label = typeof it.label === "string" ? it.label : it.label.label;
        const item = new vscode.CompletionItem(label, kindOf(it.kind));
        if (it.detail) item.detail = it.detail;
        if (it.documentation) item.documentation = new vscode.MarkdownString(typeof it.documentation === "string" ? it.documentation : (it.documentation.value || ""));
        if (it.insertText !== undefined) item.insertText = it.insertText;
        // 汉语优先：含汉字的候选排到最前面（否则 console 那堆英文成员会压在上面）
        item.sortText = (/[\u4e00-\u9fff]/.test(label) ? "0" : "1") + label;
        return item;
      });
      log("补全 " + position.line + ":" + position.character + " => " + items.length + " 条；前 6：" + items.slice(0, 6).map(function (i) { return i.label; }).join("、"));
      return new vscode.CompletionList(items, false);
    },
  }, "."));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ language: "typescript", scheme: "file" }, {
    provideHover: async function (document, position) {
      await ready;
      const uri = document.uri.toString();
      const res = await client.request("textDocument/hover", { textDocument: { uri: uri }, position: { line: position.line, character: position.character } });
      const c = res.result && res.result.contents;
      if (!c) return undefined;
      const text = typeof c === "string" ? c : (Array.isArray(c) ? c.map(function (x) { return x.value || ""; }).join("\n") : (c.value || ""));
      if (!text.trim()) return undefined;
      log("悬浮 " + position.line + ":" + position.character + " OK");
      const r = res.result.range || { start: { line: position.line, character: position.character }, end: { line: position.line, character: position.character } };
      return new vscode.Hover(new vscode.MarkdownString(text), toVscodeRange(r));
    },
  }));
}

function deactivate() { }

module.exports = { activate: activate, deactivate: deactivate };
