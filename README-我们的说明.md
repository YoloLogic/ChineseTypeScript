# ChineseTypeScript —— 我们的工作副本

> 本目录是 **ChineseTypeScript**（不要把名字写成 "ChineseScript"）。
> 它是 Chinese++ 项目的第四条产品线：几何定位「最快的（C++）/ 最全面的（Python）/
> 最适合浏览器页面的（JS 或 TS 魔改）」中**网页那一角**。
>
> ⚠ **协作边界**（用户 2026-10-07 裁定）：**本仓一般只负责 `E:\ChineseTypeScript`**。
> 父项目 `E:\Chinese++` 的登记文档由**父仓负责人**维护；本仓只在明确受命时做父仓登记同步。

## 一、底本来源（必须留档）

* 上游仓库：`microsoft/typescript-go`（TypeScript 7 的原生实现，Go 语言）
* 取得方式：**gitee 镜像克隆**（GitHub 直连太慢，实测 curl 28 Operation still slow）
  `git clone https://gitee.com/mirrors/TypeScript.git`
* 本副本基线 HEAD：`e26b8d24bee09bf66d59941912166c5aa7975d20`（= 上游 `e26b8d24`）
* 上游原样副本另存于：`E:\TypeScript源代码`（**不要改它**，它是比对的基准）
* 许可：**Apache-2.0**（可修改、可再发行；需保留声明）

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
| 文件格式 | 源文件的后缀 | **`.chts`** |
| 命令名 | 终端里敲的那个可执行文件 | **`chtsc`** |

用户 2026-10-07 裁定：**只叫 `chtsc`**，不做 `tsc` 别名。

* 构建：`pwsh -File tools\build_chtsc.ps1` → `E:\cts-build\chtsc.exe`
  （脚本自带自证：打版本号 + 真编译一个 `.chts` + node 真跑）
* **为什么这是零成本的纯产品决定**：全仓**没有一处**按 `os.Args[0]`
  （"我叫什么名字"）分支的代码，所以改二进制名字**不改变任何行为**。
  这与 clang 那边**根本不同** —— clang 的 `argv[0]` 决定驱动模式、还要读同名
  `.cfg`，所以那边的中文驱动名（`x86_64-unknown-linux-gnu-chinese++`）是**功能**，
  必须严格区分。
* 同类先例：上游自己把 Go 实现叫 **`tsgo`**（`Herebyfile.mjs` 的 tsgo 任务），
  与经典 `tsc` 两名并存。
* 实测：`chtsc.exe` 37.9 MB，`chtsc --version` 报 `Version 7.1.0-dev`。

## 四、文件扩展名：`.chts`（不是 `.cts`）

用户裁定：「文件格式我建议 cts，cts 被占用了就用 chts」。
**`.cts` 确凿被上游占用**，且是语义性占用、不可挪用，证据：

| 证据 | 位置 |
|---|---|
| 注释「Check if the file is .cts or .cjs (CommonJS-specific extensions)」 | `tsc/internal/checker/checker.go:5777` |
| `ext = core.IfElse(preferTs, ".cts", ".cjs")` | `tsc/internal/checker/checker.go:15547` |
| `ExtensionsNotSupportingExtensionlessResolution` 里含 `.cts` | `tsc/internal/tspath/extension.go` |

故取 **`.chts`**（= ChineseTypeScript）。扩展名一律**追加在末尾**，
使 `.ts/.tsx/.d.ts` 的既有优先级与解析顺序一个字节都不变。

## 五、改动清单：上游源码只动了 13 个文件

