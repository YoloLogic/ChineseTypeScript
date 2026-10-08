package parser

import (
	"slices"
	"testing"
)

// 目的：把 item① 的「建议」这一半钉成机器判据。
// 判据要能失败：把 getChineseKeywordSuggestion 从建议链里摘掉、或改坏 oneEditApart，
// 下面每一项都会红。

func TestViableChineseKeywordSuggestionsAreSortedAndNonEmpty(t *testing.T) {
	t.Parallel()
	if len(viableChineseKeywordSuggestions) == 0 {
		t.Fatal("汉语建议候选是空的：scanner.ChineseKeywordSpellings() 没接上")
	}
	if !slices.IsSorted(viableChineseKeywordSuggestions) {
		t.Fatal("汉语建议候选没有升序：建议结果会不确定")
	}
}

func TestOneEditApart(t *testing.T) {
	t.Parallel()
	yes := [][2]string{
		{"函树", "函数"},  // 替换
		{"如果甲", "如果"}, // 删除
		{"函数", "函数甲"}, // 插入
		{"abc", "abd"},
	}
	for _, pair := range yes {
		if !oneEditApart([]rune(pair[0]), []rune(pair[1])) {
			t.Fatalf("oneEditApart(%q, %q) 应为 true", pair[0], pair[1])
		}
	}
	no := [][2]string{
		{"函数", "函数"},   // 零次编辑不算「差一个」
		{"函树", "局部变量"}, // 差太远
		{"函数", "函数甲乙"}, // 两次插入
		{"甲", "乙丙"},
	}
	for _, pair := range no {
		if oneEditApart([]rune(pair[0]), []rune(pair[1])) {
			t.Fatalf("oneEditApart(%q, %q) 应为 false", pair[0], pair[1])
		}
	}
}

func TestGetChineseKeywordSuggestion(t *testing.T) {
	t.Parallel()
	want := map[string]string{
		"函树":   "函数",
		"构造气":  "构造器",
		"局部变两": "局部变量",
	}
	for input, expected := range want {
		if got := getChineseKeywordSuggestion(input); got != expected {
			t.Fatalf("getChineseKeywordSuggestion(%q) = %q，应为 %q", input, got, expected)
		}
	}
	// 「对像」与「对象」「对于」都只差一个汉字 —— 有歧义时结果必须【确定且非空】
	// （实现取字典序最小者）。这里锁的是「确定性」，不是某一个具体答案。
	first := getChineseKeywordSuggestion("对像")
	second := getChineseKeywordSuggestion("对像")
	if first == "" || first != second {
		t.Fatalf("有歧义时必须给出确定且非空的结果，得到 %q / %q", first, second)
	}
	// 不该乱建议：长度 < 2、离任何汉语关键字都超过一次编辑、或纯 ASCII。
	for _, input := range []string{"甲", "我的东西", "完全是别的词", "functio", ""} {
		if got := getChineseKeywordSuggestion(input); got != "" {
			t.Fatalf("getChineseKeywordSuggestion(%q) 不该给建议，却给了 %q", input, got)
		}
	}
}

func TestGetSpaceSuggestionInChinese(t *testing.T) {
	t.Parallel()
	if got := getSpaceSuggestionIn("如果甲", viableChineseKeywordSuggestions); got != "如果 甲" {
		t.Fatalf("汉语「忘了加空格」建议 = %q，应为 %q", got, "如果 甲")
	}
	if got := getSpaceSuggestionIn("函数", viableChineseKeywordSuggestions); got != "" {
		t.Fatalf("完整关键字不该给空格建议，却给了 %q", got)
	}
}
