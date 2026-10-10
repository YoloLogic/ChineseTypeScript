# ChineseTypeScript —— 我们的工作副本

> 本目录是 **ChineseTypeScript**（不要把名字写成 "ChineseScript"）。
> 它是 Chinese++ 项目的第四条产品线：几何定位「最快的（C++）/ 最全面的（Python）/
> 最适合浏览器页面的（JS 或 TS 魔改）」中**网页那一角**。
>
> ⚠ **协作边界**（用户 2026-10-07 裁定）：**本仓一般只负责 `E:\ChineseTypeScript`**。
> `E:\Chinese++` 是**中文 C++ 项目**的目录 —— 与我们**并列**的另一个汉化项目（不是父子关系）。
> 那里 `docs/ChineseTypeScript/…` 是**中文 C++ 项目侧维护的「关于 ChineseTypeScript 的登记文档」**；
> 本仓只在**明确受命**时才去同步那份登记。

## 一、底本来源（必须留档）

* 上游仓库：`microsoft/typescript-go`（TypeScript 7 的原生实现，Go 语言）
* 取得方式：**gitee 镜像克隆**（GitHub 直连太慢，实测 curl 28 Operation still slow）
  `git clone https://gitee.com/mirrors/TypeScript.git`
* 本副本基线（上游）：`e26b8d24bee09bf66d59941912166c5aa7975d20`（= 上游 `e26b8d24`）
* 上游原样副本另存于：`E:\TypeScript源代码`（**不要改它**，它是比对的基准）
* **本仓库的公开地址**：<https://github.com/YoloLogic/ChineseTypeScript>（`github` 远程，SSH）
  —— 注意 `origin` 仍是**上游 gitee 镜像**（`gitee.com/mirrors/TypeScript`），**不要往它推**。
* **历史说明（为什么本地 SHA 与上游不同）**：本仓库当初是**浅克隆**（边界=上游 `e26b8d24`），
  而浅克隆**无法推送到空仓库**（远端做连通性检查时报 `did not receive expected object: 8330d40f…`，
  那正是边界提交的父提交，本地没有；gitee 镜像太慢，`git fetch --unshallow` 拉不动）。
  首次推送前用 `git filter-branch --parent-filter` 把**边界提交改写成无父的根提交**
  （新根 `8b3e2a58`），使历史自包含。**代价：那次改写之后所有本地提交 SHA 都变了**
  （例如改写前 `8937c58e` → 改写后 `61684a31`）。上游基线 `e26b8d24` 的说法不变。
* **⚠ 连带坑（已踩一次）**：`E:\cts-base` 是本仓库的**链接工作树**（`git worktree`，detached HEAD），
  改写历史后它还停在旧提交 `e26b8d24`（该对象已不可达）→ 判据跑「编译基线上游 tsc」时
  **Go 的 VCS 盖章失败**（`error obtaining VCS status: exit status 128`），`judge_chts` 整项报错。
  **修法**：在 `E:\cts-base` 里 `git checkout --detach 8b3e2a58`（改写后的根提交，**内容完全相同**）。
  另：如果只是本地构建，给 `go build` 加 `-buildvcs=false` 也能绕过。
* 上游许可：**Apache-2.0**（上游那部分不因我们的条款而改变；见下）

## 一·五、许可（用户 2026-10-09 裁定：改用自定义条款）

**本项目原创部分**（汉化层、工具、判据、文档、打包脚本、汉语标准库声明）**不再用任何标准开源许可**，
改用一份**自定义条款**：**源码可见（source-available）**、允许自用与修改、允许用它开发并销售你自己的程序，
但**禁止重新打包再发布**（唯一例外：非营利、原封不动地整体转发）。

| 文件 | 作用 |
|---|---|
| `LICENSE` | 自定义条款全文（中文为主 + English summary + 通俗版） |
| `LICENSE-SCOPE.md` | 范围说明：哪些受「禁止再发布」约束、哪些不受；**机器可查的判定规则** |
| `TRADEMARK.md` | 名称与图标条款（独立于著作权；未注册商标也同样有效） |
| `LICENSE.txt` | 上游 **Apache-2.0** 正文（与上游**逐字节相同**，**不许改写**） |
| `NOTICE.txt` | 上游第三方披露（照录）+ 本项目披露（改了哪些上游文件、带了哪些第三方） |

**为什么不用 AGPL**：AGPL 明确允许**商业再分发**，与本项目「不许别人包装再发布」的诉求直接冲突。
（中文 C++ 项目曾短暂用过 AGPL-3.0，后来也换掉了。）

**法律上搬不动的边界（已写进文件，否则会与上游许可冲突）**：本项目派生自 microsoft/typescript-go
（Apache-2.0），因此从上游派生的**源码与二进制**（含 `bin\chtsc.exe`）**仍按 Apache-2.0**，
我们的条款**不改变、也不得对它们附加限制** —— 「禁止再发布」只约束**我们原创的那一部分**。
判定规则：文件头带 `SPDX-License-Identifier:` 或上游版权行的，按原有许可，不受本条款约束。

**判据**：`python tests-chts\verify_licenses.py`（也随 `run_all.ps1` 一起跑）——
断言 5 份文件齐备、`LICENSE` 逐字节等于我们声明的那一份（SHA256 钉住）、
`LICENSE.txt` 与上游逐字节相同、`NOTICE.txt` 含全部法定声明；**自带自测**（改坏许可证 / 空洞 NOTICE
必须判失败）；反向验证过（把口径换回标准开源许可 → 判据退出码 1）。

