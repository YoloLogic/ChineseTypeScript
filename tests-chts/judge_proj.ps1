# ChineseTypeScript 项目级 / 模块级判定
#
# 判定项：
#   ① 主靶子（无扩展名导入）编译通过，且同时产出 主.js 与 数学.js
#   ② 输出文件名正确：.ts -> .js，不得出现 *.ts.js
#   ③ 模块解析：产物里对 ./数学 的 require 用的是无扩展名形式
#   ④ 产物无汉语关键字泄漏、且是标准 CommonJS
#   ⑤ node 真跑 主.js：3 行输出逐字正确
#   ⑥ 显式 .ts 导入 + 两个选项 -> 编译通过、require 改写为 ./数学.js、node 跑通
#   ⑦ 显式 .ts 导入【只开】 --rewriteRelativeImportExtensions -> 一个选项就够，同样跑通
#   ⑧ 显式 .ts 导入两个选项都不开 -> 必须报 TS5097（机器校核文档里的说法）
#   ⑨ tsc -p（目录扫描）能认出 .ts 并产出可运行产物
#
# 用法：pwsh -File tests-chts\judge_proj.ps1

param(
    [string]$Work = 'E:\cts-build'
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
. (Join-Path $PSScriptRoot 'zhcheck.ps1')
$tscDir = Join-Path $repo 'tsc'
$chtsTsc = Join-Path $Work 'chtsc.exe'
if (-not (Test-Path $chtsTsc)) { throw "找不到本编译器 $chtsTsc，请先跑 judge_chts.ps1" }
$nodeExe = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $nodeExe) { throw '找不到 node' }

$projDir = Join-Path $repo 'tests-chts\proj'
$mainSrc = Join-Path $projDir '主.ts'
$explicitSrc = Join-Path $projDir '显式导入.ts'
$zh = Get-ZhKeywordSet $tscDir

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    $mark = if ($ok) { '  [通过]' } else { '  [失败]' }
    Write-Host "$mark $name —— $detail"
}

function New-OutDir([string]$name) {
    $d = Join-Path $Work $name
    if (Test-Path $d) { Remove-Item $d -Recurse -Force }
    New-Item -ItemType Directory -Force -Path $d | Out-Null
    return $d
}

# 产物里的非 ASCII 会被 tsc 转义成 \uXXXX，比较前先还原
function Unescape-Js([string]$s) {
    return [regex]::Replace($s, '\\u([0-9A-Fa-f]{4})', { param($m) [string][char][int]("0x" + $m.Groups[1].Value) })
}

Write-Host '=== 1) 主靶子：无扩展名导入，默认选项 ==='
$out = New-OutDir 'proj-main'
$log = & $chtsTsc $mainSrc --outDir $out --target es2020 --module commonjs --pretty false 2>&1 | Out-String
$code = $LASTEXITCODE
$mainJs = Join-Path $out '主.js'
$mathJs = Join-Path $out '数学.js'
Check '① 无扩展名导入的项目编译通过' ($code -eq 0 -and (Test-Path $mainJs) -and (Test-Path $mathJs)) `
    "退出码=$code 主.js=$(Test-Path $mainJs) 数学.js=$(Test-Path $mathJs)"
if ($code -ne 0) { Write-Host $log }

$wrong = @(Get-ChildItem $out -File -ErrorAction SilentlyContinue | Where-Object { $_.Name -like '*.ts.js' })
Check '② 输出名去掉 .ts' ($wrong.Count -eq 0) "误产物 $(if ($wrong) { $wrong.Name -join ' ' } else { '无' })"

if (Test-Path $mainJs) {
    $raw = Get-Content $mainJs -Raw -Encoding UTF8
    $js = Unescape-Js $raw

    Write-Host ''
    Write-Host '=== 3) 模块解析 ==='
    Check '③ require 指向无扩展名的 ./数学' ($js.Contains('require("./数学")')) '产物含 require("./数学")'

    Write-Host ''
    Write-Host '=== 4) 产物关键字检查 ==='
    $r = Get-LeakedZhKeywords $raw $zh
    Check '④ 产物无汉语关键字' ($r.泄漏.Count -eq 0) `
        "剥注释与字符串后扫描 $($r.汉字段数) 个汉字段，逐个比对 $($zh.List.Count) 个译名，泄漏: $(if ($r.泄漏) { $r.泄漏 -join ' ' } else { '无' })"
    # 注意：本文件只导入不导出，产物里只有 `exports, "__esModule"`，
    # 没有 `exports.` —— 判据写 `exports.` 会误报（这个坑踩过）。
    Check '④b 产物是标准 CommonJS' ($js.Contains('"use strict"') -and $js.Contains('require(') -and $js.Contains('exports')) `
        'use strict / require / exports 均在'

    Write-Host ''
    Write-Host '=== 5) node 真跑 ==='
    $run = & $nodeExe $mainJs 2>&1 | Out-String
    $lines = @($run.Trim() -split "`r?`n" | ForEach-Object { $_.Trim() })
    $expected = @('无扩展名导入通过', '重命名导入通过', '圆周率=3.14159')
    Check '⑤ node 真跑结果正确' (($lines -join '|') -ceq ($expected -join '|')) "实际: $($lines -join ' / ')"
}

Write-Host ''
Write-Host '=== 6) 显式 .ts 导入 + 两个选项 ==='
$out6 = New-OutDir 'proj-explicit-ok'
$log6 = & $chtsTsc $explicitSrc --outDir $out6 --target es2020 --module commonjs --pretty false `
    --allowImportingTsExtensions --rewriteRelativeImportExtensions 2>&1 | Out-String
