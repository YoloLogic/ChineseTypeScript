package core

import "testing"

// ChineseTypeScript 扩展名的 ScriptKind 守卫：
// .chts 必须被当成 TS 源文件处理，且不得影响其它扩展名的既有判定。
func TestChtsScriptKind(t *testing.T) {
	if got := GetScriptKindFromFileName("示例.chts"); got != ScriptKindTS {
		t.Errorf("GetScriptKindFromFileName(\"示例.chts\") = %v，期望 ScriptKindTS", got)
	}
	if got := EnsureScriptKindFromFileName("示例.chts"); got != ScriptKindTS {
		t.Errorf("EnsureScriptKindFromFileName(\"示例.chts\") = %v，期望 ScriptKindTS", got)
	}
	// 大小写不敏感（GetScriptKindFromFileName 自己会 ToLower）
	if got := GetScriptKindFromFileName("示例.CHTS"); got != ScriptKindTS {
		t.Errorf("大写 .CHTS 也应识别为 ScriptKindTS，实际 %v", got)
	}
}

func TestChtsDidNotDisturbOtherExtensions(t *testing.T) {
	cases := map[string]ScriptKind{
		"a.ts":    ScriptKindTS,
		"a.tsx":   ScriptKindTSX,
		"a.cts":   ScriptKindTS, // 上游语义：CommonJS 版 TS，仍是 TS
		"a.mts":   ScriptKindTS,
		"a.js":    ScriptKindJS,
		"a.jsx":   ScriptKindJSX,
		"a.json":  ScriptKindJSON,
		"a.weird": ScriptKindUnknown,
	}
	for name, want := range cases {
		if got := GetScriptKindFromFileName(name); got != want {
			t.Errorf("GetScriptKindFromFileName(%q) = %v，期望 %v", name, got, want)
		}
	}
}
