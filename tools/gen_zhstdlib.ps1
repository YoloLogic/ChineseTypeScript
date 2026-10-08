# ============================================================================
#  gen_zhstdlib.ps1 -- 从 stdlib 的译名表生成 Go 里的汉语标准库名表。
#
#  单一真源：stdlib\试点-数组与数学.tsv（kind <TAB> english <TAB> 译名）
#  产出：tsc\internal\scanner\zh_stdlib_generated.go（只有两张表，手写逻辑在 zh_stdlib.go）
#
#  用法：
#    pwsh -File tools\gen_zhstdlib.ps1            # 重新生成
#    pwsh -File tools\gen_zhstdlib.ps1 -Check     # 只核对是否最新（守卫用）
#
#  ENCODING: UTF-8 with BOM。
# ============================================================================

param(
    [string] $Table = '',
    [string] $Out   = '',
    [switch] $Check
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
if (-not $Table) { $Table = Join-Path $repo 'stdlib\试点-数组与数学.tsv' }
if (-not $Out)   { $Out   = Join-Path $repo 'tsc\internal\scanner\zh_stdlib_generated.go' }
$TAB = [string][char]9

if (-not (Test-Path $Table)) { throw ('找不到译名表：' + $Table) }

$globals = New-Object System.Collections.Generic.List[string]
$members = New-Object System.Collections.Generic.List[string]
foreach ($line in (Get-Content $Table -Encoding UTF8)) {
    if ($line -notmatch '\S') { continue }
    $p = $line -split $TAB
    if ($p.Count -lt 2) { continue }
    $kind = $p[0].Trim()
    $zh = $p[2].Trim()
    if (-not $zh) { throw ('译名为空：' + $line) }
    if ($zh.Length -lt 2 -or $zh.Length -gt 6) { throw ('译名不合 2-6 汉字定则（按字符数粗查）：' + $line) }
    if ($kind -eq 'global') { $globals.Add($zh) }
    elseif ($kind -eq 'member') { $members.Add($zh) }
    else { throw ('未知 kind：' + $kind) }
}

function EmitTable([string]$varName, $names) {
    $sb = New-Object System.Text.StringBuilder
    [void]$sb.AppendLine('var ' + $varName + ' = map[string]string{')
    foreach ($n in $names) {
        $key = $n
        $val = ($script:rows[$n])
        [void]$sb.AppendLine(($TAB + '"' + $key + '": "' + $val + '",'))
    }
    [void]$sb.AppendLine('}')
    return $sb.ToString()
}

# 先建 汉->英 映射
$rows = @{}
foreach ($line in (Get-Content $Table -Encoding UTF8)) {
    if ($line -notmatch '\S') { continue }
    $p = $line -split $TAB
    if ($p.Count -lt 3) { continue }
    $rows[$p[2].Trim()] = $p[1].Trim()
}

$content = @()
$content += 'package scanner'
$content += ''
$content += '// ChineseTypeScript：标准库汉语别名 → 英文规范名【生成物，请勿手改】。'
$content += '//'
$content += '// 单一真源：stdlib/试点-数组与数学.tsv'
$content += '// 生成：pwsh -File tools/gen_zhstdlib.ps1（-Check 只核对）'
$content += '// 手写逻辑（查询函数与设计说明）在 zh_stdlib.go。'
$content += ''
$content += (EmitTable 'zhStdlibGlobals' $globals)
$content += ''
$content += (EmitTable 'zhStdlibMembers' $members)
$text = ($content -join [char]10) + [char]10

Write-Host ('译名表 ' + $globals.Count + ' 全局 + ' + $members.Count + ' 成员')

# 比较「(键,值) 集合」而不是原始文本 —— 生成物会过 gofmt（对齐排版），
# 文本级比较会假报不同步。
function ExtractPairs([string]$t) {
    $out = New-Object System.Collections.Generic.List[string]
    foreach ($m in [regex]::Matches($t, '"([^"]+)":\s*"([^"]+)"')) {
        $out.Add($m.Groups[1].Value + '=>' + $m.Groups[2].Value)
    }
    return @($out | Sort-Object)
}

if ($Check) {
    if (-not (Test-Path $Out)) { throw ('生成物不存在：' + $Out) }
    $want = ExtractPairs $text
    $disk = ExtractPairs ([System.IO.File]::ReadAllText($Out))
    if (($want -join '|') -ne ($disk -join '|')) { throw ('生成物与译名表不同步；请运行 tools\gen_zhstdlib.ps1 并提交结果') }
    Write-Host '  生成物与译名表一致（按键值集合比较）'
    exit 0
}

Set-Content -Path $Out -Value $text -NoNewline -Encoding utf8BOM
Write-Host ('  已生成 ' + $Out)
