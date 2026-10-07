# ============================================================================
#  verify.ps1 -- prove THIS PACKAGE works, from inside the package.
#
#  Why this is separate from the repo's tests-chts judges
#  -----------------------------------------------------
#  Everything else in the repo tests the BUILD TREE (E:\cts-build\chtsc.exe).
#  A package is a different artifact with failure modes of its own:
#    * a file that did not make it into the zip (bin, docs, node)
#    * the compiler invoked from a FOREIGN working directory
#    * the bundled node missing or not runnable
#  So "the package is fine" is its own claim, checked here.
#
#  Usage:
#      powershell -File <package>\verify.ps1
#      powershell -File <package>\verify.ps1 -KeepTemp
#
#  ENCODING: PURE ASCII ON PURPOSE. Windows PowerShell 5.1 reads a BOM-less
#  file as GBK, so non-ASCII here would be mangled. Every Chinese path and
#  every Chinese test source in this file is built from Unicode CODE POINTS.
#
#  $expectedChecks is the ONLY source of truth for "this self-test has N
#  items". The script fails if it ran a different number, so the number can
#  never drift away from reality.
# ============================================================================

param([switch] $KeepTemp)

$ErrorActionPreference = 'Continue'

$here  = $PSScriptRoot
$bin   = Join-Path $here 'bin'
$chtsc = Join-Path $bin 'chtsc.exe'
$node  = Join-Path $here 'node\node.exe'

# --- how many checks this script performs when everything passes ------------
$expectedChecks = 16

$script:pass = 0
$script:fail = 0
function Ok  ($m) { Write-Host ("  [ok]   " + $m) -ForegroundColor Green; $script:pass++ }
function Bad ($m) { Write-Host ("  [FAIL] " + $m) -ForegroundColor Red;   $script:fail++ }
function T ($x) { if ($null -eq $x) { return '' } else { return ([string]$x).Trim() } }

Write-Host ''
Write-Host '=== ChineseTypeScript package self-test ===' -ForegroundColor Cyan
Write-Host "package root: $here"
Write-Host ''

$nl = [string][char]10

# --- Chinese names built from code points (keeps this file ASCII) -----------
#   table name = <zhong><wen><dui><zhao><biao>              ("Chinese table")
$nameTable = -join @([char]0x4E2D, [char]0x6587, [char]0x5BF9, [char]0x7167, [char]0x8868)
#   tutorial   = <jiao><xue><jiao><cheng>                   ("tutorial")
$nameTut   = -join @([char]0x6559, [char]0x5B66, [char]0x6559, [char]0x7A0B)
#   examples   = <li><zi>                                   ("examples")
$nameEx    = -join @([char]0x4F8B, [char]0x5B50)

$tmp = Join-Path ([System.IO.Path]::GetTempPath()) ('chts_verify_' + [guid]::NewGuid().ToString('N').Substring(0,8))
New-Item -ItemType Directory -Force $tmp | Out-Null

# ---------------------------------------------------------------------------
Write-Host '--- 1) files shipped'
# ---------------------------------------------------------------------------
if (Test-Path $chtsc) { Ok 'bin\chtsc.exe present' } else { Bad 'bin\chtsc.exe is missing' }
if (Test-Path $node)  { Ok 'node\node.exe present (bundled runtime)' } else { Bad 'node\node.exe is missing (bundled runtime)' }

foreach ($f in @('LICENSE.txt', 'NOTICE.txt')) {
    $p = Join-Path $here $f
    if ((Test-Path $p) -and ((Get-Item $p).Length -gt 0)) { Ok ($f + ' present') }
    else { Bad ($f + ' missing or empty (license obligation)') }
}

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '--- 2) the two programs start'
# ---------------------------------------------------------------------------
if (Test-Path $chtsc) {
    $v = (& $chtsc --version 2>&1 | Out-String).Trim()
    if ($LASTEXITCODE -eq 0 -and $v -match 'Version') { Ok ('chtsc --version -> ' + $v) }
    else { Bad ('chtsc --version failed (exit=' + $LASTEXITCODE + '): ' + $v) }
} else { Bad 'chtsc --version skipped: the compiler is missing' }

