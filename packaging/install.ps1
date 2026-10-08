# ============================================================================
#  install.ps1 -- make THIS extracted folder usable. Nothing global by default.
#
#  What it does
#    1. checks that the compiler and the bundled node are really here
#    2. writes env.cmd -- a session-scoped PATH setter (double-click it to open
#       a shell that can see chtsc and node). We deliberately do NOT edit the
#       user's permanent PATH unless -AddToUserPath is given.
#    3. runs verify.ps1 -- so "installed" means "proven working", not assumed.
#
#  Usage:
#      powershell -File <package>\install.ps1
#      powershell -File <package>\install.ps1 -AddToUserPath   # opt-in, permanent
#
#  ENCODING: PURE ASCII (Windows PowerShell 5.1 reads BOM-less files as GBK).
# ============================================================================

param(
    [switch] $AddToUserPath,
    [switch] $SkipVerify
)

$ErrorActionPreference = 'Continue'

$here   = $PSScriptRoot
$bin    = Join-Path $here 'bin'
$nodeDir = Join-Path $here 'node'
$chtsc  = Join-Path $bin 'chtsc.exe'
$node   = Join-Path $nodeDir 'node.exe'

Write-Host ''
Write-Host '=== ChineseTypeScript setup ===' -ForegroundColor Cyan
Write-Host "folder: $here"
Write-Host ''

# ---------------------------------------------------------------------------
Write-Host '--- 1) files present'
# ---------------------------------------------------------------------------
$ok = $true
if (Test-Path $chtsc) { Write-Host '  [ok]   bin\chtsc.exe present' -ForegroundColor Green }
else { Write-Host '  [FAIL] bin\chtsc.exe is missing' -ForegroundColor Red; $ok = $false }
if (Test-Path $node) { Write-Host '  [ok]   node\node.exe present' -ForegroundColor Green }
else { Write-Host '  [warn] node\node.exe is missing -- compiled .js will not run here' -ForegroundColor Yellow }
if (-not $ok) { Write-Host ''; Write-Host '  cannot continue without the compiler.' -ForegroundColor Red; exit 1 }

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '--- 2) env.cmd (session-scoped PATH)'
# ---------------------------------------------------------------------------
$envCmd = Join-Path $here 'env.cmd'
$lines = @(
    '@echo off',
    'rem Session-scoped PATH for ChineseTypeScript.',
    'rem Double-click this file to open a shell that can see chtsc and node.',
    'set "PATH=%~dp0bin;%~dp0node;%PATH%"',
    'echo ChineseTypeScript is ready in this window.',
    'echo   try:  chtsc --version',
    'cmd /k'
)
Set-Content -Path $envCmd -Value $lines -Encoding ASCII
Write-Host '  [ok]   env.cmd written (session-scoped PATH)' -ForegroundColor Green

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '--- 3) permanent PATH'
# ---------------------------------------------------------------------------
if ($AddToUserPath) {
    $cur = [Environment]::GetEnvironmentVariable('Path', 'User')
    if (-not $cur) { $cur = '' }
    $parts = @($cur.Split(';') | Where-Object { $_ -ne '' })
    foreach ($d in @($bin, $nodeDir)) {
        if ($parts -notcontains $d) { $parts += $d; Write-Host ('  [ok]   appended to USER PATH: ' + $d) -ForegroundColor Green }
        else { Write-Host ('  [ok]   already on USER PATH: ' + $d) -ForegroundColor Green }
    }
    [Environment]::SetEnvironmentVariable('Path', ($parts -join ';'), 'User')
    Write-Host '  open a new shell to pick it up; run the restore script to undo' -ForegroundColor Yellow
} else {
    Write-Host '  [ok]   permanent PATH untouched (pass -AddToUserPath to opt in)' -ForegroundColor Green
}

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '--- 4) self-test'
# ---------------------------------------------------------------------------
if (-not $SkipVerify) {
    $sh = (Get-Command pwsh -ErrorAction SilentlyContinue).Source
    if (-not $sh) { $sh = (Get-Command powershell -ErrorAction SilentlyContinue).Source }
    if (-not $sh) { Write-Host '  [warn] no PowerShell found to run verify.ps1' -ForegroundColor Yellow }
    else {
        & $sh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $here 'verify.ps1')
        if ($LASTEXITCODE -ne 0) {
            Write-Host ''
            Write-Host '  self-test FAILED -- this package is not usable as shipped.' -ForegroundColor Red
            exit $LASTEXITCODE
        }
    }
}

Write-Host ''
Write-Host 'done. In a window opened with env.cmd, try:' -ForegroundColor Green
Write-Host '    chtsc --version'
Write-Host '    chtsc app.ts --target es2020 --module commonjs'
Write-Host '    node app.js'
exit 0