| # | 文件 | 改动 |
|---|---|---|
| 1 | `tsc/internal/scanner/scanner.go` | `GetIdentifierToken` 放开 ASCII 闸：非 ASCII 标识符查独立表 `zhTextToKeyword` |
| 2 | `tsc/internal/tspath/extension.go` | 新增 `ExtensionChts = ".chts"` 与 **`ExtensionDchts = ".d.chts"`**；并入 `extensionsToRemove`（**决定输出名**；`.d.chts` 必须排在 `.chts` 之前）、`ExtensionIsTs`、各受支持扩展名表、`SupportedDeclarationExtensions`（见「六·七」）；`GetDeclarationEmitExtensionForPath` 仍把 `.chts` 映射到标准 `.d.ts` |
| 3 | `tsc/internal/core/core.go` | ① `.chts` → `ScriptKindTS`；② 修 `getSpellingSuggestion` 的**字节/rune 长度混用**（否则汉语「你是不是想写…」永远命中不了，见「六·六」） |
| 4 | `tsc/internal/module/resolver.go` | `extensionIsOk` 白名单加 `.chts`；`tryAddingExtensions` 加「无扩展名分支找 `.chts`」+ 新增 `case ExtensionChts` |
| 5 | `tsc/internal/module/util.go` | `GetResolutionDiagnostic` 的「永远允许」白名单加 `.chts`（否则报 TS6263 说它是"任意扩展名"） |
| 6 | `tsc/internal/parser/parser.go` | ① `parseUndefinedKeywordExpression`：值位置把「未定义」归一化成规范拼写 `undefined`（见 §九 第 6 条）；② 汉语「你是不是想写…」建议作为**回退**（见「六·六」） |
| 7 | `tsc/internal/printer/printer.go` | `getTextOfNode`：文本是规范 `undefined` 而源码拼写不是时，用节点文本落盘（与第 6 处配对） |
| 8 | `tsc/internal/ls/completions.go` | 编辑器补全并入汉语关键字（**只给 `.chts` 文件**）：新增汉语补全表、缓存键带「是否含汉语」、种类反查改用 `StringToTokenIncludingChinese`（见「六·六」） |
| 9 | `tsc/internal/ast/utilities.go` | `GetImpliedNodeFormatForFile` 把 `.d.chts` 归入**标准 TS 那一类**（按 package.json 决定 ESM/CJS），**不是** CommonJS 那类（见「六·七」） |
| 10 | `tsc/internal/modulespecifiers/util.go` | 声明扩展名 → JS 扩展名的映射：`.d.chts` → `.js` |
| 11 | `tsc/internal/ls/string_completions.go` | 字符串补全把 `.d.chts` 当 TS 声明文件（同 `.d.ts`） |
| 12 | `tsc/cmd/tsc/main.go` | 命令行默认 `--locale zh-CN`（`argsWithDefaultLocale`；locale 是命令行专用选项，故不覆盖 tsconfig，库与上游测试零变化。见「六·八」） |
| 13 | `tsc/internal/binder/binder.go` | 上下文标识符检查用 `GetIdentifierTokenForFileName(file, …)`（汉语关键字作用域随文件，见「六·九」） |

**binder / checker 零改动**；其余各文件都是为**扩展名、边界、语言服务或修正**加的小段，
都不是为「关键字落成同一个 token」这套机制本身（那套确实只需词法层一处）。

> 教训：第 4、5 处是**一开始漏掉的**。第一版只改了扩展名表，结果
> `导入 ... 来自 "./数学"` 报 TS2307 找不到模块 —— 因为解析器里另有一张
> **手写白名单** `extensionIsOk`，逐扩展名列举，`.chts` 不在其中。
> 教训的用法：改扩展名这类「横切」改动，要用 `ExtensionCts` 之类的**同级扩展名反查全仓**，
> 才能找齐所有手写枚举；同时要分清哪些是 **CJS 语义**（`.chts` 不该跟着进）。

### 为什么汉语别名必须【独立成表】（有据，非推测）

`scanner.go:2255` 的 `tokenToText` 是**由 `textToToken` 倒排**得到的：

```go
for text, kind := range textToToken { result[kind] = text }   // ← Go map 顺序随机
```

