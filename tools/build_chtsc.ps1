# 构建 ChineseTypeScript 的命令行编译器：chtsc.exe
#
# 【命令名为什么是 chtsc，以及为什么这是零成本的】（已核查，不是假设）
#   * 全仓【没有一处】按 os.Args[0]（"我叫什么名字"）分支的代码 ——
#     改二进制名字完全不改变行为。这与 clang 那边根本不同：clang 的 argv[0]
#     决定驱动模式、还要读同名 .cfg，所以那里的名字是功能（我们的中文驱动名
#     `x86_64-unknown-linux-gnu-chinese++` 就是这么来的）。
#   * 因此命令名在本项目是【纯产品决定】：取 chtsc（ChineseTypeScript compiler），
#     与上游经典 JS 版 `tsc` 并存、不打架。
#   * 同类先例：上游自己把 Go 版叫 `tsgo`（Herebyfile.mjs 的 tsgo 任务），
#     与经典 `tsc` 两名并存。
#   * 用户裁定（2026-10-07）：只叫 chtsc，不做 tsc 别名。
#
# 用法：
#   pwsh -File tools\build_chtsc.ps1                  # 产出到 E:\cts-build\chtsc.exe
#   pwsh -File tools\build_chtsc.ps1 -OutDir D:\bin   # 自定输出目录
#   pwsh -File tools\build_chtsc.ps1 -Baseline        # 另出上游基线 tsc-base.exe 供对照

param(
    [string]$GoExe = 'E:\Go\bin\go.exe',
    [string]$OutDir = 'E:\cts-build',
    [switch]$Baseline
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$tscDir = Join-Path $repo 'tsc'

$env:GOPATH = 'E:\gopath'
$env:GOMODCACHE = 'E:\gopath\pkg\mod'
$env:GOCACHE = 'E:\gopath\build-cache'
$env:GOPROXY = 'https://goproxy.cn,direct'

if (-not (Test-Path $GoExe)) { throw "找不到 Go：$GoExe" }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$chtsc = Join-Path $OutDir 'chtsc.exe'

Write-Host '=== 1) 构建 chtsc.exe ==='
Push-Location $tscDir
try {
    & $GoExe build -o $chtsc ./cmd/tsc
    if ($LASTEXITCODE -ne 0) { throw 'go build 失败' }
} finally { Pop-Location }

$fi = Get-Item $chtsc
$sha = (Get-FileHash $chtsc -Algorithm SHA256).Hash
Write-Host "  产物：$chtsc"
Write-Host "  体积：$([math]::Round($fi.Length/1MB,1)) MB"
Write-Host "  SHA256：$sha"

Write-Host ''
Write-Host '=== 2) 产物自证：版本号 ==='
& $chtsc --version 2>&1 | ForEach-Object { "  $_" }

Write-Host ''
Write-Host '=== 3) 产物自证：真编译一个 .ts 并真跑 ==='
$smoke = Join-Path $OutDir 'chtsc-smoke'
if (Test-Path $smoke) { Remove-Item $smoke -Recurse -Force }
New-Item -ItemType Directory -Force -Path $smoke | Out-Null
$demo = Join-Path $repo 'tests-chts\demo.ts'
& $chtsc $demo --outDir $smoke --target es2020 --module commonjs --pretty false 2>&1 | ForEach-Object { "  $_" }
$js = Join-Path $smoke 'demo.js'
if (-not (Test-Path $js)) { throw "自证失败：没有产出 demo.js" }
$node = (Get-Command node -ErrorAction SilentlyContinue).Source
if ($node) {
    $out = & $node $js 2>&1 | Out-String
    Write-Host "  node 真跑 $((@($out.Trim() -split "`r?`n")).Count) 行："
    $out.Trim() -split "`r?`n" | ForEach-Object { "    $_" }
} else {
    Write-Host '  （没找到 node，跳过真跑）'
}

if ($Baseline) {
    Write-Host ''
    Write-Host '=== 4) 另出上游基线 tsc-base.exe（供逐字节对照）==='
    $base = 'E:\cts-base\tsc'
    if (-not (Test-Path $base)) {
        Write-Host "  建立基线工作树 E:\cts-base"
        & git -C $repo worktree add --detach 'E:\cts-base' HEAD 2>&1 | ForEach-Object { "    $_" }
    }
    $baseExe = Join-Path $OutDir 'tsc-base.exe'
    Push-Location $base
    try {
        & $GoExe build -o $baseExe ./cmd/tsc
        if ($LASTEXITCODE -ne 0) { throw '基线构建失败' }
    } finally { Pop-Location }
    Write-Host "  基线产物：$baseExe（$([math]::Round((Get-Item $baseExe).Length/1MB,1)) MB）"
}

Write-Host ''
Write-Host '=== 完成 ==='
Write-Host "  命令名：chtsc（用户 2026-10-07 裁定：只叫 chtsc，不做 tsc 别名）"
Write-Host "  下一步：pwsh -File tests-chts\run_all.ps1   # 四套判定全绿才算数"
