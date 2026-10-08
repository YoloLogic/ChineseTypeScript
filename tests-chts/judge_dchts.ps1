# ============================================================================
#  judge_dchts.ps1 -- item② 的端到端判定：.d.chts 声明文件真的能用。
#
#  判据（每条都真跑编译器）：
#    ① 单独编译 .d.chts：必须被当成【声明文件】——
#       否则「声明 常量 x: 数字;」在非声明语境会报「const 必须初始化」。
#    ② 无扩展名导入 ./甲 必须解析到 甲.d.chts（不得报 TS2307）。
#    ③ tsc -p（目录扫描）必须认 .d.chts。
#    ④ .chts 开 --declaration 产出的是【标准 .d.ts】（本项目的设计选择）。
#    ⑤ 负对照（自带自测）：把 .d.chts 藏起来后，② 必须报 TS2307 ——
#       证明判据测的确实是 .d.chts 解析，不是别的东西在兜底。
#
#  ENCODING: UTF-8 with BOM。
# ============================================================================

param(
    [string] $Tsc  = 'E:\cts-build\chtsc.exe',
    [string] $Work = 'E:\cts-build\dchts-judge',
    [switch] $NoBuild
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    Write-Host ($(if ($ok) { '  [通过] ' } else { '  [失败] ' }) + $name + ' —— ' + $detail)
}
function FirstError([string]$text) {
    return (($text -split [char]10 | Where-Object { $_ -match 'error TS' } | Select-Object -First 1))
}

if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force $Work | Out-Null

if (-not $NoBuild) {
    Write-Host '  从当前源码重建 chtsc.exe …'
    & pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\build_chtsc.ps1') *>&1 | Out-Null
}
if (-not (Test-Path $Tsc)) { throw ('找不到编译器 ' + $Tsc) }

$decl = Join-Path $Work '甲.d.chts'
Set-Content -Path $decl -Value '导出 声明 常量 甲值: 数字;' -Encoding utf8

$main = Join-Path $Work '主.chts'
Set-Content -Path $main -Value @('导入 { 甲值 } 来自 "./甲";', 'console.log(甲值);') -Encoding utf8

$tsconfig = Join-Path $Work 'tsconfig.json'
Set-Content -Path $tsconfig -Encoding utf8 -Value @(
    '{',
    '  "compilerOptions": { "noEmit": true },',
    '  "files": [ "主.chts" ]',
    '}'
)

Write-Host '=== ① 单独编译 .d.chts（证明它被当成声明文件）==='
$out1 = (& $Tsc $decl --noEmit --pretty false 2>&1 | Out-String)
Check '① .d.chts 是声明文件' ($LASTEXITCODE -eq 0) ('退出码=' + $LASTEXITCODE + ' 首条=' + (FirstError $out1))

Write-Host ''
Write-Host '=== ② 无扩展名导入解析到 .d.chts ==='
$out2 = (& $Tsc $main --noEmit --pretty false 2>&1 | Out-String)
Check '② ./甲 解析到 甲.d.chts' (($LASTEXITCODE -eq 0) -and ($out2 -notmatch 'TS2307')) ('退出码=' + $LASTEXITCODE + ' 首条=' + (FirstError $out2))

Write-Host ''
Write-Host '=== ③ tsc -p（目录扫描）==='
$out3 = (& $Tsc -p $Work --pretty false 2>&1 | Out-String)
Check '③ tsc -p 认 .d.chts' ($LASTEXITCODE -eq 0) ('退出码=' + $LASTEXITCODE + ' 首条=' + (FirstError $out3))

Write-Host ''
Write-Host '=== ④ .chts 开 --declaration 产出标准 .d.ts ==='
$src = Join-Path $Work '乙.chts'
Set-Content -Path $src -Value '导出 常量 乙值: 数字 = 1;' -Encoding utf8
$outDir = Join-Path $Work 'out'
$out4 = (& $Tsc $src --declaration --emitDeclarationOnly --outDir $outDir --pretty false 2>&1 | Out-String)
$hasDts = Test-Path (Join-Path $outDir '乙.d.ts')
$hasDchts = Test-Path (Join-Path $outDir '乙.d.chts')
Check '④ 声明产出走标准 .d.ts' (($LASTEXITCODE -eq 0) -and $hasDts -and (-not $hasDchts)) ('乙.d.ts=' + $hasDts + ' 乙.d.chts=' + $hasDchts)

Write-Host ''
Write-Host '=== ⑤ 负对照：藏起 .d.chts，② 必须报 TS2307 ==='
$hidden = Join-Path $Work '甲.other'
Move-Item $decl $hidden -Force
$caught = $false
try {
    $out5 = (& $Tsc $main --noEmit --pretty false 2>&1 | Out-String)
    $caught = ($out5 -match 'TS2307')
} finally {
    if (Test-Path $hidden) { Move-Item $hidden $decl -Force }
}
Check '⑤ 负对照：没有 .d.chts 就该 TS2307' $caught ('藏起后报 TS2307=' + $caught + '，已还原=' + (Test-Path $decl))

Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：.d.chts 判定全部通过'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