而 `printer.go:923 writeTokenText` 直接用它落盘。**Go 的 map 遍历顺序是随机的**，
所以中文键一旦混入 `textToKeyword`／`textToToken`，`tokenToText[KindIfKeyword]`
就会在 `"if"` 与 `"如果"` 之间随机取值 —— 生成的 js 会**不确定地**含中文关键字，
那是**非法 JS**。这就是「独立成表」这条设计约束的来源，并由
`tsc/internal/scanner/zh_keywords_test.go` 机器校核。

### 导入的两种写法（实测，不是推测）

| 写法 | 需要的选项 | 结果 |
|---|---|---|
| `导入 { x } 来自 "./数学"`（**推荐**） | 无 | 产物 `require("./数学")`，node 直接跑通 |
| `导入 { x } 来自 "./数学.chts"` | `--rewriteRelativeImportExtensions` | 产物 `require("./数学.js")`，node 跑通 |
| 同上，两个选项都不开 | — | 报 **TS5097**（`allowImportingTsExtensions` 未开） |

显式写 `.chts` 与上游「显式写 `.ts`」同构，故 `resolvedUsingTsExtension` 置 `true`，
沿用上游那套选项门槛，不自创规则。

## 六、工具与守卫（绝不靠人记得）

| 角色 | 文件 |
|---|---|
| 译名**单一真源** | `tsc/internal/scanner/zh_keywords.txt`（85 行，`<英文关键字> <中文译名>`） |
| 生成器（**产出两份**） | `tsc/cmd/genzhkeywords`（`go run ./cmd/genzhkeywords`；产 `zh_keywords_generated.go` + **`docs/中文对照表.md`**；`-check` 把**两份一起核**） |
| **用户可读的中英对照表** | `docs/中文对照表.md`（**生成物**，随词表自动更新；判定第①项核它、第⑩项自测它） |
| 关键字机器守卫 | `tsc/internal/scanner/zh_keywords_test.go`（9 条） |
| 扩展名机器守卫 | `tsc/internal/tspath/chts_extension_test.go`、`tsc/internal/core/chts_scriptkind_test.go` |
| **构建命令** | `tools/build_chtsc.ps1` → `chtsc.exe`（命令名见「三·五」节；自带版本号+真编译+真跑自证） |
| 共享检查器 | `tests-chts/zhcheck.ps1`（剥注释与字符串后按汉字段整段比对） |
| 端到端判定 | `tests-chts/judge_chts.ps1`（18 项，含 `--strict`、属性名、对照表自测、`未定义` 归一化） |
| 项目级判定 | `tests-chts/judge_proj.ps1`（15 项） |
| 大规模零回归 | `tests-chts/judge_oss.ps1`（比诊断与产物） |
| **全集回归** | `tests-chts/judge_gotest.ps1`（4 项，跑上游 Go 测试全集并与基线对照） |
| **教学教程**（生成物） | `教程/ChineseTypeScript-教学教程.md`（9 课：关键字用法 + 符号用法 + 内建用法）+ **Word 版 `教程/ChineseTypeScript-教学教程.docx`**；守卫 `tests-chts/judge_tutorial.ps1` 真编译真跑每个例子、核 docx 同步、并守例子目录构成 |
| **打包器** | `tools/make_package_chts.ps1` → `dist\ChineseTypeScript-<ver>-win64.zip`（自带 `chtsc` + 便携 node + 生成物文档 + 例子） |
| **包内自测** | `packaging/verify.ps1`（16 项，`$expectedChecks` 自证；含一个**必须失败**的用例） |
| **一键安装/还原** | `packaging/install.ps1` + `一键安装.cmd` / `uninstall.ps1` + `一键还原.cmd`（只写会话级 `env.cmd`；`-AddToUserPath` 才动用户 PATH） |
| **打包判定** | `tests-chts/judge_package.ps1`（5 项：真打包 → 解压到中文路径 → 安装 → 包内 16/16 → 破坏必被抓） |
| **汉语关键字只读 API** | `tsc/internal/scanner/zh_keywords_api.go`（`ChineseKeywordAliases` / `ChineseKeywordSpellings` / `StringToTokenIncludingChinese`，**升序确定性**；`StringToToken` 保持只认英文） |
| **语言服务判定** | `tests-chts/judge_langservice.ps1`（9 项：三组 Go 守卫 + CLI 真编译三条汉语建议 + 两条负对照） |
| **声明扩展名守卫** | `tsc/internal/tspath/dchts_extension_test.go`（`.d.chts` 被识别为声明文件、不属 CJS、产出仍 `.d.ts`） |
| **.d.chts 判定** | `tests-chts/judge_dchts.ps1`（5 项：单独编译 → 无扩展名导入解析 → `tsc -p` → 声明产出 `.d.ts` → 藏起来必报 TS2307） |
| **中文诊断判定** | `tests-chts/judge_zhdiag.ps1`（5 项：默认中文 / `--locale en` 回英文 / 默认==显式 zh-CN / 抽样多码中文 / 正确程序无诊断） |
| **关键字作用域判定** | `tests-chts/judge_kwscope.ps1`（6 项：`.chts` 认汉语 / `.ts` 里是普通标识符 / `.ts` 里不是关键字（自证） / `.d.chts` 认汉语 / `.chts` 保留字仍是关键字 / 负对照） |
| **一条命令全跑** | `tests-chts/run_all.ps1`（五套核心；`-SkipGoTest` 可跳过最慢的第 4 项。打包判定与语言服务判定单独跑；item① 的 Go 守卫也随 `judge_gotest` 一起跑） |