## 二、为什么底本选 TS 7（Go 版）而不是经典 TS 5.x/6.x

* 它就是今天 `tsc` 的本体（npm `typescript@7.x` 只是个去找原生二进制的薄壳）
* **改一处 token 表**即可让「汉语关键字与英文落成同一个 token」——
  与本项目改 clang 的手法完全同构（`ChineseKeywords.def` 那套）
* 经典版（TS 5.x/6.x）是上一代，只作备用

## 三、工具链（已就位）

* **Go 1.27.1**，装在 `E:\Go`（C 盘紧张，一切安装放 E 盘）
  * 模块缓存 `E:\gopath\pkg\mod`，构建缓存 `E:\gopath\build-cache`
  * 代理 `GOPROXY=https://goproxy.cn,direct`
  * **下载教训**：国内镜像实测仅 ~98 KB/s，且 `Invoke-WebRequest` **攒内存不落盘**
    （会出现「下了几分钟仍 0 MB」的假象）；一律改用 `curl -C -` 断点续传 + SHA256 校验。
* node v24.15 / npm 11.12（跑产物用）

## 三·五、命令名：`chtsc`（不是 `tsc`）

| | 是什么 | 取值 |
|---|---|---|
| 文件格式 | 源文件的后缀 | **`.ts`**（就是普通 TypeScript 后缀，见 §四） |
| 命令名 | 终端里敲的那个可执行文件 | **`chtsc`** |

用户 2026-10-07 裁定：**只叫 `chtsc`**，不做 `tsc` 别名。

* 构建：`pwsh -File tools\build_chtsc.ps1` → `E:\cts-build\chtsc.exe`
  （脚本自带自证：打版本号 + 真编译一个 `.ts` + node 真跑）
* **为什么这是零成本的纯产品决定**：全仓**没有一处**按 `os.Args[0]`
  （"我叫什么名字"）分支的代码，所以改二进制名字**不改变任何行为**。
  这与 clang 那边**根本不同** —— clang 的 `argv[0]` 决定驱动模式、还要读同名
  `.cfg`，所以那边的中文驱动名（`x86_64-unknown-linux-gnu-chinese++`）是**功能**，
  必须严格区分。
* 同类先例：上游自己把 Go 实现叫 **`tsgo`**（`Herebyfile.mjs` 的 tsgo 任务），
  与经典 `tsc` 两名并存。
* 实测：`chtsc.exe` 37.9 MB，`chtsc --version` 报 `Version 7.1.0-dev`。

## 四、文件扩展名：就是普通 `.ts`（2026-10-08 撤销 `.chts`）

**用户 2026-10-08 裁定：不再有 `.chts` / `.d.chts`，ChineseTypeScript 直接用普通 `.ts`。**

* **为什么（推广理由）**：用汉化版写的 `.ts`，从**后缀上与原版完全无法区分**；
  但只有我们的编译器认识里面的汉语关键字，**原版不认识**。同一份代码，
  在装了汉化版的人手里能编，在原版手里编不过 —— 这是**「暗处推广」**：
  代码能正常流出去，想读懂/改动它的人迟早需要汉化版。
  自己另造一个后缀（`.chts`）反而会把人挡在门外。
* **撤销了什么（2026-10-08）**：
  * **扩展名相关 9 个文件已逐字节还原为上游**：`tspath/extension.go`、
    `module/resolver.go`、`module/util.go`、`ast/utilities.go`、
    `modulespecifiers/util.go`、`ls/string_completions.go`、`compiler/program.go`、
    `compiler/includeprocessor.go`、`tsoptions/tsconfigparsing.go`；
  * **`.d.chts` 支持删除**：声明文件回到**标准 `.d.ts`**（上游本来就这样）；
  * **汉语关键字的作用域**：由「仅 `.chts`」改回**全局生效**
    （所有 `.ts` / `.tsx` / `.mts` / `.cts` / `.d.ts`）；
  * **编辑器补全**：同样**对所有 `.ts` 生效**（原来只给 `.chts`）。
* **代价（用户明确接受）**：
  * **分不清**「汉语 `.ts`」与「英文 `.ts`」—— 后缀一模一样，工具链认不出来；
  * **汉语保留字不能再当标识符**：`const 变量 = 1;` 会报 **TS1389**
    （`变量` = `var`，不能被用作变量声明名）。英文关键字永远可写，是逃生通道。
* **历史（留档）**：`cts` 被上游占为「CommonJS 版 TypeScript」，是**语义性占用**
  （证据：`checker.go` 里 `ext = core.IfElse(preferTs, ".cts", ".cjs")`；
  `ExtensionsNotSupportingExtensionlessResolution` 含 `.cts`），
  所以当初才另取 `.chts`；2026-10-08 因**推广**考虑把这条路整体撤销。

## 五、改动清单：上游源码只动了 7 个文件

