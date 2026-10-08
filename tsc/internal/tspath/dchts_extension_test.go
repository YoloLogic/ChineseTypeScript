package tspath

import (
	"slices"
	"testing"
)

// ChineseTypeScript 声明扩展名 .d.chts 的守卫。
// 判据要能失败：把 .d.chts 从 SupportedDeclarationExtensions / ExtensionIsTs /
// extensionsToRemove 里拿掉，或把它错并进 CJS 那一类，下面都会红。

func TestDchtsIsARecognizedDeclarationExtension(t *testing.T) {
	if ExtensionDchts != ".d.chts" {
		t.Fatalf("ExtensionDchts = %q", ExtensionDchts)
	}
	if !slices.Contains(SupportedDeclarationExtensions, ExtensionDchts) {
		t.Error(".d.chts 必须在 SupportedDeclarationExtensions 里")
	}
	if got := GetDeclarationFileExtension("示例.d.chts"); got != ExtensionDchts {
		t.Errorf("GetDeclarationFileExtension(示例.d.chts) = %q，期望 .d.chts", got)
	}
	if !IsDeclarationFileName("示例.d.chts") {
		t.Error("示例.d.chts 必须被当成声明文件")
	}
	if IsDeclarationFileName("示例.chts") {
		t.Error("示例.chts 不是声明文件")
	}
	if !ExtensionIsTs(ExtensionDchts) {
		t.Error("ExtensionIsTs(.d.chts) 必须为 true")
	}
	if !slices.Contains(SupportedTSExtensionsFlat, ExtensionDchts) {
		t.Error(".d.chts 必须在 SupportedTSExtensionsFlat 里")
	}
	if !slices.Contains(supportedTSExtensionsForExtractExtension, ExtensionDchts) {
		t.Error(".d.chts 必须在 supportedTSExtensionsForExtractExtension 里")
	}
}

func TestDchtsOutputNamesStripTheWholeExtension(t *testing.T) {
	// 关键：.d.chts 排在 .chts 之前，否则 示例.d.chts 会被剥成 示例.d
	if got := TryGetExtensionFromPath("示例.d.chts"); got != ExtensionDchts {
		t.Errorf("TryGetExtensionFromPath(示例.d.chts) = %q，期望 .d.chts", got)
	}
	if got := RemoveFileExtension("/a/示例.d.chts"); got != "/a/示例" {
		t.Errorf("RemoveFileExtension = %q，期望 /a/示例", got)
	}
	if got := ChangeExtension("/a/示例.d.chts", ExtensionJs); got != "/a/示例.js" {
		t.Errorf("ChangeExtension = %q，期望 /a/示例.js", got)
	}
}

func TestDchtsIsNotCommonJs(t *testing.T) {
	// .d.cts 是「CommonJS 版 TypeScript」的声明文件，语义不可挪用；
	// .d.chts 是 .d.ts 的平行拼写，绝不该出现在 CJS 那一类里。
	if slices.Contains(ExtensionsNotSupportingExtensionlessResolution, ExtensionDchts) {
		t.Error(".d.chts 不该被当成 CommonJS 专用扩展名")
	}
	if got := GetPossibleOriginalInputExtensionForExtension("示例.d.chts"); !slices.Equal(got, []string{ExtensionChts}) {
		t.Errorf("GetPossibleOriginalInputExtensionForExtension(示例.d.chts) = %v，期望 [.chts]", got)
	}
}

func TestChtsStillEmitsDts(t *testing.T) {
	// 设计决定（可改）：.chts 是 .ts 的平行拼写，声明产出走【标准】.d.ts，
	// 任何 TS 工具都能直接消费；.d.chts 只作为「能被识别与解析」的声明文件。
	// 若要改成 .chts -> .d.chts（与 .cts -> .d.cts 平行），改实现并同步本测试。
	if got := GetDeclarationEmitExtensionForPath("示例.chts"); got != ExtensionDts {
		t.Errorf("GetDeclarationEmitExtensionForPath(示例.chts) = %q，期望 .d.ts", got)
	}
}
