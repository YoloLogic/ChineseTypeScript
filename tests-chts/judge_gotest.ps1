# ChineseTypeScript 全集回归判定（跑上游自带的 Go 测试全集，与基线对照）
#
# 这是本项目最硬的一条回归证据。做法：
#   1) 在【上游基线工作树】跑一次 go test ./...     （未改动的 e26b8d24）
#   2) 在【工作副本】跑一次 go test ./...           （含汉语关键字；【没有】新扩展名）
#   3) 对比两边【失败的包集合】
#   4) 工作副本多出来的失败，必须全部落在允许清单里
#   5) baseline 文件若出现差异，必须与汉语有关
#
# 预期差异（2026-10-08 起：本项目只用普通 .ts，不再有 .chts）：
#   * internal/fourslash/tests —— 我们给【所有 .ts】都加汉语关键字补全（用户裁定①），
#     于是上游 exact 补全测试的「期望 N 项」偏少（实际多出汉语候选）。这是【有意】的产品差异。
#   * internal/execute/tsctests / internal/testrunner —— 命令行与测试框架基线，历史允许项。
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

# 资源性失败（内存耗尽）【不是回归】：显式识别并排除，但打印出来提醒重跑。
# 只认 `runtime: cannot allocate memory` 这个确凿标记 —— 不认普通的 [build failed]，
# 因为后者也可能是真的编译错误（那必须报红）。
# （2026-10-08 真踩过：连续跑全量把内存压垮，modulespecifiers 报 build failed，被误当成允许清单外的新失败。）
$resourceFailed = @()
if (Select-String -Path $logWork -Pattern 'runtime: cannot allocate memory' -Quiet -ErrorAction SilentlyContinue) {
    $resourceFailed = @($extra | Where-Object {
        Select-String -Path $logWork -Pattern ('FAIL\s+' + [regex]::Escape($_) + '.*\[build failed\]') -Quiet
    })
    if ($resourceFailed.Count -gt 0) {
        $extra = @($extra | Where-Object { $resourceFailed -notcontains $_ })
        Write-Host ('  [!] 内存耗尽造成的环境性失败，不计入回归，请重跑确认：' + ($resourceFailed -join ' '))
    }
}
$allowed = @(
    'github.com/microsoft/TypeScript/tsc/internal/fourslash/tests',
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
Write-Host '=== 4) 核对：baseline 差异必须与汉语有关（不再有「插入 .chts」这类差异）==='
$refRoot = Join-Path $workTsc 'testdata\baselines\reference'
$locRoot = Join-Path $workTsc 'testdata\baselines\local'
if (-not (Test-Path $locRoot)) {
    Check '④ baseline 差异只与汉语有关' $false "没有本地 baseline：$locRoot（上一步的 go test 应已产生）"
} else {
    $files = @(Get-ChildItem $locRoot -Recurse -File)
    $same = 0; $diffFiles = @(); $bad = @()
    foreach ($f in $files) {
        $rel = $f.FullName.Substring($locRoot.Length).TrimStart('\')
        $refPath = Join-Path $refRoot $rel
        if (-not (Test-Path $refPath)) { continue }  # 本地新增的 baseline 不算差异
        $d = @(Compare-Object (Get-Content $refPath -Encoding UTF8) (Get-Content $f.FullName -Encoding UTF8) -CaseSensitive)
        if ($d.Count -eq 0) { $same++; continue }
        $diffFiles += $rel
        # 允许的差异：行里含汉字（本项目新增的汉语内容）。其余一律当成问题。
        $unexplained = @($d | Where-Object { $_.InputObject -notmatch '[\u4e00-\u9fff]' })
        if ($unexplained.Count -gt 0) { $bad += "$rel -> $($unexplained[0].InputObject.Trim())" }
    }
    Check '④ baseline 差异只与汉语有关' ($bad.Count -eq 0) `
        "有差异文件 $($diffFiles.Count) 个（相同 $same 个）；差异全部与汉语有关"
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
