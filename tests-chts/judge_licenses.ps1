# 许可与披露判定：调用同目录的 verify_licenses.py（Python，自带自测）。
#
# 为什么单独套一层 .ps1：run_all.ps1 的循环是「每项一个 judge_*.ps1」，
# 这样它就能和其余判定一样被统一收集退出码与汇总。
#
# 判据本身在 verify_licenses.py 里（Python），因为披露文本的逐条断言用 Python 写更直白。

$ErrorActionPreference = 'Continue'

$py = (Get-Command python -ErrorAction SilentlyContinue).Source
if (-not $py) { $py = (Get-Command py -ErrorAction SilentlyContinue).Source }
if (-not $py) {
    Write-Host '  [失败] 找不到 python —— 无法运行许可/披露判定'
    exit 1
}

& $py (Join-Path $PSScriptRoot 'verify_licenses.py')
exit $LASTEXITCODE