$code6 = $LASTEXITCODE
$exJs = Join-Path $out6 '显式导入.js'
Check '⑥a 编译通过' ($code6 -eq 0 -and (Test-Path $exJs)) "退出码=$code6 显式导入.js=$(Test-Path $exJs)"
if ($code6 -ne 0) { Write-Host $log6 }
if (Test-Path $exJs) {
    $exUnescaped = Unescape-Js (Get-Content $exJs -Raw -Encoding UTF8)
    Check '⑥b require 被改写为 ./数学.js' ($exUnescaped.Contains('require("./数学.js")')) '产物含 require("./数学.js")'
    $run6 = & $nodeExe $exJs 2>&1 | Out-String
    Check '⑥c node 真跑通过' ($LASTEXITCODE -eq 0 -and $run6.Trim() -eq '显式扩展名导入通过') $run6.Trim()
}

Write-Host ''
Write-Host '=== 7) 显式 .ts 导入只开 rewrite（一个选项就够）==='
$out7 = New-OutDir 'proj-explicit-rewrite-only'
$log7 = & $chtsTsc $explicitSrc --outDir $out7 --target es2020 --module commonjs --pretty false `
    --rewriteRelativeImportExtensions 2>&1 | Out-String
$code7 = $LASTEXITCODE
$js7 = Join-Path $out7 '显式导入.js'
$ok7a = ($code7 -eq 0) -and (Test-Path $js7)
Check '⑦a 只开 rewrite 即可编译通过' $ok7a "退出码=$code7 产物=$(Test-Path $js7)"
if ($ok7a) {
    $u7 = Unescape-Js (Get-Content $js7 -Raw -Encoding UTF8)
    Check '⑦b require 被改写为 ./数学.js' ($u7.Contains('require("./数学.js")')) '产物含 require("./数学.js")'
    $run7 = & $nodeExe $js7 2>&1 | Out-String
    Check '⑦c node 真跑通过' ($LASTEXITCODE -eq 0 -and $run7.Trim() -eq '显式扩展名导入通过') $run7.Trim()
}
else { Write-Host $log7 }

Write-Host ''
Write-Host '=== 8) 显式 .ts 导入两个选项都不开 -> 必须报 TS5097 ==='
$out8 = New-OutDir 'proj-explicit-ts5097'
$log8 = & $chtsTsc $explicitSrc --outDir $out8 --target es2020 --module commonjs --pretty false 2>&1 | Out-String
Check '⑧ 报 TS5097' ($LASTEXITCODE -ne 0 -and $log8.Contains('TS5097')) `
    "退出码=$LASTEXITCODE，诊断含 TS5097=$($log8.Contains('TS5097'))"

Write-Host ''
Write-Host '=== 9) tsc -p 目录扫描（验证 include 通配能认出 .ts）==='
$cfgDir = Join-Path $Work 'proj-config'
if (Test-Path $cfgDir) { Remove-Item $cfgDir -Recurse -Force }
New-Item -ItemType Directory -Force -Path $cfgDir | Out-Null
$cfg = @'
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "outDir": "./out"
  },
  "include": ["**/*.ts"],
  "exclude": ["显式导入.ts"]
}
'@
Set-Content -Path (Join-Path $cfgDir 'tsconfig.json') -Value $cfg -Encoding UTF8
Copy-Item (Join-Path $projDir '*.ts') $cfgDir -Force

$projLog = & $chtsTsc -p $cfgDir --pretty false 2>&1 | Out-String
$cfgMainJs = Join-Path $cfgDir 'out\主.js'
$found = Test-Path $cfgMainJs
Check '⑨ tsc -p 能认出 .ts' $found "out\主.js=$(Test-Path $cfgMainJs)"
if (-not $found) { Write-Host $projLog }
else {
    $run9 = & $nodeExe $cfgMainJs 2>&1 | Out-String
    Check '⑨b 项目构建产物可运行' ($LASTEXITCODE -eq 0) ($run9.Trim() -replace "`r?`n", ' / ')
}

Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { "  [$($_.结果)] $($_.判定) —— $($_.说明)" }
$fail = ($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host "  合计 $($results.Count) 项，失败 $fail 项"
if ($fail -eq 0) { Write-Host '  结论：全部通过'; exit 0 } else { Write-Host '  结论：有失败项'; exit 1 }
