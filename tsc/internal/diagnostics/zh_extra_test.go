package diagnostics

import (
	"regexp"
	"slices"
	"sort"
	"strconv"
	"strings"
	"testing"
	"unicode"

	"github.com/microsoft/TypeScript/tsc/internal/locale"
)

func placeholders(s string) []int {
	matches := regexp.MustCompile(`{(d+)}`).FindAllStringSubmatch(s, -1)
	result := make([]int, 0, len(matches))
	for _, m := range matches {
		n, _ := strconv.Atoi(m[1])
		result = append(result, n)
	}
	sort.Ints(result)
	return result
}

func hasHan(s string) bool {
	return strings.ContainsFunc(s, func(r rune) bool { return unicode.Is(unicode.Han, r) })
}

// 目的：把「补译表（上游 zh-CN 之外我们补的 86 条）」钉成机器判据。
// 判据要能失败：键写错 / 译文不含汉字 / 占位符错位 / 上游已收录同键，都会红。
func TestZhExtraMessages(t *testing.T) {
	t.Parallel()
	if len(zhExtraMessages) == 0 {
		t.Fatal("zhExtraMessages 是空的")
	}
	upstream := zhCN()
	for key, text := range zhExtraMessages {
		msg := keyToMessage(key)
		if msg == nil {
			t.Errorf("补译条目 %q 在 diagnostics_generated.go 里不存在（上游删键了？）", key)
			continue
		}
		if _, exists := upstream[key]; exists {
			t.Errorf("补译条目 %q 上游 zh-CN 已经有译文了（本条目冗余，应删除）", key)
		}
		if !hasHan(text) {
			t.Errorf("补译条目 %q 的译文不含汉字：%q", key, text)
		}
		if got, want := placeholders(text), placeholders(msg.text); !slices.Equal(got, want) {
			t.Errorf("补译条目 %q 的占位符 %v 与英文原文 %v 不一致（参数会错位）", key, got, want)
		}
	}
}

// 端到端：这条（TS5090）上游 zh-CN 缺译，zh-CN 下应得到中文，英文下不得出现汉字。
func TestZhExtraIsUsedByLocalize(t *testing.T) {
	t.Parallel()
	const key = Key("Non_relative_paths_are_not_allowed_Did_you_forget_a_leading_Slash_5090")
	zh, ok := locale.Parse("zh-CN")
	if !ok {
		t.Fatal("locale.Parse(zh-CN) 失败")
	}
	got := Localize(zh, nil, key)
	if !hasHan(got) {
		t.Fatalf("zh-CN 下这条（上游缺译）应为中文，实际：%q", got)
	}
	en, ok := locale.Parse("en")
	if !ok {
		t.Fatal("locale.Parse(en) 失败")
	}
	gotEn := Localize(en, nil, key)
	if hasHan(gotEn) {
		t.Fatalf("英文下不该出现汉字：%q", gotEn)
	}
	if gotEn == got {
		t.Fatalf("中英应当不同，却都得到 %q", got)
	}
}
