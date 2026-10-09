# -*- coding: utf-8 -*-
"""发行前必须成立的三件事：许可证正文正确、NOTICE 含法定声明、5 份文件齐备。

为什么这是一条【检查】而不是一句说明
------------------------------------
本项目是 microsoft/typescript-go（Apache-2.0）的派生作品，分发二进制时：

  * Apache-2.0 §4(a) 必须给接收者一份许可证正文  -> LICENSE.txt 必须存在且与上游逐字节相同
  * Apache-2.0 §4(b) 修改过的文件必须带显著声明    -> NOTICE.txt 必须声明「改动过」以及改了哪些
  同时，本项目【原创部分】采用自定义条款（源码公开 + 禁止再发布），所以还要：

  * LICENSE 必须存在且逐字节等于我们声明的那一份（用 SHA256 钉住，防手改）
  * NOTICE.txt 必须把「禁止再发布」「唯一例外（非营利原样转发）」「编译产物归使用者」
    「范围说明」「名称条款」「如实披露第三方」写清楚

LICENSE.txt 要求逐字节等同上游，是因为它是一份法律文本：任何「顺手改成更好读的样子」
都会让附上的许可证不再是那份许可证。所以这里用 SHA256 比对，而不是查关键词。

本脚本自带自测：故意把许可证改坏、故意用一份空洞的 NOTICE，都必须被判失败。
项目定则 —— 一个永远返回「通过」的检查等于没有检查。

用法：
    python tests-chts\verify_licenses.py
退出码 0 = 通过。
"""

import hashlib
import io
import os
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
UPSTREAM_LICENSE = r"E:\cts-base\LICENSE.txt"   # 上游检出（可选；不存在时只用钉住的哈希）

# 钉住的哈希：改这两个文件的【任何一个字节】都会让本判据失败。
OUR_LICENSE_SHA256 = "8489296039a3e415ebff5cd86fccebf765099adb6cb63cadd28a63bc5720d9de"
UPSTREAM_LICENSE_SHA256 = "a7d00bfd54525bc694b6e32f64c7ebcf5e6b7ae3657be5cc12767bce74654a47"

FILES = ["LICENSE", "LICENSE.txt", "NOTICE.txt", "LICENSE-SCOPE.md", "TRADEMARK.md"]

REQUIRED_NOTICE = [
    ("声明这是【修改过的】上游（Apache-2.0 section 4(b)）", ["修改过的", "改动", "modified"]),
    ("写明改动了哪些上游文件", ["改动过的上游文件", "tsc/internal/scanner/scanner.go"]),
    ("指向上游许可正文 LICENSE.txt", ["LICENSE.txt"]),
    ("写明上游许可是 Apache-2.0", ["Apache"]),
    ("写明本项目原创部分用【自定义】条款（指向 LICENSE）", ["自定义", "LICENSE"]),
    ("写明【禁止再发布】这一核心限制",
     ["禁止再发布", "不得再发布", "禁止重新打包", "no redistribution"]),
    ("写明唯一例外：非营利、原样转发", ["非营利", "原样转发"]),
    ("写明编译产物归使用者（不得让人误以为会传染）",
     ["完全归写它的人", "不附加任何条件", "your own"]),
    ("指向许可范围说明（哪些受约束、哪些不受）", ["LICENSE-SCOPE", "许可范围"]),
    ("指向名称/商标条款", ["TRADEMARK", "名称条款", "商标"]),
    ("如实披露包里带了【可再分发】的第三方运行时", ["可再分发", "Node.js", "redistribut"]),
    ("写明这是 source-available，不是 OSI 意义上的开源", ["source-available", "OSI"]),
    ("给出联系方式", ["1396257961"]),
]

REQUIRED_SCOPE = [
    ("范围说明写明原创部分受约束", ["禁止再发布"]),
    ("范围说明写明【编译产物归使用者】", ["编译产物", "完全归"]),
    ("范围说明给出【机器可查】的判定规则", ["机器可查", "SPDX"]),
    ("范围说明写明上游部分不受本许可约束", ["Apache", "不受"]),
]

REQUIRED_TRADEMARK = [
    ("名称条款写明不得改名换标发布衍生版本", ["改名换标"]),
    ("名称条款写明【即使尚未注册】也有效", ["尚未注册"]),
]

errors = []


def check(name, ok, detail=""):
    """detail 只在【失败】时打印 —— 成功时打「找不到」之类的失败说明会误导读者。"""
    if ok:
        print("   [通过] %s" % name)
    else:
        errors.append("%s%s" % (name, ("（" + detail + "）") if detail else ""))
        print("   [错误] %s%s" % (name, (" —— " + detail) if detail else ""))
    return ok


def sha256_bytes(data):
    return hashlib.sha256(data).hexdigest()


def sha256_file(path):
    with io.open(path, "rb") as fh:
        return sha256_bytes(fh.read())


def read_text(path):
    if not os.path.isfile(path):
        return ""
    return io.open(path, encoding="utf-8", errors="replace").read()


def missing_needles(text, required):
    return [why for why, needles in required if not any(n in text for n in needles)]


