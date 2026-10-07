# 《ChineseTypeScript 教学教程》守卫 —— 真编译、真运行、逐行核对期望输出。
#
# 做四件事：
#   ① 教程正文与「模板 + 例子源码 + 关键字对照表」一致（转调 make_tutorial_chts.ps1 -Check）
#   ② 逐个例子用 chtsc 真编译（--outDir 到临时目录）
#   ③ 逐个例子用 node 真运行，实际输出与例子头部声明的「期望输出」逐行比对
#   ④ 自带自测：故意把某条期望输出改掉，比对必须报不一致
#      —— 判据要能失败，否则它是橡皮图章
#   ⑤ Word 文档（教程\ChineseTypeScript-教学教程.docx）与教程正文同步
#      （转调 tools\make_tutorial_docx.ps1 -Check；那个生成器是确定性的，
#        所以直接比哈希）
#
# 为什么这是可信的：教程里印的输出是由生成器从【同一个来源】切进去的
# （第①项已核对），所以①③过了，教程印的也就必然对。一个真相，两处呈现。
#
# 用法：pwsh -File tests-chts\judge_tutorial.ps1

param(
    [string]$Tsc = 'E:\cts-build\chtsc.exe',
    [string]$Work = 'E:\cts-build\tutorial-ts',
    [switch]$Quiet
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$exDir = Join-Path $repo '教程\例子'
$bad = 0

function Say([string]$s) { if (-not $Quiet) { Write-Host $s } }

function Get-Expected([string]$path) {
    $lines = @(Get-Content -LiteralPath $path -Encoding UTF8)
    $out = New-Object System.Collections.Generic.List[string]
    $in = $false
    foreach ($line in $lines) {
        $t = $line.Trim()
        if (-not $in) {
            if ($t -match '^//\s*期望输出[:：]\s*$') { $in = $true }
            continue
        }
        if (-not $t.StartsWith('//')) { break }
        $body = $t.Substring(2).Trim()
        if ($body -eq '') { break }
        $out.Add($body)
    }
    return $out
}

# 行尾空格不计较
function Compare-Output($expected, $actual) {
    $e = @($expected | ForEach-Object { $_.TrimEnd() })
    $a = @($actual | ForEach-Object { $_.TrimEnd() })
    if ($e.Count -ne $a.Count) { return "行数不同：期望 $($e.Count) 行，实际 $($a.Count) 行" }
    for ($i = 0; $i -lt $e.Count; $i++) {
        if ($e[$i] -cne $a[$i]) { return "第 $($i + 1) 行不同：期望「$($e[$i])」，实际「$($a[$i])」" }
    }
    return $null
}

# ---------- ① 教程与模板/例子/对照表一致 ----------
Say '=== ① 教程正文与模板/例子/对照表是否一致 ==='
& pwsh -NoProfile -File (Join-Path $repo 'tools\make_tutorial_chts.ps1') -Check
if ($LASTEXITCODE -ne 0) { Write-Host '  ❌ 教程与模板/例子不一致（见上面的提示）' -ForegroundColor Red; $bad++ }
else { Say '  ✅ 一致' }

# ---------- ②③ 逐个例子真编译真运行 ----------
Say ''
Say '=== ②③ 逐个例子真编译 + 真运行 + 比对期望输出 ==='
if (-not (Test-Path $Tsc)) { throw "找不到编译器：$Tsc（先跑 tools\build_chtsc.ps1）" }
$node = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $node) { throw '找不到 node' }
if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force -Path $Work | Out-Null

$files = @(Get-ChildItem "$exDir\*.chts" | Sort-Object Name)
if ($files.Count -eq 0) { throw "例子目录里没有 .chts：$exDir" }

