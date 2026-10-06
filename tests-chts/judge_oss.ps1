# ChineseTypeScript 大规模回归判定：拿【真实的 TypeScript 代码】喂两个编译器
#
# 这是「随便拿一个开源 TypeScript 项目，用我们的编译器编，必须照样编得过」的机器代理。
#
# 手法：同一批真实 .ts/.tsx 文件，
#   * 用上游基线 tsc（E:\cts-base，HEAD e26b8d24）编译一遍
#   * 用本编译器（含汉语关键字）编译一遍
#   * 两者的【诊断输出 + 退出码】必须逐字节相同；抽样还要比【产物逐字节相同】
#
# 为什么这就够了：汉语关键字只是【追加】的并行拼写，英文路径一行未改。
# 若哪天有人手滑把中文键并进了 textToKeyword，或动了英文分支，
# 本判定会在成千上万个真实文件上立刻炸出来。
#
# 用法：pwsh -File tests-chts\judge_oss.ps1 [-Sample 300] [-EmitSample 40]

param(
    [string]$GoExe = 'E:\Go\bin\go.exe',
    [string]$Work = 'E:\cts-build',
    [string]$Base = 'E:\cts-base',
    [int]$Sample = 300,
    [int]$EmitSample = 40
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$baseTsc = Join-Path $Work 'tsc-base.exe'
$chtsTsc = Join-Path $Work 'tsc-chts.exe'

if (-not (Test-Path $baseTsc)) { throw "找不到基线编译器 $baseTsc，请先跑 judge_chts.ps1" }
if (-not (Test-Path $chtsTsc)) { throw "找不到本编译器 $chtsTsc，请先跑 judge_chts.ps1" }

Write-Host '=== 1) 收集真实 TypeScript 语料 ==='
$corpusRoot = Join-Path $repo 'tsc\testdata\tests\cases\conformance'
$all = Get-ChildItem $corpusRoot -Recurse -File -Include '*.ts','*.tsx' |
    Where-Object { $_.FullName -notmatch '\.d\.ts$' } |
    Sort-Object FullName
Write-Host "  conformance 语料（排除 .d.ts）：$($all.Count) 个文件"

if ($Sample -le 0 -or $Sample -ge $all.Count) {
    # -Sample 0（或大于总数）表示【全量】—— 这是最强形式：
    # 语料里每一个真实 .ts/.tsx 都要在两个编译器下给出同样的诊断与退出码。
    $picked = $all
    Write-Host "  全量：$($picked.Count) 个文件（-Sample 0 表示全部）"
} else {
    $step = [Math]::Max(1, [Math]::Floor($all.Count / $Sample))
    $picked = @()
    for ($i = 0; $i -lt $all.Count -and $picked.Count -lt $Sample; $i += $step) { $picked += $all[$i] }
    Write-Host "  确定性抽样：$($picked.Count) 个文件（每 $step 个取 1）"
}

$flags = @('--noEmit', '--pretty', 'false', '--target', 'es2020', '--module', 'commonjs')

Write-Host ''
Write-Host "=== 2) 逐个文件对比【诊断 + 退出码】 ==="
$same = 0; $diff = 0; $diffList = @()
$n = 0
foreach ($f in $picked) {
    $n++
    $outBase = (& $baseTsc $f.FullName @flags 2>&1 | Out-String)
    $codeBase = $LASTEXITCODE
    $outChts = (& $chtsTsc $f.FullName @flags 2>&1 | Out-String)
    $codeChts = $LASTEXITCODE

    if ($outBase -ceq $outChts -and $codeBase -eq $codeChts) {
        $same++
    } else {
        $diff++
        $diffList += [pscustomobject]@{
            文件 = $f.FullName.Replace("$repo\", '')
            基线退出码 = $codeBase
            本编译器退出码 = $codeChts
            基线诊断 = ($outBase.Trim() -split "`n" | Select-Object -First 3) -join ' | '
            本编译器诊断 = ($outChts.Trim() -split "`n" | Select-Object -First 3) -join ' | '
        }
    }
    if ($n % 50 -eq 0) { Write-Host "    已比 $n / $($picked.Count)（同 $same，异 $diff）" }
}
Write-Host "  诊断+退出码：相同 $same，不同 $diff"

Write-Host ''
Write-Host "=== 3) 抽样对比【产物逐字节】 ==="
$emitDir1 = Join-Path $Work 'oss-base'
$emitDir2 = Join-Path $Work 'oss-chts'
$emitSame = 0; $emitDiff = 0; $emitSkipped = 0
$emitList2 = @()
$emitList = @($picked | Select-Object -First $EmitSample)
foreach ($f in $emitList) {
    foreach ($d in @($emitDir1, $emitDir2)) {
        if (Test-Path $d) { Remove-Item $d -Recurse -Force }
        New-Item -ItemType Directory -Force -Path $d | Out-Null
    }
    & $baseTsc $f.FullName --outDir $emitDir1 --pretty false --target es2020 --module commonjs 2>&1 | Out-Null
    $cb = $LASTEXITCODE
    & $chtsTsc $f.FullName --outDir $emitDir2 --pretty false --target es2020 --module commonjs 2>&1 | Out-Null
    $cc = $LASTEXITCODE

    $files1 = @(Get-ChildItem $emitDir1 -Recurse -File -ErrorAction SilentlyContinue | Sort-Object FullName)
    $files2 = @(Get-ChildItem $emitDir2 -Recurse -File -ErrorAction SilentlyContinue | Sort-Object FullName)
    if ($files1.Count -eq 0 -and $files2.Count -eq 0) { $emitSkipped++; continue }

    $rel1 = ($files1 | ForEach-Object { $_.FullName.Replace($emitDir1, '') + '=' + (Get-FileHash $_.FullName -Algorithm SHA256).Hash }) -join "`n"
    $rel2 = ($files2 | ForEach-Object { $_.FullName.Replace($emitDir2, '') + '=' + (Get-FileHash $_.FullName -Algorithm SHA256).Hash }) -join "`n"
    if ($rel1 -ceq $rel2 -and $cb -eq $cc) { $emitSame++ } else {
        $emitDiff++
        $emitList2 += $f.FullName
    }
}
Write-Host "  产物：相同 $emitSame，不同 $emitDiff，无产物跳过 $emitSkipped"

Write-Host ''
Write-Host '=== 判定汇总 ==='
$ok = ($diff -eq 0) -and ($emitDiff -eq 0)
Write-Host "  语料文件总数        : $($all.Count)"
Write-Host "  诊断对比抽样        : $($picked.Count) 个，相同 $same，不同 $diff"
Write-Host "  产物对比抽样        : $($emitList.Count) 个，相同 $emitSame，不同 $emitDiff"
if ($diff -gt 0) {
    Write-Host ''
    Write-Host '  --- 诊断不一致明细（最多 10 条）---'
    $diffList | Select-Object -First 10 | ForEach-Object {
        Write-Host "  文件: $($_.文件)"
        Write-Host "    基线   [$($_.基线退出码)] $($_.基线诊断)"
        Write-Host "    本编译器 [$($_.本编译器退出码)] $($_.本编译器诊断)"
    }
}
if ($emitDiff -gt 0) {
    Write-Host '  --- 产物不一致明细（最多 10 条）---'
    $emitList2 | Select-Object -First 10 | ForEach-Object { Write-Host "    $_" }
}
if ($ok) { Write-Host '  结论：全部一致（英文路径零回归）'; exit 0 }
else { Write-Host '  结论：存在不一致 —— 必须查清'; exit 1 }
