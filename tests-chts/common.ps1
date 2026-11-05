# ============================================================================
#  common.ps1 -- 判据共享的工具解析（让判据既能在本机跑，也能在 CI 跑）。
#
#  为什么要它：判据原本把 E:\cts-build\chtsc.exe、E:\Go\bin\go.exe 这类**绝对路径**
#  写死在默认值里，于是只能在开发机上跑；而 CI（ubuntu/macos/windows）路径完全不同。
#  这里统一成「环境变量优先 → 按仓库位置推断 → 最后才退回旧默认值」。
#
#  环境变量：CHTSC / GO_EXE / CHTS_WORK；GOPATH、GOMODCACHE、GOCACHE 只在未设置时才填。
# ============================================================================

$script:RepoRoot = Split-Path -Parent $PSScriptRoot

function Resolve-ChtscPath([string]$explicit) {
    if ($explicit) { return $explicit }
    if ($env:CHTSC -and (Test-Path $env:CHTSC)) { return $env:CHTSC }
    $cands = @(
        (Join-Path $script:RepoRoot "..\cts-build\chtsc.exe"),
        (Join-Path $script:RepoRoot "..\chts-build\chtsc.exe"),
        (Join-Path $script:RepoRoot "tsc\built\chtsc.exe"),
        (Join-Path $script:RepoRoot "..\cts-base\built\local\tsc.exe")
    )
    foreach ($c in $cands) { if (Test-Path $c) { return (Resolve-Path $c).Path } }
    throw "找不到 chtsc：请设置 CHTSC 环境变量，或先运行 tools/build_chtsc.ps1"
}

function Resolve-GoPath([string]$explicit) {
    if ($explicit) { return $explicit }
    if ($env:GO_EXE -and (Test-Path $env:GO_EXE)) { return $env:GO_EXE }
    $cmd = Get-Command go -ErrorAction SilentlyContinue
    if ($cmd) { return $cmd.Source }
    foreach ($c in @("E:\Go\bin\go.exe", "/usr/local/go/bin/go", "/usr/bin/go")) { if (Test-Path $c) { return $c } }
    throw "找不到 go：请把 go 放进 PATH 或设置 GO_EXE"
}

function Set-GoEnvironment() {
    if (-not $env:GOPATH) {
        # 开发机用 E:\gopath；其它机器（CI）用 $HOME/go，否则 Go 会去建 E:\gopath 这样的怪目录。
        $env:GOPATH = if (Test-Path "E:\gopath") { "E:\gopath" } else { Join-Path $HOME 'go' }
    }
    if (-not $env:GOMODCACHE) { $env:GOMODCACHE = Join-Path $env:GOPATH "pkg/mod" }
    if (-not $env:GOCACHE) { $env:GOCACHE = Join-Path $env:GOPATH "build-cache" }
}

function Resolve-JudgeWork([string]$explicit, [string]$name) {
    if ($explicit) { return $explicit }
    if ($env:CHTS_WORK) { return (Join-Path $env:CHTS_WORK $name) }
    # 【不要用 $env:TEMP】：Linux/macOS 上没有 TEMP（只有 TMPDIR），
    # Join-Path $null 会抛 "Cannot bind argument to parameter 'Path' because it is null"。
    # GetTempPath() 在两个平台都对。
    return (Join-Path ([System.IO.Path]::GetTempPath()) $name)
}

# 可执行文件名带平台后缀（Linux/macOS 上没有 .exe，写死 .exe 会找不到文件）。
function Get-ExeName([string]$name) {
    if ([System.Runtime.InteropServices.RuntimeInformation]::IsOSPlatform([System.Runtime.InteropServices.OSPlatform]::Windows)) { return $name + '.exe' }
    return $name
}