| # | 文件 | 改动 |
|---|---|---|
| 1 | `tsc/internal/scanner/scanner.go` | `GetIdentifierToken` 放开 ASCII 闸：非 ASCII 标识符查独立表 `zhTextToKeyword`（**所有文件都认**） |
| 2 | `tsc/internal/core/core.go` | 修 `getSpellingSuggestion` 的**字节/rune 长度混用**（否则汉语「你是不是想写…」永远命中不了，见「六·六」） |
| 3 | `tsc/internal/parser/parser.go` | ① `parseUndefinedKeywordExpression`：值位置把「未定义」归一化成规范拼写 `undefined`（见 §九 第 6 条）；② 汉语「你是不是想写…」建议作为**回退**（见「六·六」） |
| 4 | `tsc/internal/printer/printer.go` | `getTextOfNode`：文本是规范 `undefined` 而源码拼写不是时，用节点文本落盘（与第 3 处配对） |
| 5 | `tsc/internal/ls/completions.go` | 编辑器补全并入汉语关键字（**对所有 `.ts`**，见「六·六」）：新增汉语补全表、缓存键带「是否含汉语」、种类反查改用 `StringToTokenIncludingChinese` |
| 6 | `tsc/cmd/tsc/main.go` | 命令行默认 `--locale zh-CN`（`argsWithDefaultLocale`；locale 是命令行专用选项，故不覆盖 tsconfig，库与上游测试零变化。见「六·八」） |
| 7 | `tsc/internal/diagnostics/diagnostics.go` | zh-CN 下挂接我们的**补译表** `zhExtraMessages`（上游缺的 86 条）与**覆盖表** `zhOverrides`（如 `--help` 首行 `tsc:` → `chtsc:`）；只补缺/覆盖简体中文，英文与其它语言不变（见「六·八」） |

**已还原为上游（不再是改动）**：`tsc/internal/tspath/extension.go`、`tsc/internal/module/resolver.go`、
`tsc/internal/module/util.go`、`tsc/internal/ast/utilities.go`、`tsc/internal/modulespecifiers/util.go`、
`tsc/internal/ls/string_completions.go`、`tsc/internal/compiler/program.go`、
`tsc/internal/compiler/includeprocessor.go`、`tsc/internal/tsoptions/tsconfigparsing.go`
—— 共 **9 个文件**，逐字节回到上游（`git diff` 里已看不到它们）。
原先为「仅 `.chts` 生效」加的按文件标志（`binder`、parser 简写属性分支、`format/scanner.go`、
`format/api.go`、`ls/organizeimports.go`）也**一并撤销**。

**本项目自有新文件（非上游改动）**：`tsc/cmd/genzhkeywords/main.go`、
`tsc/internal/scanner/zh_keywords*.go`（`zh_keywords.txt`、`zh_keywords_api.go`、
`zh_keywords_generated.go`）、`tsc/internal/diagnostics/zh_extra*.go`，以及它们各自的测试。

> **留档教训**：改扩展名这类「横切」改动要**同级反查全仓** —— 第一版只改了扩展名表，
> 结果 `导入 ... 来自 "./数学"` 报 TS2307，因为解析器里另有一张**手写白名单**
> `extensionIsOk`，逐扩展名列举。这条方法仍然有效，只是**已随方向撤销不再需要**。

## 六、工具与守卫（绝不靠人记得）

| 角色 | 文件 |
|---|---|
| 译名**单一真源** | `tsc/internal/scanner/zh_keywords.txt`（85 行，`<英文关键字> <中文译名>`） |
| 生成器（**产出两份**） | `tsc/cmd/genzhkeywords`（`go run ./cmd/genzhkeywords`；产 `zh_keywords_generated.go` + **`docs/中文对照表.md`**；`-check` 把**两份一起核**） |
| **用户可读的中英对照表** | `docs/中文对照表.md`（**生成物**，随词表自动更新；判定第①项核它、第⑩项自测它） |
| 关键字机器守卫 | `tsc/internal/scanner/zh_keywords_test.go`（9 条） |
| **构建命令** | `tools/build_chtsc.ps1` → `chtsc.exe`（命令名见「三·五」节；自带版本号+真编译+真跑自证） |
| 共享检查器 | `tests-chts/zhcheck.ps1`（剥注释与字符串后按汉字段整段比对） |
| 端到端判定 | `tests-chts/judge_chts.ps1`（18 项，含 `--strict`、属性名、对照表自测、`未定义` 归一化） |
| 项目级判定 | `tests-chts/judge_proj.ps1`（15 项） |
| 大规模零回归 | `tests-chts/judge_oss.ps1`（比诊断与产物） |
| **全集回归** | `tests-chts/judge_gotest.ps1`（4 项，跑上游 Go 测试全集并与基线对照；**允许清单**里含 `internal/fourslash/tests` —— 「汉语补全对所有 `.ts` 生效」带来的**有意**差异） |
| **教学教程**（生成物） | `教程/ChineseTypeScript-教学教程.md`（9 课：关键字用法 + 符号用法 + 内建用法）+ **Word 版 `教程/ChineseTypeScript-教学教程.docx`**；守卫 `tests-chts/judge_tutorial.ps1` 真编译真跑每个例子、核 docx 同步、并守例子目录构成 |
| **打包器** | `tools/make_package_chts.ps1` → `dist\ChineseTypeScript-<ver>-win64.zip`（自带 `chtsc` + 便携 node + 生成物文档 + 例子） |
| **包内自测** | `packaging/verify.ps1`（**21 项**，`$expectedChecks` 自证；含 5 份许可/披露文件点名 + 一个**必须失败**的用例） |
| **一键安装/还原** | `packaging/install.ps1` + `一键安装.cmd` / `uninstall.ps1` + `一键还原.cmd`（只写会话级 `env.cmd`；`-AddToUserPath` 才动用户 PATH） |
| **打包判定** | `tests-chts/judge_package.ps1`（6 项：真打包 → 解压到中文路径 → 安装 → 包内 21/21 → 文档数字对拍 → 破坏必被抓） |
| **汉语关键字只读 API** | `tsc/internal/scanner/zh_keywords_api.go`（`ChineseKeywordAliases` / `ChineseKeywordSpellings` / `StringToTokenIncludingChinese`，**升序确定性**；`StringToToken` 保持只认英文） |
| **语言服务判定** | `tests-chts/judge_langservice.ps1`（9 项：三组 Go 守卫 + CLI 真编译三条汉语建议 + 两条负对照） |
| **中文诊断判定** | `tests-chts/judge_zhdiag.ps1`（7 项：默认中文 / `--locale en` 回英文 / 默认==显式 zh-CN / 抽样多码中文 / 正确程序无诊断 / 上游缺译条目也出中文 / **`--help` 首行中文 `chtsc:` 而英文仍 `tsc:`**） |
| **关键字作用域判定** | `tests-chts/judge_kwscope.ps1`（6 项：普通 `.ts` 认汉语关键字 / 汉语保留字不能当标识符 → TS1389（代价自证） / `.tsx` 也认 / `.mts`·`.cts` 也认 / `.d.ts` 也认 / 负对照） |
| **一条命令全跑** | `tests-chts/run_all.ps1`（**八项**：五套核心 + 三个特性判定 langservice/zhdiag/kwscope；`-SkipGoTest` 可跳过最慢的 gotest。打包判定 `judge_package.ps1` 仍需单独跑） |