生成器**不信任任何手写清单**：它自己解析 `scanner.go` 的 `textToKeyword` 得到
「英文关键字 → `ast.Kind`」，再与词表比对。因此扫描器新增英文关键字而词表漏译、
词表写了扫描器没有的词、译名重复、汉字数不在 2–6 —— **一律报错退出，不静默**。

## 六·五、独立发行包（0.1，win64）

用户 2026-10-07 裁定：ChineseTypeScript 要出**独立发行包**，并**随包带便携版 node**。

* **产物**：`dist\ChineseTypeScript-0.1-win64.zip`（51.6 MB；未压缩 125.7 MB / 25 个文件）。
  内含 `bin\chtsc.exe`（38 MB）、`node\node.exe`（87 MB，官方 **v24.15.0**，SHA256 与官方 win-x64 发行包**逐字节一致**）、
  生成物文档（`docs\中文对照表.md`、教程 md + docx）、`例子\`（9 个）、`LICENSE.txt`/`NOTICE.txt`、`node\LICENSE`、
  安装/还原/自测脚本与 `MANIFEST.tsv`。
* **打包**：`pwsh -File tools\make_package_chts.ps1`（`-Version` / `-OutDir` / `-Rebuild` / `-NoNode`）。
  默认输出 `dist\`（`.gitignore` 已忽略，**不进库**）。
* **包内自测**（`packaging\verify.ps1`，**纯 ASCII**，汉语从码点构造）：16 项，项数由
  `$expectedChecks` **自证**（跑不到这个数就判失败）；第 5 项**故意编一个错程序**，确认它真的被拒 ——
  「判据不是橡皮图章」的自证。
* **一键安装**只写**会话级** `env.cmd`（`PATH` 只在该窗口生效）；`-AddToUserPath` 才动用户 PATH；
  `一键还原.cmd` / `uninstall.ps1` 精确复原（实测 `PATH restored exactly = True`）。
* **机器守卫**：`tests-chts\judge_package.ps1`（5 项）**真打包**、解压到**含中文**的外来目录、
  跑安装与包内自测，并证明「把包内编译器改名后自测**必失败**」。
* 实测：包内自测 **16/16**、打包判定 **5/5**。

## 六·六、语言服务与建议（item①，2026-10-07）

* **编辑器补全**：`allKeywordCompletions` 旁新增汉语补全表，**只给 `.chts` 文件** ——
  理由：85 条汉语塞进每个 `.ts/.js` 的补全列表，① 对写英文的人是噪声；
  ② 会把上游 fourslash 的 `exact` 补全基线**全部撑大**（实测：不限定就多出 90 处
  「Expected N exact completion items」）。编辑器入口是 `chtsc --lsp --stdio`。
* **「你是不是想写…」建议**：汉语别名作为**回退**（英文能给建议时一字不改，英文诊断文本逐字相同）。
  为此修了 `core` 的一处**真 bug**：长度比较把 `len(candidateName)`（**字节**）与
  `len(runeName)`（**rune**）混用 —— ASCII 下看不出，汉语下把「函树 → 函数」直接跳过。
  两字译名（71/85）另补一条「恰好差一个汉字」的判据：上游对 2 字符名**故意**不建议
  （「用户通常能注意到两个字的名字的差异」），照搬会让绝大多数汉语建议失效。
* **边界**：`StringToToken` **故意**保持只认英文（它被 `.d.ts` 生成、自动导入等位置用来
  判断「这个名字是不是关键字」，让汉语悄悄参与会波及英文路径的产物）；
  需要连汉语一起认的地方显式调用 `StringToTokenIncludingChinese`。
* 判定：`judge_langservice.ps1` **9/9**；`ls` 6 条 + `parser` 4 条 + `scanner` 5 条 Go 守卫
  （JS-only 过滤对汉语同样生效、补全确定、`.ts` 不含汉语、缓存不被 `.chts` 污染）；
  五套核心判定不受影响（fourslash 恢复全过、`judge_oss` 600/600 零回归）。

## 六·七、`.d.chts` 声明文件（item②，2026-10-07）

* **支持**：`.d.chts` 被识别为**声明文件**（`IsDeclarationFileName` → true），可被
  **无扩展名导入**解析到（`./甲` → `甲.d.chts`），`tsc -p` 也会收录它。
  真跑证据：`judge_dchts.ps1` **5/5**，含「把 `.d.chts` 藏起来后必须报 TS2307」的负对照自测
  （证明判据测的确实是 `.d.chts` 解析，不是别的东西在兜底）。
* **产出仍是标准 `.d.ts`**（这是**设计选择**，不是漏做）：`.chts` 是 `.ts` 的平行拼写，
  声明产出走标准后缀，任何 TS 工具都能直接消费。若要改成上游 `.cts → .d.cts` 那样的
  `.chts → .d.chts`，只改 `tspath.GetDeclarationEmitExtensionForPath` 一处，
  并同步 `dchts_extension_test.go` 与 `judge_dchts.ps1` 第④项即可。
* **边界（绝不能弄错）**：`.d.cts` 是 **CommonJS 语义**（`ExtensionsNotSupportingExtensionlessResolution`、
  `impliedNodeFormat`、CJS 声明产出），`.d.chts` **不是**；所有 CJS 分支一律没让它进去，
  由 `dchts_extension_test.go` 的 `TestDchtsIsNotCommonJs` 机器钉住。
* 实测：`judge_dchts.ps1` **5/5**；五套核心判定不受影响（`judge_oss` 600/600 零回归；
  `judge_gotest` 的 baseline 预期差异从「一类 `.chts`」扩为「`.chts` + `.d.chts` 两类」，
  解释器已同步扩了第二类）。

## 六·八、诊断默认中文（item③，2026-10-07）

* **先纠正一条旧结论**：本文件早先写「诊断信息未汉化」，**不准确** ——
  上游 tsc-go 本来就自带 **zh-CN 翻译**（`tsc/internal/diagnostics/loc/zh-CN.json.gz`）
  与 `--locale` 机制，实测词条 **2118/2204（96%，全部含汉字）**。
* **本项目做的汉化**：让 `chtsc` **命令行默认用中文**（用户 2026-10-07 裁定）。
  实现只有一处：`tsc/cmd/tsc/main.go` 的 `argsWithDefaultLocale` —— 没给 `--locale` 时
  补上 `--locale zh-CN`。
  * **为什么放在 CLI 层**：`locale` 是**命令行专用**选项（`IsCommandLineOnly`），
    所以注入默认值**不会覆盖任何 tsconfig 设置**；而库与上游 Go 测试不走 `cmd/tsc`，
    因此它们的默认行为**一个字节不变**（`judge_gotest` 的差异仍旧只是那一类）。
  * `--locale en` 回到英文；显式 `--locale <任何语言>` 一律尊重。
* **判定**：`judge_zhdiag.ps1`（5 项）—— 默认出中文、`--locale en` 回英文、
  默认与显式 `zh-CN` **逐字节相同**、抽样 TS2304/TS2554/TS2322 都出中文、
  正确程序无诊断（负对照）。英文路径的判定（`judge_oss` / `judge_langservice`）
  已显式加 `--locale en`，零回归照旧。
* **仍缺的（诚实登记）**：① zh-CN 只覆盖 **2118/2204**，86 条没有中文（回退英文）；
  ② 译文是**上游**的，与 Chinese++ 的 7344 条**不保证同词同译**（两条产品线的诊断集基本不相交）；
  ③ `--help` 首行仍写 `tsc:`（不是 `chtsc`）。

## 六·九、汉语关键字的作用域：仅 `.chts`（item④，2026-10-07）

* **改动**：`Scanner` 加 `allowChineseKeywords` 标志；`getIdentifierToken` 变成方法；
  新增 `GetIdentifierTokenForFileName`；`GetScannerForSourceFile` 与 `parser.initializeState`
  按后缀设标志；`binder` 与 parser 的简写属性分支改用文件感知入口。
  旧的包级 `GetIdentifierToken` 收敛为「无文件上下文＝只认英文」。
* **效果**：英文 `.ts` 里 `对象`/`变量`/`函数` 又成了**普通标识符**（与上游一致），
  `.chts`/`.d.chts` 里它们仍是关键字。判定 `judge_kwscope.ps1`（6/6），
  其中第③项（`.ts` 里汉语必须**不是**关键字）是防「恢复成全局」的自证。
* **已知影响面**：少数**不带文件上下文**的 `NewScanner()` 调用点
  （`format/scanner.go`、`checker/utilities.go`、`ls/organizeimports.go`、`ls/completions.go`）
  默认不认汉语；对 `.chts` 的这类辅助操作可能漏认，待按需补标志。
* **全量判定已跑**（2026-10-08）：五套核心判定全绿 —— `judge_oss` 600/600 零回归、
  `judge_gotest` 4/4（140/140 可解释）。item④ 没有引入任何英文路径回归。

## 七、判定证据（本轮实测）

```
judge_chts.ps1   18/18 通过（含第 8 节 `--strict`、第 9 节 关键字作属性名、
                 第 10 节 对照表新鲜度守卫的**自带自测**：改坏一个字节会被抓、
                 第 11 节 `未定义` 值位置归一化 / 属性名原样保留）
