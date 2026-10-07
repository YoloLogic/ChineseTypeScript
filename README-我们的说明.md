# ChineseTypeScript —— 我们的工作副本

> 本目录是 **ChineseTypeScript**（不要把名字写成 "ChineseScript"）。
> 它是 Chinese++ 项目的第四条产品线：几何定位「最快的（C++）/ 最全面的（Python）/
> 最适合浏览器页面的（JS 或 TS 魔改）」中**网页那一角**。

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

## 五、改动清单：上游源码只动了 5 个文件

| # | 文件 | 改动 |
|---|---|---|
| 1 | `tsc/internal/scanner/scanner.go` | `GetIdentifierToken` 放开 ASCII 闸：非 ASCII 标识符查独立表 `zhTextToKeyword` |
| 2 | `tsc/internal/tspath/extension.go` | 新增 `ExtensionChts = ".chts"`；并入 `extensionsToRemove`（**决定输出名**）、`ExtensionIsTs`、各受支持扩展名表、`GetDeclarationEmitExtensionForPath` |
| 3 | `tsc/internal/core/core.go` | `.chts` → `ScriptKindTS` |
| 4 | `tsc/internal/module/resolver.go` | `extensionIsOk` 白名单加 `.chts`；`tryAddingExtensions` 加「无扩展名分支找 `.chts`」+ 新增 `case ExtensionChts` |
| 5 | `tsc/internal/module/util.go` | `GetResolutionDiagnostic` 的「永远允许」白名单加 `.chts`（否则报 TS6263 说它是"任意扩展名"） |

**parser / binder / checker / printer / 语言服务零改动。**

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
| 端到端判定 | `tests-chts/judge_chts.ps1`（14 项，含 `--strict`、属性名、对照表自测） |
| 项目级判定 | `tests-chts/judge_proj.ps1`（15 项） |
| 大规模零回归 | `tests-chts/judge_oss.ps1`（比诊断与产物） |
| **全集回归** | `tests-chts/judge_gotest.ps1`（4 项，跑上游 Go 测试全集并与基线对照） |
| **教学教程**（生成物） | `教程/ChineseTypeScript-教学教程.md`（9 课：关键字用法 + 符号用法 + 内建用法；守卫 `tests-chts/judge_tutorial.ps1` 真编译真跑每个例子） |
| **一条命令全跑** | `tests-chts/run_all.ps1`（`-SkipGoTest` 可跳过最慢的第 4 项） |

生成器**不信任任何手写清单**：它自己解析 `scanner.go` 的 `textToKeyword` 得到
「英文关键字 → `ast.Kind`」，再与词表比对。因此扫描器新增英文关键字而词表漏译、
词表写了扫描器没有的词、译名重复、汉字数不在 2–6 —— **一律报错退出，不静默**。

## 七、判定证据（本轮实测）

```
judge_chts.ps1   14/14 通过（含第 8 节 `--strict`、第 9 节 关键字作属性名、
                 第 10 节 对照表新鲜度守卫的**自带自测**：改坏一个字节会被抓）
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

1. **汉语关键字在所有文件里都生效**，不限于 `.chts`。这是为「改一处覆盖整条链」而选的
   全局方案；实测 5894 个真实 TS 文件**零回归**，但它确实意味着
   用户若把 `对象`/`变量`/`函数` 这类词当**标识符**用会与关键字撞。
   英文关键字永远可写，是逃生通道。（若要改成「仅 `.chts` 生效」，需把
   `GetIdentifierToken` 从包级函数改成扫描器方法并逐处传标志，属未做项。）
2. **`.d.chts` 声明文件不支持**。
3. **语言服务尚未把汉语关键字加入补全建议**（`GetViableKeywordSuggestions` 仍只给英文）。
4. **诊断信息未汉化**（Chinese++ 侧已汉化 7344 条诊断；ChineseTypeScript 侧未做）。
5. **未打包、未发布**：命令名已定（`chtsc`，见「三·五」节），但还没有面向用户的
   发行包（发行形态、是否随包带 node、装到哪都未定）。
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
本版更新：通宵批次 —— 词表落盘、生成器与守卫就位、上游 5 文件补丁落地、
四套判定全绿（含**全部** 5894 个真实 TS 文件的全量零回归，与上游 Go 测试全集逐行核对）