生成器**不信任任何手写清单**：它自己解析 `scanner.go` 的 `textToKeyword` 得到
「英文关键字 → `ast.Kind`」，再与词表比对。因此扫描器新增英文关键字而词表漏译、
词表写了扫描器没有的词、译名重复、汉字数不在 2–6 —— **一律报错退出，不静默**。

## 六·五、独立发行包（0.1，win64）

用户 2026-10-07 裁定：ChineseTypeScript 要出**独立发行包**，并**随包带便携版 node**。

* **产物**：`dist\ChineseTypeScript-0.1-win64.zip`（51.6 MB；未压缩 125.7 MB / 25 个文件）。
  内含 `bin\chtsc.exe`（38 MB）、`node\node.exe`（87 MB，官方 **v24.15.0**，SHA256 与官方 win-x64 发行包**逐字节一致**）、
  生成物文档（`docs\中文对照表.md`、教程 md + docx）、`例子\`（9 个）、
  **5 份许可/披露文件**（`LICENSE`/`LICENSE.txt`/`NOTICE.txt`/`LICENSE-SCOPE.md`/`TRADEMARK.md`）、`node\LICENSE`、
  安装/还原/自测脚本与 `MANIFEST.tsv`。
* **打包**：`pwsh -File tools\make_package_chts.ps1`（`-Version` / `-OutDir` / `-Rebuild` / `-NoNode`）。
  默认输出 `dist\`（`.gitignore` 已忽略，**不进库**）。
* **包内自测**（`packaging\verify.ps1`，**纯 ASCII**，汉语从码点构造）：**21 项**，项数由
  `$expectedChecks` **自证**（跑不到这个数就判失败）；第 5 项**故意编一个错程序**，确认它真的被拒 ——
  「判据不是橡皮图章」的自证。
* **一键安装**只写**会话级** `env.cmd`（`PATH` 只在该窗口生效）；`-AddToUserPath` 才动用户 PATH；
  `一键还原.cmd` / `uninstall.ps1` 精确复原（实测 `PATH restored exactly = True`）。
* **机器守卫**：`tests-chts\judge_package.ps1`（5 项）**真打包**、解压到**含中文**的外来目录、
  跑安装与包内自测，并证明「把包内编译器改名后自测**必失败**」。
* 实测：包内自测 **21/21**、打包判定 **6/6**。

## 六·六、语言服务与建议（item①，2026-10-07）

* **编辑器补全**：`allKeywordCompletions` 旁新增汉语补全表，**对所有 `.ts` 生效**
  （2026-10-08 起；原先只给 `.chts`，随方向撤销改为全局）——
  85 条汉语会进入每个 `.ts/.js` 的补全列表，代价是上游 `internal/fourslash/tests` 的
  `exact` 补全测试多出失败（实测约 90 处「Expected N exact completion items」）。
  **这是有意的差异**，已进 `judge_gotest` 的允许清单。编辑器入口是 `chtsc --lsp --stdio`。
* **「你是不是想写…」建议**：汉语别名作为**回退**（英文能给建议时一字不改，英文诊断文本逐字相同）。
  为此修了 `core` 的一处**真 bug**：长度比较把 `len(candidateName)`（**字节**）与
  `len(runeName)`（**rune**）混用 —— ASCII 下看不出，汉语下把「函树 → 函数」直接跳过。
  两字译名（71/85）另补一条「恰好差一个汉字」的判据：上游对 2 字符名**故意**不建议
  （「用户通常能注意到两个字的名字的差异」），照搬会让绝大多数汉语建议失效。
* **边界**：`StringToToken` **故意**保持只认英文（它被 `.d.ts` 生成、自动导入等位置用来
  判断「这个名字是不是关键字」，让汉语悄悄参与会波及英文路径的产物）；
  需要连汉语一起认的地方显式调用 `StringToTokenIncludingChinese`。
* 判定：`judge_langservice.ps1` **9/9**；`ls` 6 条 + `parser` 4 条 + `scanner` 5 条 Go 守卫
  （JS-only 过滤对汉语同样生效、补全确定、缓存不串扰）；
  英文路径零回归照旧（`judge_oss` 600/600）；上游补全类测试多一类**有意**差异（见上）。

## 六·七、`.d.chts` 声明文件（item②）——**已撤销**（2026-10-08 方向调整）

* **撤销原因**：2026-10-08 用户裁定不再有 `.chts`/`.d.chts`，直接用普通 `.ts`。
  声明文件因此回到**标准 `.d.ts`**（上游本来就是这个），不再需要任何自定义声明后缀。
* **删掉了什么**：`ExtensionDchts` 及其在 `tspath/extension.go`、`module/resolver.go`、
  `module/util.go`、`ast/utilities.go`、`modulespecifiers/util.go`、`ls/string_completions.go`
  里的全部落点（这些文件已**逐字节还原为上游**）；测试
  `tsc/internal/tspath/dchts_extension_test.go` 与判定 `tests-chts/judge_dchts.ps1` **已删除**。
* **现在怎么办**：要声明文件就写标准 `.d.ts`（例如 `甲.d.ts` 与 `甲.ts` 配对）；
  用 `.ts` 写汉语代码时，`--declaration` 产出的也是标准 `.d.ts`，任何 TS 工具都能直接消费。
  这条链仍由 `judge_proj.ps1` 真编译真跑覆盖。
* **留档**：当初为 `.d.chts` 特意论证过「它不是 CommonJS 语义」（`.d.cts` 才是），
  那段判断随 `.d.chts` 一起删除；今后 CJS 相关需求一律走上游的 `.cts`/`.cjs`。

## 六·八、诊断默认中文（item③，2026-10-07）

* **先纠正一条旧结论**：本文件早先写「诊断信息未汉化」，**不准确** ——
  上游 tsc-go 本来就自带 **zh-CN 翻译**（`tsc/internal/diagnostics/loc/zh-CN.json.gz`）
  与 `--locale` 机制，实测词条 **2118/2204（96%，全部含汉字）**。
* **本项目做的汉化**：让 `chtsc` **命令行默认用中文**（用户 2026-10-07 裁定）。
  实现只有一处：`tsc/cmd/tsc/main.go` 的 `argsWithDefaultLocale` —— 没给 `--locale` 时
  补上 `--locale zh-CN`。
  * **为什么放在 CLI 层**：`locale` 是**命令行专用**选项（`IsCommandLineOnly`），
    所以注入默认值**不会覆盖任何 tsconfig 设置**；而库与上游 Go 测试不走 `cmd/tsc`，
    因此它们的默认行为**一个字节不变**（`judge_gotest` 的 baseline 差异为 0）。
  * `--locale en` 回到英文；显式 `--locale <任何语言>` 一律尊重。
* **判定**：`judge_zhdiag.ps1`（7 项）—— 默认出中文、`--locale en` 回英文、
  默认与显式 `zh-CN` **逐字节相同**、抽样 TS2304/TS2554/TS2322 都出中文、
  正确程序无诊断（负对照）。英文路径的判定（`judge_oss` / `judge_langservice`）
  已显式加 `--locale en`，零回归照旧。
* **上游缺的 86 条已由我们补齐**（2026-10-08）：新增 `tsc/internal/diagnostics/zh_extra.go`
  的 `zhExtraMessages`（86 条，多为 content mapper 新诊断与若干命令行选项说明），
  由 `diagnostics.go` 在 zh-CN 下「只补缺」合并；`zh_extra_test.go` 机器校核
  「键存在 / 含汉字 / 占位符与英文一致 / 上游已收录则冗余」。这样 **2204/2204 都有中文**。
  译文风格对齐上游 zh-CN（「」→“”、术语一致）。
* **`--help` 首行产品名**：中文里改成 **`chtsc: TypeScript 编译器`**（`zhOverrides`，只覆盖简体中文）；
  **英文保持上游的 `tsc: The TypeScript Compiler`**，从而与上游 help 基线逐字节一致、
  不需要给 `judge_gotest` 增加新一类解释规则。
* **仍缺的（诚实登记）**：译文与 Chinese++ 的 7344 条**不保证同词同译**（两条产品线诊断集基本不相交）。

## 六·九、汉语关键字的作用域：**普通 `.ts` 里全局生效**（2026-10-08 方向调整）

* **结论**：汉语关键字在**所有** `.ts` / `.tsx` / `.mts` / `.cts` / `.d.ts` 里都生效
  （2026-10-08 撤销了原来的「仅 `.chts`」按文件开关）。编辑器补全同理，对所有 `.ts` 生效。
* **代价（用户明确接受，判据自证）**：分不清汉语/英文 `.ts`；且**汉语保留字不能再当标识符** ——
  `const 变量 = 1;` 报 **TS1389**（`变量` = `var`）。英文关键字永远可写，是逃生通道。
* **实现**：`scanner.getIdentifierToken` 去掉按文件的门槛，非 ASCII 标识符一律查
  `zhTextToKeyword`；`binder` 与 parser 的简写属性分支回到**包级** `GetIdentifierToken`；
  `format` / `ls/organizeimports` / `ls/completions` 里为 `.chts` 加的按文件标志**随之撤销**
  （相关文件已还原上游）。
* **判定**：`tests-chts/judge_kwscope.ps1` **6/6**（新六项：① 普通 `.ts` 认汉语关键字；
  ② 汉语保留字不能当标识符 → TS1389（代价自证）；③ `.tsx` 也认；④ `.mts`/`.cts` 也认；
  ⑤ `.d.ts` 也认；⑥ 负对照：正确英文 `.ts` 无诊断）。
* **全量判定**：`judge_oss` 600/600 零回归；`judge_gotest` 4/4（baseline 差异 **0**；
  多出的失败包只有 `internal/fourslash/tests`，属**有意**差异、已在允许清单内）。

## 七、判定证据（本轮实测）

```
judge_chts.ps1   18/18 通过（含第 8 节 --strict、第 9 节 关键字作属性名、
                 第 10 节 对照表新鲜度守卫的**自带自测**：改坏一个字节会被抓、
                 第 11 节 未定义 值位置归一化 / 属性名原样保留）
