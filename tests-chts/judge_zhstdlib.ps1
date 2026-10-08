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
    [string] $Src  = '',   # 夹具源（仓库内，已跟踪：汉语标准库.d.ts / 主.ts）
    [string] $Work = '',   # 判定工作目录（默认在仓库【外】，避免生成物混进仓库）
    [switch] $NoBuild
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
if (-not $Src)  { $Src  = Join-Path $repo 'tests-chts\zhstdlib' }
if (-not $Work) { $Work = Join-Path $env:TEMP 'zhstdlib-judge' }
if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force $Work | Out-Null
Copy-Item (Join-Path $Src '汉语标准库.d.ts') $Work -Force
Copy-Item (Join-Path $Src '主.ts') $Work -Force

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

# ② 负对照：未声明的汉语成员必须报错（文件由判定自己生成，不依赖仓库里有没有）
Set-Content -Path (Join-Path $Work '负对照.ts') -Encoding utf8 -Value (@(
    '/// <reference path="汉语标准库.d.ts" />',
    'declare const 甲: number[];',
    '甲.发送(1);'
) -join [char]10)
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

# ④ 产物必须是标准 JS：汉语标准库名已打回英文规范名
$out = Join-Path $Work 'out'
if (Test-Path $out) { Remove-Item $out -Recurse -Force }
& $Tsc (Join-Path $Work '主.ts') --outDir $out --target es2020 --module commonjs --pretty false --locale en 2>&1 | Out-Null
$js = Join-Path $out '主.js'
$jsText = if (Test-Path $js) { [System.IO.File]::ReadAllText($js) } else { '' }
$hasEnglish = ($jsText -match '甲\.push\(4\)') -and ($jsText -match 'Math\.floor\(3\.7\)') -and ($jsText -match '\.length')
# 只查「汉语名被当成员/全局用」的情形；字符串字面量里的汉语（如 "向下取整="）是用户文本，不该改写。
$noChinese = (-not ($jsText -match '\.追加')) -and (-not ($jsText -match '\.向下取整')) -and (-not ($jsText -match '数学\.')) -and (-not ($jsText -match '控制台\.')) -and (-not ($jsText -match '\.找序号'))
Check '④ 产物是标准 JS（汉语名已打回英文）' ($hasEnglish -and $noChinese) ('含 push/floor/length=' + $hasEnglish + ' 无汉语标准库名=' + $noChinese)

# ⑤ node 真跑，输出必须正确
$node = (Get-Command node -ErrorAction SilentlyContinue).Source
if ($node -and (Test-Path $js)) {
    $o = (& $node $js 2>&1 | Out-String).Trim()
    Check '⑤ node 真跑输出正确' (($o -match '长度=4') -and ($o -match '合计=14') -and ($o -match '向下取整=3') -and ($o -match '控制台通过') -and ($o -match '找序号=1') -and ($o -match '乘方=8') -and ($o -match '映射取=1') -and ($o -match '承诺值=42')) ('输出=' + ($o -replace [char]10, ' / '))
} else {
    Check '⑤ node 真跑输出正确' $false '找不到 node 或产物'
}

# ⑥ 收窄守卫：用户自己声明的同名标识符【不得】被改写
Set-Content -Path (Join-Path $Work '同名变量.ts') -Encoding utf8 -Value (@(
    '/// <reference path="汉语标准库.d.ts" />',
    '常量 追加 = 5;',
    'console.log(追加 + 1);'
) -join [char]10)
$out2 = Join-Path $Work 'out2'
if (Test-Path $out2) { Remove-Item $out2 -Recurse -Force }
& $Tsc (Join-Path $Work '同名变量.ts') --outDir $out2 --target es2020 --module commonjs --pretty false --locale en 2>&1 | Out-Null
$js2 = Join-Path $out2 '同名变量.js'
$js2Text = if (Test-Path $js2) { [System.IO.File]::ReadAllText($js2) } else { '' }
Check '⑥ 收窄守卫：用户自己的「追加」不被改写' (($js2Text -match '追加') -and (-not ($js2Text -match 'push'))) ('产物含 追加=' + [bool]($js2Text -match '追加') + ' 含 push=' + [bool]($js2Text -match 'push'))

# ⑦ 单一真源守卫：Go 里的两张表必须与 stdlib 的译名表同步
& pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\gen_zhstdlib.ps1') -Check *>&1 | Out-Null
Check '⑦ 生成物与译名表同步（单一真源守卫）' ($LASTEXITCODE -eq 0) ('gen_zhstdlib -Check exit=' + $LASTEXITCODE)

# ⑧ 防漂移守卫：译名表里每个名字都必须【有对应声明】——
#    防「先翻译、后补声明」：译名一进表 emit 改写就生效，声明没跟上会误改用户自己的标识符。
$tsv = Join-Path $repo 'stdlib\试点-数组与数学.tsv'
$dts = [System.IO.File]::ReadAllText((Join-Path $Src '汉语标准库.d.ts'))
$missing = New-Object System.Collections.Generic.List[string]
foreach ($line in (Get-Content $tsv -Encoding UTF8)) {
    if ($line -notmatch '\S') { continue }
    $parts = $line -split ([string][char]9)
    if ($parts.Count -lt 3) { continue }
    $zh = $parts[2].Trim()
    if ($zh -and ($dts -notmatch [regex]::Escape($zh))) { $missing.Add($zh) }
}
Check '⑧ 译名表每个名字都有对应声明（防先翻译后补声明）' ($missing.Count -eq 0) ('缺声明: ' + $(if ($missing.Count) { $missing -join ' ' } else { '无' }))

# ⑨ 二进制新鲜度：chtsc.exe 不得比生成的译名表旧 ——
#    否则 -NoBuild 会拿【旧表】判定：表里有、二进制里没有，出现「加了名字却不生效」的假失败/假通过。
#    （2026-10-08 真踩过：加 控制台/集合 等名字后用 -NoBuild 跑，产物里仍是汉语名、node 报 not defined。）
$genGo = Join-Path $repo 'tsc\internal\scanner\zh_stdlib_generated.go'
if (Test-Path $genGo) {
    $binTime = (Get-Item $Tsc).LastWriteTimeUtc
    $genTime = (Get-Item $genGo).LastWriteTimeUtc
    Check '⑨ 二进制不比译名表旧（防 -NoBuild 用旧表）' ($binTime -ge $genTime) ('bin=' + $binTime.ToString('HH:mm:ss') + ' gen=' + $genTime.ToString('HH:mm:ss'))
} else {
    Check '⑨ 二进制不比译名表旧（防 -NoBuild 用旧表）' $false '找不到生成的译名表'
}

Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：标准库汉化【试点：数组+数学】端到端通过（类型检查 → 标准 JS 产物 → node 真跑）'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
