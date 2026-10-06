# ChineseTypeScript —— 我们的工作副本

> 本目录是 **ChineseTypeScript**（不要把名字写成 "ChineseScript"）。
> 它是 Chinese++ 项目的第四条产品线：几何定位「最快的（C++）/ 最全面的（Python）/
> 最适合浏览器页面的（JS 或 TS 魔改）」中的**网页那一角**。

## 底本来源（必须留档）
* 上游仓库：microsoft/typescript-go（TypeScript 7 的原生实现，Go 语言）
* 取得方式：**gitee 镜像克隆**（GitHub 直连太慢，实测 curl 28 Operation still slow）
  `git clone https://gitee.com/mirrors/TypeScript.git`
* 本副本 HEAD：`e26b8d24bee09bf66d59941912166c5aa7975d20`（= 上游 `e26b8d24`）
* 上游原样副本另存于：`E:\TypeScript源代码`（**不要改它**，它是我们比对的基准）
* 许可：**Apache-2.0**（可修改、可再发行；需保留声明）

## 为什么底本选 TS 7（Go 版）而不是经典 TS 5.x/6.x
* 它就是今天 `tsc` 的本体（npm `typescript@7.x` 只是个去找原生二进制的薄壳）
* **改一处 token 表**即可让「汉语关键字与英文落成同一个 token」——
  与本项目改 clang 的手法完全同构（`ChineseKeywords.def` 那套）
* 经典版（TS 5.x/6.x）是上一代，只作备用

## 工具链（已就位）
* **Go 1.27.1**，装在 `E:\Go`（C 盘紧张，一切安装放 E 盘）
  * 模块缓存 `E:\gopath\pkg\mod`，构建缓存 `E:\gopath\build-cache`
  * 代理 `GOPROXY=https://goproxy.cn,direct`（国内镜像实测仅 ~98 KB/s，故下载一律用
    `curl -C -` 断点续传；`Invoke-WebRequest` 实测**攒内存不落盘**，会出现「下了几分钟仍 0 MB」）
* node v24.15 / npm 11.12（仅跑产物用）

## 文件扩展名：`.chts`（不是 `.cts`）
用户裁定：「文件格式我建议 cts，cts 被占用了就用 chts」。
**`.cts` 确凿被上游占用**，且是语义性占用、不可挪用，证据：

| 证据 | 位置 |
|---|---|
| 注释「Check if the file is .cts or .cjs (CommonJS-specific extensions)」 | `tsc/internal/checker/checker.go:5777` |
| `ext = core.IfElse(preferTs, ".cts", ".cjs")` | `tsc/internal/checker/checker.go:15547` |
| `ExtensionCts` 列在受支持 TS 实现扩展名里 | `tsc/internal/tspath/extension.go` 多处 |

故取 **`.chts`**（= ChineseTypeScript）。已并入扩展名表，且**一律追加在末尾**，
以保持 `.ts` 等既有优先级不变。

## 改动清单（全部落点，共 3 个文件 / 4 处）

| # | 文件 | 改动 |
|---|---|---|
| 1 | `tsc/internal/scanner/zh_keywords_generated.go` | **生成物**：汉语别名表 `zhTextToKeyword`（85 条），由词表生成 |
| 2 | `tsc/internal/scanner/scanner.go` | `GetIdentifierToken` 放开 ASCII 闸，非 ASCII 标识符查 `zhTextToKeyword` |
| 3 | `tsc/internal/tspath/extension.go` | 新增 `ExtensionChts = ".chts"`；并入 `extensionsToRemove`（决定输出名）、`ExtensionIsTs`、各受支持扩展名表 |
| 4 | `tsc/internal/core/core.go` | `.chts` → `ScriptKindTS` |

**parser / binder / checker / printer / 语言服务零改动。**

### 为什么汉语别名必须【独立成表】（有据，非推测）
`tsc/internal/scanner/scanner.go:2255` 的 `tokenToText` 是**由 `textToToken` 倒排**得到的：

```go
var tokenToText = func() [ast.KindCount]string {
    var result [ast.KindCount]string
    for text, kind := range textToToken { result[kind] = text }   // ← 顺序随机
    return result
}()
```

而 `printer.go:923 writeTokenText` 直接用它落盘。**Go 的 map 遍历顺序是随机的**，
所以中文键一旦混入 `textToKeyword`／`textToToken`，`tokenToText[KindIfKeyword]`
就会在 `"if"` 与 `"如果"` 之间随机取值 —— 生成的 js 会**不确定地**含中文关键字，
那是**非法 JS**。这就是「独立成表」这条设计约束的来源，并由
`tsc/internal/scanner/zh_keywords_test.go` 机器校核。

## 工具与守卫（绝不靠人记得）

| 角色 | 文件 |
|---|---|
| 译名**单一真源** | `tsc/internal/scanner/zh_keywords.txt`（85 行，`<英文关键字> <中文译名>`） |
| 生成器 | `tsc/cmd/genzhkeywords`（`go run ./cmd/genzhkeywords`，`-check` 供 CI 校核） |
| 机器守卫 | `tsc/internal/scanner/zh_keywords_test.go`（`go test ./internal/scanner/...`） |
| 端到端判定 | `tests-chts/judge_chts.ps1` |
| 演示靶子 | `tests-chts/demo.chts`（通篇汉语关键字）、`demo_en.ts`（英文对照）、`demo_ident.chts`（非关键字汉语标识符） |

生成器**不信任任何手写清单**：它自己解析 `scanner.go` 的 `textToKeyword` 得到
「英文关键字 → `ast.Kind`」，再与词表比对。因此扫描器新增英文关键字而词表漏译、
词表写了扫描器没有的词、译名重复、汉字数不在 2–6 —— **一律报错退出，不静默**。

守卫覆盖 9 条：表非空且条数相等 / 译名形状（2–6 汉字、无 ASCII、无空白）/ 一词一译 /
覆盖率（无漏译）/ **`TokenToString` 对任何 `ast.Kind` 都不得返回含汉字者**（最重要）/
汉语拼写都被认成对应关键字 / 英文识别结果零回归 / 非关键字汉语词仍是标识符 /
空串不 panic。

## 词表实测（2026 通宵批次）
* 条数：**85 条**（与 `scanner.go` 的 `textToKeyword` 精确 1:1，无缺无多）
* 译名唯一性：**全部唯一**；一词一译
* 2–6 汉字定则：**全部合规**；分布 2 字 71 条、3 字 12 条、4 字 2 条
* 最长译名：`局部变量`（let）、`类型别名`（type），4 汉字 / 12 字节

## 纪律（照本项目既有做法）
1. **英文永不删除**：汉语关键字只是**并行拼写**，同一 `ast.Kind`；英文关键字行为逐字节不变；
2. 判据要自带自测（证明它真的会失败）；
3. 判据之一：**英文 `.ts` 的产物与上游基线 tsc 逐字节一致**；
4. 判据之二：**汉语 `.chts` 生成的 js 必须是标准英文关键字**，能被 node 直接跑，
   且运行结果与英文对照完全一致；
5. 关键字译名必须满足家族的 **2–6 个汉字** 定则，且与 Chinese++ 同词同义。

生成时间：2026-10-06 23:18:59（初版）
本版更新：通宵批次 —— 词表落盘、生成器与守卫就位、4 处补丁落地、判定脚本成型
