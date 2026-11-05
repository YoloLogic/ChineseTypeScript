# 语言服务判定：把 chtsc --lsp --stdio 当真 LSP 服务器跑一遍，检查诊断/补全/悬浮。
# 判据必须能失败：③ 故意放一个语法错误的文件，若"0 诊断"就会红。
param(
    [string]$Chtsc = '',
    [string]$Work = ''
)
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'common.ps1')
if (-not $Chtsc) { $Chtsc = Resolve-ChtscPath '' }
if (-not $Work) { $Work = Resolve-JudgeWork '' 'judge_lsp' }
if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force $Work | Out-Null

$ok = [System.Collections.Generic.List[object]]::new()
function Check([string]$name, [bool]$pass, [string]$detail) {
    $ok.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($pass) { '通过' } else { '失败' }); 说明 = $detail })
    Write-Host ($(if ($pass) { '  [通过] ' } else { '  [失败] ' }) + $name + ' —— ' + $detail)
}

$good = @'
常量 数表 = [3, 1, 2];
控制台.日志("最大：", 数学.取最大(...数表));
常量 和 = 数表.归纳((甲, 乙) => 甲 + 乙, 0);
'@
$bad = @'
常量 甲 = ;
'@
Set-Content -Path (Join-Path $Work '正常.ts') -Value $good -Encoding UTF8 -NoNewline
Set-Content -Path (Join-Path $Work '坏掉.ts') -Value $bad -Encoding UTF8 -NoNewline

$driver = Join-Path $PSScriptRoot 'lsp_check.js'
$probe = '{"locale":"zh-cn","completeAfter":"控制台.","hoverOn":"归纳"}'
$out = & node $driver $Chtsc $Work '正常.ts' $probe 2>&1 | Out-String
$json = $null
try { $json = $out | ConvertFrom-Json } catch { $json = $null }
if (-not $json) { throw ("语言服务没有返回可解析结果：" + $out.Substring(0, [Math]::Min(400, $out.Length))) }

Check '① 握手成功（服务端自称 typescript）' ($json.server -eq 'typescript') ('server=' + $json.server + ' 版本=' + $json.version)
Check '② 汉语源码零诊断（关键字 + 标准库都认）' ($json.diagnostics.Count -eq 0) ('诊断=' + $json.diagnostics.Count)

$badOut = & node $driver $Chtsc $Work '坏掉.ts' '{"locale":"zh-cn"}' 2>&1 | Out-String
$badJson = $badOut | ConvertFrom-Json
Check '③ 坏文件必须报错（判据能失败）' ($badJson.diagnostics.Count -gt 0) ('诊断=' + $badJson.diagnostics.Count + ' 首条=' + $(if ($badJson.diagnostics.Count) { $badJson.diagnostics[0].message } else { '（无）' }))

$labels = @($json.completion)
Check '④ 补全里有汉语成员 日志' ($labels -contains '日志') ('候选 ' + $labels.Count + ' 条；前 8：' + (($labels | Select-Object -First 8) -join '、'))
Check '⑥ 诊断语言跟随客户端 locale（zh-cn 时是汉语）' ($badJson.diagnostics.Count -gt 0 -and $badJson.diagnostics[0].message -match '[\u4e00-\u9fff]') ('报文=' + $(if ($badJson.diagnostics.Count) { $badJson.diagnostics[0].message } else { '（无）' }))
Check '⑤ 悬浮能给出汉语成员签名（含 归纳）' ($json.hover -match '归纳') ('悬浮=' + ($json.hover -replace '\s+', ' ').Substring(0, [Math]::Min(90, ($json.hover -replace '\s+', ' ').Length)))

$fail = @($ok | Where-Object { $_.结果 -eq '失败' }).Count
Write-Host ''
Write-Host ('合计 {0} 项，失败 {1} 项' -f $ok.Count, $fail)
if ($fail -gt 0) { exit 1 }