judge_proj.ps1   15/15 通过
judge_oss.ps1    真实语料 = 上游官方 conformance 目录里【全部】5894 个 .ts/.tsx（排除 .d.ts）
                 全量跑：【诊断输出 + 退出码】5894/5894 逐字节相同（一个不落）
                 另抽 300 个：产物【逐字节】300/300 相同
                 （-Sample N 抽样、-Sample 0 全量；抽样 600 时同样是 600/600 与 60/60）
judge_gotest.ps1  4/4 通过（上游自带 Go 测试全集，跑两遍：基线 vs 工作副本）
                 基线失败包 = astnav（缺 node_modules/typescript）、
                              fswatch（非管理员无建符号链接特权）—— 环境问题
                 工作副本多出的失败包 = tsctests、testrunner（baseline 文本差异）、
                              fourslash/tests（「汉语补全对所有 .ts 生效」的**有意**差异，已进允许清单）
                 baseline 差异 = 0（不再有 .chts 插入类差异）
judge_tutorial.ps1  5 步全过（9 个例子真编译真跑逐行比对、教程与模板/例子/对照表一致、
                    Word 版 .docx 与正文同步、例子目录构成守卫、改坏期望输出必须被抓的自测）
judge_package.ps1   5/5（真打包 51.6 MB → 解压到含中文的外来目录 → install 写 env.cmd →
                    包内 verify 21/21 → 把包内 chtsc 改名后 verify 必失败）
