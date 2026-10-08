# ============================================================================
#  gen_stdlib_names.ps1 -- 从上游 lib.*.d.ts 里抽出「标准库全部名字」清单。
#
#  用途：这是【标准库汉化】的翻译底稿（单一真源是上游的 lib 文件；本脚本产出清单）。
#  产出：stdlib\名字清单.tsv，每行  kind <TAB> english <TAB> 译名
#        kind = global（全局类型/值）| member（接口成员）
#        译名列留空，由翻译逐步填。
#
#  用法：
#    pwsh -File tools\gen_stdlib_names.ps1            # 重新生成
#    pwsh -File tools\gen_stdlib_names.ps1 -Check     # 只核对是否最新（守卫用）
#
#  ENCODING: UTF-8 with BOM 写清单。
# ============================================================================

param(
    [string] $LibDir = '',
    [string] $Out    = '',
    [switch] $Check
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
if (-not $LibDir) { $LibDir = Join-Path $repo 'tsc\internal\bundled\libs' }
if (-not $Out)    { $Out    = Join-Path $repo 'stdlib\名字清单.tsv' }
$TAB = [string][char]9

$files = @(Get-ChildItem $LibDir -File -Filter 'lib.*.d.ts' | Sort-Object Name)
if ($files.Count -eq 0) { throw ('找不到 lib 文件：' + $LibDir) }

$rows = New-Object System.Collections.Generic.List[string]
$seen = New-Object System.Collections.Generic.HashSet[string]

function AddRow([string]$kind, [string]$name) {
    if ($name) {
        $k = $kind + $TAB + $name
        if ($script:seen.Add($k)) { $script:rows.Add($k + $TAB) }
    }
}

foreach ($f in $files) {
    foreach ($line in (Get-Content $f.FullName -Encoding UTF8)) {
        foreach ($m in [regex]::Matches($line, '^\s*(?:interface|type)\s+([A-Za-z_$][\w$]*)')) { AddRow 'global' $m.Groups[1].Value }
        foreach ($m in [regex]::Matches($line, '^\s*declare\s+(?:const|let|var|function|class|namespace|module)\s+([A-Za-z_$][\w$]*)')) { AddRow 'global' $m.Groups[1].Value }
        foreach ($m in [regex]::Matches($line, '^\s{4,}(?:readonly\s+|static\s+)?([A-Za-z_$][\w$]*)\s*[<(?:]')) { AddRow 'member' $m.Groups[1].Value }
    }
}

$sorted = @($rows | Sort-Object)
Write-Host ('lib 文件 ' + $files.Count + ' 个；抽出名字 ' + $sorted.Count + ' 条')

if ($Check) {
    if (-not (Test-Path $Out)) { throw ('清单不存在：' + $Out) }
    $disk = @(Get-Content $Out -Encoding UTF8 | Where-Object { $_ -match '\S' })
    $diff = @(Compare-Object $disk $sorted)
    if ($diff.Count -ne 0) {
        throw ('清单与 lib 不同步（差异 ' + $diff.Count + ' 条）；请运行 tools\gen_stdlib_names.ps1 并提交结果')
    }
    Write-Host '  清单与上游 lib 一致'
    exit 0
}

$dir = Split-Path -Parent $Out
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
Set-Content -Path $Out -Value $sorted -Encoding utf8BOM
Write-Host ('  已生成 ' + $Out)
