# ChineseTypeScript 全集回归判定（跑上游自带的 Go 测试全集，与基线对照）
#
# 这是本项目最硬的一条回归证据。做法（预期差异有两类：.chts 与其声明 .d.chts）：
#   1) 在【上游基线工作树】跑一次 go test ./...     （未改动的 e26b8d24）
#   2) 在【工作副本】跑一次 go test ./...           （含汉语关键字）
#   3) 对比两边【失败的包集合】
#   4) 工作副本多出来的失败，必须全部落在允许清单里（baseline 文本差异），
#      并且这些差异必须【逐行】能用「插入 .chts」解释
#
# 为什么必须这么麻烦：加一个新扩展名，会自然地改变
#   * `--traceResolution` 的追踪文本（候选列里多了 .chts）
#   * 诊断消息里列举"受支持扩展名"的那一行（多了 .chts）
# 这类差异是【正确且预期】的，但如果不逐行核对，就无法把「预期的差异」
# 与「真的把 .ts 顺序弄乱了」区分开。所以：允许差异存在，但必须逐行可解释。
#
# 已知环境性失败（与本改动无关，在两边都会出现，故不算回归）：
#   * internal/astnav   —— 需要 node_modules/typescript（未安装）
#   * internal/fswatch  —— 需要创建符号链接的特权（非管理员账户没有）
#
# 用法：pwsh -File tests-chts\judge_gotest.ps1

param(
    [string]$GoExe = 'E:\Go\bin\go.exe',
    [string]$Work = 'E:\cts-build',
    [string]$Base = 'E:\cts-base'
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$workTsc = Join-Path $repo 'tsc'
$baseTsc = Join-Path $Base 'tsc'

$env:GOPATH = 'E:\gopath'
$env:GOMODCACHE = 'E:\gopath\pkg\mod'
$env:GOCACHE = 'E:\gopath\build-cache'
$env:GOPROXY = 'https://goproxy.cn,direct'

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    $mark = if ($ok) { '  [通过]' } else { '  [失败]' }
    Write-Host "$mark $name —— $detail"
}

if (-not (Test-Path $baseTsc)) {
    Write-Host "  建立上游基线工作树 $Base"
    & git -C $repo worktree add --detach $Base HEAD 2>&1 | ForEach-Object { "    $_" }
}
if (-not (Test-Path $baseTsc)) { throw "基线工作树不存在：$Base" }

$logBase = Join-Path $Work 'gotest-base.log'
$logWork = Join-Path $Work 'gotest-work.log'

Write-Host '=== 1) 基线（未改动）跑 go test ./... ==='
Push-Location $baseTsc
try {
    & $GoExe test ./... 2>&1 | Out-File -FilePath $logBase -Encoding UTF8
    Write-Host "  退出码=$LASTEXITCODE 日志=$logBase"
} finally { Pop-Location }

Write-Host '=== 2) 工作副本（含汉语关键字）跑 go test ./... ==='
Push-Location $workTsc
try {
    & $GoExe test ./... 2>&1 | Out-File -FilePath $logWork -Encoding UTF8
    Write-Host "  退出码=$LASTEXITCODE 日志=$logWork"
} finally { Pop-Location }

function Get-FailPkgs([string]$log) {
    return @(Select-String -Path $log -Pattern '^FAIL\s+github' |
        ForEach-Object { ($_.Line -split '\s+')[1] } | Sort-Object -Unique)
}
$fb = Get-FailPkgs $logBase
$fw = Get-FailPkgs $logWork

Write-Host ''
Write-Host '=== 3) 失败包集合对照 ==='
Write-Host "  基线失败包（$($fb.Count)）: $($fb -join ' ')"
Write-Host "  副本失败包（$($fw.Count)）: $($fw -join ' ')"

