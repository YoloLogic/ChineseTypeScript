package tspath

import (
	"slices"
	"strings"
)

const (
	ExtensionTs          = ".ts"
	ExtensionTsx         = ".tsx"
	ExtensionDts         = ".d.ts"
	ExtensionJs          = ".js"
	ExtensionJsx         = ".jsx"
	ExtensionJson        = ".json"
	ExtensionTsBuildInfo = ".tsbuildinfo"
	ExtensionMjs         = ".mjs"
	ExtensionMts         = ".mts"
	ExtensionDmts        = ".d.mts"
	ExtensionCjs         = ".cjs"
	ExtensionCts         = ".cts"
	ExtensionDcts        = ".d.cts"

	// ChineseTypeScript 自有扩展名。
	//
	// 取名 .chts 而非 .cts：.cts 已被上游占为「CommonJS 版 TypeScript」——
	// 证据是 checker.go 的注释「Check if the file is .cts or .cjs
	// (CommonJS-specific extensions)」，且 ExtensionCts 出现在
	// SupportedTSImplementationExtensions / AllSupportedExtensions /
	// ExtensionsNotSupportingExtensionlessResolution 等处，语义上不可挪用。
	ExtensionChts = ".chts"

	// ExtensionDchts = ChineseTypeScript 的声明文件扩展名（对应上游的 .d.ts）。
	// ⚠ 它【不是】CJS 语义（.d.cts 才是），所以绝不可并入 .cts/.cjs 那一类分支。
	ExtensionDchts = ".d.chts"
)

var (
	SupportedDeclarationExtensions = []string{ExtensionDts, ExtensionDcts, ExtensionDmts, ExtensionDchts}
	// 注：.chts（ChineseTypeScript）一律【追加在末尾】—— 保持 .ts 等既有的
	// 优先级与解析顺序完全不变，从而「随便拿一个开源 TypeScript 项目必须照样编得过」。
	SupportedTSImplementationExtensions            = []string{ExtensionTs, ExtensionTsx, ExtensionMts, ExtensionCts, ExtensionChts}
	supportedTSExtensionsForExtractExtension       = []string{ExtensionDts, ExtensionDcts, ExtensionDmts, ExtensionTs, ExtensionTsx, ExtensionMts, ExtensionCts, ExtensionChts, ExtensionDchts}
	AllSupportedExtensions                         = [][]string{{ExtensionTs, ExtensionTsx, ExtensionDts, ExtensionJs, ExtensionJsx, ExtensionChts, ExtensionDchts}, {ExtensionCts, ExtensionDcts, ExtensionCjs}, {ExtensionMts, ExtensionDmts, ExtensionMjs}}
	SupportedTSExtensions                          = [][]string{{ExtensionTs, ExtensionTsx, ExtensionDts, ExtensionChts, ExtensionDchts}, {ExtensionCts, ExtensionDcts}, {ExtensionMts, ExtensionDmts}}
	SupportedTSExtensionsFlat                      = []string{ExtensionTs, ExtensionTsx, ExtensionDts, ExtensionCts, ExtensionDcts, ExtensionMts, ExtensionDmts, ExtensionChts, ExtensionDchts}
	SupportedJSExtensions                          = [][]string{{ExtensionJs, ExtensionJsx}, {ExtensionMjs}, {ExtensionCjs}}
	SupportedJSExtensionsFlat                      = []string{ExtensionJs, ExtensionJsx, ExtensionMjs, ExtensionCjs}
	AllSupportedExtensionsWithJson                 = slices.Concat(AllSupportedExtensions, [][]string{{ExtensionJson}})
	SupportedTSExtensionsWithJson                  = slices.Concat(SupportedTSExtensions, [][]string{{ExtensionJson}})
	SupportedTSExtensionsWithJsonFlat              = slices.Concat(SupportedTSExtensionsFlat, []string{ExtensionJson})
	ExtensionsNotSupportingExtensionlessResolution = []string{ExtensionMts, ExtensionDmts, ExtensionMjs, ExtensionCts, ExtensionDcts, ExtensionCjs}
)

func ExtensionIsTs(ext string) bool {
	return ext == ExtensionTs || ext == ExtensionTsx || ext == ExtensionDts || ext == ExtensionMts || ext == ExtensionDmts || ext == ExtensionCts || ext == ExtensionDcts || ext == ExtensionChts || ext == ExtensionDchts || len(ext) >= 7 && ext[:3] == ".d." && ext[len(ext)-3:] == ".ts"
}

// extensionsToRemove 决定输出文件名，因此 .chts 必须在这里：
// 否则 foo.chts 会生成 foo.chts.js，而不是 foo.js。
// ⚠ .d.chts 必须排在 .chts 之前：字符串 ".d.chts" 本身就以 ".chts" 结尾，
// 顺序反了会把 示例.d.chts 剥成 示例.d，而不是 示例。
var extensionsToRemove = []string{ExtensionDts, ExtensionDmts, ExtensionDcts, ExtensionDchts, ExtensionMjs, ExtensionMts, ExtensionCjs, ExtensionCts, ExtensionChts, ExtensionTs, ExtensionJs, ExtensionTsx, ExtensionJsx, ExtensionJson}

func RemoveFileExtension(path string) string {
	// Remove any known extension even if it has more than one dot
	for _, ext := range extensionsToRemove {
		if strings.HasSuffix(path, ext) {
			return path[:len(path)-len(ext)]
		}
	}

	return path
}

func RemoveAnyFileExtension(path string) string {
	if withoutExtension := RemoveFileExtension(path); withoutExtension != path {
		return withoutExtension
	}
	if extension := GetAnyExtensionFromPath(path, nil, false); extension != "" {
		return RemoveExtension(path, extension)
	}
	return path
}

