# ============================================================================
#  judge_zhstdlib.ps1 -- 标准库汉化【试点：数组 + 数学】的阶段判定。
#
#  本轮（阶段②）只覆盖【声明层】：汉语名要能通过类型检查，且英文用法同时可用。
#  emit 改写（甲.追加 → 甲.push）属于下一阶段，尚未实现 —— 见 stdlib/README.md。
#
#  判据：
#    ① 汉语声明让「数组/数学/追加/映射/向下取整…」全套通过类型检查
#    ② 负对照：未声明的汉语成员必须报 TS2339（证明①不是橡皮图章）
#    ③ 别名并存：同一份声明下，英文用法（push/floor）与汉语用法都通过
#
#  ENCODING: UTF-8 with BOM。
# ============================================================================

param(
    [string] $Tsc  = 'E:\cts-build\chtsc.exe',
    [string] $Src  = '',   # 夹具源（仓库内，已跟踪：汉语标准库.d.ts / 主.ts）
    [string] $Work = '',   # 判定工作目录（默认在仓库【外】，避免生成物混进仓库）
    [switch] $NoBuild
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
if (-not $Src)  { $Src  = Join-Path $repo 'tests-chts\zhstdlib' }
if (-not $Work) { $Work = Join-Path $env:TEMP 'zhstdlib-judge' }
if (Test-Path $Work) { Remove-Item $Work -Recurse -Force }
New-Item -ItemType Directory -Force $Work | Out-Null
Copy-Item (Join-Path $Src '主.ts') $Work -Force

$results = New-Object System.Collections.Generic.List[object]
function Check([string]$name, [bool]$ok, [string]$detail) {
    $results.Add([pscustomobject]@{ 判定 = $name; 结果 = $(if ($ok) { '通过' } else { '失败' }); 说明 = $detail })
    Write-Host ($(if ($ok) { '  [通过] ' } else { '  [失败] ' }) + $name + ' —— ' + $detail)
}
function RunTsc([string]$file) {
    $out = (& $Tsc $file --noEmit --pretty false --locale en 2>&1 | Out-String)
    return @{ code = $LASTEXITCODE; text = $out }
}

if (-not $NoBuild) {
    Write-Host '  从当前源码重建 chtsc.exe …'
    & pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\build_chtsc.ps1') *>&1 | Out-Null
}
if (-not (Test-Path $Tsc)) { throw ('找不到编译器 ' + $Tsc) }

# ① 汉语名通过类型检查
$a = RunTsc (Join-Path $Work '主.ts')
Check '① 汉语标准库名通过类型检查' ($a.code -eq 0) ('主.ts exit=' + $a.code + $(if ($a.code -ne 0) { '；' + ($a.text -split [char]10)[0] } else { '' }))

# ② 负对照：未声明的汉语成员必须报错（文件由判定自己生成，不依赖仓库里有没有）
Set-Content -Path (Join-Path $Work '负对照.ts') -Encoding utf8 -Value (@(
    'declare const 甲: number[];',
    '甲.发送(1);'
) -join [char]10)
$b = RunTsc (Join-Path $Work '负对照.ts')
Check '② 负对照：未声明的汉语成员报 TS2339' (($b.code -ne 0) -and ($b.text -match 'TS2339')) ('负对照.ts exit=' + $b.code + ' 含 TS2339=' + [bool]($b.text -match 'TS2339'))

# ③ 英文用法与汉语用法并存（别名要求）
Set-Content -Path (Join-Path $Work '并存.ts') -Encoding utf8 -Value (@(
    '常量 甲: 数组<数字> = [3, 1];',
    '甲.追加(2);',
    '甲.push(4);',
    'console.log(数学.向下取整(1.5), Math.floor(1.5));'
) -join [char]10)
$c = RunTsc (Join-Path $Work '并存.ts')
Check '③ 英文与汉语用法并存' ($c.code -eq 0) ('并存.ts exit=' + $c.code)

# ④ 产物必须是标准 JS：汉语标准库名已打回英文规范名
$out = Join-Path $Work 'out'
if (Test-Path $out) { Remove-Item $out -Recurse -Force }
& $Tsc (Join-Path $Work '主.ts') --outDir $out --target es2020 --module commonjs --pretty false --locale en 2>&1 | Out-Null
$js = Join-Path $out '主.js'
$jsText = if (Test-Path $js) { [System.IO.File]::ReadAllText($js) } else { '' }
$hasEnglish = ($jsText -match '甲\.push\(4\)') -and ($jsText -match 'Math\.floor\(3\.7\)') -and ($jsText -match '\.length')
# 只查「汉语名被当成员/全局用」的情形；字符串字面量里的汉语（如 "向下取整="）是用户文本，不该改写。
$noChinese = (-not ($jsText -match '\.追加')) -and (-not ($jsText -match '\.向下取整')) -and (-not ($jsText -match '数学\.')) -and (-not ($jsText -match '控制台\.')) -and (-not ($jsText -match '\.找序号'))
Check '④ 产物是标准 JS（汉语名已打回英文）' ($hasEnglish -and $noChinese) ('含 push/floor/length=' + $hasEnglish + ' 无汉语标准库名=' + $noChinese)

# ⑤ node 真跑，输出必须正确
$node = (Get-Command node -ErrorAction SilentlyContinue).Source
if ($node -and (Test-Path $js)) {
    $o = (& $node $js 2>&1 | Out-String).Trim()
    Check '⑤ node 真跑输出正确' (($o -match '长度=4') -and ($o -match '合计=14') -and ($o -match '向下取整=3') -and ($o -match '控制台通过') -and ($o -match '找序号=1') -and ($o -match '乘方=8') -and ($o -match '映射取=1') -and ($o -match '承诺值=42') -and ($o -match '年=2026') -and ($o -match '正则匹配=true') -and ($o -match '解析=42') -and ($o -match '日志通过') -and ($o -match '找出=3') -and ($o -match '替换=a\+b') -and ($o -match '去空=x') -and ($o -match '双曲正弦0=0') -and ($o -match '双曲余弦0=1') -and ($o -match '定点=3\.14') -and ($o -match '整数乘=12')) ('输出=' + ($o -replace [char]10, ' / '))
} else {
    Check '⑤ node 真跑输出正确' $false '找不到 node 或产物'
}

# ⑥ 收窄守卫：用户自己声明的同名标识符【不得】被改写
Set-Content -Path (Join-Path $Work '同名变量.ts') -Encoding utf8 -Value (@(
    '常量 追加 = 5;',
    'console.log(追加 + 1);'
) -join [char]10)
$out2 = Join-Path $Work 'out2'
if (Test-Path $out2) { Remove-Item $out2 -Recurse -Force }
& $Tsc (Join-Path $Work '同名变量.ts') --outDir $out2 --target es2020 --module commonjs --pretty false --locale en 2>&1 | Out-Null
$js2 = Join-Path $out2 '同名变量.js'
$js2Text = if (Test-Path $js2) { [System.IO.File]::ReadAllText($js2) } else { '' }
Check '⑥ 收窄守卫：用户自己的「追加」不被改写' (($js2Text -match '追加') -and (-not ($js2Text -match 'push'))) ('产物含 追加=' + [bool]($js2Text -match '追加') + ' 含 push=' + [bool]($js2Text -match 'push'))

# ⑦ 单一真源守卫：Go 里的两张表必须与 stdlib 的译名表同步
& pwsh -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repo 'tools\gen_zhstdlib.ps1') -Check *>&1 | Out-Null
Check '⑦ 生成物与译名表同步（单一真源守卫）' ($LASTEXITCODE -eq 0) ('gen_zhstdlib -Check exit=' + $LASTEXITCODE)