judge_proj.ps1   15/15 通过
judge_oss.ps1    真实语料 = 上游官方 conformance 目录里【全部】5894 个 .ts/.tsx（排除 .d.ts）
                 全量跑：【诊断输出 + 退出码】5894/5894 逐字节相同（一个不落）
                 另抽 300 个：产物【逐字节】300/300 相同
                 （-Sample N 抽样、-Sample 0 全量；抽样 600 时同样是 600/600 与 60/60）
judge_gotest.ps1  4/4 通过（上游自带 Go 测试全集，跑两遍：基线 vs 工作副本）
                 基线失败包 = astnav（缺 node_modules/typescript）、
                              fswatch（非管理员无建符号链接特权）—— 环境问题
                 工作副本多出的失败包 = tsctests、testrunner —— 全部是 baseline 文本差异
                 逐行核对：111 个 baseline 文件 111/111 合规，
                           431 条新增行 + 20 条被改行，全部可用「插入 .chts」解释
judge_tutorial.ps1  5 步全过（9 个例子真编译真跑逐行比对、教程与模板/例子/对照表一致、
                    Word 版 .docx 与正文同步、例子目录构成守卫、改坏期望输出必须被抓的自测）
judge_package.ps1   5/5（真打包 51.6 MB → 解压到含中文的外来目录 → install 写 env.cmd →
                    包内 verify 16/16 → 把包内 chtsc 改名后 verify 必失败）
