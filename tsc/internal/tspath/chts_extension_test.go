package tspath

import (
	"slices"
	"testing"
)

// 本文件是 ChineseTypeScript 扩展名整合的【机器守卫】。
//
// 它守的是三条容易被后来者无意破坏的性质：
//   1. 自有扩展名（实现 .chts + 声明 .d.chts）永远【成对追加在列表末尾】——
//      从而 .ts/.tsx/.d.ts 的既有优先级与解析顺序一个字节都不变
//      （这是「随便拿一个开源 TypeScript 项目照样编得过」的前提）。
//   2. .chts/.d.chts 只出现在【标准组】，不混进 .cts(CJS) / .mts(ESM) 那两组。
//   3. .cts 仍保持上游的 CommonJS 语义。
//
// 注：本文件最初断言「.chts 是列表最后一个」；加入同家族的 .d.chts 后，判据升级为
// 「以 [.chts .d.chts] 结尾」——被判据抓到的正是「末尾」这条过严的写法。

// ownExtensions 是 ChineseTypeScript 自有扩展名的【固定顺序】：实现在前，声明在后
// （与上游 {.ts, .d.ts} 同构）。
var ownExtensions = []string{ExtensionChts, ExtensionDchts}

func endsWithOwnExtensions(list []string) bool {
	if len(list) < len(ownExtensions) {
		return false
	}
	return slices.Equal(list[len(list)-len(ownExtensions):], ownExtensions)
}

func TestOwnExtensionsAreAppendedLastInEveryGroup(t *testing.T) {
	groups := map[string][][]string{
		"AllSupportedExtensions":         AllSupportedExtensions,
		"SupportedTSExtensions":          SupportedTSExtensions,
		"SupportedJSExtensions":          SupportedJSExtensions,
		"AllSupportedExtensionsWithJson": AllSupportedExtensionsWithJson,
	}
	for name, g := range groups {
		for i, group := range g {
			if !slices.Contains(group, ExtensionChts) && !slices.Contains(group, ExtensionDchts) {
				continue
			}
			if !endsWithOwnExtensions(group) {
				t.Errorf("%s 第 %d 组没有以 [.chts .d.chts] 追加在末尾：%v（必须追加在末尾，保持 .ts 优先级）", name, i, group)
			}
		}
	}

	flats := map[string][]string{
		"SupportedTSExtensionsFlat":                SupportedTSExtensionsFlat,
		"supportedTSExtensionsForExtractExtension": supportedTSExtensionsForExtractExtension,
	}
	for name, list := range flats {
		if !endsWithOwnExtensions(list) {
			t.Errorf("%s 没有以 [.chts .d.chts] 结尾：%v", name, list)
		}
	}

	// 实现扩展名表只含 .chts（声明扩展名不该混进「实现」这一档）。
	if !slices.Contains(SupportedTSImplementationExtensions, ExtensionChts) {
		t.Error("SupportedTSImplementationExtensions 里应有 .chts")
	}
	if slices.Contains(SupportedTSImplementationExtensions, ExtensionDchts) {
		t.Error("SupportedTSImplementationExtensions 不该含 .d.chts（它是声明，不是实现）")
	}

	// extensionsToRemove：先匹配者先剥；.d.chts 必须出现在 .chts 之前，
	// 否则 示例.d.chts 会被剥成 示例.d 而不是 示例。
	idxD := slices.Index(extensionsToRemove, ExtensionDchts)
	idxC := slices.Index(extensionsToRemove, ExtensionChts)
	if idxD < 0 || idxC < 0 || idxD > idxC {
		t.Errorf("extensionsToRemove 里 .d.chts 必须在 .chts 之前：%v", extensionsToRemove)
	}
}

