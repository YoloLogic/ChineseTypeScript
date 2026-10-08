package main

import (
	"context"
	"os"
	"os/signal"
	"strings"
	"syscall"

	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/execute"
	"github.com/microsoft/TypeScript/tsc/internal/osutil"
)

func main() {
	os.Exit(runMain())
}

func runMain() int {
	core.ApplyDebugStackLimit()
	args := osutil.Args()[1:]
	if len(args) > 0 {
		switch args[0] {
		case "--lsp":
			return runLSP(args[1:])
		case "--api":
			return runAPI(args[1:])
		}
	}
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()
	result := execute.CommandLine(ctx, newSystem(), argsWithDefaultLocale(args), nil)
	return int(result.Status)
}

// argsWithDefaultLocale 给命令行补上默认的 --locale zh-CN（ChineseTypeScript 的汉化）。
//
// 为什么放在 CLI 层而不是编译器/execute 层：
//  1. locale 是【命令行专用】选项（IsCommandLineOnly），所以注入默认值不会覆盖
//     任何 tsconfig 设置；
//  2. 库与上游 Go 测试不走 cmd/tsc，因此它们的默认行为一个字节都不变。
//
// 显式给了 --locale（任何语言）时一律尊重用户，例如 --locale en 回到英文。
func argsWithDefaultLocale(args []string) []string {
	for _, a := range args {
		if a == "--locale" || a == "-locale" || strings.HasPrefix(a, "--locale=") || strings.HasPrefix(a, "-locale=") {
			return args
		}
	}
	return append(args, "--locale", "zh-CN")
}