# ⑧ 防漂移守卫：译名表里每个名字都必须【有对应声明】——
#    防「先翻译、后补声明」：译名一进表 emit 改写就生效，声明没跟上会误改用户自己的标识符。
$tsv = Join-Path $repo 'stdlib\试点-数组与数学.tsv'
# 成员声明现在由生成物提供，所以两份合起来查（手写只留全局别名）。
$dts = [System.IO.File]::ReadAllText((Join-Path $Src '汉语标准库.d.ts')) + [System.IO.File]::ReadAllText((Join-Path $Src '汉语标准库-成员.generated.d.ts'))
$missing = New-Object System.Collections.Generic.List[string]
foreach ($line in (Get-Content $tsv -Encoding UTF8)) {
    if ($line -notmatch '\S') { continue }
    $parts = $line -split ([string][char]9)
    if ($parts.Count -lt 3) { continue }
    $zh = $parts[2].Trim()
    if ($zh -and ($dts -notmatch [regex]::Escape($zh))) { $missing.Add($zh) }
}
Check '⑧ 译名表每个名字都有对应声明（防先翻译后补声明）' ($missing.Count -eq 0) ('缺声明: ' + $(if ($missing.Count) { $missing -join ' ' } else { '无' }))

# ⑨ 二进制新鲜度：chtsc.exe 不得比生成的译名表旧 ——
#    否则 -NoBuild 会拿【旧表】判定：表里有、二进制里没有，出现「加了名字却不生效」的假失败/假通过。
#    （2026-10-08 真踩过：加 控制台/集合 等名字后用 -NoBuild 跑，产物里仍是汉语名、node 报 not defined。）
$genGo = Join-Path $repo 'tsc\internal\scanner\zh_stdlib_generated.go'
if (Test-Path $genGo) {
    $binTime = (Get-Item $Tsc).LastWriteTimeUtc
    $genTime = (Get-Item $genGo).LastWriteTimeUtc
    Check '⑨ 二进制不比译名表旧（防 -NoBuild 用旧表）' ($binTime -ge $genTime) ('bin=' + $binTime.ToString('HH:mm:ss') + ' gen=' + $genTime.ToString('HH:mm:ss'))
} else {
    Check '⑨ 二进制不比译名表旧（防 -NoBuild 用旧表）' $false '找不到生成的译名表'
}

