// ChineseTypeScript 汉语关键字别名的【只读 API】（手写文件，勿与生成物混淆）。
//
// 生成的 zh_keywords_generated.go 只放表本身；这里放三个给 parser / ls 用的
// 访问器。为什么不把汉语拼写并进 textToKeyword：见 zh_keywords.txt 的说明 ——
// tokenToText 由 textToToken 倒排，中文键一旦混入会让产物随机含中文关键字。
//
// 为什么必须【排序】：Go 的 map 遍历顺序是随机的，而这两个使用者都要求确定性 ——
// parser 的「你是不是想写…」建议、ls 的编辑器补全，同一位置两次结果必须一样。

package scanner

import (
	"sort"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
)

// KeywordAlias 是一个汉语关键字拼写，以及它与英文【完全相同】的关键字种类。
type KeywordAlias struct {
	Text    string
	Keyword ast.Kind
}

// zhKeywordAliases 把 zhTextToKeyword 拍平成按 Text 升序排列的切片（进程内只算一次）。
var zhKeywordAliases = func() []KeywordAlias {
	result := make([]KeywordAlias, 0, len(zhTextToKeyword))
	for text, kind := range zhTextToKeyword {
		result = append(result, KeywordAlias{Text: text, Keyword: kind})
	}
	sort.Slice(result, func(i, j int) bool { return result[i].Text < result[j].Text })
	return result
}()

// ChineseKeywordAliases 返回按 Text 升序的汉语别名表（只读；调用方不得修改）。
func ChineseKeywordAliases() []KeywordAlias {
	return zhKeywordAliases
}

// ChineseKeywordSpellings 返回按升序的汉语关键字拼写（给「建议」用的候选）。
func ChineseKeywordSpellings() []string {
	result := make([]string, 0, len(zhKeywordAliases))
	for _, alias := range zhKeywordAliases {
		result = append(result, alias.Text)
	}
	return result
}

// StringToTokenIncludingChinese 与 StringToToken 相同，但【额外】认汉语别名。
//
// StringToToken 本身【故意】保持只认英文：它被 .d.ts 生成、自动导入等位置用来
// 判断「这个名字是不是关键字」，让汉语别名悄悄参与那些判断，会波及英文路径的
// 产物。需要「连汉语别名一起认」的地方（例如编辑器补全的过滤器）显式调用本函数。
func StringToTokenIncludingChinese(s string) ast.Kind {
	if kind := StringToToken(s); kind != ast.KindUnknown {
		return kind
	}
	if kind, ok := zhTextToKeyword[s]; ok {
		return kind
	}
	return ast.KindUnknown
}
