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
#  ENCODING: UTF-8 **无 BOM**。
#  ⚠ 生成物是 Go 源文件：Go 在 Linux/macOS 上对 BOM 直接报
#     「invalid BOM in the middle of the file」，会让底层包 build failed、
#     进而全仓库测试红。Windows 上容忍，所以本地永远看不出问题（CI 才暴露）。
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
    # 一律用 LF、且结尾不留换行：这样拼出来的 Go 文件与 gofmt 的输出一致
    # （AppendLine 在 Windows 上写 CRLF，还多一个尾换行 → 会让 CI 的 format 检查报差异）。
    # 还要按【最长的键】补齐空格 —— gofmt 会把 map 的值列对齐，不补就会出现
    # format 检查的差异。汉字在 UTF-16 里各占 1 个 char，与 gofmt/tabwriter 的按 rune 计一致。
    $maxLen = 0
    foreach ($n in $names) { $l = ('"' + $n + '":').Length; if ($l -gt $maxLen) { $maxLen = $l } }
    $sb = New-Object System.Text.StringBuilder
    [void]$sb.Append('var ' + $varName + ' = map[string]string{' + [char]10)
    foreach ($n in $names) {
        $key = ('"' + $n + '":')
        $val = ($script:rows[$n])
        $pad = ' ' * ($maxLen - $key.Length + 1)
        [void]$sb.Append($TAB + $key + $pad + '"' + $val + '",' + [char]10)
    }
    [void]$sb.Append('}')
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

# 唯一性守卫（2026-10-08 定）：emit 改写做的是「汉语名 → 英文名」，与接收者类型无关，
# 所以译名必须【一英一汉、全局唯一】：同一个汉语名不得对应两个英文名，反之亦然。
# 否则 `Array.map` 与 `Map.map` 这类会改写错。
# 必须【区分大小写】：英文标识符大小写敏感（map 是 Array 的成员、Map 是构造器，两者不同名）。
# PowerShell 的 @{} 哈希表默认不区分大小写，会把它们误判成重复。
$zhToEn = New-Object 'System.Collections.Generic.Dictionary[string,string]'
$enToZh = New-Object 'System.Collections.Generic.Dictionary[string,string]'
foreach ($line in (Get-Content $Table -Encoding UTF8)) {
    if ($line -notmatch '\S') { continue }
    $p = $line -split $TAB
    if ($p.Count -lt 3) { continue }
    $en = $p[1].Trim(); $zh = $p[2].Trim()
    if ($zhToEn.ContainsKey($zh) -and $zhToEn[$zh] -ne $en) { throw ('译名重复映射：汉语「' + $zh + '」同时对应 ' + $zhToEn[$zh] + ' 与 ' + $en) }
    # 注意：这里【只】查「一个汉语名 → 一个英文名」（改写只需要这个方向）。
    # 「一个英文名 → 一个汉语名」是【故意不查】的：`log` 在 Math 上叫「对数」、在 console 上叫「日志」，
    # 两个汉语名都改写回 `log`，**改写结果同样正确**，而按语义分开命名反而更清楚。
    # （2026-10-08：原先多查了一层反向唯一性，被 console.log 与 Math.log 撞出来，属过度约束。）
    $zhToEn[$zh] = $en
}
Write-Host ('唯一性守卫通过：' + $zhToEn.Count + ' 条一英一汉')

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

# 写 Go 源文件必须无 BOM（见文件头说明）。UTF8Encoding($false) = 不写 BOM。
[System.IO.File]::WriteAllText($Out, $text, (New-Object System.Text.UTF8Encoding($false)))
Write-Host ('  已生成 ' + $Out)