# ⑩ 文档数字守卫：stdlib/README.md 里写的译名条数必须与译名表一致（防文档漂移）。
$tablePath = Join-Path (Split-Path -Parent $PSScriptRoot) 'stdlib\试点-数组与数学.tsv'
$rows = @(Get-Content $tablePath -Encoding UTF8 | Where-Object { $_ -match '^(member|global)\t' })
$rdPath = Join-Path (Split-Path -Parent $PSScriptRoot) 'stdlib\README.md'
$rdText = [System.IO.File]::ReadAllText($rdPath)
$m = [regex]::Match($rdText, '译名：\*\*(\d+) / 7687')
$docNum = if ($m.Success) { [int]$m.Groups[1].Value } else { -1 }
Check '⑩ 文档数字与译名表一致（防文档漂移）' ($docNum -eq $rows.Count) ('README 写=' + $docNum + ' 表里=' + $rows.Count)

# ⑪ 夹具同名守卫（防「译名撞上我们自己的夹具成员」——六·六 那个缺陷的早期预警）
#   规则：夹具里【用户自己声明】的汉语成员名，不得出现在译名表中。
#   为什么需要：emit 改写是文本级的，一旦译名与用户自己的成员同名，
#   用户那处会被静默改写成英文标准库名 —— 运行时才炸（本项目已踩三次）。
$repoRootZh = Split-Path -Parent $PSScriptRoot
$fixtureDirs = @((Join-Path $repoRootZh 'tests-chts'), (Join-Path $repoRootZh '教程\例子'))
$zh2en = New-Object 'System.Collections.Generic.Dictionary[string,string]'
foreach ($row in (Get-Content $tablePath -Encoding UTF8)) {
    if ($row -notmatch '\S') { continue }
    $p = $row -split [string][char]9
    if ($p.Count -ge 3 -and $p[0].Trim() -eq 'member') { $zh2en[$p[2].Trim()] = $p[1].Trim() }
}
$collide = New-Object System.Collections.Generic.List[string]
foreach ($d in $fixtureDirs) {
    if (-not (Test-Path $d)) { continue }
    foreach ($f in (Get-ChildItem $d -Recurse -Filter '*.ts' -File -ErrorAction SilentlyContinue)) {
        # 只扫【非标准库试点】的夹具：试点本来就该用汉语标准库名。
        if ($f.Name -like '*汉语标准库*' -or $f.Directory.Name -eq 'zhstdlib') { continue }
        foreach ($line in (Get-Content $f.FullName -Encoding UTF8)) {
            # 声明形态：以汉语词开头，后面跟着冒号 / 左括号（属性或方法声明）
            $m = [regex]::Match($line, '^\s*([\u4e00-\u9fa5]{2,8})\s*[(:]')
            if ($m.Success -and $zh2en.ContainsKey($m.Groups[1].Value)) {
                $collide.Add($f.Name + ' 的成员「' + $m.Groups[1].Value + '」撞上译名 ' + $zh2en[$m.Groups[1].Value])
            }
        }
    }
}
# 【信息行，不再判失败】从 2026-10-10（长目标第 3 轮）起，「用户声明屏蔽 pass」已上线：
#   夹具里用户自己声明的汉语成员名若与译名同名，printer 会【不改写】它（判据⑬/⑭ 守着行为）。
#   所以名字撞车本身不再是缺陷 —— 这里把它打印出来，只是让我们看得见（例如 n 个），
#   不再因为「夹具恰好用过某个通用词」而挡住翻译（否则每放一批通用名词都要改夹具）。
Write-Host ('  [信息] ⑪ 夹具成员名与译名表同名的处数（已由屏蔽 pass 保护，不再判失败）: ' + $collide.Count)
if ($collide.Count -gt 0) {
    ($collide | Select-Object -Unique) | Select-Object -First 8 | ForEach-Object { Write-Host ('         · ' + $_) }
}

