# ChineseTypeScript 判定脚本（真编译 · 真运行 · 逐字节比对）
#
# 判定项：
#   ① 生成器幂等：go run ./cmd/genzhkeywords -check 通过
#   ② 汉语关键字机器守卫：go test ./internal/scanner/... 全绿
#   ③ 英文路径【逐字节不变】：同一个 demo_en.ts 用上游基线 tsc 与本编译器编译，
#      生成的 js 必须逐字节相同（这是「随便拿一个开源 TypeScript 项目照样编得过」的机器代理）
#   ④ 汉语源可编译：demo.chts 编译通过，且输出文件名是 demo.js（不是 demo.chts.js）
#   ⑤ 生成的 js 是【标准英文关键字】：85 个汉语译名一个都不许出现在产物里
#   ⑥ 真运行：node 跑产物，stdout 与英文对照的 stdout 完全一致
#   ⑦ 非关键字汉语标识符仍然合法：demo_ident.chts 编译并运行通过
#
# 用法：pwsh -File tests-chts\judge_chts.ps1

param(
    [string]$GoExe = 'E:\Go\bin\go.exe',
    [string]$Work = 'E:\cts-build',
    [string]$Base = 'E:\cts-base'
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$tscDir = Join-Path $repo 'tsc'
$outChts = Join-Path $Work 'out-chts'
$outBase = Join-Path $Work 'out-base'
$outIdent = Join-Path $Work 'out-ident'

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    $mark = if ($ok) { '  [通过]' } else { '  [失败]' }
    Write-Host "$mark $name —— $detail"
}

Write-Host '=== 0) 前置条件 ==='
if (-not (Test-Path $GoExe)) { throw "找不到 Go：$GoExe" }
$nodeExe = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $nodeExe) { throw '找不到 node' }
Write-Host "  go   = $(& $GoExe version)"
Write-Host "  node = $(& $nodeExe --version)"
New-Item -ItemType Directory -Force -Path $Work | Out-Null

Write-Host ''
Write-Host '=== 1) 生成器幂等（词表 -> 生成物 一致）==='
Push-Location $tscDir
try {
    $genOut = & $GoExe run ./cmd/genzhkeywords -check 2>&1 | Out-String
    $genOk = $LASTEXITCODE -eq 0
    Check '① 生成器幂等' $genOk $genOut.Trim()
} finally { Pop-Location }

Write-Host ''
Write-Host '=== 2) 汉语关键字机器守卫 ==='
Push-Location $tscDir
try {
    $testOut = & $GoExe test ./internal/scanner/... 2>&1 | Out-String
    $testOk = $LASTEXITCODE -eq 0
    Check '② 扫描器守卫测试' $testOk ($testOut.Trim() -split "`n" | Select-Object -Last 3 | Out-String).Trim()
} finally { Pop-Location }

Write-Host ''
Write-Host '=== 3) 基线与本编译器都编译 demo_en.ts，产物逐字节比对 ==='
if (-not (Test-Path $Base)) {
    Write-Host "  建立上游基线工作树：$Base"
    & git -C $repo worktree add --detach $Base HEAD 2>&1 | ForEach-Object { "    $_" }
}
if (-not (Test-Path $Base)) { throw "基线工作树建立失败：$Base" }

$baseTsc = Join-Path $Work 'tsc-base.exe'
$chtsTsc = Join-Path $Work 'tsc-chts.exe'

Push-Location (Join-Path $Base 'tsc')
try {
    Write-Host '  编译基线上游 tsc …'
    & $GoExe build -o $baseTsc ./cmd/tsc 2>&1 | ForEach-Object { "    $_" }
    if ($LASTEXITCODE -ne 0) { throw '基线 tsc 编译失败' }
} finally { Pop-Location }

Push-Location $tscDir
try {
    Write-Host '  编译本编译器（含汉语关键字）…'
    & $GoExe build -o $chtsTsc ./cmd/tsc 2>&1 | ForEach-Object { "    $_" }
    if ($LASTEXITCODE -ne 0) { throw '本编译器编译失败' }
} finally { Pop-Location }

foreach ($d in @($outChts, $outBase, $outIdent)) {
    if (Test-Path $d) { Remove-Item $d -Recurse -Force }
    New-Item -ItemType Directory -Force -Path $d | Out-Null
}

$enSrc = Join-Path $repo 'tests-chts\demo_en.ts'
& $baseTsc $enSrc --outDir $outBase --target es2020 --module commonjs | Out-Null
$baseEnJs = Join-Path $outBase 'demo_en.js'
& $chtsTsc $enSrc --outDir $outChts --target es2020 --module commonjs | Out-Null
$chtsEnJs = Join-Path $outChts 'demo_en.js'

