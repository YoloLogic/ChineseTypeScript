// Package diagnostics contains generated localizable diagnostic messages.
package diagnostics

import (
	"fmt"
	"maps"
	"regexp"
	"strconv"
	"strings"
	"sync"

	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/locale"
	"golang.org/x/text/language"
)

//go:generate go run generate.go -diagnostics ./diagnostics_generated.go -loc ./loc_generated.go -locdir ./loc
//go:generate go tool golang.org/x/tools/cmd/stringer -type=Category -output=stringer_generated.go
//go:generate npx dprint fmt diagnostics_generated.go loc_generated.go stringer_generated.go

type Category int32

const (
	CategoryWarning Category = iota
	CategoryError
	CategorySuggestion
	CategoryMessage
)

func (category Category) Name() string {
	switch category {
	case CategoryWarning:
		return "warning"
	case CategoryError:
		return "error"
	case CategorySuggestion:
		return "suggestion"
	case CategoryMessage:
		return "message"
	}
	panic("Unhandled diagnostic category")
}

type Key string

type Message struct {
	code                         int32
	category                     Category
	key                          Key
	text                         string
	reportsUnnecessary           bool
	elidedInCompatibilityPyramid bool
	reportsDeprecated            bool
}

func (m *Message) Code() int32                        { return m.code }
func (m *Message) Category() Category                 { return m.category }
func (m *Message) Key() Key                           { return m.key }
func (m *Message) ReportsUnnecessary() bool           { return m.reportsUnnecessary }
func (m *Message) ElidedInCompatibilityPyramid() bool { return m.elidedInCompatibilityPyramid }
func (m *Message) ReportsDeprecated() bool            { return m.reportsDeprecated }

// For debugging only.
func (m *Message) String() string {
	return m.text
}

func (m *Message) Localize(locale locale.Locale, args ...any) string {
	return Localize(locale, m, "", StringifyArgs(args)...)
}

func Localize(locale locale.Locale, message *Message, key Key, args ...string) string {
	if message == nil {
		message = keyToMessage(key)
	}
	if message == nil {
		panic("Unknown diagnostic message: " + string(key))
	}

	text := message.text
	if localized, ok := getLocalizedMessages(language.Tag(locale))[message.key]; ok {
		text = localized
	}

	return Format(text, args)
}

var localizedMessagesCache sync.Map // map[language.Tag]map[Key]string

func getLocalizedMessages(loc language.Tag) map[Key]string {
	if loc == language.Und {
		return nil
	}

	// Check cache first
	if cached, ok := localizedMessagesCache.Load(loc); ok {
		if cached == nil {
			return nil
		}
		return cached.(map[Key]string)
	}

	var messages map[Key]string

	_, index, confidence := matcher.Match(loc)
	if confidence >= language.Low && index >= 0 && index < len(localeFuncs) {
		if fn := localeFuncs[index]; fn != nil {
			messages = fn()
			if index == zhCNMatchedIndex {
				// ChineseTypeScript：上游 zh-CN 还缺一些条目（多为 content mapper 新诊断
				// 与若干命令行选项说明），这里补上我们自己的译文。
				// 只影响简体中文；English 与其它语言一个字节不变。
				messages = mergeZhExtra(messages)
			}
		}
	}

	localizedMessagesCache.Store(loc, messages)
	return messages
}

// zhCNMatchedIndex 是 matcher 把「简体中文」解析到的 localeFuncs 下标。
// 由 matcher 自己算出来（而不是写死 1），这样将来换顺序也不会悄悄失效。
var zhCNMatchedIndex int

func init() {
	_, zhCNMatchedIndex, _ = matcher.Match(language.MustParse("zh-CN"))
}

// mergeZhExtra 在 zh-CN 词条之外补上 zhExtraMessages（不改动上游那份 map）。
// 只「补缺」：上游若已有同键译文，以它为准（zh_extra_test.go 会要求删掉冗余条目）。
func mergeZhExtra(base map[Key]string) map[Key]string {
	result := make(map[Key]string, len(base)+len(zhExtraMessages))
	maps.Copy(result, base)
	for key, text := range zhExtraMessages {
		if _, exists := result[key]; !exists {
			result[key] = text
		}
	}
	// 覆盖（少数条目上游已有译文，但我们要换说法，例如 --help 首行 tsc → chtsc）。
	for key, text := range zhOverrides {
		result[key] = text
	}
	return result
}

var placeholderRegexp = regexp.MustCompile(`{(\d+)}`)

func Format(text string, args []string) string {
	if len(args) == 0 {
		return text
	}

	// Replace invalid UTF-8 with Unicode replacement character
	args = core.SameMap(args, func(arg string) string {
		return strings.ToValidUTF8(arg, "\uFFFD")
	})

	return placeholderRegexp.ReplaceAllStringFunc(text, func(match string) string {
		index, err := strconv.ParseInt(match[1:len(match)-1], 10, 0)
		if err != nil || int(index) >= len(args) {
			panic("Invalid formatting placeholder")
		}
		return args[int(index)]
	})
}

func StringifyArgs(args []any) []string {
	if len(args) == 0 {
		return nil
	}

	result := make([]string, len(args))
	for i, arg := range args {
		if s, ok := arg.(string); ok {
			result[i] = s
		} else {
			result[i] = fmt.Sprintf("%v", arg)
		}
	}
	return result
}

func NewAdHocMessage(message string) *Message {
	return &Message{
		code:     -1,
		category: CategoryError,
		key:      "-1",
		text:     message,
	}
}
