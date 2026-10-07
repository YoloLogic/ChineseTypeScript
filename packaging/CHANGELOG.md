# 更新记录

## 0.1（首次独立发行）

* 首个独立发行包 `ChineseTypeScript-0.1-win64.zip`。
* `bin\chtsc.exe`：命令行编译器（构建脚本自带三段自证：版本号 + 真编译 `.chts` + node 真跑）。
* `node\node.exe`：便携版 Node **v24.15.0**（与官方 win-x64 发行包 **SHA256 一致**），
  许可 `node\LICENSE` 随包。
* 随包文档（**全部是生成物**）：`docs\中文对照表.md`、
  `docs\ChineseTypeScript-教学教程.md` 与 `.docx`。
* 随包 `例子\`：9 个真编译真运行的示例。
* 包内自测 `verify.ps1`：项数由 `$expectedChecks` 自证，且含一个**必须失败**的用例。
* 一键安装只写**会话级** `env.cmd`；`-AddToUserPath` 才动用户 PATH；
  `一键还原.cmd` 撤销。
