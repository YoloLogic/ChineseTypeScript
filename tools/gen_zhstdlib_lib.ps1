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
# 注意排除 lib.zhts.d.ts —— 那是【本生成器的输出】，不排除的话它会把自己也扫一遍（自我递归）。
# 注意排除【所有】 lib.zhts.*.d.ts —— 那些是本生成器的输出（分块）；只排 lib.zhts.d.ts
# 一个名字会让 dom/es2015 等分块被当成输入再扫一遍 → 把 get 又翻成 获取、产物语法坏掉（第 10 轮踩过）。
$libs = @(Get-ChildItem $LibDir -File -Filter 'lib.*.d.ts' | Where-Object { $_.Name -notmatch 'webworker|scripthost' -and $_.Name -notmatch '^lib\.zhts\.' } | Sort-Object Name)
$blocks = New-Object System.Collections.Generic.List[string]
$blocks.Add('// 【生成物，请勿手改】由 tools/gen_zhstdlib_lib.ps1 从上游 lib + stdlib 译名表生成。')
$blocks.Add('// 只做「成员改名」的增补：接口名与类型原样保留，英文用法照旧可用。')
$blocks.Add('')
$ifaceCount = 0; $skipped = New-Object System.Collections.Generic.List[string]
# 【按来源 lib 分块】块键 -> 该块的行（规格六·十二）。
# 为什么要分块：我们的增补会用到来来源 lib 的类型（dom 的 BufferSource、es2022.regexp 的
# RegExpIndicesArray…），而用户可以只加载 es2020 不加载 dom —— 单文件无条件加载必然报错。
# 分块后每个块只与自己的来源 lib 同生共死（由 compiler 在解析 lib 引用时一起加载）。
$chunks = @{}
foreach ($lib in $libs) {
    $key = ($lib.Name -replace '^lib\.', '') -replace '\.d\.ts$', ''
    if (-not $chunks.ContainsKey($key)) { $chunks[$key] = New-Object System.Collections.Generic.List[string] }
    $cur = $null; $depth = 0; $isNs = $false
    $members = New-Object System.Collections.Generic.List[string]
    foreach ($line in (Get-Content $lib.FullName -Encoding UTF8)) {
        if ($pending -ne $null) {
            $pending.Cont.Add($line)
            $pending.Text = $pending.Text + [string][char]10 + $line
            $tail = $line.TrimEnd()
            # 完成条件：行尾分号 + 圆括号平衡 + 【花括号平衡】。
            # 花括号那一项是必须的：对象字面量类型的成员（如 RegExp 的 groups?: { ... };）
            # 第一行以 { 结尾、第二行以 ; 结尾，只查分号会把它【提前截断】→ TS1131（六·十）。
            if (($tail -match ';\s*$') -and
                (([regex]::Matches($pending.Text, '\(')).Count -eq ([regex]::Matches($pending.Text, '\)')).Count) -and
                (([regex]::Matches($pending.Text, '\{')).Count -eq ([regex]::Matches($pending.Text, '\}')).Count)) {
                foreach ($zhName in $en2zh[$pending.Name]) { $members.Add($pending.Prefix + $zhName + $pending.FirstRest) }
                foreach ($c in $pending.Cont) { $members.Add($c) }
                $pending = $null
            }
            continue
        }
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
                $ifaceLines = @((($(if ($isNs) { 'declare namespace ' } else { 'interface ' })) + $cur + ' {'))
                foreach ($mm in $members) { $ifaceLines += $mm }
                $ifaceLines += '}'
                $ifaceLines += ''
                foreach ($one in $ifaceLines) { $blocks.Add($one) }
                foreach ($one in $ifaceLines) { $chunks[$key].Add($one) }
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
        # 【多行成员】声明跨行（如 flat 的 FlatArray、Reflect.apply 的重载）时，
        # 先把它攒起来，等括号配平且以 ; 收尾再发射（2026-10-08 实现；此前一律跳过）。
        $isComplete = ($rest -match ';\s*$') -and (([regex]::Matches($rest, '\(')).Count -eq ([regex]::Matches($rest, '\)')).Count)
        if (-not $isComplete) {
            $pending = @{ Name = $name; Prefix = ($m.Groups[1].Value + $m.Groups[2].Value); FirstRest = $rest; Cont = (New-Object System.Collections.Generic.List[string]); Text = $rest }
            continue
        }
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

# ---- 输出：按来源 lib 分块的 lib 文件（自动加载用，规格六·十二）----------------
# 为什么不是单个文件：我们的增补会用到来来源 lib 的类型（dom 的 BufferSource、
# es2022.regexp 的 RegExpIndicesArray…），而用户可以只加载 es2020 不加载 dom ——
# 单文件无条件加载【不可能】对任意 lib 集合都正确（第 8/9 轮实测）。
# 分块后：每个块只与其来源 lib 同生共死（compiler 加载 lib.<键>.d.ts 时一并加载本块）。
$repo = Split-Path -Parent $PSScriptRoot
$globalsPath = Join-Path $repo 'tests-chts\zhstdlib\汉语标准库.d.ts'
$LibOutDir = $LibDir
$noticePath = Join-Path $repo 'tsc\internal\bundled\CopyrightNotice.txt'
$notice = ([System.IO.File]::ReadAllText($noticePath)) -replace ($CRLF), ([string][char]10)
$LF = [string][char]10

# 手写全局按 '// @lib <键>' 标记归入对应分块（没标记的行是文件头说明，丢弃）。
$currentLib = $null
foreach ($line in (Get-Content $globalsPath -Encoding UTF8)) {
    if ($line -match '^\s*//\s*@lib\s+(\S+)\s*$') { $currentLib = $Matches[1]; continue }
    if ($line -match '^/// <reference path=') { continue }
    if ($null -eq $currentLib) { continue }
    if (-not $chunks.ContainsKey($currentLib)) { $chunks[$currentLib] = New-Object System.Collections.Generic.List[string] }
    $chunks[$currentLib].Add($line)
}

$chunkHead = @(
    '// ChineseTypeScript 汉语标准库 —— 本块只增补【来自该来源 lib】的成员。',
    '//',
    '// 【生成物，请勿手改】由 tools/gen_zhstdlib_lib.ps1 生成（规格六·十二）。',
    '// 自动加载：compiler 在加载 lib.<键>.d.ts 时一并加载本块，故本块引用的类型必定可用。',
    ''
)
$writtenChunks = New-Object System.Collections.Generic.List[string]
foreach ($k in (@($chunks.Keys) | Sort-Object)) {
    $lines = @($chunks[$k])
    if ($lines.Count -eq 0) { continue }
    $outChunk = Join-Path $LibOutDir ('lib.zhts.' + $k + '.d.ts')
    # 上游 bundled/generate.go 要求：LF 行尾 + 以 CopyrightNotice 原文（其本身以 \n\n 结尾）
    # 加一个 \n 开头（它做 HasPrefix(copyright+"\n") 校验）。少一个换行就会被拒。
    $body = (($chunkHead + $lines) -join $LF)
    $textChunk = $notice + $LF + $body + $LF
    [System.IO.File]::WriteAllText($outChunk, $textChunk, (New-Object System.Text.UTF8Encoding($false)))
    $writtenChunks.Add($k)
}
Write-Host ('  分块写出 ' + $writtenChunks.Count + ' 个 lib.zhts.<键>.d.ts；前几个：' + (($writtenChunks | Select-Object -First 8) -join ' '))

# 块清单（Go）：编译器的挂钩要靠它判断「某个来源 lib 有没有对应的汉语块」。
# 生成它而不是手写：块的集合随译名表变化，手写必然漂移。
$chunkKeys = @($writtenChunks | Sort-Object)
$go = New-Object System.Text.StringBuilder
[void]$go.Append('// Code generated by tools/gen_zhstdlib_lib.ps1; DO NOT EDIT.' + $LF)
[void]$go.Append($LF)
[void]$go.Append('package bundled' + $LF)
[void]$go.Append($LF)
[void]$go.Append('// ZhChunkKeys 是「汉语标准库增补块」的来源 lib 键（规格六·十二）。' + $LF)
[void]$go.Append('// 块文件名 = lib.zhts.<键>.d.ts；键来自 lib.<键>.d.ts。' + $LF)
[void]$go.Append('var ZhChunkKeys = []string{' + $LF)
foreach ($k in $chunkKeys) { [void]$go.Append(($TAB + '"' + $k + '",' + $LF)) }
[void]$go.Append('}' + $LF)
[void]$go.Append($LF)
[void]$go.Append('// ZhChunkKeySet 是 ZhChunkKeys 的集合形式，供 O(1) 查询。' + $LF)
[void]$go.Append('var ZhChunkKeySet = func() map[string]bool {' + $LF)
[void]$go.Append(($TAB + 'm := make(map[string]bool, len(ZhChunkKeys))' + $LF))
[void]$go.Append(($TAB + 'for _, k := range ZhChunkKeys {' + $LF))
[void]$go.Append(($TAB + $TAB + 'm[k] = true' + $LF))
[void]$go.Append(($TAB + '}' + $LF))
[void]$go.Append(($TAB + 'return m' + $LF))
[void]$go.Append('}()' + $LF)
$chunkGoPath = Join-Path $repo 'tsc\internal\bundled\zhchunks_generated.go'
[System.IO.File]::WriteAllText($chunkGoPath, $go.ToString(), (New-Object System.Text.UTF8Encoding($false)))
Write-Host ('  已生成块清单 ' + $chunkGoPath)
# 旧的单文件聚合已废弃（它对任意 lib 集合不可能成立）：存在就删掉。
$oldAgg = Join-Path $LibOutDir 'lib.zhts.d.ts'
if (Test-Path $oldAgg) { Remove-Item $oldAgg -Force; Write-Host '  已删除废弃的 lib.zhts.d.ts（单文件聚合）' }