judge_langservice.ps1  9/9（scanner 5 + parser 4 + ls 6 条 Go 守卫；CLI 三条汉语建议：
                       函树→函数、局部变两→局部变量、如果甲→如果；两条负对照无建议）
judge_zhdiag.ps1    7/7（默认出中文 → --locale en 回英文 → 默认==显式 zh-CN 逐字节相同 →
                    TS2304/TS2554/TS2322 抽样都出中文 → 正确程序无诊断 →
                    上游缺译条目（如 TS5074）也出中文 → --help 首行中文 chtsc: / 英文 tsc:）
judge_kwscope.ps1   6/6（普通 .ts 认汉语关键字 → 汉语保留字不能当标识符（TS1389，代价自证）→
                    .tsx 也认 → .mts/.cts 也认 → .d.ts 也认 → 负对照）
run_all.ps1       八项：judge_chts / judge_proj / judge_oss / judge_tutorial /
                  judge_langservice / judge_zhdiag / judge_kwscope / judge_gotest
                  （judge_dchts.ps1 已随方向撤销删除）
```

> **为什么全集判定要这么麻烦**：改词法层（把汉语并进关键字表）本来不该影响英文路径，
> 但**任何**这类改动都可能顺手碰坏别的东西。`judge_gotest` 用「跑两遍、逐行对照」
> 把「有意的差异」与「真的改坏了」分开。2026-10-08 撤销 `.chts` 后 baseline 差异已归零；
> **唯一**多出的一类失败是 `internal/fourslash/tests` 的 exact 补全差异 ——
> 那是「汉语补全对所有 `.ts` 生效」的**有意**代价，已在允许清单里写明。

其中最关键的两条：

* **英文路径逐字节不变**：同一个 `demo_en.ts`，用上游基线 tsc 与本编译器分别编译，
  产物 SHA256 都是 `BD88EB8023D5F40E…`。
* **汉语源真跑**：`demo.ts` → `demo.js`（普通后缀）→ node 真跑，
  stdout 与英文对照**完全一致**；产物里 85 个译名**一个都没作为关键字出现**。

## 八、词表实测

* 条数 **85**（与 `scanner.go` 的 `textToKeyword` 精确 1:1，无缺无多）
* 译名唯一性：**全部唯一**；一词一译
* 2–6 汉字定则：**全部合规**（2 字 71 条、3 字 12 条、4 字 2 条）
* 最长译名：`局部变量`(let)、`类型别名`(type)，4 汉字 / 12 字节

## 九、已知局限（诚实登记，别当成已完成）

1. ~~**汉语关键字在所有文件里都生效**~~ —— **2026-10-08 起回到全局生效**（见「六·九」）：
   汉语关键字在**所有** `.ts` / `.tsx` / `.mts` / `.cts` / `.d.ts` 里都认；编辑器补全同理。
   判定 `judge_kwscope.ps1`（6/6）。代价见下面第 7、8 条。
2. ~~**`.d.chts` 声明文件不支持**~~ —— **已随方向调整删除**（2026-10-08，见「六·七」）：
   声明文件回到**标准 `.d.ts`**（上游本来就这样），自定义声明后缀不再是本项目的需求。
3. ~~**语言服务尚未把汉语关键字加入补全建议**~~ —— **已做**（2026-10-07；2026-10-08 起对所有 `.ts`）：
   编辑器补全与「你是不是想写…」建议都认汉语关键字。
   **但编辑器侧尚未打包/配置**：发行包里没有 `.vscode` 模板，用户要自己把
   `chtsc --lsp --stdio` 配给编辑器。
4. **诊断已是「默认中文」且覆盖 2204/2204**（2026-10-07/08，见「六·八」）：上游 zh-CN 2118 条
   + 我们补的 86 条（`zh_extra.go`）；中文 `--help` 首行是 `chtsc:`（英文仍是上游的 `tsc:`）。
   译文与 Chinese++ 的 7344 条**不保证同词同译**。
5. ~~**未打包、未发布**~~ —— **已出独立发行包**（2026-10-07，见「六·五」节）：
   `dist\ChineseTypeScript-0.1-win64.zip`（自带便携 node），包内自测 21/21、打包判定 6/6。
* **已发布**：<https://github.com/YoloLogic/ChineseTypeScript/releases/tag/v0.1>
  （资产 `ChineseTypeScript-0.1-win64.zip`，54,197,117 字节，sha256 `3df4ca16…`；
  Release 说明里含「许可与再分发」四句 + 「Assets 区块可能是折叠的」提醒）。
  **注意：GitHub 的 Assets 区块默认折叠**，下载时要先展开。
   **但仍未发布到网上**（无上传 / 下载页 / CI）。
6. ~~**`未定义`（undefined）不能当【值】用**~~ —— **已修**（2026-10-07，写教程时真编译撞出来的）。
   症状：`常量 甲 = 未定义;` 报 `TS2304 找不到名字`，而 `: 未定义`（当类型）正常。
   根因：`null`/`true`/`false` 是 JS 的**字面量**（按种类驱动，所以汉语拼写天然等价）；
   而 `undefined` 在 JS 里**不是字面量**、是全局对象上的一个**名字** ——
   上游按**文字**把它注册成全局符号（`checker.go` 的 `c.globals["undefined"]`），
   值位也按普通标识符解析。于是汉语拼写两头落空：解析查不到该全局名；
   产物又会把 `未定义` 原样打印成标识符，而 JS 里没有这个全局名 → 运行时 `ReferenceError`。
   修法两处（都在边界上）：
   * `parser.parseUndefinedKeywordExpression` —— 值位置把标识符文本归一化成规范拼写 `undefined`
   * `printer.getTextOfNode` —— 文本是规范 `undefined` 而源码拼写不是时，用节点文本
   **只归一化值位置**：属性名/成员名（`{ 未定义: 1 }`、`甲.未定义`、字符串键）
   是运行时的真实属性名，**原样保留**。已由 `tests-chts/undefined.ts` + 判定第⑪节永久钉住。
7. **无法区分汉语/英文 `.ts`**（2026-10-08，**有意**）：用汉化版写的 `.ts` 与普通 `.ts`
   后缀完全一样，工具链分不出来。这是「暗处推广」的**目的**，不是缺陷 ——
   但反过来，仓库里也**没有一个可靠标记**告诉别人「这个文件用了汉语关键字」。
8. **汉语保留字不能再当标识符**（2026-10-08，**代价**）：`const 变量 = 1;` 报
   **TS1389**（`变量` = `var`，不能被用作变量声明名）；`对象`/`函数`/`类型` 等同理。
   逃生通道：英文关键字永远可写；要一个汉语名字就换一个非关键字的词。
   由 `judge_kwscope.ps1` 第②项**主动自证**（必须报 TS1389）。
9. **上游补全测试多一类有意差异**（2026-10-08）：`internal/fourslash/tests` 的 exact 补全
   测试因「汉语补全对所有 `.ts` 生效」而多出失败，已进 `judge_gotest` 的允许清单。
   它**不是** baseline 文本差异（baseline 差异为 0），也不影响英文 `.ts` 的产物与诊断。
10. **标准库汉化：只做了试点（2026-10-08）** —— 这条线是**长期目标**，现状是：
    * **试点**：「数组 + 数学」42 个名字**端到端跑通** —— `甲.追加(4)` 编译成 `甲.push(4)`、
      `数学.向下取整(3.7)` 编译成 `Math.floor(3.7)`，**产物是标准 JS**、node 真跑正确；
      判定 `tests-chts/judge_zhstdlib.ps1` **13/13**（含**符号感知的两条硬判据**：⑬ 用户同名成员不得被改写、⑭ 屏蔽 pass 的形态覆盖；⑪ 已降为信息行 —— 撞车由屏蔽 pass 保护，不再判失败）。
    * **规模**：标准库共 **7687 个名字**（全局 2445 + 成员 5242），译名进度 **100 / 7687**
      （已覆盖 `Array`/`Math`/`String`/`Map`/`Set`/`Promise`/`Date`/`RegExp`/`JSON`/`console` 核心
      + 6 个构造器别名；同步/异步/`new`/正则四种形态都有端到端判据）。
    * **机制**：声明层用汉语名 + **emit 时打回英文规范名**（不靠运行时垫片，产物随处可跑）。
    * **单一真源**：`stdlib/试点-数组与数学.tsv` → `tools/gen_zhstdlib.ps1` → Go 表，带
      `-Check` 与**译名唯一性守卫**（一英一汉，已自证能失败）。
    * **怎么继续**：见 `stdlib/README.md` 与 `stdlib/规模化方案.md`（转换器设计、三大硬骨头、守卫、顺序）。
    * **已知边界**：① emit 改写是**文本级**的（引用位拿不到符号），用户自定义的**同名成员**会被误改；
      ② 汉语声明目前要手写 `/// <reference>`，尚未随编译自动加载；③ 译名尚未与中文 C++ 项目对齐。
