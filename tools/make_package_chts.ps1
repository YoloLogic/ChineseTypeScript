# ============================================================================
#  make_package_chts.ps1 -- assemble ChineseTypeScript-<ver>-win64\ and zip it.
#
#  Design notes (all measured)
#  ---------------------------
#  * chtsc.exe is a self-contained Go binary: NO Go is needed on the target.
#  * node.exe is bundled so that a compiled .js can be RUN out of the box.
#    We ship the official Node v24.15.0 win-x64 node.exe (hash-checked against
#    the official distribution) together with its LICENSE.
#  * ZIP IS FLAT: docs, examples, installer and self-test all live at the root.
#  * package documents are COPIES OF GENERATED ARTEFACTS (docs\ChineseTypeScript
#    中文对照表.md, 教程\...md/.docx, examples). Nothing here is a second,
#    hand-written copy of a generated file.
#  * verify.ps1 inside the package is the package's own claim; a wrong package
#    must make it fail, and its expected-checks number is self-asserted.
#
#  Usage:
#      pwsh -File tools\make_package_chts.ps1
#      pwsh -File tools\make_package_chts.ps1 -Version 0.1 -OutDir E:\somewhere
#      pwsh -File tools\make_package_chts.ps1 -Rebuild
#
#  ENCODING: UTF-8 (with BOM), so both PowerShell 7 and Windows PowerShell 5.1
#  read the Chinese paths correctly.
# ============================================================================

param(
    [string] $Version = '0.1',
    [string] $OutDir,
    [string] $TscExe = 'E:\cts-build\chtsc.exe',
    [string] $NodeExe = 'E:\cts-build\node-dist\node-v24.15.0-win-x64\node.exe',
    [string] $NodeLicense = '',
    [switch] $Rebuild,
    [switch] $NoZip,
    [switch] $NoNode
)

$ErrorActionPreference = 'Stop'
if ($PSVersionTable.PSVersion.Major -lt 6) {
    throw 'this script reads non-ASCII paths; run it with PowerShell 7 (pwsh)'
}

$root    = Split-Path -Parent $PSScriptRoot
$packSrc = Join-Path $root 'packaging'
$distRoot = if ($OutDir) { $OutDir } else { Join-Path $root 'dist' }
if (-not (Test-Path $distRoot)) { New-Item -ItemType Directory -Force $distRoot | Out-Null }
$pkgName = 'ChineseTypeScript-' + $Version + '-win64'
$pkg     = Join-Path $distRoot $pkgName

Write-Host ('=== assemble ' + $pkgName + ' ===') -ForegroundColor Cyan

# ---------------------------------------------------------------------------
# 1. the compiler
# ---------------------------------------------------------------------------
if ($Rebuild -or -not (Test-Path $TscExe)) {
    Write-Host '  building chtsc.exe (tools\build_chtsc.ps1) ...'
    & pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $root 'tools\build_chtsc.ps1') -OutDir (Split-Path $TscExe)
    if ($LASTEXITCODE -ne 0) { throw 'build_chtsc.ps1 failed' }
}
if (-not (Test-Path $TscExe)) { throw ('no compiler at ' + $TscExe) }

# ---------------------------------------------------------------------------
# 2. node + its license
# ---------------------------------------------------------------------------
$nodeLic = $NodeLicense
if (-not $NoNode) {
    if (-not (Test-Path $NodeExe)) { throw ('no node.exe at ' + $NodeExe + ' (pass -NodeExe, or -NoNode to skip)') }
    if (-not $nodeLic) {
        $c1 = Join-Path (Split-Path $NodeExe) 'LICENSE'
        $c2 = Join-Path $packSrc 'node-LICENSE.txt'
        if (Test-Path $c1) { $nodeLic = $c1 } elseif (Test-Path $c2) { $nodeLic = $c2 }
    }
    if (-not $nodeLic -or -not (Test-Path $nodeLic)) { throw 'no Node LICENSE found (pass -NodeLicense)' }
}

# ---------------------------------------------------------------------------
# 3. clean output
# ---------------------------------------------------------------------------
if (Test-Path $pkg) { Remove-Item -Recurse -Force $pkg }
New-Item -ItemType Directory -Force (Join-Path $pkg 'bin')  | Out-Null
New-Item -ItemType Directory -Force (Join-Path $pkg 'docs') | Out-Null
New-Item -ItemType Directory -Force (Join-Path $pkg '例子') | Out-Null
if (-not $NoNode) { New-Item -ItemType Directory -Force (Join-Path $pkg 'node') | Out-Null }

