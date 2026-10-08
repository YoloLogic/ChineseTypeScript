package ls

import (
	"slices"
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/parser"
	"github.com/microsoft/TypeScript/tsc/internal/scanner"
	"github.com/microsoft/TypeScript/tsc/internal/tspath"
)

// 目的：证明「汉语关键字进了编辑器补全」且【只在 .chts 文件里】。
// 判据要能失败：把汉语追加删掉、把种类反查换回 StringToToken、去掉 .chts 判定、
// 或把缓存键里的 includeChinese 拿掉（.ts 会被 .chts 污染），下面都会红。

func completionLabels(items []*CompletionItem) []string {
	result := make([]string, 0, len(items))
	for _, item := range items {
		result = append(result, item.Label)
	}
	return result
}

func zhKindByText() map[string]ast.Kind {
	result := make(map[string]ast.Kind)
	for _, alias := range scanner.ChineseKeywordAliases() {
		result[alias.Text] = alias.Keyword
	}
	return result
}

func testSourceFile(name string) *ast.SourceFile {
	return parser.ParseSourceFile(ast.SourceFileParseOptions{FileName: name, Path: tspath.Path(name)}, "", core.ScriptKindTS)
}

func hasChineseLabel(labels []string, zh map[string]ast.Kind) bool {
	return slices.ContainsFunc(labels, func(label string) bool {
		_, ok := zh[label]
		return ok
	})
}

func TestChineseKeywordsAreInEveryCompletionCategory(t *testing.T) {
	t.Parallel()
	zh := zhKindByText()
	filters := []KeywordCompletionFilters{
		KeywordCompletionFiltersAll,
		KeywordCompletionFiltersClassElementKeywords,
		KeywordCompletionFiltersInterfaceElementKeywords,
		KeywordCompletionFiltersConstructorParameterKeywords,
		KeywordCompletionFiltersFunctionLikeBodyKeywords,
		KeywordCompletionFiltersTypeAssertionKeywords,
		KeywordCompletionFiltersTypeKeywords,
		KeywordCompletionFiltersTypeKeyword,
	}
	for _, filter := range filters {
		items := getKeywordCompletions(filter, false, true)
		enKinds := map[ast.Kind]bool{}
		zhKinds := map[ast.Kind]bool{}
		for _, item := range items {
			if kind, ok := zh[item.Label]; ok {
				zhKinds[kind] = true
			} else {
				enKinds[scanner.StringToToken(item.Label)] = true
			}
		}
		if len(zhKinds) == 0 {
			t.Fatalf("过滤器 %v 里一个汉语关键字都没有：汉语根本没进补全", filter)
		}
		for kind := range zhKinds {
			if !enKinds[kind] {
				t.Fatalf("过滤器 %v：汉语覆盖了英文没有的 kind %v", filter, kind)
			}
		}
		for kind := range enKinds {
			if !zhKinds[kind] {
				t.Fatalf("过滤器 %v：英文 kind %v 没有对应的汉语别名（漏了）", filter, kind)
			}
		}
	}
}

func TestChineseKeywordsFollowTheTypeScriptOnlyFilter(t *testing.T) {
	t.Parallel()
	withTs := completionLabels(getKeywordCompletions(KeywordCompletionFiltersClassElementKeywords, false, true))
	withoutTs := completionLabels(getKeywordCompletions(KeywordCompletionFiltersClassElementKeywords, true, true))
	for _, label := range []string{"静态", "取值", "设值", "static", "get", "set"} {
		if !slices.Contains(withTs, label) || !slices.Contains(withoutTs, label) {
			t.Fatalf("%q 应在两类里都有（它不是 TS 专有关键字）", label)
		}
	}
	for _, label := range []string{"公开", "私有", "只读", "抽象", "public", "private", "readonly", "abstract"} {
		if !slices.Contains(withTs, label) {
			t.Fatalf("%q 应在 withTs 里（它是 TS 专有关键字）", label)
		}
		if slices.Contains(withoutTs, label) {
			t.Fatalf("%q 不该出现在 withoutTs 里（汉语别名的种类没被认出来，TS-only 过滤失效）", label)
		}
	}
}

func TestKeywordCompletionsAreDeterministic(t *testing.T) {
	t.Parallel()
	first := completionLabels(getKeywordCompletions(KeywordCompletionFiltersTypeKeywords, false, true))
	second := completionLabels(getKeywordCompletions(KeywordCompletionFiltersTypeKeywords, false, true))
	if !slices.Equal(first, second) {
		t.Fatalf("同一过滤器两次结果不同（顺序不确定）：%v / %v", first, second)
	}
	if !slices.Contains(first, "数字") {
		t.Fatalf("类型关键字补全里应有汉语「数字」，实际：%v", first)
	}
}

func TestNoDuplicateKeywordCompletionLabels(t *testing.T) {
	t.Parallel()
	labels := completionLabels(getKeywordCompletions(KeywordCompletionFiltersAll, false, true))
	seen := map[string]bool{}
	for _, label := range labels {
		if seen[label] {
			t.Fatalf("补全标签重复：%q", label)
		}
		seen[label] = true
	}
}

func TestChineseKeywordsOnlyForChtsFiles(t *testing.T) {
	t.Parallel()
	if includeChineseKeywordCompletions(testSourceFile("/a.ts")) {
		t.Fatal(".ts 文件不该给汉语关键字补全")
	}
	if !includeChineseKeywordCompletions(testSourceFile("/a.chts")) {
		t.Fatal(".chts 文件必须给汉语关键字补全")
	}

	zh := zhKindByText()
	enOnly := completionLabels(getKeywordCompletions(KeywordCompletionFiltersTypeKeywords, false, false))
	if hasChineseLabel(enOnly, zh) {
		t.Fatalf("英文模式（.ts）的类型补全里混进了汉语关键字：%v", enOnly)
	}
	withZh := completionLabels(getKeywordCompletions(KeywordCompletionFiltersTypeKeywords, false, true))
	if !hasChineseLabel(withZh, zh) {
		t.Fatalf("汉语模式（.chts）的类型补全里没有汉语关键字：%v", withZh)
	}
}

func TestChineseCompletionsDoNotPolluteTheEnglishCache(t *testing.T) {
	t.Parallel()
	// 先把「含汉语」的结果灌进缓存，再要「不含汉语」的 —— 若缓存键没带上
	// includeChinese，第二次会拿到被污染的（含汉语）结果。
	_ = getKeywordCompletions(KeywordCompletionFiltersAll, false, true)
	en := completionLabels(getKeywordCompletions(KeywordCompletionFiltersAll, false, false))
	if hasChineseLabel(en, zhKindByText()) {
		t.Fatalf("英文模式的结果被 .chts 的缓存污染了：%v", en)
	}
}