# ⑭ 屏蔽 pass【形态覆盖】守卫：一次证明【各种成员声明形态】的用户同名成员都不会被改写。
#   为什么要它：⑬ 只覆盖「方法声明」一种形态；collector 若漏了某种形态（如对象字面量属性、
#   属性签名），该形态的用户成员又会被误改 —— 这是最容易悄悄退化的地方，必须钉死。
Set-Content -Path (Join-Path $Work '同名形态.ts') -Encoding utf8 -Value (@(
    '类型 甲 {',
    '  长度(): 数字 { 返回 1 }',
    '  宽度: 数字 = 2',
    '}',
    '接口 乙 { 长度: 数字 }',
    '接口 丙 { 长度(): 数字 }',
    '常量 丁 = { 长度: 3 }',
    '常量 戊 = 新建 甲()',
    'console.log(戊.长度() + 戊.宽度 + 丁.长度)'
) -join [char]10)
$out4 = Join-Path $Work 'out4'
if (Test-Path $out4) { Remove-Item $out4 -Recurse -Force }
& $Tsc (Join-Path $Work '同名形态.ts') --outDir $out4 --target es2020 --module commonjs --pretty false --locale en 2>&1 | Out-Null
$js4 = Join-Path $out4 '同名形态.js'
$js4Text = if (Test-Path $js4) { [System.IO.File]::ReadAllText($js4) } else { '' }
$run4 = if ($node -and (Test-Path $js4)) { (& $node $js4 2>&1 | Out-String).Trim() } else { '' }
$zh4 = [bool]($js4Text -match '\.长度') -and [bool]($js4Text -match '\.宽度')
$en4 = [bool]($js4Text -match '\.length') -or [bool]($js4Text -match '\.width')
Check '⑭ 屏蔽 pass 形态覆盖：方法/属性/属性签名/方法签名/对象字面量属性 的用户同名成员都不被改写' (($zh4) -and (-not $en4) -and ($run4 -eq '6')) ('产物含 .长度/.宽度=' + $zh4 + ' 含 .length/.width=' + $en4 + ' 运行输出=' + $run4)

# ⑫ Go 源文件不得带 UTF-8 BOM（跨平台编译）
#   为什么必须单独钉：Go 在 Linux/macOS 上对 BOM 直接报
#   「invalid BOM in the middle of the file」——底层包 build failed 会让**全仓库**测试红。
#   Windows 上的 Go 容忍它，所以本地怎么跑都是绿的，只有 CI（ubuntu/macos）才暴露。
#   本项目的两个 Go 生成物（zh_stdlib_generated.go、genzhkeywords/main.go）曾双双带 BOM。
$bomFiles = New-Object System.Collections.Generic.List[string]
foreach ($f in (git -C $repoRootZh ls-files '*.go')) {
    $full = Join-Path $repoRootZh $f
    if (-not (Test-Path $full)) { continue }
    $fs = [System.IO.File]::OpenRead($full)
    $buf = New-Object byte[] 3
    $null = $fs.Read($buf, 0, 3)
    $fs.Close()
    if ($buf[0] -eq 0xEF -and $buf[1] -eq 0xBB -and $buf[2] -eq 0xBF) { $bomFiles.Add($f) }
}
Check '⑫ Go 源文件不带 UTF-8 BOM（防跨平台编译失败）' ($bomFiles.Count -eq 0) ('带 BOM: ' + $(if ($bomFiles.Count) { ($bomFiles | Select-Object -First 5) -join '; ' } else { '无' }))