# 先守【例子目录的构成】：只许有 `NN-名字.chts`，且不许为空。
# 为什么加它（2026-10-07 真事故，发生在 Chinese++ 那一侧）：一次失败的 PowerShell
# 操作（.NET 用进程目录、不认 Set-Location）在例子目录里留下了【空的杂项文件】，
# 被闸门一并提交了 —— 空的所以谁也不吭声。构成也必须机器守。
$all = @(Get-ChildItem $exDir -File | Sort-Object Name)
$stray = @($all | Where-Object { $_.Name -notmatch '^\d\d-.+\.chts$' })
$empty = @($all | Where-Object { $_.Length -eq 0 })
if ($stray.Count -eq 0 -and $empty.Count -eq 0) { Say ("  ✅ 例子目录构成正常（{0} 个 .chts，无杂项、无空文件）" -f $all.Count) }
else {
    if ($stray.Count -gt 0) { Write-Host ("  ❌ 例子目录里有多余文件（只许 NN-名字.chts）：{0}" -f (($stray | ForEach-Object { $_.Name }) -join '、')) -ForegroundColor Red }
    if ($empty.Count -gt 0) { Write-Host ("  ❌ 例子目录里有空文件：{0}" -f (($empty | ForEach-Object { $_.Name }) -join '、')) -ForegroundColor Red }
    $bad++
}

$passed = 0
foreach ($f in $files) {
    $outDir = Join-Path $Work $f.BaseName
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
    $compileLog = & $Tsc $f.FullName --outDir $outDir --target es2020 --module commonjs --pretty false 2>&1 | Out-String
    $js = Join-Path $outDir ($f.BaseName + '.js')
    if (-not (Test-Path $js)) {
        Write-Host ("  ❌ {0}：编译失败" -f $f.Name) -ForegroundColor Red
        ($compileLog.Trim() -split "`n" | Select-Object -First 6) | ForEach-Object { Write-Host "      $_" }
        $bad++
        continue
    }
    $actual = @(& $node $js 2>&1)
    $expected = Get-Expected $f.FullName
    $diff = Compare-Output $expected $actual
    if ($diff) {
        Write-Host ("  ❌ {0}：{1}" -f $f.Name, $diff) -ForegroundColor Red
        $bad++
    } else {
        Say ("  ✅ {0}（{1} 行输出逐行相符）" -f $f.Name, $expected.Count)
        $passed++
    }
}

# ---------- ④ 自带自测 ----------
Say ''
Say '=== ④ 自带自测：改掉一条期望输出，必须被抓住 ==='
$probe = $files[0]
$probeJs = Join-Path (Join-Path $Work $probe.BaseName) ($probe.BaseName + '.js')
if (Test-Path $probeJs) {
    $actual = @(& $node $probeJs 2>&1)
    $exp = @(Get-Expected $probe.FullName)
    $mutated = @($exp)
    $mutated[0] = $mutated[0] + '（这是故意改坏的）'
    $diff = Compare-Output $mutated $actual
    if ($diff) { Say ("  ✅ 改坏后被抓住（{0}）" -f $diff) }
    else { Write-Host '  ❌ 改坏了却仍判通过 —— 本守卫是橡皮图章' -ForegroundColor Red; $bad++ }
} else {
    Write-Host '  ❌ 自测无法进行：探针例子没编译出 js' -ForegroundColor Red
    $bad++
}

Say ''
Say '=== ⑤ Word 文档（.docx）是否与教程正文同步 ==='
$docxGen = Join-Path $repo 'tools\make_tutorial_docx.ps1'
if (-not (Test-Path $docxGen)) {
    Write-Host '  ❌ 找不到 tools\make_tutorial_docx.ps1' -ForegroundColor Red
    $bad++
} else {
    & pwsh -NoProfile -File $docxGen -Check
    if ($LASTEXITCODE -ne 0) {
        Write-Host '  ❌ docx 与教程正文不同步（见上面提示）' -ForegroundColor Red
        $bad++
    } else { Say '  ✅ 同步' }
}

Say ''
if ($bad -eq 0) {
    Say ("教学教程守卫：通过（{0} 个例子全部真编译真运行、输出逐行相符；判据自测已证明会失败；docx 与正文同步）" -f $passed)
    exit 0
}
Write-Host ("教学教程守卫：失败 {0} 处" -f $bad) -ForegroundColor Red
exit 1