if (Test-Path $node) {
    $nv = (& $node --version 2>&1 | Out-String).Trim()
    if ($LASTEXITCODE -eq 0 -and $nv -match '^v\d') { Ok ('node --version -> ' + $nv) }
    else { Bad 'node --version failed' }
} else { Bad 'node --version skipped: node is missing' }

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '--- 3) English .ts compiles and runs, from a FOREIGN working directory'
#    A foreign cwd is deliberate: it catches a package that only works when
#    cwd == package root.
# ---------------------------------------------------------------------------
$enSrc = Join-Path $tmp 'hello.ts'
$enLines = @(
    'const x: number = 1;',
    'function add(a: number, b: number): number { return a + b; }',
    'console.log("sum=" + add(x, 2));'
)
[System.IO.File]::WriteAllText($enSrc, (($enLines -join $nl) + $nl), (New-Object System.Text.UTF8Encoding($false)))
$enOut = Join-Path $tmp 'en'
New-Item -ItemType Directory -Force $enOut | Out-Null
$logEn = (& $chtsc $enSrc --outDir $enOut --target es2020 --module commonjs --pretty false 2>&1 | Out-String)
$enJs = Join-Path $enOut 'hello.js'
$enCompiled = ($LASTEXITCODE -eq 0) -and (Test-Path $enJs)
if ($enCompiled) { Ok 'English .ts compiles' } else { Bad ('English .ts did not compile: ' + (T $logEn)) }

if ($enCompiled) {
    $enRun = (& $node $enJs 2>&1 | Out-String).Trim()
    if ($LASTEXITCODE -eq 0 -and $enRun -eq 'sum=3') { Ok ('English output is correct (' + $enRun + ')') }
    else { Bad ('English program output was ' + $enRun + ' (expected sum=3)') }
} else { Bad 'English program did not run (it did not compile)' }

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '--- 4) Chinese .chts compiles, and the produced js is STANDARD English JS'
#    Shape used: class / constructor / this / return / const / new / if / else
# ---------------------------------------------------------------------------
$tType  = -join @([char]0x7C7B, [char]0x578B)                 # class
$tRect  = -join @([char]0x957F, [char]0x65B9, [char]0x5F62)   # a class name
$tWide  = [string][char]0x5BBD                                # a field name
$tNum   = -join @([char]0x6570, [char]0x5B57)                 # number
$tCtor  = -join @([char]0x6784, [char]0x9020, [char]0x5668)   # constructor
$tSelf  = -join @([char]0x81EA, [char]0x8EAB)                 # this
$tArea  = -join @([char]0x9762, [char]0x79EF)                 # a method name
$tRet   = -join @([char]0x8FD4, [char]0x56DE)                 # return
$tConst = -join @([char]0x5E38, [char]0x91CF)                 # const
$tA     = [string][char]0x7532                                # a variable name
$tNew   = -join @([char]0x65B0, [char]0x5EFA)                 # new
$tIf    = -join @([char]0x5982, [char]0x679C)                 # if
$tElse  = -join @([char]0x5426, [char]0x5219)                 # else

$zhSrc = Join-Path $tmp 'shape.chts'
$zhLines = @(
    ($tType + ' ' + $tRect + ' {'),
    ('  ' + $tWide + ': ' + $tNum),
    ('  ' + $tCtor + '(' + $tWide + ': ' + $tNum + ') { ' + $tSelf + '.' + $tWide + ' = ' + $tWide + ' }'),
    ('  ' + $tArea + '(): ' + $tNum + ' { ' + $tRet + ' ' + $tSelf + '.' + $tWide + ' * ' + $tSelf + '.' + $tWide + ' }'),
    '}',
    ($tConst + ' ' + $tA + ' = ' + $tNew + ' ' + $tRect + '(3);'),
    ($tIf + ' (' + $tA + '.' + $tArea + '() === 9) { console.log(''shape-ok''); } ' + $tElse + ' { console.log(''shape-bad''); }')
)
[System.IO.File]::WriteAllText($zhSrc, (($zhLines -join $nl) + $nl), (New-Object System.Text.UTF8Encoding($false)))

$zhOut = Join-Path $tmp 'zh'
New-Item -ItemType Directory -Force $zhOut | Out-Null
$logZh = (& $chtsc $zhSrc --outDir $zhOut --target es2020 --module commonjs --pretty false 2>&1 | Out-String)
$zhJs    = Join-Path $zhOut 'shape.js'
$zhWrong = Join-Path $zhOut 'shape.chts.js'
$zhCompiled = ($LASTEXITCODE -eq 0) -and (Test-Path $zhJs) -and (-not (Test-Path $zhWrong))
if ($zhCompiled) { Ok 'Chinese .chts compiles to shape.js (not shape.chts.js)' }
else { Bad ('Chinese .chts did not compile correctly: ' + (T $logZh)) }

