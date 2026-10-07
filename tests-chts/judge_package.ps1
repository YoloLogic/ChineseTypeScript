# ============================================================================
#  judge_package.ps1 -- the distributable package is judged, not assumed.
#
#  Every step produces evidence:
#    1. really assembles the package (tools\make_package_chts.ps1)
#    2. extracts the ZIP into a FOREIGN directory whose path contains Chinese
#    3. runs install.ps1 -SkipVerify, then the package's own verify.ps1
#    4. asserts verify.ps1 reports 0 failures AND exit code 0
#    5. SELF-TEST: renames the packaged compiler and proves verify.ps1 then
#       FAILS -- a judgement that cannot fail is a rubber stamp
#
#  ENCODING: UTF-8 with BOM (run with a PowerShell that reads Chinese paths).
# ============================================================================

param(
    [string] $DistDir = 'E:\ChineseTypeScript\dist',
    [string] $Work    = 'E:\cts-build\打包判定',
    [switch] $Quiet
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    $mark = if ($ok) { '  [通过]' } else { '  [失败]' }
    Write-Host ($mark + ' ' + $name + ' —— ' + $detail)
}

if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force $Work | Out-Null

# ---------------------------------------------------------------------------
Write-Host '=== 1) 真打包（make_package_chts.ps1）==='
$packLog = Join-Path $Work 'pack.log'
& pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\make_package_chts.ps1') -OutDir $DistDir *>&1 |
    Tee-Object -FilePath $packLog | Select-Object -Last 6 | ForEach-Object { Write-Host ('    ' + $_) }
$packOk = ($LASTEXITCODE -eq 0)
$zip = @(Get-ChildItem $DistDir -Filter 'ChineseTypeScript-*-win64.zip' -File | Sort-Object LastWriteTime -Descending | Select-Object -First 1)
$zipOk = ($zip.Count -eq 1)
Check '① 真打包出 zip' ($packOk -and $zipOk) $(if ($zipOk) { $zip[0].Name + '  ' + [math]::Round($zip[0].Length/1MB,1) + ' MB' } else { '没有找到 zip' })

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '=== 2) 解压到含中文的外来目录 ==='
$extractTo = Join-Path $Work '解压到这里'
New-Item -ItemType Directory -Force $extractTo | Out-Null
if ($zipOk) {
    & tar.exe -xf $zip[0].FullName -C $extractTo
    $pkg = @(Get-ChildItem $extractTo -Directory | Select-Object -First 1)
} else { $pkg = @() }
$pkgOk = ($pkg.Count -eq 1) -and (Test-Path (Join-Path $pkg[0].FullName 'bin\chtsc.exe'))
Check '② 解压到中文路径' $pkgOk $(if ($pkg.Count -eq 1) { $pkg[0].FullName } else { '解压目录不对' })

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '=== 3) 一键安装（-SkipVerify）==='
$installOk = $false
if ($pkgOk) {
    $pkgDir = $pkg[0].FullName
    $il = (& pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $pkgDir 'install.ps1') -SkipVerify 2>&1 | Out-String)
    $installOk = ($LASTEXITCODE -eq 0) -and (Test-Path (Join-Path $pkgDir 'env.cmd'))
}
Check '③ install.ps1 写出 env.cmd' $installOk '会话级 PATH；未动永久 PATH'

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '=== 4) 包内自测 verify.ps1 必须全过 ==='
$verifyOk = $false
if ($pkgOk) {
    $pkgDir = $pkg[0].FullName
    $verifyOut = (& pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $pkgDir 'verify.ps1') 2>&1 | Out-String)
    $code = $LASTEXITCODE
    if (-not $Quiet) { $verifyOut.Trim() -split '\r?\n' | Select-Object -Last 4 | ForEach-Object { Write-Host ('    ' + $_) } }
    $verifyOk = ($code -eq 0) -and ($verifyOut -match '16 passed, 0 failed')
}
Check '④ 包内自测 16/16' $verifyOk '真编译真跑 + 一个必须失败的用例'

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '=== 5) 自带自测：把包内编译器改名，verify 必须失败 ==='
$caught = $false
$restored = $false
if ($pkgOk) {
    $pkgDir = $pkg[0].FullName
    $exe = Join-Path $pkgDir 'bin\chtsc.exe'
    $bak = Join-Path $pkgDir 'bin\chtsc.exe.bak'
    try {
        Move-Item $exe $bak -Force
        & pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $pkgDir 'verify.ps1') *>&1 | Out-Null
        $caught = ($LASTEXITCODE -ne 0)
    } catch {
        $caught = $false
    } finally {
        if (Test-Path $bak) { Move-Item $bak $exe -Force }
        $restored = (Test-Path $exe)
    }
}
Check '⑤ 破坏后必被抓（判据自测）' ($caught -and $restored) ('改坏后被抓=' + $caught + '，恢复后存在=' + $restored)

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：打包判定全部通过'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
