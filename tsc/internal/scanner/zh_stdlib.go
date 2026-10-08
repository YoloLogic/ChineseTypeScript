package scanner

// ChineseTypeScript：标准库汉语别名 → 英文规范名。
//
// 机制（2026-10-08 用户裁定，见 stdlib/README.md）：标准库名不是关键字，运行时（JS 引擎）
// 里的真名仍是英文；于是声明层用汉语名，emit 时把汉语名【打回英文规范名】，
// 产物是标准 JS（甲.追加(4) → 甲.push(4)），无需任何运行时垫片。
//
// 试点只含「数组 + 数学」；规模化时按 stdlib/名字清单.tsv 生成。
//
// ⚠ 为什么分两张表（全局 vs 成员）：emit 期【拿不到引用位的符号】（Node.Symbol() 只对声明节点
// 有效），所以改写只能按文本做。为了尽量不误伤用户的汉语标识符，规矩分两档：
//   - 全局名（数学/数组）：只要是【引用位】就改写；
//   - 成员名（追加/长度）：只在【成员位置】（X.名）改写 ——
//     用户自己声明的变量/函数叫「追加」不会被误改。
//
// 仍未解决：用户自定义的【成员】若叫「追加」仍会被误改（要真符号感知得上 checker）。
var zhStdlibGlobals = map[string]string{
	"数组": "Array",
	"数学": "Math",
}

var zhStdlibMembers = map[string]string{
	"长度":     "length",
	"转字符串":   "toString",
	"本地转字符串": "toLocaleString",
	"末尾弹出":   "pop",
	"追加":     "push",
	"拼接":     "concat",
	"连接成串":   "join",
	"反转":     "reverse",
	"开头弹出":   "shift",
	"截取":     "slice",
	"排序":     "sort",
	"剪接":     "splice",
	"开头插入":   "unshift",
	"找序号":    "indexOf",
	"末次序号":   "lastIndexOf",
	"全部满足":   "every",
	"存在满足":   "some",
	"逐个处理":   "forEach",
	"映射":     "map",
	"过滤":     "filter",
	"归纳":     "reduce",
	"反向归纳":   "reduceRight",
	"绝对值":    "abs",
	"反余弦":    "acos",
	"反正弦":    "asin",
	"反正切":    "atan",
	"反正切二":   "atan2",
	"向上取整":   "ceil",
	"余弦":     "cos",
	"指数":     "exp",
	"向下取整":   "floor",
	"对数":     "log",
	"最大":     "max",
	"最小":     "min",
	"乘方":     "pow",
	"随机":     "random",
	"四舍五入":   "round",
	"正弦":     "sin",
	"平方根":    "sqrt",
	"正切":     "tan",
}

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
