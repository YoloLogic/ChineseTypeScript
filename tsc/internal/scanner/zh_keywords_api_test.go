package scanner

import (
	"sort"
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
)

// 目的：把「汉语别名 API 是确定性的、且与生成表逐条一致」钉成机器判据。
// 判据要能失败：把任一项改坏（乱序、漏条、错映射、StringToToken 去认汉语）都会红。

func TestChineseKeywordAliasesAreSorted(t *testing.T) {
	t.Parallel()
	aliases := ChineseKeywordAliases()
	for i := 1; i < len(aliases); i++ {
		if aliases[i-1].Text >= aliases[i].Text {
			t.Fatalf("汉语别名没有按文本严格升序：%q 之后是 %q（补全/建议会因此不确定）", aliases[i-1].Text, aliases[i].Text)
		}
	}
}

func TestChineseKeywordAliasesMatchTable(t *testing.T) {
	t.Parallel()
	aliases := ChineseKeywordAliases()
	if len(aliases) != len(zhTextToKeyword) {
		t.Fatalf("API 返回 %d 条，生成表是 %d 条", len(aliases), len(zhTextToKeyword))
	}
	seen := make(map[string]bool, len(aliases))
	for _, alias := range aliases {
		if seen[alias.Text] {
			t.Fatalf("别名重复：%q", alias.Text)
		}
		seen[alias.Text] = true
		want, ok := zhTextToKeyword[alias.Text]
		if !ok {
			t.Fatalf("API 里的 %q 不在生成表中", alias.Text)
		}
		if alias.Keyword != want {
			t.Fatalf("%q 映射成了 %v，生成表是 %v", alias.Text, alias.Keyword, want)
		}
	}
}

func TestChineseKeywordSpellingsMatchAliases(t *testing.T) {
	t.Parallel()
	spellings := ChineseKeywordSpellings()
	if !sort.StringsAreSorted(spellings) {
		t.Fatal("ChineseKeywordSpellings 没有升序")
	}
	if len(spellings) != len(zhTextToKeyword) {
		t.Fatalf("拼写 %d 条，生成表 %d 条", len(spellings), len(zhTextToKeyword))
	}
	for _, s := range spellings {
		if _, ok := zhTextToKeyword[s]; !ok {
			t.Fatalf("拼写 %q 不在生成表中", s)
		}
	}
}

func TestStringToTokenStaysEnglishOnly(t *testing.T) {
	t.Parallel()
	// 关键不变式：StringToToken 绝不能被汉语别名「污染」。
	// 它被 .d.ts 生成等位置使用；一旦它认得汉语，英文路径的行为就可能变。
	zh := "如果"
	if got := StringToToken(zh); got != ast.KindUnknown {
		t.Fatalf("StringToToken(%q) = %v，必须是 KindUnknown（它只认英文）", zh, got)
	}
	if got := StringToToken("if"); got == ast.KindUnknown {
		t.Fatal("StringToToken 必须认得英文关键字 if")
	}
}

func TestStringToTokenIncludingChinese(t *testing.T) {
	t.Parallel()
	zh := "如果"
	if got := StringToTokenIncludingChinese(zh); got != zhTextToKeyword[zh] {
		t.Fatalf("StringToTokenIncludingChinese(%q) = %v，应为 %v", zh, got, zhTextToKeyword[zh])
	}
	if got := StringToTokenIncludingChinese("if"); got == ast.KindUnknown {
		t.Fatal("StringToTokenIncludingChinese 必须认得英文关键字 if")
	}
	if got := StringToTokenIncludingChinese("绝不是关键字"); got != ast.KindUnknown {
		t.Fatalf("StringToTokenIncludingChinese 对未知词返回了 %v", got)
	}
}
