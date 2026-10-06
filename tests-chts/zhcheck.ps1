# ChineseTypeScript 共享检查器
#
# 用途：判断「产物 js 里有没有汉语关键字泄漏」。
#
# 为什么必须剥掉注释与字符串（都是踩过的坑，不是预防性设计）：
#   * tsc 默认保留源注释。源里写 `// ...验证「导入 ... 来自」...` 时，
#     产物里就会出现独立的汉字段「导入」「来自」——它们出现在注释里，不是关键字。
#   * 字符串字面量同样会撞：`"异常已捕获"` 含子串「捕获」，`"收尾执行"` 含「执行」。
#   * 汉语标识符也会撞子串：`变量名` 含子串「变量」（而 变量 是 var 的译名）。
# 所以子串匹配是错的，必须「剥掉注释与字符串后，按汉字连续段【整段】比对」。
#
# 剥法用逐字符状态机（不用正则），因为注释与字符串会互相嵌套交叉：
#   * 正则先剥注释  -> 字符串里的 "//" 会把该行后文全吃掉
#   * 正则先剥字符串 -> 注释里落单的引号会吞掉后面大片代码
# 两种都错。状态机逐个字符判断当前处于什么状态，才不会互相干扰。
#
# 已知局限（写下来，别装作没有）：本状态机不认识正则字面量 /正则/，
# 其中的 `/` 可能被误判为注释起始。本项目演示靶子里没有正则，暂不受影响；
# 若将来靶子引入正则，需要在此处补上正则字面量状态。

function Get-ZhKeywordSet([string]$TscDir) {
    $list = @()
    Get-Content (Join-Path $TscDir 'internal\scanner\zh_keywords.txt') -Encoding UTF8 | ForEach-Object {
        $l = $_.Trim()
        if ($l -ne '' -and -not $l.StartsWith('#')) {
            $p = $l -split '\s+'
            if ($p.Count -eq 2) { $list += $p[1] }
        }
    }
    $set = [System.Collections.Generic.HashSet[string]]::new()
    foreach ($z in $list) { [void]$set.Add($z) }
    return [pscustomobject]@{ Set = $set; List = $list }
}

# 剥掉注释与字符串字面量，返回剩下的「代码骨架」
function Remove-CommentsAndStrings([string]$src) {
    $sb = [System.Text.StringBuilder]::new()
    $i = 0
    $n = $src.Length
    while ($i -lt $n) {
        $c = $src[$i]
        $c2 = if ($i + 1 -lt $n) { $src[$i + 1] } else { [char]0 }

        # 行注释
        if ($c -eq '/' -and $c2 -eq '/') {
            while ($i -lt $n -and $src[$i] -ne "`n") { $i++ }
            continue
        }
        # 块注释
        if ($c -eq '/' -and $c2 -eq '*') {
            $i += 2
            while ($i + 1 -lt $n -and -not ($src[$i] -eq '*' -and $src[$i + 1] -eq '/')) { $i++ }
            $i += 2
            continue
        }
        # 字符串字面量（含模板串）
        if ($c -eq '"' -or $c -eq "'" -or $c -eq '`') {
            $quote = $c
            $i++
            while ($i -lt $n) {
                if ($src[$i] -eq '\') { $i += 2; continue }
                if ($src[$i] -eq $quote) { $i++; break }
                $i++
            }
            [void]$sb.Append('""')
            continue
        }
        [void]$sb.Append($c)
        $i++
    }
    return $sb.ToString()
}

# 返回被泄漏成【独立汉字段】的关键字（正常应为空数组）
function Get-LeakedZhKeywords([string]$js, $Zh) {
    $code = Remove-CommentsAndStrings $js
    $runs = [regex]::Matches($code, '\p{IsCJKUnifiedIdeographs}+') | ForEach-Object { $_.Value }
    return [pscustomobject]@{
        泄漏 = @($runs | Where-Object { $Zh.Set.Contains($_) } | Sort-Object -Unique)
        汉字段数 = $runs.Count
    }
}
