# ============================================================================
#  uninstall.ps1 -- undo what install.ps1 -AddToUserPath did.
#
#  It removes THIS folder's bin\ and node\ from the USER PATH only.
#  It does not delete any file, and it never touches the system PATH.
#
#  ENCODING: PURE ASCII.
# ============================================================================

$ErrorActionPreference = 'Continue'
$here    = $PSScriptRoot
$bin     = Join-Path $here 'bin'
$nodeDir = Join-Path $here 'node'

Write-Host ''
Write-Host '=== ChineseTypeScript restore ===' -ForegroundColor Cyan

$cur = [Environment]::GetEnvironmentVariable('Path', 'User')
if (-not $cur) { $cur = '' }
$parts = @($cur.Split(';') | Where-Object { $_ -ne '' })
$keep = @($parts | Where-Object { ($_ -ne $bin) -and ($_ -ne $nodeDir) })
$removed = $parts.Count - $keep.Count

if ($removed -gt 0) {
    [Environment]::SetEnvironmentVariable('Path', ($keep -join ';'), 'User')
    Write-Host ('  [ok]   removed ' + $removed + ' entr(y|ies) from the USER PATH') -ForegroundColor Green
} else {
    Write-Host '  [ok]   nothing to remove (this folder is not on the USER PATH)' -ForegroundColor Green
}

$envCmd = Join-Path $here 'env.cmd'
if (Test-Path $envCmd) { Remove-Item $envCmd -Force; Write-Host '  [ok]   env.cmd removed' -ForegroundColor Green }

Write-Host ''
Write-Host 'done. The folder itself was left alone; delete it to uninstall fully.'
exit 0
