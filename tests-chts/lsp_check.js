// 语言服务（chtsc --lsp --stdio）的机器判定驱动：跑真 LSP 握手，检查诊断/补全/悬浮。
// 用法: node lsp_check.js <chtsc 路径> <工作目录> <文件相对路径> <初始终点行:字符> ...
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const exe = process.argv[2];
const dir = process.argv[3];
const rel = process.argv[4];
const probe = JSON.parse(process.argv[5] || "{}");   // { complete: {line, character, expect: [..]}, hover: {line, character, expect: ".."} }

const file = path.join(dir, rel);
const text = fs.readFileSync(file, "utf8");
const uri = "file:///" + file.replace(/\\/g, "/").replace(/^\/?/, "");
const fileUri = "file:///" + file.replace(/\\/g, "/");

const child = spawn(exe, ["--lsp", "--stdio"], { cwd: dir, stdio: ["pipe", "pipe", "pipe"] });
let buf = Buffer.alloc(0);
const pending = new Map();
let nextId = 0;
const notes = [];

function send(m) {
  const b = Buffer.from(JSON.stringify(m), "utf8");
  child.stdin.write("Content-Length: " + b.length + "\r\n\r\n");
  child.stdin.write(b);
}
function request(method, params) {
  const id = ++nextId;
  return new Promise((resolve) => { pending.set(id, resolve); send({ jsonrpc: "2.0", id, method, params }); });
}
child.stdout.on("data", (chunk) => {
  buf = Buffer.concat([buf, chunk]);
  for (;;) {
    const sep = buf.indexOf("\r\n\r\n");
    if (sep < 0) return;
    const m = /Content-Length:\s*(\d+)/i.exec(buf.slice(0, sep).toString());
    if (!m) { buf = buf.slice(sep + 4); continue; }
    const len = parseInt(m[1], 10);
    if (buf.length < sep + 4 + len) return;
    const msg = JSON.parse(buf.slice(sep + 4, sep + 4 + len).toString("utf8"));
    buf = buf.slice(sep + 4 + len);
    if (msg.id !== undefined && msg.method) {
      send({ jsonrpc: "2.0", id: msg.id, result: msg.method === "workspace/configuration" ? (msg.params.items || []).map(() => ({})) : null });
    } else if (msg.id !== undefined) {
      const r = pending.get(msg.id); if (r) { pending.delete(msg.id); r(msg); }
    } else if (msg.method === "textDocument/publishDiagnostics") {
      notes.push({ kind: "diag", uri: msg.params.uri, count: msg.params.diagnostics.length });
    }
  }
});

(async () => {
  const rootUri = "file:///" + dir.replace(/\\/g, "/");
  const init = await request("initialize", {
    processId: process.pid, rootUri, rootPath: dir,
    workspaceFolders: [{ uri: rootUri, name: path.basename(dir) }],
    capabilities: {
      workspace: { configuration: true, workspaceFolders: true },
      textDocument: {
        synchronization: { dynamicRegistration: false },
        completion: { completionItem: { snippetSupport: true } },
        hover: { contentFormat: ["markdown", "plaintext"] },
        diagnostic: { dynamicRegistration: false, relatedDocumentSupport: false },
      },
    },
    initializationOptions: {},
    locale: probe.locale || undefined,
  });
  send({ jsonrpc: "2.0", method: "initialized", params: {} });
  send({ jsonrpc: "2.0", method: "textDocument/didOpen", params: { textDocument: { uri: fileUri, languageId: "typescript", version: 1, text } } });
  await new Promise((r) => setTimeout(r, 2500));

  const diag = await request("textDocument/diagnostic", { textDocument: { uri: fileUri }, identifier: "chts" });
  const items = (diag.result && diag.result.items) || [];

  function posAfter(str) {
    const i = text.indexOf(str);
    if (i < 0) return null;
    const before = text.slice(0, i + str.length);
    const lines = before.split(String.fromCharCode(10));
    return { line: lines.length - 1, character: lines[lines.length - 1].length };
  }
  function posOn(str) {
    const i = text.indexOf(str);
    if (i < 0) return null;
    const before = text.slice(0, i + 1);
    const lines = before.split(String.fromCharCode(10));
    return { line: lines.length - 1, character: lines[lines.length - 1].length - 1 };
  }

  let completion = null, hover = null;
  const cpos = probe.completeAfter ? posAfter(probe.completeAfter) : probe.complete;
  if (cpos) {
    const res = await request("textDocument/completion", { textDocument: { uri: fileUri }, position: cpos, context: { triggerKind: 1 } });
    const raw = res.result ? (res.result.items || res.result) : [];
    completion = raw.map((i) => (typeof i.label === "string" ? i.label : i.label.label));
  }
  const hpos = probe.hoverOn ? posOn(probe.hoverOn) : probe.hover;
  if (hpos) {
    const res = await request("textDocument/hover", { textDocument: { uri: fileUri }, position: hpos });
    const c = res.result && res.result.contents;
    hover = typeof c === "string" ? c : (c && c.value) || "";
  }

  console.log(JSON.stringify({
    server: (init.result && init.result.serverInfo && init.result.serverInfo.name) || "",
    version: (init.result && init.result.serverInfo && init.result.serverInfo.version) || "",
    diagnostics: items.map((d) => ({ line: d.range.start.line, message: d.message })),
    pushed: notes.filter((n) => n.kind === "diag").map((n) => n.count),
    completion: completion, hover: hover,
  }));
  child.kill();
})();
