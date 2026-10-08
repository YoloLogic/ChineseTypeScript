# ============================================================================
#  judge_zhstdlib.ps1 -- 标准库汉化【试点：数组 + 数学】的阶段判定。
#
#  本轮（阶段②）只覆盖【声明层】：汉语名要能通过类型检查，且英文用法同时可用。
#  emit 改写（甲.追加 → 甲.push）属于下一阶段，尚未实现 —— 见 stdlib/README.md。
#
#  判据：
#    ① 汉语声明让「数组/数学/追加/映射/向下取整…」全套通过类型检查
#    ② 负对照：未声明的汉语成员必须报 TS2339（证明①不是橡皮图章）
#    ③ 别名并存：同一份声明下，英文用法（push/floor）与汉语用法都通过
#
#  ENCODING: UTF-8 with BOM。
# ============================================================================

param(
    [string] $Tsc  = 'E:\cts-build\chtsc.exe',
    [string] $Work = '',
    [switch] $NoBuild
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
if (-not $Work) { $Work = Join-Path $repo 'tests-chts\zhstdlib' }

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    Write-Host ($(if ($ok) { '  [通过] ' } else { '  [失败] ' }) + $name + ' —— ' + $detail)
}
function RunTsc([string]$file) {
    $out = (& $Tsc $file --noEmit --pretty false --locale en 2>&1 | Out-String)
    return @{ code = $LASTEXITCODE; text = $out }
}

if (-not $NoBuild) {
    Write-Host '  从当前源码重建 chtsc.exe …'
    & pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\build_chtsc.ps1') *>&1 | Out-Null
}
if (-not (Test-Path $Tsc)) { throw ('找不到编译器 ' + $Tsc) }

# ① 汉语名通过类型检查
$a = RunTsc (Join-Path $Work '主.ts')
Check '① 汉语标准库名通过类型检查' ($a.code -eq 0) ('主.ts exit=' + $a.code + $(if ($a.code -ne 0) { '；' + ($a.text -split [char]10)[0] } else { '' }))

# ② 负对照：未声明的汉语成员必须报错
$b = RunTsc (Join-Path $Work '负对照.ts')
Check '② 负对照：未声明的汉语成员报 TS2339' (($b.code -ne 0) -and ($b.text -match 'TS2339')) ('负对照.ts exit=' + $b.code + ' 含 TS2339=' + [bool]($b.text -match 'TS2339'))

# ③ 英文用法与汉语用法并存（别名要求）
Set-Content -Path (Join-Path $Work '并存.ts') -Encoding utf8 -Value (@(
    '/// <reference path="汉语标准库.d.ts" />',
    '常量 甲: 数组<数字> = [3, 1];',
    '甲.追加(2);',
    '甲.push(4);',
    'console.log(数学.向下取整(1.5), Math.floor(1.5));'
) -join [char]10)
$c = RunTsc (Join-Path $Work '并存.ts')
Check '③ 英文与汉语用法并存' ($c.code -eq 0) ('并存.ts exit=' + $c.code)

Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：标准库汉化【声明层】判定通过（emit 改写待下一阶段）'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
