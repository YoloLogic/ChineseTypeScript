# ChineseTypeScript 语言服务扩展（把 VS Code 的类型检查接到我们的编译器上）

## 为什么需要它

VS Code 的 TypeScript 扩展只加载 **JS 版 tsserver**（中文大战代码里是上游 6.0.3），
它不认识汉语关键字与汉语标准库，于是同一份汉语源码会红 56 处（见 `docs/实机测试/README.md`）。
本扩展用**无依赖的 LSP 客户端**把编辑器的补全/悬浮/诊断转给 `chtsc --lsp --stdio` —— 也就是我们自己的 Go 语言服务。

## 安装（中文大战代码 / VS Code 通用）

```powershell
# 1) 把扩展放进一个扩展目录
New-Item -ItemType Directory -Force "$env:TEMP\chts-ext\chts.chinese-typescript" | Out-Null
Copy-Item <仓库>\extensions\chinese-typescript\* "$env:TEMP\chts-ext\chts.chinese-typescript\" -Recurse -Force

# 2) 启动编辑器：指定扩展目录、关掉内置 TS 扩展（否则它会继续红）、告诉扩展编译器在哪
$env:CHTSC = 'E:\cts-build\chtsc.exe'
& 'E:\ChineseVSCode\VSCode-win32-x64\中文大战代码.exe' <工作区> \`
    --extensions-dir "$env:TEMP\chts-ext" \`
    --disable-extension vscode.typescript-language-features

# 注意：若环境里有 ELECTRON_RUN_AS_NODE=1，先 Remove-Item Env:ELECTRON_RUN_AS_NODE，
# 否则编辑器会被当成 node 运行（报 Cannot find module ...）。
```

设置项只有一个：`chts.serverPath`（默认依次取 `CHTSC` 环境变量、PATH 里的 `chtsc`）。

## 它做了什么

| 能力 | 实现 |
|---|---|
| 诊断 | 拉取式（`textDocument/diagnostic`），变更后 250ms 去抖；也兼容服务端推送的 `publishDiagnostics` |
| 诊断语言 | 握手时把 `locale` 设成 `vscode.env.language`（中文界面 → `zh-cn`），于是报文是汉语（"应为表达式。"） |
| 补全 | `textDocument/completion`，触发字符 `.`；**含汉字的候选排在前面**（否则 console 那堆英文成员压在上面） |
| 悬浮 | `textDocument/hover`，直接显示我们的签名（例如 `(method) Array<number>.归纳(...)`） |
| 同步 | 全量文本（简单可靠；汉语源文件体量小，增量同步收益不大） |

## 机器判定

`tests-chts/judge_lsp.ps1`（**6/6**，驱动是 `tests-chts/lsp_check.js`）：

| # | 判据 |
|---|---|
| ① | 握手成功，服务端自称 `typescript` |
| ② | 汉语源码（关键字 + 标准库）**0 诊断** |
| ③ | 故意写坏的汉语文件**必须**报错（证明判定能失败） |
| ④ | `控制台.` 的补全里出现汉语成员 `日志` |
| ⑤ | `归纳` 的悬浮里有汉语签名 |
| ⑥ | 握手带 `locale: zh-cn` 时诊断报文是汉语 |

## 已知边界

* 补全/悬浮目前只覆盖 `typescript`/`typescriptreact` 语言、`file` 方案；`.d.ts`、`js` 未接。
* 语义高亮、签名帮助、重命名等 LSP 能力服务端有，但扩展还没接（按需再加，都是同一个桥的请求封装）。
* 编辑器的"问题"面板里来源显示为 `chts`，便于和别的扩展区分。