# ---------------------------------------------------------------------------
# 4. copy the payload
# ---------------------------------------------------------------------------
Copy-Item $TscExe (Join-Path $pkg 'bin\chtsc.exe') -Force
if (-not $NoNode) {
    Copy-Item $NodeExe (Join-Path $pkg 'node\node.exe') -Force
    Copy-Item $nodeLic (Join-Path $pkg 'node\LICENSE') -Force
}

Copy-Item (Join-Path $root 'LICENSE.txt') $pkg -Force
Copy-Item (Join-Path $root 'NOTICE.txt')  $pkg -Force

Copy-Item (Join-Path $root 'docs\中文对照表.md')                          (Join-Path $pkg 'docs') -Force
Copy-Item (Join-Path $root '教程\ChineseTypeScript-教学教程.md')          (Join-Path $pkg 'docs') -Force
Copy-Item (Join-Path $root '教程\ChineseTypeScript-教学教程.docx')        (Join-Path $pkg 'docs') -Force
Copy-Item (Join-Path $root '教程\例子\*')                                (Join-Path $pkg '例子') -Force

foreach ($f in @('verify.ps1', 'install.ps1', 'uninstall.ps1', '一键安装.cmd', '一键还原.cmd')) {
    Copy-Item (Join-Path $packSrc $f) $pkg -Force
}
Copy-Item (Join-Path $packSrc 'README-使用说明.md') (Join-Path $pkg 'README.md') -Force
Copy-Item (Join-Path $packSrc 'CHANGELOG.md')       $pkg -Force

# ---------------------------------------------------------------------------
# 5. manifest (relative-path -> size, sha256)
# ---------------------------------------------------------------------------
$tab = [string][char]9
$files = @(Get-ChildItem $pkg -Recurse -File | Where-Object { $_.Name -ne 'MANIFEST.tsv' } | Sort-Object FullName)
$lines = foreach ($f in $files) {
    $rel = $f.FullName.Substring($pkg.Length + 1)
    $lines2 = $f.Length.ToString() + $tab + (Get-FileHash $f.FullName -Algorithm SHA256).Hash + $tab + $rel
    $lines2
}
Set-Content -Path (Join-Path $pkg 'MANIFEST.tsv') -Value $lines -Encoding UTF8

# ---------------------------------------------------------------------------
# 6. zip
# ---------------------------------------------------------------------------
$zip = Join-Path $distRoot ($pkgName + '.zip')
if (Test-Path $zip) { Remove-Item $zip -Force }
if (-not $NoZip) {
    Write-Host '  compressing ...'
    Compress-Archive -Path $pkg -DestinationPath $zip -Force
}

# ---------------------------------------------------------------------------
# 7. evidence
# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '=== evidence ==='
$exe = Get-Item (Join-Path $pkg 'bin\chtsc.exe')
Write-Host ('  bin\chtsc.exe : ' + [math]::Round($exe.Length / 1MB, 1) + ' MB  sha256=' + (Get-FileHash $exe.FullName -Algorithm SHA256).Hash)
if (-not $NoNode) {
    $nd = Get-Item (Join-Path $pkg 'node\node.exe')
    Write-Host ('  node\node.exe : ' + [math]::Round($nd.Length / 1MB, 1) + ' MB  sha256=' + (Get-FileHash $nd.FullName -Algorithm SHA256).Hash)
}
$all = @(Get-ChildItem $pkg -Recurse -File)
$total = ($all | Measure-Object -Property Length -Sum).Sum
Write-Host ('  files         : ' + $all.Count + '  total ' + [math]::Round($total / 1MB, 1) + ' MB')
Write-Host ('  package dir   : ' + $pkg)
if (-not $NoZip -and (Test-Path $zip)) {
    $z = Get-Item $zip
    Write-Host ('  zip           : ' + $z.FullName + '  ' + [math]::Round($z.Length / 1MB, 1) + ' MB')
    Write-Host ('  zip sha256    : ' + (Get-FileHash $zip -Algorithm SHA256).Hash)
}
Write-Host ''
Write-Host '  next: extract the zip somewhere a user would put it, then run verify.ps1 inside it'
