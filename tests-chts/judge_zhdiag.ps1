# ============================================================================
#  judge_zhdiag.ps1 -- item③ 的端到端判定：诊断默认就是中文。
#
#  上游 tsc 自带 zh-CN 翻译（2118/2204 条）与 --locale 机制；ChineseTypeScript 的
#  产品决定是【命令行默认用中文】（--locale 是命令行专用选项，所以注入默认值不会
#  覆盖任何 tsconfig 设置；库与上游测试不走 cmd/tsc，默认行为一个字节不变）。
#
#  判据：
#    ① 不带 --locale：诊断出中文（且保留 TS 码）
#    ② --locale en：回到英文（无汉字）
#    ③ 默认输出与显式 --locale zh-CN 逐字节相同（证明默认就是 zh-CN）
#    ④ 抽样多种诊断码都出中文
#    ⑤ 负对照（自带自测）：没有错误的程序不产生任何诊断
#
#  ENCODING: UTF-8 with BOM。
# ============================================================================

param(
    [string] $Tsc  = 'E:\cts-build\chtsc.exe',
    [string] $Work = 'E:\cts-build\zhdiag-judge',
    [switch] $NoBuild
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    Write-Host ($(if ($ok) { '  [通过] ' } else { '  [失败] ' }) + $name + ' —— ' + $detail)
}
function HasCjk([string]$text) { return ($text -match '[\u4e00-\u9fff]') }

if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force $Work | Out-Null

if (-not $NoBuild) {
    Write-Host '  从当前源码重建 chtsc.exe …'
    & pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\build_chtsc.ps1') *>&1 | Out-Null
}
if (-not (Test-Path $Tsc)) { throw ('找不到编译器 ' + $Tsc) }

# 夹具文件名必须 ASCII：否则路径里的汉字会被下面的「有没有汉字」判定误算。
$typeErr = Join-Path $Work 'typeerr.ts'
Set-Content -Path $typeErr -Value 'const n: number = "x";' -Encoding utf8

Write-Host '=== ① 默认出中文诊断 ==='
$out = (& $Tsc $typeErr --noEmit --pretty false 2>&1 | Out-String)
$line = (($out -split [char]10 | Where-Object { $_ -match 'error TS' } | Select-Object -First 1)).Trim()
Check '① 默认出中文诊断' ((HasCjk $out) -and ($out -match 'TS2322')) ('首条=' + $line)

Write-Host ''
Write-Host '=== ② --locale en 回到英文 ==='
$outEn = (& $Tsc $typeErr --noEmit --pretty false --locale en 2>&1 | Out-String)
$lineEn = (($outEn -split [char]10 | Where-Object { $_ -match 'error TS' } | Select-Object -First 1)).Trim()
Check '② --locale en 回到英文' ((-not (HasCjk $outEn)) -and ($outEn -match 'TS2322')) ('首条=' + $lineEn)

Write-Host ''
Write-Host '=== ③ 默认就是 zh-CN ==='
$outZh = (& $Tsc $typeErr --noEmit --pretty false --locale zh-CN 2>&1 | Out-String)
Check '③ 默认与显式 zh-CN 逐字节相同' ($out.Trim() -ceq $outZh.Trim()) '两种调用的诊断文本必须一字不差'

Write-Host ''
Write-Host '=== ④ 抽样多种诊断码都出中文 ==='
$samples = @(
    @{ code = 'TS2304'; file = 'a.ts'; src = 'console.log(未命名);' },
    @{ code = 'TS2554'; file = 'b.ts'; src = 'function f(a: number): void {} f();' },
    @{ code = 'TS2322'; file = 'c.ts'; src = 'const n: number = "x";' }
)
$allZh = $true
foreach ($s in $samples) {
    $p = Join-Path $Work $s.file
    Set-Content -Path $p -Value $s.src -Encoding utf8
    $o = (& $Tsc $p --noEmit --pretty false 2>&1 | Out-String)
    $hasCjk = HasCjk $o
    $hasCode = ($o -match [regex]::Escape($s.code))
    if (-not ($hasCjk -and $hasCode)) { $allZh = $false }
    Write-Host ('    ' + $s.code + ' 中文=' + $hasCjk + ' 含该码=' + $hasCode)
}
Check '④ 抽样多种诊断码都出中文' $allZh 'TS2304 / TS2554 / TS2322'

Write-Host ''
Write-Host '=== ⑤ 负对照：没有错误就没有诊断 ==='
$clean = Join-Path $Work 'clean.ts'
Set-Content -Path $clean -Value 'const n: number = 1; console.log(n);' -Encoding utf8
$outClean = (& $Tsc $clean --noEmit --pretty false 2>&1 | Out-String)
Check '⑤ 负对照：正确程序无诊断' (-not ($outClean -match 'error TS')) ('输出=' + $outClean.Trim())

Write-Host ''
Write-Host '=== ⑥ 上游缺译的条目也出中文（补译表生效）==='
$okFile = Join-Path $Work 'ok.ts'
Set-Content -Path $okFile -Value 'const n: number = 1;' -Encoding utf8
$incZh = (& $Tsc $okFile --noEmit --incremental --pretty false 2>&1 | Out-String)
$incEn = (& $Tsc $okFile --noEmit --incremental --pretty false --locale en 2>&1 | Out-String)
Check '⑥ 上游缺译条目也出中文' (($incZh -match 'TS5074') -and (HasCjk $incZh) -and (-not (HasCjk $incEn))) ('中文=' + (HasCjk $incZh) + ' 英文含汉字=' + (HasCjk $incEn))

Write-Host ''
Write-Host '=== ⑦ --help 首行：中文 chtsc:、英文 tsc: ==='
$helpZhLine = ((& $Tsc --help 2>&1 | Out-String) -split [char]10 | Select-Object -First 1)
$helpEnLine = ((& $Tsc --help --locale en 2>&1 | Out-String) -split [char]10 | Select-Object -First 1)
Check '⑦ --help 首行产品名（只改中文）' (($helpZhLine -match 'chtsc:') -and ($helpEnLine -match 'tsc:') -and ($helpEnLine -notmatch 'chtsc:')) ('中文=' + $helpZhLine + '；英文=' + $helpEnLine)

Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：中文诊断判定全部通过'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