func TryGetExtensionFromPath(p string) string {
	for _, ext := range extensionsToRemove {
		if FileExtensionIs(p, ext) {
			return ext
		}
	}
	return ""
}

func RemoveExtension(path string, extension string) string {
	return path[:len(path)-len(extension)]
}

func FileExtensionIsOneOf(path string, extensions []string) bool {
	for _, ext := range extensions {
		if FileExtensionIs(path, ext) {
			return true
		}
	}
	return false
}

func TryExtractTSExtension(fileName string) string {
	for _, ext := range supportedTSExtensionsForExtractExtension {
		if FileExtensionIs(fileName, ext) {
			return ext
		}
	}
	return ""
}

func HasTSFileExtension(path string) bool {
	return FileExtensionIsOneOf(path, SupportedTSExtensionsFlat)
}

func HasImplementationTSFileExtension(path string) bool {
	return FileExtensionIsOneOf(path, SupportedTSImplementationExtensions) && !IsDeclarationFileName(path)
}

func HasJSFileExtension(path string) bool {
	return FileExtensionIsOneOf(path, SupportedJSExtensionsFlat)
}

func HasJSONFileExtension(path string) bool {
	return FileExtensionIs(path, ExtensionJson)
}

func IsDeclarationFileName(fileName string) bool {
	return GetDeclarationFileExtension(fileName) != ""
}

func ExtensionIsOneOf(ext string, extensions []string) bool {
	return slices.Contains(extensions, ext)
}

func GetDeclarationFileExtension(fileName string) string {
	base := GetBaseFileName(fileName)
	for _, ext := range SupportedDeclarationExtensions {
		if strings.HasSuffix(base, ext) {
			return ext
		}
	}
	if strings.HasSuffix(base, ExtensionTs) {
		index := strings.Index(base, ".d.")
		if index >= 0 {
			return base[index:]
		}
	}
	return ""
}

func GetDeclarationEmitExtensionForPath(path string) string {
	switch {
	case FileExtensionIsOneOf(path, []string{ExtensionMjs, ExtensionMts}):
		return ExtensionDmts
	case FileExtensionIsOneOf(path, []string{ExtensionCjs, ExtensionCts}):
		return ExtensionDcts
	case FileExtensionIsOneOf(path, []string{ExtensionTs, ExtensionTsx, ExtensionJs, ExtensionJsx, ExtensionChts}):
		return ExtensionDts
	default:
		ext := GetAnyExtensionFromPath(path, nil, false)
		if ext != "" {
			return ".d" + ext + ".ts"
		}
		return ExtensionDts
	}
}

// ChangeAnyExtension changes the extension of a path to the provided extension if it has one of the provided extensions.
//
// ChangeAnyExtension("/path/to/file.ext", ".js", ".ext") === "/path/to/file.js"
// ChangeAnyExtension("/path/to/file.ext", ".js", ".ts") === "/path/to/file.ext"
// ChangeAnyExtension("/path/to/file.ext", ".js", [".ext", ".ts"]) === "/path/to/file.js"
func ChangeAnyExtension(path string, ext string, extensions []string, ignoreCase bool) string {
	pathext := GetAnyExtensionFromPath(path, extensions, ignoreCase)
	if pathext != "" {
		result := path[:len(path)-len(pathext)]
		if ext == "" {
			return result
		}
		if strings.HasPrefix(ext, ".") {
			return result + ext
		}
		return result + "." + ext
	}
	return path
}

func ChangeExtension(path string, newExtension string) string {
	return ChangeAnyExtension(path, newExtension, extensionsToRemove, false /*ignoreCase*/)
}

// Like `changeAnyExtension`, but declaration file extensions are recognized
// and replaced starting from the `.d`.
//
//	changeAnyExtension("file.d.ts", ".js") === "file.d.js"
//	changeFullExtension("file.d.ts", ".js") === "file.js"
func ChangeFullExtension(path string, newExtension string) string {
	declarationExtension := GetDeclarationFileExtension(path)
	if declarationExtension != "" {
		ext := newExtension
		if !strings.HasPrefix(ext, ".") {
			ext = "." + ext
		}
		return path[:len(path)-len(declarationExtension)] + ext
	}
	return ChangeExtension(path, newExtension)
}

func GetPossibleOriginalInputExtensionForExtension(path string) []string {
	if FileExtensionIsOneOf(path, []string{ExtensionDmts, ExtensionMjs, ExtensionMts}) {
		return []string{ExtensionMts, ExtensionMjs}
	}
	if FileExtensionIsOneOf(path, []string{ExtensionDcts, ExtensionCjs, ExtensionCts}) {
		return []string{ExtensionCts, ExtensionCjs}
	}
	// ChineseTypeScript：.d.chts 的原始输入是 .chts。
	// 必须【在上面的自定义 .d.x.ts 兜底之前】处理：那个兜底假设扩展名以 .ts 结尾，
	// 而 .d.chts 不是，交给它会把 "ch" 当内层扩展名。
	if FileExtensionIsOneOf(path, []string{ExtensionDchts}) {
		return []string{ExtensionChts}
	}
	// Handle any custom .d.x.ts extension (e.g., .d.json.ts -> .json, .d.css.ts -> .css)
	if ext := GetDeclarationFileExtension(path); ext != "" && ext != ExtensionDts {
		inner := ext[len(".d.") : len(ext)-len(".ts")]
		return []string{"." + inner}
	}
	return []string{ExtensionTsx, ExtensionTs, ExtensionJsx, ExtensionJs}
}
