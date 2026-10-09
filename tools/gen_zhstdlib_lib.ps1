# ============================================================================
#  gen_zhstdlib_lib.ps1 -- 从上游 lib 生成【汉语成员声明】（增补式）。
#
#  思路（见 stdlib/规模化方案.md）：不改上游 lib，只从每个 interface 块里
#  挑出译名表里有的【单行成员】，把成员名换成汉语名，生成【增补声明】
#  （接口名与类型一律原样保留）—— 于是绕开了交叉引用难题，英文用法照旧可用。
#
#  单一真源：上游 lib（tsc/internal/bundled/libs）+ stdlib/试点-数组与数学.tsv
#  产出：tests-chts/zhstdlib/汉语标准库-成员.generated.d.ts（勿手改）
#
#  用法：pwsh -File tools\gen_zhstdlib_lib.ps1          # 重新生成
#        pwsh -File tools\gen_zhstdlib_lib.ps1 -Check   # 只核对是否最新（守卫用）
#
#  已知未覆盖（留给后续）：多行/重载成员、全局别名（数学/数组/控制台…，
#  仍由手写的 汉语标准库.d.ts 负责）、以及 DOM。
# ============================================================================

param(
    [string] $LibDir = '',
    [string] $Table  = '',
    [string] $Out    = '',
    [switch] $Check
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
if (-not $LibDir) { $LibDir = Join-Path $repo 'tsc\internal\bundled\libs' }
if (-not $Table)  { $Table  = Join-Path $repo 'stdlib\试点-数组与数学.tsv' }
if (-not $Out)    { $Out    = Join-Path $repo 'tests-chts\zhstdlib\汉语标准库-成员.generated.d.ts' }
$TAB = [string][char]9
$CRLF = [string][char]13 + [string][char]10

# 必须【区分大小写】：英文标识符大小写敏感（readOnly 与 readonly 不是同一个名字）。
# 否则 `readonly [index: number]: string;` 这类索引签名的 `readonly` 会被误当成员名改名。
# 英文名 -> 汉语名【列表】：允许一英多汉（如 log→对数/日志，两者都改写回 log，运行时都对）。
# 若只存一个，后写的会覆盖先写的，导致先前的译名丢掉声明（2026-10-08 真踩过：filter 的「过滤」被「滤镜」覆盖）。
$en2zh = New-Object 'System.Collections.Generic.Dictionary[string,System.Collections.Generic.List[string]]'
foreach ($line in (Get-Content $Table -Encoding UTF8)) {
    if ($line -notmatch '\S') { continue }
    $p = $line -split $TAB
    if ($p.Count -lt 3 -or $p[0].Trim() -ne 'member') { continue }
    $en = $p[1].Trim(); $zh = $p[2].Trim()
    if (-not $en2zh.ContainsKey($en)) { $en2zh[$en] = New-Object 'System.Collections.Generic.List[string]' }
    if (-not $en2zh[$en].Contains($zh)) { $en2zh[$en].Add($zh) }
}

# 扫全部 lib（含 DOM —— 用户 2026-10-08 裁定「含 DOM」）。
# 扫全部 lib（含 DOM —— 用户 2026-10-08 裁定「含 DOM」），但要排除【默认不加载】的变体：
# webworker / scripthost 里的成员引用了默认 lib 没有的类型（如 Client），抄进来会「找不到名称」。
$libs = @(Get-ChildItem $LibDir -File -Filter 'lib.*.d.ts' | Where-Object { $_.Name -notmatch 'webworker|scripthost' } | Sort-Object Name)
$blocks = New-Object System.Collections.Generic.List[string]
$blocks.Add('// 【生成物，请勿手改】由 tools/gen_zhstdlib_lib.ps1 从上游 lib + stdlib 译名表生成。')
$blocks.Add('// 只做「成员改名」的增补：接口名与类型原样保留，英文用法照旧可用。')
$blocks.Add('')
$ifaceCount = 0; $skipped = New-Object System.Collections.Generic.List[string]
foreach ($lib in $libs) {
    $cur = $null; $depth = 0; $isNs = $false
    $members = New-Object System.Collections.Generic.List[string]
    foreach ($line in (Get-Content $lib.FullName -Encoding UTF8)) {
        if ($cur -eq $null) {
            # 接口头可能带 extends（DOM 里几乎都带，如 interface Node extends EventTarget {），必须允许。
            $m = [regex]::Match($line, '^interface\s+([A-Za-z_$][\w$]*(?:<[^>]*>)?)(?:\s+extends[^{]*)?\s*\{')
            if ($m.Success) { $cur = $m.Groups[1].Value; $depth = 1; $isNs = $false; $members.Clear(); continue }
            # 命名空间（如 declare namespace WebAssembly { function instantiate(...) }）：
            # 里头的 function/var 成员也要能出汉语别名（六·八 的第三类盲区）。
            $nm = [regex]::Match($line, '^declare namespace ([A-Za-z_$][\w$]*)\s*\{')
            if ($nm.Success) { $cur = $nm.Groups[1].Value; $depth = 1; $isNs = $true; $members.Clear() }
            continue
        }
        $depth += ([regex]::Matches($line, '\{')).Count - ([regex]::Matches($line, '\}')).Count
        if ($depth -le 0) {
            if ($members.Count -gt 0) {
                $ifaceCount++
                $blocks.Add(($(if ($isNs) { 'declare namespace ' } else { 'interface ' })) + $cur + ' {')
                foreach ($mm in $members) { $blocks.Add($mm) }
                $blocks.Add('}'); $blocks.Add('')
            }
            $cur = $null; $depth = 0; continue
        }
        # 前缀含访问器 get/set（须有后随空格，否则名为 get 的方法 Map.get() 会被误当访问器）。
        # 命名空间里的 type/class/interface/enum/export 声明是【类型名】不是成员，
        # 绝不能改名（否则 `type X = ...` 会变成 `种类 X = ...` 这种非法声明 —— 2026-10-08 踩过）。
        if ($isNs -and $line -match '^\s{4}(type|class|interface|enum|export|const\s+enum)\b') { continue }
        # 命名空间里常见 `function 名(...)` / `var 名: T`，前缀要一起吃掉。
        $memberRe = if ($isNs) { '^(\s{4})(function\s+|var\s+|let\s+|const\s+)?([A-Za-z_$][\w$]*)(.*)$' } else { '^(\s{4})(readonly\s+|static\s+|get\s+|set\s+)?([A-Za-z_$][\w$]*)(.*)$' }
        $m = [regex]::Match($line, $memberRe)
        if (-not $m.Success) { continue }
        $name = $m.Groups[3].Value
        if (-not $en2zh.ContainsKey($name)) { continue }
        $rest = $m.Groups[4].Value
        # 多行/重载成员暂时跳过（登记为待办）；把名字记下来，便于后续补。
        if ($rest -notmatch ';\s*$') { $skipped.Add($name); continue }
        if (([regex]::Matches($rest, '\(')).Count -ne ([regex]::Matches($rest, '\)')).Count) { $skipped.Add($name); continue }
        # 每个汉语别名都生成一条（保证不会漏掉任何已发布的译名）。
        foreach ($zhName in $en2zh[$name]) {
            $members.Add($m.Groups[1].Value + $m.Groups[2].Value + $zhName + $rest)
        }
    }
}
$text = ($blocks -join $CRLF) + $CRLF
Write-Host ('lib ' + $libs.Count + ' 个；接口块 ' + $ifaceCount + ' 个；跳过 ' + $skipped.Count + ' 处')
if ($skipped.Count -gt 0) { Write-Host ('  跳过的成员（多行/重载，待支持）：' + ((@($skipped | Sort-Object -Unique)) -join ' ')) }

if ($Check) {
    if (-not (Test-Path $Out)) { throw ('生成物不存在：' + $Out) }
    $disk = ([System.IO.File]::ReadAllText($Out)) -replace ([string][char]13 + [string][char]10), ([string][char]10)
    if ($disk.TrimEnd() -ne ($text -replace ([string][char]13 + [string][char]10), ([string][char]10)).TrimEnd()) { throw ('生成物与上游 lib/译名表不同步；请运行 tools\gen_zhstdlib_lib.ps1 并提交结果') }
    Write-Host '  生成物与 lib/译名表一致'
    exit 0
}
$dir = Split-Path -Parent $Out
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
[System.IO.File]::WriteAllText($Out, $text, (New-Object System.Text.UTF8Encoding($true)))
Write-Host ('  已生成 ' + $Out)
