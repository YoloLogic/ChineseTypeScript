# 由「模板 + 真源码」生成《ChineseTypeScript 教学教程》。
#
# 与 Chinese++ 那份（tools\make_tutorial_cpp.ps1）同一套做法，理由也一样：
#   教程里嵌的代码必须【与能跑的例子逐字一致】。手抄的副本一定会漂。
#   所以正文写在 教程\教程模板.md，例子代码从 教程\例子\*.chts 切进去，
#   期望输出也从例子的头部注释里抽出来 —— 三份东西只有一个真相。
#   附录 B 的关键字总表则从 docs\中文对照表.md（生成物）切进来。
#
# 用法：
#   pwsh -File tools\make_tutorial_chts.ps1          # 生成
#   pwsh -File tools\make_tutorial_chts.ps1 -Check   # 只核对（判定用）
#
# 模板占位符：
#   {{例子:01-骨架.chts}}        -> 该例子文件全文
#   {{期望输出:01-骨架.chts}}     -> 头部注释里「// 期望输出：」之后那些行
#   {{关键字总表}}                -> docs\中文对照表.md 的「一、关键字」一节（降一级标题）
#
# 例子头部约定（生成器与守卫同一套解析）：
#   // 期望输出：
#   // 第一行
#   （遇到空注释行或非注释行即结束）

param([switch]$Check)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$tplPath = Join-Path $root '教程\教程模板.md'
$outPath = Join-Path $root '教程\ChineseTypeScript-教学教程.md'
$exDir = Join-Path $root '教程\例子'
$cheatsheetPath = Join-Path $root 'docs\中文对照表.md'

if (-not (Test-Path $tplPath)) { throw "找不到模板：$tplPath" }
if (-not (Test-Path $exDir)) { throw "找不到例子目录：$exDir" }
if (-not (Test-Path $cheatsheetPath)) { throw "找不到关键字对照表：$cheatsheetPath" }

function Get-Expected([string]$path) {
    $lines = @(Get-Content -LiteralPath $path -Encoding UTF8)
    $out = New-Object System.Collections.Generic.List[string]
    $in = $false
    foreach ($line in $lines) {
        $t = $line.Trim()
        if (-not $in) {
            if ($t -match '^//\s*期望输出[:：]\s*$') { $in = $true }
            continue
        }
        if (-not $t.StartsWith('//')) { break }
        $body = $t.Substring(2).Trim()
        if ($body -eq '') { break }
        $out.Add($body)
    }
    if ($out.Count -eq 0) { throw "例子 $path 里没有「// 期望输出：」块（或块是空的）" }
    return $out
}

$tpl = [System.IO.File]::ReadAllText($tplPath)

# ---------- 关键字总表：从 docs\中文对照表.md 的「一、关键字」切进来 ----------
$csText = [System.IO.File]::ReadAllText($cheatsheetPath)
$csStart = $csText.IndexOf('## 一、')
$csEnd = $csText.IndexOf('## 二、')
if ($csStart -lt 0 -or $csEnd -le $csStart) { throw '对照表结构变了：取不到「一、关键字」一节（生成器要跟着改）' }
$keywordTable = $csText.Substring($csStart, $csEnd - $csStart).TrimEnd()
$keywordTable = [regex]::Replace($keywordTable, '(?m)^## ', '### ')
$tpl = $tpl.Replace('{{关键字总表}}', $keywordTable)

# ---------- 例子 ----------
$names = New-Object System.Collections.Generic.List[string]
foreach ($m in [regex]::Matches($tpl, '\{\{(?:例子|期望输出):([^}]+)\}\}')) {
    if (-not $names.Contains($m.Groups[1].Value)) { $names.Add($m.Groups[1].Value) }
}
if ($names.Count -eq 0) { throw '模板里没有 {{例子:...}} 占位符（模板被改坏了？）' }

$text = $tpl
foreach ($name in $names) {
    $p = Join-Path $exDir $name
    if (-not (Test-Path $p)) { throw "模板引用了不存在的例子：$name" }
    $src = ([System.IO.File]::ReadAllText($p)).TrimEnd("`r", "`n")
    $exp = (Get-Expected $p) -join "`n"
    $text = $text.Replace("{{例子:$name}}", $src)
    $text = $text.Replace("{{期望输出:$name}}", $exp)
}

$left = [regex]::Matches($text, '\{\{(?:例子|期望输出|关键字总表)[^}]*\}\}')
if ($left.Count -gt 0) { throw ("还有没被替换的占位符：{0}" -f (($left | ForEach-Object { $_.Value }) -join '、')) }

if ($Check) {
    if (-not (Test-Path $outPath)) { throw "缺少 $outPath，请先运行 tools\make_tutorial_chts.ps1" }
    $cur = [System.IO.File]::ReadAllText($outPath)
    if ($cur -ne $text) {
        throw ("教程与模板/例子/对照表不一致：$outPath`n" +
               "  请运行 tools\make_tutorial_chts.ps1 并提交结果；`n" +
               "  若你手改过教程正文，请把改动搬进 教程\教程模板.md（它才是正文的真相）。")
    }
    Write-Host ("教程与模板/例子/对照表一致（{0} 个例子，{1} 行）：{2}" -f $names.Count, ($text -split "`n").Count, $outPath)
    exit 0
}

[System.IO.File]::WriteAllText($outPath, $text)
Write-Host ("已生成 {0}（{1} 个例子，{2} 行）" -f $outPath, $names.Count, ($text -split "`n").Count)