11. **⚠ 标准库译名会与用户自己的同名成员撞车（2026-10-08 实证，未修）**：
    标准库汉语名（`编号`/`名称`/`状态`/`数据`/`长度`… 这些**通用名词**）一旦被用户拿去做自己的
    属性/方法名，emit 改写会把用户那处**也**改成英文标准库名 —— 而且**产物静默出错**（运行时 undefined），
    不是编译报错。**本项目自己的教程就中过招**：给 `id` 定名「编号」后，例子 `06-类型与接口.ts` 里
    用户自定义的 `编号` 属性被改写成 `.id`，`judge_tutorial` 立刻变红（已把该属性改名为表外的「号数」）。
    **现状与计划**：根因是改写按**名字文本**做、不看名字解析到谁。正确修法是**符号感知**
    （在 checker 里标出「确实来自我们汉语声明文件」的节点，emit 只改这些）—— 规格 `stdlib/规模化方案.md` 六·六。
    **在它落地前**：暂缓继续给「通用名词」定译名（专用名如 `createLinearGradient` 更安全）。
      ② 汉语声明目前要手写 `/// <reference>`，尚未随编译自动加载；③ 译名尚未与中文 C++ 项目对齐。

## 十、纪律（照本项目既有做法）

1. **英文永不删除**：汉语关键字只是**并行拼写**，同一 `ast.Kind`；英文行为逐字节不变；
2. 判据要自带自测（证明它真的会失败）；
3. 判据之一：**英文 `.ts` 产物与上游基线逐字节一致**；
4. 判据之二：**汉语 `.ts` 生成的 js 必须是标准英文关键字**，能被 node 直接跑，
   且结果与英文对照完全一致；