$envPkgs = @(
    'github.com/microsoft/TypeScript/tsc/internal/astnav',
    'github.com/microsoft/TypeScript/tsc/internal/fswatch'
)
$extra = @($fw | Where-Object { $fb -notcontains $_ })
$onlyBase = @($fb | Where-Object { $fw -notcontains $_ })
$allowed = @(
    'github.com/microsoft/TypeScript/tsc/internal/execute/tsctests',
    'github.com/microsoft/TypeScript/tsc/internal/testrunner'
)
$unexpected = @($extra | Where-Object { $allowed -notcontains $_ })

Check '① 没有只在基线失败的包' ($onlyBase.Count -eq 0) "只在基线失败: $(if ($onlyBase) { $onlyBase -join ' ' } else { '无' })"
Check '② 环境性失败两边一致' (@($envPkgs | Where-Object { $fb -notcontains $_ }).Count -eq 0) `
    "astnav/fswatch 在基线上也失败（缺 node_modules / 无符号链接特权）"
Check '③ 副本多出的失败只在允许清单内' ($unexpected.Count -eq 0) `
    "多出: $(if ($extra) { $extra -join ' ' } else { '无' })"

Write-Host ''
Write-Host '=== 4) 逐行核对：每个 baseline 差异是否都能用「插入 .chts」解释 ==='
$refRoot = Join-Path $workTsc 'testdata\baselines\reference'
$locRoot = Join-Path $workTsc 'testdata\baselines\local'
if (-not (Test-Path $locRoot)) {
    Check '④ baseline 差异逐行可解释' $false "没有本地 baseline：$locRoot（上一步的 go test 应已产生）"
} else {
    $files = @(Get-ChildItem $locRoot -Recurse -File)
    $ok = 0; $bad = @(); $added = 0; $changed = 0
    foreach ($f in $files) {
        $rel = $f.FullName.Substring($locRoot.Length).TrimStart('\')
        $refPath = Join-Path $refRoot $rel
        if (-not (Test-Path $refPath)) { $bad += "$rel （reference 无对应文件）"; continue }
        $d = @(Compare-Object (Get-Content $refPath -Encoding UTF8) (Get-Content $f.FullName -Encoding UTF8))
        $rm = @($d | Where-Object { $_.SideIndicator -eq '<=' } | ForEach-Object { $_.InputObject })
        $ad = @($d | Where-Object { $_.SideIndicator -eq '=>' } | ForEach-Object { $_.InputObject })
        $added += $ad.Count; $changed += $rm.Count
        $prob = @()
        foreach ($r in $rm) {
            $matched = $false
            foreach ($a in $ad) {
                # 预期的新增有两类：.chts 与其声明文件 .d.chts（都追加在受支持扩展名列表末尾）。
                # 剥离顺序无关：'.d.chts', 里并不含子串 '.chts', 。
                $candidate = $a.Replace("'.d.chts', ", '').Replace('".d.chts", ', '').Replace("'.chts', ", '').Replace('".chts", ', '')
                if ($candidate -ceq $r) { $matched = $true; break }
            }
            if (-not $matched) { $prob += "旧行无法用『插入 .chts』解释: $($r.Trim())" }
        }
        foreach ($a in $ad) { if ($a -notmatch 'chts') { $prob += "新增行与 .chts 无关: $($a.Trim())" } }
        if ($prob.Count -eq 0) { $ok++ } else { $bad += "$rel -> $($prob[0])" }
    }
    Check '④ baseline 差异逐行可解释' ($bad.Count -eq 0) `
        "$ok / $($files.Count) 个文件合规；新增行 $added 条、被改行 $changed 条，全部可用『插入 .chts/.d.chts』解释"
    if ($bad.Count -gt 0) { $bad | Select-Object -First 10 | ForEach-Object { Write-Host "     $_" } }
}

Write-Host ''
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { "  [$($_.结果)] $($_.判定) —— $($_.说明)" }
$fail = ($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host "  合计 $($results.Count) 项，失败 $fail 项"
if ($fail -eq 0) { Write-Host '  结论：全集回归通过（差异全部是新增 .chts 的预期结果）'; exit 0 }
else { Write-Host '  结论：有失败项，必须查清'; exit 1 }