# ---------------------------------------------------------------- 1) 五份文件
print("1. 发行包必须同时含 5 份许可/披露文件")
for fn in FILES:
    p = os.path.join(ROOT, fn)
    check(fn + " exist", os.path.isfile(p) and os.path.getsize(p) > 0,
          "" if os.path.isfile(p) else "不存在")

# ------------------------------------------------------- 2) 我们自己的许可正文
print("2. LICENSE 必须逐字节等于我们声明的那一份（SHA256 钉住）")
lic_path = os.path.join(ROOT, "LICENSE")
if not os.path.isfile(lic_path):
    check("LICENSE sha256", False, "不存在")
else:
    got = sha256_file(lic_path)
    check("LICENSE sha256（%s…，%d 字节）" % (got[:16], os.path.getsize(lic_path)),
          got == OUR_LICENSE_SHA256,
          "实际 %s… / 声明 %s…" % (got[:16], OUR_LICENSE_SHA256[:16]))

# --------------------------------------------------- 3) 上游正文逐字节相同
print("3. LICENSE.txt 必须与上游 microsoft/typescript-go 逐字节相同")
up_path = os.path.join(ROOT, "LICENSE.txt")
if not os.path.isfile(up_path):
    check("LICENSE.txt sha256", False, "不存在 —— 分发二进制必须附上游许可证正文")
else:
    got = sha256_file(up_path)
    if got != UPSTREAM_LICENSE_SHA256:
        check("LICENSE.txt 与上游相同", False,
              "实际 %s… / 上游 %s…（法律文本不允许改写：请直接拷贝上游文件）"
              % (got[:16], UPSTREAM_LICENSE_SHA256[:16]))
    else:
        check("LICENSE.txt 与上游逐字节相同（SHA256 %s…，%d 字节）"
              % (got[:16], os.path.getsize(up_path)), True)
    if os.path.isfile(UPSTREAM_LICENSE):
        check("与本地上游检出对拍（%s）" % UPSTREAM_LICENSE,
              sha256_file(UPSTREAM_LICENSE) == got, "哈希不同")
    else:
        print("   [跳过] 本地无上游检出 %s（只用钉住的哈希）" % UPSTREAM_LICENSE)

# ------------------------------------------------------------- 4) NOTICE.txt
print("4. NOTICE.txt 必须含法定声明")
notice = read_text(os.path.join(ROOT, "NOTICE.txt"))
if not notice:
    check("NOTICE.txt 可读", False, "不存在或为空")
else:
    for why in missing_needles(notice, REQUIRED_NOTICE):
        check("NOTICE 声明：" + why, False, "找不到")
    for why, needles in REQUIRED_NOTICE:
        if not any(n in notice for n in needles):
            continue
        check("NOTICE 声明：" + why, True)
    check("NOTICE 保留上游正文（原样照录）", "NOTICES AND INFORMATION" in notice,
          "找不到微软 NOTICE 正文")

# ------------------------------------------------- 5) 范围说明与名称条款
print("5. LICENSE-SCOPE.md 与 TRADEMARK.md 必须写清关键点")
scope = read_text(os.path.join(ROOT, "LICENSE-SCOPE.md"))
for why, needles in REQUIRED_SCOPE:
    check("范围说明：" + why, any(n in scope for n in needles), "找不到")
tm = read_text(os.path.join(ROOT, "TRADEMARK.md"))
for why, needles in REQUIRED_TRADEMARK:
    check("名称条款：" + why, any(n in tm for n in needles), "找不到")

# ----------------------------------------------------------------- 6) 自测
print("6. 自测：这些检查必须真的会失败")
_probe_bad = "Apache License 2.0\n(hand-edited, shorter)\n".encode("utf-8")
check("自测一：被改短的许可证与我们的 LICENSE 哈希不同 -> 会被判失败",
      sha256_bytes(_probe_bad) != OUR_LICENSE_SHA256)
check("自测一b：被改短的许可证与上游 LICENSE.txt 哈希不同 -> 会被判失败",
      sha256_bytes(_probe_bad) != UPSTREAM_LICENSE_SHA256)

_probe_notice = "这是一个中文编程工具链。"      # 缺全部法定声明
_missing = missing_needles(_probe_notice, REQUIRED_NOTICE)
check("自测二：空洞 NOTICE 会被判缺全部 %d 条声明" % len(REQUIRED_NOTICE),
      len(_missing) == len(REQUIRED_NOTICE), "只缺 %d 条" % len(_missing))

_missing_scope = missing_needles("空文件", REQUIRED_SCOPE)
_missing_tm = missing_needles("空文件", REQUIRED_TRADEMARK)
check("自测三：空洞的范围说明/名称条款会被判缺",
      len(_missing_scope) == len(REQUIRED_SCOPE) and len(_missing_tm) == len(REQUIRED_TRADEMARK),
      "范围缺 %d / 名称缺 %d" % (len(_missing_scope), len(_missing_tm)))

# ----------------------------------------------------------------- 7) 结论
print("")
print("=" * 60)
if errors:
    print("  错误：%d" % len(errors))
    for e in errors:
        print("    - " + e)
    print("")
    print("  结果：未通过。**在修好之前不要对外分发。**")
    sys.exit(1)
print("  结果：全部通过。许可与披露文件可以随包分发。")
sys.exit(0)