5. 译名必须满足家族的 **2–6 个汉字**定则，且与 Chinese++ **同词同义**；
6. **判据自己也会错**：本轮踩了**五次**「判据误报」——
   子串匹配（`"异常已捕获"` 含「捕获」、`变量名` 含「变量」）、
   注释与字符串未剥离（源注释里的「导入 … 来自」被 tsc 原样保留进产物）、
   字面写错（只导入不导出的产物里没有 `exports.`，只有 `exports,`）、
   判据说「不许有被改行」但诊断消息里列举扩展名的那行**本来就该**多一个条目
   （2026-10-08 撤销 `.chts` 后这类差异已归零）、
   自写单测断言「每组首位都是 `.ts`」而组是**按模块种类分**的（只有标准组首位是 `.ts`）。
   **凡判据报错，先自证判据，再怀疑被测物。**
7. **改「横切」属性要用同级反查全仓**：扩展名这种贯穿解析/输出/诊断的属性，
   靠读一遍代码找不齐 —— 用 `ExtensionCts` 反查所有出现过它的地方，再逐处判断。
   （2026-10-08 扩展名方向已撤销，但这条方法仍然有效。）

生成时间：2026-10-06 23:18:59（初版）
本版更新（2026-10-08）：**方向撤销** —— 不再有 `.chts`/`.d.chts`，ChineseTypeScript 直接用普通 `.ts`，
汉语关键字与编辑器补全**对所有 `.ts` 全局生效**（推广考虑）；9 个扩展名相关文件已逐字节还原为上游，
上游源码改动收敛为 **7 个文件**。当前判定：**八项全绿** —— 五套核心（`judge_chts` 18/18、
`judge_proj` 15/15、`judge_oss` 600/600 零回归、`judge_tutorial`、`judge_gotest` 4/4）
+ 三个特性（`judge_langservice` 9/9、`judge_zhdiag` 7/7、`judge_kwscope` 6/6）；
`judge_dchts.ps1` 已删除，`run_all.ps1` 现为**八项**。
更早：词表落盘、生成器与守卫就位；独立发行包 0.1 与打包判定；
item① 语言服务与建议（9/9）、item③ 诊断默认中文（7/7，含补译 86 条与中文 `--help` 产品名）。
