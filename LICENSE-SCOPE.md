# ChineseTypeScript 的许可范围（哪些受"禁止再发布"约束、哪些不受）

> 这一份说明**为什么**包里同时存在多种许可，以及**怎么判定**某个文件属于哪一种。
> 判定规则是**机器可查**的（看文件自己的声明 + 本文件给出的路径清单），不靠人记。

著作权归项目作者所有。**本项目原创部分采用自定义许可**（正文见同目录 `LICENSE`）：
源码公开、允许阅读/修改（自用）/用它开发并发布你自己的程序（含商用），
但**禁止重新打包再发布**；唯一的例外是**非营利、原封不动地整体转发**（四个条件见该文件第四节）。

**性质提示**：这是 source-available（源码可见），**不是** OSI 意义上的开源许可。

## 一、本项目原创部分 —— 受 `LICENSE` 约束（禁止再发布）

* `tsc/internalscanner` 之外 —— 具体地：**汉化层的表与生成器**
  * `tsc/internal/scanner/zh_keywords*.go`、`zh_keywords_generated.go`（中文关键字拼写表）
  * `tsc/internal/scanner/zh_stdlib*.go`、`zh_stdlib_generated.go`（汉语标准库成员表）
  * `tsc/cmd/genzhkeywords/`（中文关键字生成器）
  * `tsc/internal/diagnostics/zh_extra*.go`（中文诊断正文表）
* `stdlib/` —— 译名表与规模化方案
* `tests-chts/` —— 全部判据与夹具（含 `verify_licenses.py` 本身）
* `tools/` —— 构建、生成、打包、教程生成脚本
* `packaging/` —— 发行包内的一键安装/还原、`verify.ps1` 自检、中文说明文档
* `docs/`、`教程/`（含例子与生成物）、`README-我们的说明.md`、`下一步.md`
* 手写与生成的汉语声明：`tests-chts/zhstdlib/汉语标准库.d.ts` 与
  `汉语标准库-成员.generated.d.ts`

**用本项目编译出来的程序，版权与许可完全由写它的人自己决定。**
本许可**不**对编译产物附加任何条件（不"传染"到你的软件）——这是明确的授权，不需要再问。

## 二、派生自 microsoft/typescript-go 的部分 —— **Apache-2.0**（不受本许可约束）

本项目是 microsoft/typescript-go（基线提交 `e26b8d24`）的派生作品。

* **全部上游源码**（`tsc/` 下除第一条列出的汉化表/生成器之外的文件）；
* **全部二进制**：`bin\chtsc.exe`（由上游编译器 + 我们的汉化层构建而成）、
  `dist/`、`packages/*` 里的产物；
* 我们**修改过的 7 个上游文件**（改动本身如实记录在 `NOTICE.txt`）：
  `tsc/cmd/tsc/main.go`、`tsc/internal/core/core.go`、
  `tsc/internal/diagnostics/diagnostics.go`、`tsc/internal/ls/completions.go`、
  `tsc/internal/parser/parser.go`、`tsc/internal/printer/printer.go`、
  `tsc/internal/scanner/scanner.go`

这些**不是**本项目独有的版权：它们派生自 microsoft/typescript-go，按
**Apache License 2.0** 分发（正文见同目录 `LICENSE.txt`，与上游逐字节相同）。

⇒ **你从本发行包拿到的这些源码与二进制，仍然享有 Apache-2.0 给你的全部权利**
（可以再分发、可以商用、可以再许可）。`LICENSE` 里那条"禁止再发布"**只约束本项目原创部分，
不改变、也无权改变**这一部分的权利。

（换句话说：单独把上游编译器本体拿走是合法的 —— 但那样就没有汉语关键字、汉语诊断与
汉语标准库了；而那些表与声明属第一条，受 `LICENSE` 约束。）

## 三、派生自 microsoft/TypeScript 的部分 —— 按各自许可

* `packages/typescript`、`packages/vscode-typescript`、`packages/vscode-typescript-nightly`
* 包内/仓库内的 TypeScript 标准库声明 `lib.*.d.ts`（编译时内嵌的上游 lib）

按 microsoft/TypeScript 自身的许可（Apache-2.0）与各文件头声明处理，**不受**本许可约束。

## 四、第三方（随包但不属于我们，各按各的许可）

| 在包里 | 是什么 | 许可 / 来源 |
|---|---|---|
| `node\node.exe`、`node\LICENSE` | Node.js 运行时 | Node.js（MIT），随包附带其许可证正文 |
| `LICENSE.txt` | 上游 Apache-2.0 正文 | microsoft/typescript-go，与上游逐字节相同 |
| `NOTICE.txt` | 上游第三方披露 + 本项目补充披露 | 上游正文照录；补充部分由本项目撰写 |

⇒ 我们**没有**也不会给这些第三方部件附加限制；包内确实**带了可再分发的第三方运行时**
（Node.js），这一点在 `NOTICE.txt` 里如实写明。

## 五、名称与图标

见同目录 `TRADEMARK.md`：不得用 `ChineseTypeScript` / `汉语 TypeScript` 的名称与图标
发布衍生版本（即使尚未注册商标，这一条作为许可条款的一部分同样有效）。

## 六、机器可查的判定规则

`tests-chts/verify_licenses.py` 按下列顺序判定（**不靠人记**）：

1. 文件头含 `SPDX-License-Identifier: <X>` 的 → 按 `<X>` 处理，**不受**本许可约束；
2. 文件头含上游版权行（`Copyright (c) Microsoft` / `Copyright (c) Microsoft Corporation`）的
   → 按 Apache-2.0 处理，**不受**本许可约束；
3. 路径落在第一条清单里的 → **受** `LICENSE` 约束（禁止再发布）；
4. 其余情况：若文件位于 `tsc/` 且未被第一条点名 → 按上游 Apache-2.0 处理。

## 七、一句话概括

> * 我们写的东西（汉化层、工具、文档、判据）：**源码公开，但禁止重新打包再发布**；
>   非营利原样转发可以（见 `LICENSE` 第四节）。
> * 自己用、公司内部用、拿它写软件卖钱：**随便**；你用本项目写出来的程序**完全归你**。
> * 上游/第三方的东西（microsoft/typescript-go、TypeScript、Node.js）：各按各的许可 ——
>   我们没有、也不会给它们加限制。
