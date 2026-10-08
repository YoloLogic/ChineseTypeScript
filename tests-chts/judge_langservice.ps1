# ============================================================================
#  judge_langservice.ps1 -- item① 的端到端判定：
#  「汉语关键字真的进了编辑器补全与『你是不是想写…』建议」。
#
#  两半都测：
#    A) Go 机器守卫（scanner 的别名 API / parser 的汉语建议 / ls 的补全类别过滤）
#    B) CLI 真编译：三种汉语错字/漏空格的诊断，以及两条【负对照】
#
#  自带自测：负对照（无关标识符不该给建议）若失效、或汉语建议消失，判据都会红。
#
#  ENCODING: UTF-8 with BOM。
# ============================================================================

param(
    [string] $Tsc  = 'E:\cts-build\chtsc.exe',
    [string] $Work = 'E:\cts-build\langservice-judge',
    [switch] $NoBuild
)

$ErrorActionPreference = 'Stop'
$repo    = Split-Path -Parent $PSScriptRoot
$go      = 'E:\Go\bin\go.exe'
$tscDir  = Join-Path $repo 'tsc'

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    Write-Host ($(if ($ok) { '  [通过] ' } else { '  [失败] ' }) + $name + ' —— ' + $detail)
}

if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force $Work | Out-Null

# 每次都从当前源码重建 —— 否则判定可能跑在旧二进制上（本判定第一版就踩了这个坑：
# 只在缺失时构建，结果用着改动前的 chtsc，三条汉语建议全被误报为失败）。
if (-not $NoBuild) {
    Write-Host '  从当前源码重建 chtsc.exe …'
    & pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\build_chtsc.ps1') *>&1 | Out-Null
}
if (-not (Test-Path $Tsc)) { throw ('找不到编译器 ' + $Tsc) }

# ---------------------------------------------------------------------------
# A) Go 机器守卫（判据要能失败：摘掉汉语接入，这几条会红）
# ---------------------------------------------------------------------------
Write-Host '=== A) Go 机器守卫 ==='
$env:GOPATH = 'E:\gopath'
$env:GOMODCACHE = 'E:\gopath\pkg\mod'
$env:GOCACHE = 'E:\gopath\build-cache'
$env:GOPROXY = 'https://goproxy.cn,direct'
Push-Location $tscDir
try {
    $t1 = (& $go test -v ./internal/scanner/ -run 'ChineseKeyword|StringToToken' 2>&1 | Out-String)
    Check '① scanner 汉语别名 API 守卫' (($LASTEXITCODE -eq 0) -and ($t1 -match '--- PASS') -and ($t1 -notmatch 'no tests to run')) '5 条：排序/与表一致/拼写/StringToToken 仍只认英文/含汉语反查'

    $t2 = (& $go test -v ./internal/parser/ -run 'Chinese|OneEditApart|SpaceSuggestion' 2>&1 | Out-String)
    Check '② parser 汉语建议守卫' (($LASTEXITCODE -eq 0) -and ($t2 -match '--- PASS') -and ($t2 -notmatch 'no tests to run')) '4 条：候选升序/一次编辑判定/汉语建议/空格建议'

    $t3 = (& $go test -v ./internal/ls/ -run 'ChineseKeywords|KeywordCompletions|DuplicateKeyword' 2>&1 | Out-String)
    Check '③ ls 汉语补全守卫' (($LASTEXITCODE -eq 0) -and ($t3 -match '--- PASS') -and ($t3 -notmatch 'no tests to run')) '4 条：每个类别都有汉语/TS-only 过滤对汉语同样生效/确定性/无重复'
} finally { Pop-Location }

# ---------------------------------------------------------------------------
# B) CLI 真编译
# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '=== B) CLI 真编译（真诊断文本）==='
$fixtures = @(
    @{ name = '英文建议不变';      file = 'en.ts';        src = 'functio x;';      want = "Did you mean 'function'?";  mode = 'has' },
    @{ name = '汉语两字建议';      file = 'zh2.ts';     src = '函树 甲;';        want = "Did you mean '函数'?";      mode = 'has' },
    @{ name = '汉语四字建议';      file = 'zh4.ts';     src = '局部变两 甲;';    want = "Did you mean '局部变量'?";  mode = 'has' },
    @{ name = '汉语漏空格建议';    file = 'zhspace.ts'; src = '如果甲 乙;';      want = "Did you mean '如果'?";      mode = 'has' },
    @{ name = '负对照：无关中文';  file = 'negzh.ts';   src = '我的东西 甲;';    want = 'Did you mean';              mode = 'not' },
    @{ name = '负对照：无关英文';  file = 'negen.ts';     src = 'zzqqxx yy;';      want = 'Did you mean';              mode = 'not' }
)
foreach ($fx in $fixtures) {
    $path = Join-Path $Work $fx.file
    Set-Content -Path $path -Value $fx.src -Encoding utf8
    # 显式 --locale en：本判定的断言用的是英文诊断文本，不能被「默认中文」影响。
    $out = (& $Tsc $path --noEmit --pretty false --locale en 2>&1 | Out-String)
    $hit = $out -match [regex]::Escape($fx.want)
    $ok = if ($fx.mode -eq 'has') { $hit } else { -not $hit }
    $first = ($out -split '\r?\n' | Where-Object { $_ -match 'error TS' } | Select-Object -First 1)
    Check ($fx.name + '（' + $fx.file + '）') $ok ("期望 " + $fx.mode + " 「" + $fx.want + "」；实际首条：" + $first)
}

# ---------------------------------------------------------------------------
Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：语言服务判定全部通过'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