if ($zhCompiled) {
    $jsText = [System.IO.File]::ReadAllText($zhJs)
    $hasEn = ($jsText -match 'class\s') -and ($jsText -match 'constructor') -and ($jsText -match 'return') -and ($jsText -match 'const\s') -and ($jsText -match 'new\s') -and ($jsText -match 'if\s*\(')
    $keys = @($tType, $tCtor, $tRet, $tConst, $tNew, $tIf, $tElse, $tNum, $tSelf)
    $leak = @($keys | Where-Object { $jsText.Contains($_) })
    if ($hasEn -and $leak.Count -eq 0) { Ok 'produced js uses English keywords; no Chinese keyword spelling remains' }
    else { Bad ('produced js keyword check failed (english=' + $hasEn + ', leaked=' + ($leak -join ',') + ')') }

    $zhRun = (& $node $zhJs 2>&1 | Out-String).Trim()
    if ($LASTEXITCODE -eq 0 -and $zhRun -eq 'shape-ok') { Ok ('Chinese program runs correctly (' + $zhRun + ')') }
    else { Bad ('Chinese program output was ' + $zhRun + ' (expected shape-ok)') }
} else {
    Bad 'produced js keyword check skipped: it did not compile'
    Bad 'Chinese program did not run (it did not compile)'
}

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '--- 5) a WRONG program must FAIL (the judgement is not a rubber stamp)'
# ---------------------------------------------------------------------------
$badSrc = Join-Path $tmp 'bad.ts'
[System.IO.File]::WriteAllText($badSrc, ('const n: number = "this is not a number";' + $nl), (New-Object System.Text.UTF8Encoding($false)))
$badOut = Join-Path $tmp 'bad'
New-Item -ItemType Directory -Force $badOut | Out-Null
$badLog = (& $chtsc $badSrc --outDir $badOut --target es2020 --module commonjs --pretty false 2>&1 | Out-String)
if ($LASTEXITCODE -ne 0 -and $badLog -match 'TS\d+') { Ok 'a type error is reported with a TS diagnostic and a non-zero exit' }
else { Bad ('a wrong program was NOT rejected (exit=' + $LASTEXITCODE + ') -- the self-test cannot prove anything') }

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '--- 6) documents are inside the package'
# ---------------------------------------------------------------------------
$tbl     = Join-Path (Join-Path $here 'docs') ($nameTable + '.md')
$tutMd   = Join-Path (Join-Path $here 'docs') ('ChineseTypeScript-' + $nameTut + '.md')
$tutDocx = Join-Path (Join-Path $here 'docs') ('ChineseTypeScript-' + $nameTut + '.docx')
foreach ($p in @($tbl, $tutMd, $tutDocx)) {
    $nm = Split-Path -Leaf $p
    if ((Test-Path $p) -and ((Get-Item $p).Length -gt 0)) { Ok ('docs\' + $nm + ' present') }
    else { Bad ('docs\' + $nm + ' missing or empty') }
}

$exDir = Join-Path $here $nameEx
$exFiles = @(Get-ChildItem $exDir -Filter '*.chts' -File -ErrorAction SilentlyContinue)
if ($exFiles.Count -ge 9) { Ok ('examples shipped (' + $exFiles.Count + ' .chts files)') }
else { Bad ('examples missing or incomplete in ' + $nameEx + ' (' + $exFiles.Count + ' files)') }

# ---------------------------------------------------------------------------
if (-not $KeepTemp) { Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue }

Write-Host ''
Write-Host ('=' * 60)
if ($script:fail -eq 0) {
    if ($script:pass -ne $expectedChecks) {
        Write-Host ('  [FAIL] ran ' + $script:pass + ' checks, expected ' + $expectedChecks + ' -- bump expectedChecks here') -ForegroundColor Red
        exit 1
    }
    Write-Host ('  ' + $script:pass + ' passed, 0 failed -- this package works.') -ForegroundColor Green
    exit 0
}
Write-Host ('  ' + $script:pass + ' passed, ' + $script:fail + ' failed') -ForegroundColor Red
exit 1
