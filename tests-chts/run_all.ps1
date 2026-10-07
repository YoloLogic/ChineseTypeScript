# 一条命令跑完 ChineseTypeScript 的全部判定
#
#   pwsh -File tests-chts\run_all.ps1
#
# 五项判定按顺序跑，最后给汇总：
#   1) judge_chts.ps1     —— 关键字与端到端（生成器幂等、守卫测试、英文逐字节一致、
#                            汉语源编译、产物无汉语关键字、node 真跑、非关键字汉语标识符）
#   2) judge_proj.ps1     —— 项目级与模块级（无扩展名导入、显式 .chts 导入、tsc -p）
#   3) judge_oss.ps1      —— 大规模零回归（真实 TypeScript 语料，诊断与产物逐字节比对）
#   4) judge_gotest.ps1   —— 全集回归（跑上游自带 Go 测试全集，与基线对照；
#                            并要求每个 baseline 差异逐行可用「插入 .chts」解释）
#   5) judge_tutorial.ps1 —— 教学教程（9 个例子真编译真运行、输出逐行相符）
#
# 用 -SkipGoTest 可跳过第 4 项（它要把全集测试跑两遍，最慢）。

param(
    [int]$OssSample = 600,
    [int]$OssEmit = 60,
    [switch]$SkipGoTest
)

$ErrorActionPreference = 'Continue'
$summary = New-Object System.Collections.Generic.List[object]

$runs = @(
    @{ 名称 = 'judge_chts.ps1'; 参数 = @() },
    @{ 名称 = 'judge_proj.ps1'; 参数 = @() },
    @{ 名称 = 'judge_oss.ps1'; 参数 = @('-Sample', "$OssSample", '-EmitSample', "$OssEmit") },
    @{ 名称 = 'judge_tutorial.ps1'; 参数 = @() }
)
if (-not $SkipGoTest) { $runs += @{ 名称 = 'judge_gotest.ps1'; 参数 = @() } }

foreach ($r in $runs) {
    $path = Join-Path $PSScriptRoot $r.名称
    Write-Host ''
    Write-Host ('#' * 78)
    Write-Host "# $($r.名称)"
    Write-Host ('#' * 78)
    & pwsh -NoProfile -ExecutionPolicy Bypass -File $path @($r.参数) 2>&1 | ForEach-Object { $_ }
    $code = $LASTEXITCODE
    $summary.Add([pscustomobject]@{ 判定脚本 = $r.名称; 退出码 = $code; 结果 = $(if ($code -eq 0) { '全部通过' } else { '有失败项' }) })
}

Write-Host ''
Write-Host ('#' * 78)
Write-Host '# 总汇总'
Write-Host ('#' * 78)
$summary | ForEach-Object { "  [$($_.结果)] $($_.判定脚本)  (退出码 $($_.退出码))" }
$fail = ($summary | Where-Object { $_.退出码 -ne 0 }).Count
Write-Host ''
Write-Host "  四项判定，失败 $fail 项"
if ($fail -eq 0) { Write-Host '  结论：ChineseTypeScript 全部判定通过'; exit 0 }
else { Write-Host '  结论：有判定失败，必须查清'; exit 1 }
