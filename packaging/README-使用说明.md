# ChineseTypeScript 发行包（v0.1，win64）

> 用汉语写 TypeScript：`.ts` 源文件里的**汉语关键字**（`如果` / `函数` / `常量` …）
> 与英文落成同一个 token；编译产出的 `.js` **是标准英文关键字**，能被 node 直接运行。
> 英文 `.ts` 照旧可用，产物与上游 TypeScript **逐字节一致**。

## 一分钟上手

1. 解压到一个你想放的位置（英文或中文路径都可以）。
2. 双击 **`一键安装.cmd`**：它会写好 `env.cmd`，并自动跑一遍**包内自测**。
3. 双击 **`env.cmd`**，开一个已经配好 PATH 的窗口，然后：

   ```
   chtsc --version
   chtsc app.ts --target es2020 --module commonjs
   node app.js
   ```

> 本包**自带 node**（便携版 v24.15.0），所以「编译完就能跑」不需要你先装任何东西。
> `install.ps1` 默认**不动**你的永久 PATH；要加进用户 PATH 才用
> `powershell -File install.ps1 -AddToUserPath`，撤销用 **`一键还原.cmd`**。

## 包里有什么

| 路径 | 是什么 |
|---|---|
| `bin\chtsc.exe` | 编译器本体（Go 编译出的自包含二进制，**不需要装 Go**） |
| `node\node.exe` | 便携版 Node v24.15.0（跑产出的 `.js` 用），许可在 `node\LICENSE` |
| `例子\` | 9 个能编能跑的示例（`01-骨架.ts` …） |
| `docs\中文对照表.md` | 85 个汉语关键字的中英对照（**生成物**） |
| `docs\ChineseTypeScript-教学教程.md` / `.docx` | 教学教程（md 与 Word 双份，**都是生成物**） |
| `LICENSE.txt` / `NOTICE.txt` | 上游 Apache-2.0 许可与声明（**必须随包**） |
| `verify.ps1` | 包内自测：**不满足就报错**，项数由脚本自己声明并自证 |
| `install.ps1` / `一键安装.cmd` | 一键安装（会话级 PATH） |
| `uninstall.ps1` / `一键还原.cmd` | 撤销用户 PATH 里的本包条目 |
| `MANIFEST.tsv` | 每个文件的体积与 SHA256 |

## 自己验一遍

```
powershell -File verify.ps1
```

它会：真编译一个英文 `.ts`、真编译一个汉语 `.ts`（从**临时目录**，不是包目录）、
用包里的 node 真跑两个产物、并**故意编一个错程序**确认它真的会被拒绝 —— 最后一项是
「判据不是橡皮图章」的自证。全过则退出码 0。

## 已知边界（诚实登记）

* 汉语关键字**对所有 `.ts` 文件生效**（含 `.tsx` / `.mts` / `.cts` / `.d.ts`），且**没有**自定义后缀。
  因此 `对象` / `变量` / `函数` / `类型` 这类词**不能再当标识符**用
  （`const 变量 = 1;` 会报 **TS1389**）；英文关键字永远可写，是逃生通道。
* **没有**「汉语标准库」：`console` / `Array` / `Promise` 这些名字没有中文别名。
* tsc 侧诊断**默认出中文**（`chtsc` 不给 `--locale` 时就是中文，用 `--locale en` 回英文）。
* 语言服务的汉语关键字补全**已做**（对所有 `.ts` 生效），但本包**不带编辑器配置模板** ——
  要自己把 `chtsc --lsp --stdio` 配给编辑器。
* 本包**只带 node.exe**，不带 npm；要用 npm 装第三方包，请另装 Node.js。
* 上游许可为 **Apache-2.0**；本发行包保留了 `LICENSE.txt` 与 `NOTICE.txt`。