$enBothExist = (Test-Path $baseEnJs) -and (Test-Path $chtsEnJs)
if ($enBothExist) {
    $h1 = (Get-FileHash $baseEnJs -Algorithm SHA256).Hash
    $h2 = (Get-FileHash $chtsEnJs -Algorithm SHA256).Hash
    Check '③ 英文路径逐字节不变' ($h1 -eq $h2) "基线 $($h1.Substring(0,16))… 本编译器 $($h2.Substring(0,16))…"
} else {
    Check '③ 英文路径逐字节不变' $false "产物缺失: base=$enBothExist"
}

Write-Host ''
Write-Host '=== 4) 汉语源 demo.chts 编译 ==='
$chtsSrc = Join-Path $repo 'tests-chts\demo.chts'
$chtsLog = & $chtsTsc $chtsSrc --outDir $outChts --target es2020 --module commonjs 2>&1 | Out-String
$chtsJs = Join-Path $outChts 'demo.js'
$wrongJs = Join-Path $outChts 'demo.chts.js'
$compiled = Test-Path $chtsJs
Check '④ 汉语源编译并输出 demo.js' ($compiled -and -not (Test-Path $wrongJs)) `
    "demo.js=$(Test-Path $chtsJs) 误产物 demo.chts.js=$(Test-Path $wrongJs)"
if (-not $compiled) { Write-Host $chtsLog }

Write-Host ''
Write-Host '=== 5) 产物必须是标准英文关键字（汉语译名一个都不许作为关键字出现）==='
if ($compiled) {
    $js = Get-Content $chtsJs -Raw -Encoding UTF8
    $zhList = @()
    Get-Content (Join-Path $tscDir 'internal\scanner\zh_keywords.txt') -Encoding UTF8 | ForEach-Object {
        $l = $_.Trim()
        if ($l -ne '' -and -not $l.StartsWith('#')) {
            $p = $l -split '\s+'
            if ($p.Count -eq 2) { $zhList += $p[1] }
        }
    }
    $zhSet = [System.Collections.Generic.HashSet[string]]::new()
    foreach ($z in $zhList) { [void]$zhSet.Add($z) }

    # 判据必须按【汉字连续段整段比对】，不能做子串匹配 —— 否则会误报：
    #   * 字符串字面量 "异常已捕获" 含子串「捕获」
    #   * 合法汉语标识符 变量名 含子串「变量」（而 变量 是 var 的译名）
    # 汉字连续段正好等于一个译名，才说明关键字泄漏进了产物。
    $runs = [regex]::Matches($js, '\p{IsCJKUnifiedIdeographs}+') | ForEach-Object { $_.Value }
    $leaked = @($runs | Where-Object { $zhSet.Contains($_) } | Sort-Object -Unique)
    Check '⑤ 产物无汉语关键字' ($leaked.Count -eq 0) `
        "扫描 $($runs.Count) 个汉字段，逐个比对 $($zhList.Count) 个译名，泄漏: $(if ($leaked) { $leaked -join ' ' } else { '无' })"

    $hasEnKinds = $js.Contains('if (') -and $js.Contains('class ') -and $js.Contains('const ') -and $js.Contains('return ')
    Check '⑤b 产物含标准英文关键字' $hasEnKinds 'if/class/const/return 均在'
}

Write-Host ''
Write-Host '=== 6) 真运行：node 跑两个产物，stdout 必须一致 ==='
if ($compiled) {
    $runZh = & $nodeExe $chtsJs 2>&1 | Out-String
    $runEn = & $nodeExe $chtsEnJs 2>&1 | Out-String
    Check '⑥ 汉语源与英文源运行结果一致' ($runZh.Trim() -eq $runEn.Trim()) `
        "汉语源 $($runZh.Trim().Split("`n").Count) 行 / 英文源 $($runEn.Trim().Split("`n").Count) 行"
    Write-Host '  --- 运行输出 ---'
    $runZh.Trim() -split "`n" | ForEach-Object { "    $_" }
}

Write-Host ''
Write-Host '=== 7) 非关键字汉语标识符仍然合法 ==='
$identSrc = Join-Path $repo 'tests-chts\demo_ident.chts'
$identLog = & $chtsTsc $identSrc --outDir $outIdent --target es2020 --module commonjs 2>&1 | Out-String
$identJs = Join-Path $outIdent 'demo_ident.js'
$identOk = Test-Path $identJs
Check '⑦ 汉语标识符编译通过' $identOk "demo_ident.js=$(Test-Path $identJs)"
if ($identOk) {
    $identRun = & $nodeExe $identJs 2>&1 | Out-String
    Check '⑦b 汉语标识符运行通过' ($LASTEXITCODE -eq 0) $identRun.Trim()
} else {
    Write-Host $identLog
}

Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { "  [$($_.结果)] $($_.判定) —— $($_.说明)" }
$fail = ($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host "  合计 $($results.Count) 项，失败 $fail 项"
if ($fail -eq 0) { Write-Host '  结论：全部通过'; exit 0 } else { Write-Host '  结论：有失败项'; exit 1 }
