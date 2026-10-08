# ============================================================================
#  judge_kwscope.ps1 -- 端到端判定：汉语关键字【在普通 .ts 里全局生效】。
#
#  背景（2026-10-08 用户裁定）：本项目的用法就是【用普通 .ts 写汉语关键字】，
#  不再有单独的 .chts 后缀 —— 汉语 .ts 只有我们的版本能编译，这正是推广策略。
#
#  判据（都真跑编译器）：
#    ① .ts 认汉语关键字（常量 甲=1 过；如果/真值/返回 被当关键字 → TS1108）
#    ② 代价自证：汉语保留字不能当标识符（const 变量=1 → TS1389）
#    ③ .tsx 也认（常量 甲=1 过）
#    ④ .mts / .cts 也认（常量 甲=1 过）
#    ⑤ .d.ts 也认（声明 常量 甲: 数字; 过）
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

# ① .ts 认汉语关键字
$a = RunTsc (NewFixture 'a.ts' '常量 甲 = 1;')
$f = RunTsc (NewFixture 'f.ts' '如果 (真值) { 返回; }')
Check '① 普通 .ts 认汉语关键字' (($a.code -eq 0) -and ($f.text -match 'TS1108')) ('a.ts exit=' + $a.code + '；f.ts 含 TS1108=' + [bool]($f.text -match 'TS1108'))

# ② 代价自证：汉语保留字不能当标识符（这正是「分不清」要接受的代价）
$e = RunTsc (NewFixture 'e.ts' 'const 变量 = 1;')
Check '② 汉语保留字不能当标识符（代价自证）' (($e.code -ne 0) -and ($e.text -match 'TS1389')) ('e.ts exit=' + $e.code + ' 含 TS1389=' + [bool]($e.text -match 'TS1389'))

# ③ .tsx 也认
$b = RunTsc (NewFixture 'b.tsx' '常量 甲 = 1;')
Check '③ .tsx 也认' ($b.code -eq 0) ('b.tsx exit=' + $b.code)

# ④ .mts / .cts 也认
$m = RunTsc (NewFixture 'm.mts' '常量 甲 = 1;')
$c = RunTsc (NewFixture 'c.cts' '常量 甲 = 1;')
Check '④ .mts / .cts 也认' (($m.code -eq 0) -and ($c.code -eq 0)) ('m.mts exit=' + $m.code + '；c.cts exit=' + $c.code)

# ⑤ .d.ts 也认
$d = RunTsc (NewFixture 'd.d.ts' '声明 常量 甲: 数字;')
Check '⑤ .d.ts 也认' ($d.code -eq 0) ('d.d.ts exit=' + $d.code)

# ⑥ 负对照：正确英文 .ts 无诊断
$h = RunTsc (NewFixture 'h.ts' 'const n: number = 1; console.log(n);')
Check '⑥ 负对照：正确英文 .ts 无诊断' (-not ($h.text -match 'error TS')) ('h.ts exit=' + $h.code)

Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：汉语关键字全局生效判定全部通过'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
