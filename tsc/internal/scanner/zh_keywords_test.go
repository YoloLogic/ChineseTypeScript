package scanner

import (
	"strings"
	"testing"
	"unicode"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
)

// 本文件是 ChineseTypeScript 汉语关键字别名表的【机器守卫】。
//
// 它存在的意义：这些约束一旦被人忘记，后果是【静默】的 —— 编译不报错、
// 测试不失败，只是生成的 js 偶尔非法、或某个关键字突然失效。所以不靠人记得，
// 让机器每次 go test 都校核一遍。
//
// 词表单一真源：tsc/internal/scanner/zh_keywords.txt
// 生成物：      tsc/internal/scanner/zh_keywords_generated.go

func hasHanRune(s string) bool {
	for _, r := range s {
		if unicode.Is(unicode.Han, r) {
			return true
		}
	}
	return false
}

func hanRuneCount(s string) int {
	n := 0
	for _, r := range s {
		if unicode.Is(unicode.Han, r) {
			n++
		}
	}
	return n
}

// TestZhKeywordTableNotEmpty 防止生成物没被生成/被清空却无人察觉。
func TestZhKeywordTableNotEmpty(t *testing.T) {
	t.Parallel()
	if len(zhTextToKeyword) == 0 {
		t.Fatal("zhTextToKeyword 是空的：请运行 go run ./cmd/genzhkeywords")
	}
	if len(zhTextToKeyword) != len(textToKeyword) {
		t.Fatalf("汉语译名 %d 条 != 英文关键字 %d 条（漏译或多译）", len(zhTextToKeyword), len(textToKeyword))
	}
}

// TestZhKeywordShapes 校核译名形状：2..6 个汉字、不含空白、不含 ASCII 字母。
// 定则来源：Chinese++（用户 2026-09-23 明确：关键字至少两个汉字、最多 6 个汉字）。
func TestZhKeywordShapes(t *testing.T) {
	t.Parallel()
	for zh := range zhTextToKeyword {
		if n := hanRuneCount(zh); n < 2 || n > 6 {
			t.Errorf("译名 %q 有 %d 个汉字，违反定则（必须 2..6）", zh, n)
		}
		if strings.ContainsAny(zh, " \t\r\n") {
			t.Errorf("译名 %q 含空白字符", zh)
		}
		for _, r := range zh {
			if r < 128 {
				t.Errorf("译名 %q 含 ASCII 字符 %q（译名应全为汉字）", zh, r)
			}
		}
	}
}

// TestZhKeywordIsInjective 校核「一词一译」：两个汉语拼写不得指向同一个关键字。
func TestZhKeywordIsInjective(t *testing.T) {
	t.Parallel()
	seen := map[ast.Kind]string{}
	for zh, kind := range zhTextToKeyword {
		if prev, dup := seen[kind]; dup {
			t.Errorf("译名 %q 与 %q 指向同一个关键字 %v（一词只应一译）", zh, prev, kind)
		}
		seen[kind] = zh
	}
}

// TestZhKeywordCoversAllEnglishKeywords 校核覆盖率：
// scanner.go 的 textToKeyword 里每个英文关键字都必须有且仅有一个译名。
// 这条专门防「扫描器新增了英文关键字，词表忘了跟」。
func TestZhKeywordCoversAllEnglishKeywords(t *testing.T) {
	t.Parallel()
	covered := map[ast.Kind]bool{}
	for _, kind := range zhTextToKeyword {
		covered[kind] = true
	}
	var missing []string
	for en, kind := range textToKeyword {
		if !covered[kind] {
			missing = append(missing, en)
		}
	}
	if len(missing) > 0 {
		t.Errorf("以下英文关键字没有汉语译名（漏译）：%v", missing)
	}
}

// TestTokenToTextHasNoChinese 是【最重要的不变式】。
//
// tokenToText 由 textToToken 倒排而来，而 printer 的 writeTokenText 直接用它落盘。
// 它一旦含中文，生成的 js 就会含中文关键字 —— 那是非法 JS，node 跑不起来。
// 所以：TokenToString 对任何 ast.Kind 都不得返回含汉字的字符串。
func TestTokenToTextHasNoChinese(t *testing.T) {
	t.Parallel()
	for k := range ast.KindCount {
		if s := TokenToString(k); hasHanRune(s) {
			t.Errorf("TokenToString(%v) = %q 含汉字 —— 中文别名污染了倒排表！"+
				"汉语别名必须留在独立的 zhTextToKeyword 里，绝不并入 textToKeyword / textToToken", k, s)
		}
	}
}

// TestChineseKeywordsAreRecognized 校核正向效果：
// 每个汉语拼写都必须被 GetIdentifierToken 认成它对应的关键字 ——
// 本项目用普通 .ts 写汉语关键字，所以【对所有文件一视同仁】。
func TestChineseKeywordsAreRecognized(t *testing.T) {
	t.Parallel()
	for zh, want := range zhTextToKeyword {
		if got := GetIdentifierToken(zh); got != want {
			t.Errorf("GetIdentifierToken(%q) = %v，期望 %v", zh, got, want)
		}
	}
}

// TestEnglishKeywordsUnchanged 校核【没有回归】：
// 英文关键字的识别结果必须与改动前完全一致。
func TestEnglishKeywordsUnchanged(t *testing.T) {
	t.Parallel()
	for en, want := range textToKeyword {
		if got := GetIdentifierToken(en); got != want {
			t.Errorf("GetIdentifierToken(%q) = %v，期望 %v（英文路径被改坏了）", en, got, want)
		}
	}
}

// TestNonKeywordChineseStaysIdentifier 是「不是中文关键字」检查：
// 词表里没有的汉语词必须仍然是【普通标识符】，不能被误吞成关键字。
func TestNonKeywordChineseStaysIdentifier(t *testing.T) {
	t.Parallel()
	// 这些是常见的汉语标识符，故意都不是关键字
	for _, s := range []string{"变量名", "计数器", "结果", "用户", "临时值", "输入文本", "数组长度", "配置", "消息", "名字"} {
		if _, isKeyword := zhTextToKeyword[s]; isKeyword {
			t.Fatalf("测试自身有误：%q 竟在关键字表里", s)
		}
		if got := GetIdentifierToken(s); got != ast.KindIdentifier {
			t.Errorf("GetIdentifierToken(%q) = %v，期望 KindIdentifier（不是中文关键字）", s, got)
		}
	}
}

// TestGetIdentifierTokenEmptyIsSafe 校核边界：
// 空串绝不能 panic（放开 ASCII 闸时若写成 str[0] >= utf8.RuneSelf 就会崩）。
func TestGetIdentifierTokenEmptyIsSafe(t *testing.T) {
	t.Parallel()
	for _, s := range []string{"", "a", "$", "_", "汉"} {
		if got := GetIdentifierToken(s); got != ast.KindIdentifier {
			t.Errorf("GetIdentifierToken(%q) = %v，期望 KindIdentifier", s, got)
		}
	}
}
