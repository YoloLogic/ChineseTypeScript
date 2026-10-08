package scanner

// ChineseTypeScript：标准库汉语别名 → 英文规范名。
//
// 机制（2026-10-08 用户裁定，见 stdlib/README.md）：标准库名不是关键字，运行时（JS 引擎）
// 里的真名仍是英文，所以我们改不动运行时；于是声明层用汉语名，emit 时把汉语名【打回英文规范名】，
// 这样产物是标准 JS（甲.追加(4) → 甲.push(4)），无需任何运行时垫片。
//
// 试点只含「数组 + 数学」42 条；规模化时按 stdlib/名字清单.tsv 生成。
var zhStdlibToEnglish = map[string]string{
	"数组":     "Array",
	"数学":     "Math",
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

// ChineseStdlibCanonicalName 返回汉语标准库名对应的英文规范名。
// 不在表里就返回 (text, false) —— 一字不改，英文用法完全不受影响。
func ChineseStdlibCanonicalName(name string) (string, bool) {
	english, ok := zhStdlibToEnglish[name]
	return english, ok
}
