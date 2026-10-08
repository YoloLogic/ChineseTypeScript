# ============================================================================
#  judge_kwscope.ps1 -- item④ 的端到端判定：汉语关键字【只在 .chts/.d.chts 生效】。
#
#  判据（都真跑编译器）：
#    ① .chts 认汉语关键字（常量 甲=1 过；如果/真值/返回 被当前置关键字 → TS1108）
#    ② .ts 里汉语拼写是普通标识符（const 对象=1 过；const 变量=1 过）
#    ③ .ts 里汉语拼写【不是】关键字（常量 甲=1 必须失败）—— 这条会在有人把
#       作用域恢复成「全局生效」时变红，是判据的自证
#    ④ .d.chts 也认汉语关键字（导出 声明 常量 … 过）
#    ⑤ .chts 里确凿保留字仍被当关键字（常量 变量=1 → TS1389）
#    ⑥ 负对照：正确英文 .ts 无诊断
#
#  ENCODING: UTF-8 with BOM。
# ============================================================================

param(
    [string] $Tsc  = 'E:\cts-build\chtsc.exe',
    [string] $Work = 'E:\cts-build\kwscope-judge',
    [switch] $NoBuild
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    Write-Host ($(if ($ok) { '  [通过] ' } else { '  [失败] ' }) + $name + ' —— ' + $detail)
}
function RunTsc([string]$file) {
    $out = (& $Tsc $file --noEmit --pretty false --locale en 2>&1 | Out-String)
    return @{ code = $LASTEXITCODE; text = $out }
}

if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force $Work | Out-Null

if (-not $NoBuild) {
    Write-Host '  从当前源码重建 chtsc.exe …'
    & pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\build_chtsc.ps1') *>&1 | Out-Null
}
if (-not (Test-Path $Tsc)) { throw ('找不到编译器 ' + $Tsc) }

function NewFixture([string]$name, [string]$src) {
    $p = Join-Path $Work $name
    Set-Content -Path $p -Value $src -Encoding utf8
    return $p
}

# ① .chts 认汉语关键字
$a = RunTsc (NewFixture 'a.chts' '常量 甲 = 1;')
$f = RunTsc (NewFixture 'f.chts' '如果 (真值) { 返回; }')
Check '① .chts 认汉语关键字' (($a.code -eq 0) -and ($f.text -match 'TS1108')) ('a.chts exit=' + $a.code + '；f.chts 含 TS1108=' + [bool]($f.text -match 'TS1108'))

# ② .ts 里汉语拼写是普通标识符
$b = RunTsc (NewFixture 'b.ts' 'const 对象 = 1;')
$d = RunTsc (NewFixture 'd.ts' 'const 变量 = 1;')
Check '② .ts 里汉语拼写是普通标识符' (($b.code -eq 0) -and ($d.code -eq 0)) ('b.ts exit=' + $b.code + '；d.ts exit=' + $d.code)

# ③ .ts 里汉语【不是】关键字（会抓到「恢复成全局」的回归）
$c = RunTsc (NewFixture 'c.ts' '常量 甲 = 1;')
Check '③ .ts 里汉语不是关键字（自证）' ($c.code -ne 0) ('c.ts exit=' + $c.code + '（必须非 0）')

# ④ .d.chts 也认汉语
$g = RunTsc (NewFixture 'g.d.chts' '导出 声明 常量 甲值: 数字;')
Check '④ .d.chts 认汉语关键字' ($g.code -eq 0) ('g.d.chts exit=' + $g.code)

# ⑤ .chts 里确凿保留字仍是关键字
$e = RunTsc (NewFixture 'e.chts' '常量 变量 = 1;')
Check '⑤ .chts 里保留字仍是关键字' (($e.code -ne 0) -and ($e.text -match 'TS1389')) ('e.chts exit=' + $e.code + ' 含 TS1389=' + [bool]($e.text -match 'TS1389'))

# ⑥ 负对照：正确英文 .ts 无诊断
$h = RunTsc (NewFixture 'h.ts' 'const n: number = 1; console.log(n);')
Check '⑥ 负对照：正确英文 .ts 无诊断' (-not ($h.text -match 'error TS')) ('h.ts exit=' + $h.code)

Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：关键字作用域判定全部通过'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