func TestOwnExtensionsDoNotDisturbTsPrecedence(t *testing.T) {
	// 组是【按模块种类】分的：第 0 组=标准(ts/tsx/dts)、第 1 组=CJS(cts/dcts)、
	// 第 2 组=ESM(mts/dmts)。所以「首位是 .ts」只对含 .ts 的那一组成立 ——
	// 最初把这条判据写成"每组首位都得是 .ts"是错的，被本测试自己抓出来。
	check := func(name string, groups [][]string) {
		for i, group := range groups {
			if !slices.Contains(group, ExtensionTs) {
				continue
			}
			if group[0] != ExtensionTs {
				t.Errorf("%s 第 %d 组含 .ts 但首位不是 .ts：%v", name, i, group)
			}
			if !slices.Contains(group, ExtensionChts) {
				t.Errorf("%s 第 %d 组含 .ts 却没有 .chts（.chts 应与标准 TS 扩展名同组）：%v", name, i, group)
			}
		}
	}
	check("SupportedTSExtensions", SupportedTSExtensions)
	check("AllSupportedExtensions", AllSupportedExtensions)

	// 自有扩展名只应出现在标准组，不得混进 CJS(.cts) / ESM(.mts) 组 ——
	// 那两组带模块语义，混进去会把汉语源当成 CommonJS/ESM 专用扩展名。
	for name, groups := range map[string][][]string{
		"SupportedTSExtensions":  SupportedTSExtensions,
		"AllSupportedExtensions": AllSupportedExtensions,
	} {
		for i, group := range groups {
			if i > 0 && (slices.Contains(group, ExtensionChts) || slices.Contains(group, ExtensionDchts)) {
				t.Errorf("%s 第 %d 组（非标准组）里不该有 .chts/.d.chts：%v", name, i, group)
			}
		}
	}
}

func TestChtsRecognizedAsTs(t *testing.T) {
	if !ExtensionIsTs(ExtensionChts) {
		t.Error("ExtensionIsTs 应认得 .chts")
	}
	if !HasTSFileExtension("示例.chts") {
		t.Error("HasTSFileExtension 应认得 .chts")
	}
	if !HasImplementationTSFileExtension("示例.chts") {
		t.Error("HasImplementationTSFileExtension 应认得 .chts")
	}
	if IsDeclarationFileName("示例.chts") {
		t.Error("示例.chts 不是声明文件")
	}
}

func TestChtsOutputNameStripsWholeExtension(t *testing.T) {
	// 这条决定产物叫 示例.js 而不是 示例.chts.js
	if got := ChangeExtension("/a/b/示例.chts", ExtensionJs); got != "/a/b/示例.js" {
		t.Errorf("ChangeExtension 得到 %q，期望 /a/b/示例.js", got)
	}
	if got := RemoveFileExtension("/a/b/示例.chts"); got != "/a/b/示例" {
		t.Errorf("RemoveFileExtension 得到 %q，期望 /a/b/示例", got)
	}
	if got := TryGetExtensionFromPath("示例.chts"); got != ExtensionChts {
		t.Errorf("TryGetExtensionFromPath 得到 %q，期望 .chts", got)
	}
	if got := GetDeclarationEmitExtensionForPath("示例.chts"); got != ExtensionDts {
		t.Errorf("GetDeclarationEmitExtensionForPath 得到 %q，期望 .d.ts", got)
	}
}

func TestCtsKeepsItsUpstreamCommonJsMeaning(t *testing.T) {
	// .cts 是上游的「CommonJS 版 TypeScript」，语义不可挪用：
	// 它必须仍在「不支持无扩展名解析」那一类里，且 .chts/.d.chts 不该混进去。
	if !slices.Contains(ExtensionsNotSupportingExtensionlessResolution, ExtensionCts) {
		t.Error(".cts 必须留在 ExtensionsNotSupportingExtensionlessResolution 里（上游 CJS 语义）")
	}
	for _, ext := range []string{ExtensionChts, ExtensionDchts} {
		if slices.Contains(ExtensionsNotSupportingExtensionlessResolution, ext) {
			t.Errorf("%s 不该被当成 .cts 那一类（它不是 CommonJS 专用扩展名）", ext)
		}
	}
}