judge_langservice.ps1  9/9（scanner 5 + parser 4 + ls 6 条 Go 守卫；CLI 三条汉语建议：
                       函树→函数、局部变两→局部变量、如果甲→如果；两条负对照无建议）
judge_dchts.ps1     5/5（.d.chts 被当成声明文件 → ./甲 解析到 甲.d.chts → tsc -p 收录 →
                    .chts 开 --declaration 产出标准 .d.ts → 藏起 .d.chts 必报 TS2307）
judge_zhdiag.ps1    5/5（默认出中文 → --locale en 回英文 → 默认==显式 zh-CN 逐字节相同 →
                    TS2304/TS2554/TS2322 抽样都出中文 → 正确程序无诊断）
judge_kwscope.ps1   6/6（.chts 认汉语 → .ts 里汉语是普通标识符 → .ts 里汉语不是关键字（自证）→
                    .d.chts 认汉语 → .chts 保留字仍是关键字 → 负对照）
```

> **为什么全集判定要这么麻烦**：加一个新扩展名，会**自然地**改变
> `--traceResolution` 的追踪文本（候选列里多了 `.chts`）和诊断消息里
> 「受支持扩展名」那一行。这类差异是**正确且预期**的，但如果**不逐行核对**，
> 就没法把「预期的差异」与「真的把 `.ts` 顺序弄乱了」区分开。
> 所以判据是：**允许差异存在，但每一行都必须能用「插入 `.chts`」解释**。
> （第一版判据写成「不许有任何被改行」，于是 20 条因插入 `.chts` 而变化的诊断行
> 被误报成改动 —— 又一次「判据自己错了」。）

其中最关键的两条：

* **英文路径逐字节不变**：同一个 `demo_en.ts`，用上游基线 tsc 与本编译器分别编译，
  产物 SHA256 都是 `BD88EB8023D5F40E…`。
* **汉语源真跑**：`demo.chts` → `demo.js`（不是 `demo.chts.js`）→ node 真跑，
  stdout 与英文对照**完全一致**；产物里 85 个译名**一个都没作为关键字出现**。

## 八、词表实测

* 条数 **85**（与 `scanner.go` 的 `textToKeyword` 精确 1:1，无缺无多）
* 译名唯一性：**全部唯一**；一词一译
* 2–6 汉字定则：**全部合规**（2 字 71 条、3 字 12 条、4 字 2 条）
* 最长译名：`局部变量`(let)、`类型别名`(type)，4 汉字 / 12 字节

## 九、已知局限（诚实登记，别当成已完成）

1. ~~**汉语关键字在所有文件里都生效**~~ —— **已收敛为仅 `.chts`/`.d.chts` 生效**（2026-10-07，见「六·九」）：
   英文 `.ts` 里 `对象`/`变量`/`函数` 又能当**普通标识符**（与上游一致），`.chts` 里仍是关键字。
   判定 `judge_kwscope.ps1`（6/6），五套核心判定全绿。**仍缺**：少数不带文件上下文的
   `NewScanner()` 辅助调用点默认不认汉语，待按需补标志。
2. ~~**`.d.chts` 声明文件不支持**~~ —— **已支持**（2026-10-07，见「六·七」）：
   `.d.chts` 被识别为声明文件、可被无扩展名导入解析、`tsc -p` 收录。
   **但 `.chts` 开 `--declaration` 产出的仍是标准 `.d.ts`**（设计选择，理由与改法见六·七）。
3. ~~**语言服务尚未把汉语关键字加入补全建议**~~ —— **已做**（2026-10-07，见「六·六」）：
   编辑器补全（**只给 `.chts` 文件**）与「你是不是想写…」建议都认汉语关键字。
   **但编辑器侧尚未打包/配置**：发行包里没有 `.vscode` 模板，用户要自己把
   `chtsc --lsp --stdio` 配给编辑器。
4. **诊断已是「默认中文」**（2026-10-07，见「六·八」）：上游自带 zh-CN 翻译（2118/2204），
   `chtsc` 命令行默认就用它，`--locale en` 回英文。但仍缺 86 条，且译文与 Chinese++ 的
   7344 条**不保证同词同译**。另外 `--help` 首行仍写 `tsc:`。
5. ~~**未打包、未发布**~~ —— **已出独立发行包**（2026-10-07，见「六·五」节）：
   `dist\ChineseTypeScript-0.1-win64.zip`（自带便携 node），包内自测 16/16、打包判定 5/5。
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
   是运行时的真实属性名，**原样保留**。已由 `tests-chts/undefined.chts` + 判定第⑪节永久钉住。

## 十、纪律（照本项目既有做法）

1. **英文永不删除**：汉语关键字只是**并行拼写**，同一 `ast.Kind`；英文行为逐字节不变；
2. 判据要自带自测（证明它真的会失败）；
3. 判据之一：**英文 `.ts` 产物与上游基线逐字节一致**；
4. 判据之二：**汉语 `.chts` 生成的 js 必须是标准英文关键字**，能被 node 直接跑，
   且结果与英文对照完全一致；
5. 译名必须满足家族的 **2–6 个汉字**定则，且与 Chinese++ **同词同义**；
6. **判据自己也会错**：本轮踩了**五次**「判据误报」——
   子串匹配（`"异常已捕获"` 含「捕获」、`变量名` 含「变量」）、
   注释与字符串未剥离（源注释里的「导入 … 来自」被 tsc 原样保留进产物）、
   字面写错（只导入不导出的产物里没有 `exports.`，只有 `exports,`）、
   判据说「不许有被改行」但诊断消息里列举扩展名的那行**本来就该**多一个 `.chts`、
   自写单测断言「每组首位都是 `.ts`」而组是**按模块种类分**的（只有标准组首位是 `.ts`）。
   **凡判据报错，先自证判据，再怀疑被测物。**
7. **改「横切」属性要用同级反查全仓**：扩展名这种贯穿解析/输出/诊断的属性，
   靠读一遍代码找不齐 —— 用 `ExtensionCts` 反查所有出现过它的地方，
   再逐处判断「该不该带上 `.chts`」，同时分清哪些是 **CJS 语义**（不该带）。

生成时间：2026-10-06 23:18:59（初版）
本版更新：词表落盘、生成器与守卫就位、上游 8 文件补丁落地、五套语言判定全绿
（含**全部** 5894 个真实 TS 文件的全量零回归、与上游 Go 测试全集逐行核对，
以及「未定义」值位置归一化的修复与第 ⑪ 节守卫）；
另加**独立发行包（0.1）**与打包判定；
item①：**语言服务与建议**认汉语（含 `.chts` 限定、`core` 的字节/rune 修正），语言服务判定 9/9；
item②：**`.d.chts` 声明文件**可识别、可解析（产出仍为标准 `.d.ts`），.d.chts 判定 5/5；
item③：**诊断默认中文**（上游 zh-CN 2118/2204；在 CLI 层默认，`--locale en` 回英文），中文诊断判定 5/5；
item④：**汉语关键字收敛为仅 `.chts`/`.d.chts` 生效**（`.ts` 里汉语恢复为普通标识符），
作用域判定 6/6，五套核心判定全绿（`judge_oss` 600/600、`judge_gotest` 140/140）。