# ⑬ 用户同名【成员】守卫（符号感知的验收判据，今天是【红】的）
#    这是文本级改写最真实的误伤面（规格六·六，已发作三次）：
#    用户自己的类型里声明了 描述()，调用 x.描述() —— 现在会被 emit 改写成 x.description，
#    产物运行时 TypeError。修复方向见规格六·十一（用户声明屏蔽 pass）。
Set-Content -Path (Join-Path $Work '同名成员.ts') -Encoding utf8 -Value (@(
    '类型 甲 {',
    '  长度(): 字符串 { 返回 "本地:8080" }',
    '}',
    '常量 x = 新建 甲()',
    'console.log(x.长度())'
) -join [char]10)
$out3 = Join-Path $Work 'out3'
if (Test-Path $out3) { Remove-Item $out3 -Recurse -Force }
& $Tsc (Join-Path $Work '同名成员.ts') --outDir $out3 --target es2020 --module commonjs --pretty false --locale en 2>&1 | Out-Null
$js3 = Join-Path $out3 '同名成员.js'
$js3Text = if (Test-Path $js3) { [System.IO.File]::ReadAllText($js3) } else { '' }
$run3 = if ($node -and (Test-Path $js3)) { (& $node $js3 2>&1 | Out-String).Trim() } else { '' }
$zh3 = [bool]($js3Text -match '\.长度')
$en3 = [bool]($js3Text -match '\.length')
Check '⑬ 用户同名成员守卫：x.长度() 不得被改写（产物仍是 .长度，且真跑正确）' (($zh3) -and (-not $en3) -and ($run3 -eq '本地:8080')) ('产物含 .长度=' + $zh3 + ' 含 .length=' + $en3 + ' 运行输出=' + $run3)

# ⑮ 自动加载守卫（规格六·十二）：不写任何 reference 就能用汉语标准库名；
#    而且【我们的块不得引入任何诊断】—— 尤其在窄 lib 集合（--lib es2020，不带 dom）下。
#    为什么必须钉：块是按来源 lib 分块加载的，一旦挂钩错了（例如无条件加载），
#    低目标/窄 lib 集合会因 BufferSource、FlatArray、RegExpIndicesArray 这类类型不可用而炸。
Set-Content -Path (Join-Path $Work '自动加载.ts') -Encoding utf8 -Value (@(
    '常量 甲 = [1, 2];',
    '甲.追加(3);'
) -join [char]10)
$out5 = Join-Path $Work 'out5'
if (Test-Path $out5) { Remove-Item $out5 -Recurse -Force }
$d1 = @(& $Tsc (Join-Path $Work '自动加载.ts') --outDir $out5 --target es2015 --module commonjs --pretty false --locale en 2>&1)
$js5 = Join-Path $out5 '自动加载.js'
$js5Text = if (Test-Path $js5) { [System.IO.File]::ReadAllText($js5) } else { '' }
Check '⑮a 自动加载：es2015 下不写 reference 也能编译（0 诊断）' (($LASTEXITCODE -eq 0) -and (@($d1).Count -eq 0) -and ($js5Text -match '\.push')) ('exit=' + $LASTEXITCODE + ' 诊断=' + @($d1).Count + ' 产物含 .push=' + [bool]($js5Text -match '\.push'))
$d2 = @(& $Tsc (Join-Path $Work '自动加载.ts') --outDir $out5 --target es2020 --lib es2020 --module commonjs --pretty false --locale en 2>&1)
$chunkErr = @($d2 | Where-Object { $_ -match 'lib\.zhts\.' })
Check '⑮b 自动加载：窄 lib 集合（--lib es2020，不带 dom）下我们的块不引入诊断' ($chunkErr.Count -eq 0) ('我们的块的诊断=' + $chunkErr.Count + ' 全部诊断=' + @($d2).Count)
Write-Host '=== 判定汇总 ==='
$results | ForEach-Object { '  [' + $_.结果 + '] ' + $_.判定 + ' —— ' + $_.说明 }
$fail = @($results | Where-Object { $_.结果 -ne '通过' }).Count
Write-Host ''
Write-Host ('  合计 ' + $results.Count + ' 项，失败 ' + $fail + ' 项')
if ($fail -eq 0) { Write-Host '  结论：标准库汉化【试点：数组+数学】端到端通过（类型检查 → 标准 JS 产物 → node 真跑）'; exit 0 }
Write-Host '  结论：有失败项，必须查清'; exit 1
