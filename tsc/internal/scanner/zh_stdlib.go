package scanner

// ChineseTypeScript：标准库汉语别名 → 英文规范名。
//
// 机制（2026-10-08 用户裁定，见 stdlib/README.md）：标准库名不是关键字，运行时（JS 引擎）
// 里的真名仍是英文；于是声明层用汉语名，emit 时把汉语名【打回英文规范名】，
// 产物是标准 JS（甲.追加(4) → 甲.push(4)），无需任何运行时垫片。
//
// 单一真源：两张表在【生成物】zh_stdlib_generated.go 里，来自 stdlib/试点-数组与数学.tsv；
// 本文件只放【手写逻辑】。改译名请改 TSV 再跑 tools/gen_zhstdlib.ps1。
//
// ⚠ 为什么分两张表（全局 vs 成员）：emit 期【拿不到引用位的符号】（Node.Symbol() 只对声明节点
// 有效），所以改写只能按文本做。为了尽量不误伤用户的汉语标识符，规矩分两档：
//   * 全局名（数学/数组）：只要是【引用位】就改写；
//   * 成员名（追加/长度）：只在【成员位置】（X.名）改写 ——
//     用户自己声明的变量/函数叫「追加」不会被误改（judge_zhstdlib 第⑥项钉住）。
// 仍未解决：用户自定义的【成员】若叫「追加」仍会被误改（要真符号感知得上 checker）。

// ChineseStdlibGlobalName 返回汉语【全局】标准库名对应的英文规范名。
func ChineseStdlibGlobalName(name string) (string, bool) {
	english, ok := zhStdlibGlobals[name]
	return english, ok
}

// ChineseStdlibMemberName 返回汉语【成员】标准库名对应的英文规范名。
func ChineseStdlibMemberName(name string) (string, bool) {
	english, ok := zhStdlibMembers[name]
	return english, ok
}
