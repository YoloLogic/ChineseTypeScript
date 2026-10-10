/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABILITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


// ChineseTypeScript 汉语标准库 —— 本块只增补【来自该来源 lib】的成员。
//
// 【生成物，请勿手改】由 tools/gen_zhstdlib_lib.ps1 生成（规格六·十二）。
// 自动加载：compiler 在加载 lib.<键>.d.ts 时一并加载本块，故本块引用的类型必定可用。

interface Attr {
    获取 文本内容(): string;
    设置 文本内容(value: string | null);
}

interface CSSFontFaceRule {
    获取 样式(): CSSStyleDeclaration;
    设置 样式(cssText: string);
}

interface CSSImportRule {
    获取 媒体(): MediaList;
    设置 媒体(mediaText: string);
}

interface CSSKeyframeRule {
    获取 样式(): CSSStyleDeclaration;
    设置 样式(cssText: string);
}

interface CSSMediaRule {
    获取 媒体(): MediaList;
    设置 媒体(mediaText: string);
}

interface CSSNestedDeclarations {
    获取 样式(): CSSStyleDeclaration;
    设置 样式(cssText: string);
}

interface CSSPageRule {
    获取 样式(): CSSPageDescriptors;
    设置 样式(cssText: string);
}

interface CSSPositionTryRule {
    获取 样式(): CSSPositionTryDescriptors;
    设置 样式(cssText: string);
}

interface CSSStyleRule {
    获取 样式(): CSSStyleDeclaration;
    设置 样式(cssText: string);
}

interface CharacterData {
    获取 文本内容(): string;
    设置 文本内容(value: string | null);
}

interface Document {
    获取 文本内容(): null;
}

interface DocumentFragment {
    获取 文本内容(): string;
    设置 文本内容(value: string | null);
}

interface DocumentType {
    获取 文本内容(): null;
}

interface Element {
    获取 类列表(): DOMTokenList;
    设置 类列表(value: string);
    获取 部件(): DOMTokenList;
    设置 部件(value: string);
    获取 文本内容(): string;
    设置 文本内容(value: string | null);
}

interface ElementCSSInlineStyle {
    获取 样式(): CSSStyleDeclaration;
    设置 样式(cssText: string);
}

interface HTMLAnchorElement {
    获取 关系列表(): DOMTokenList;
    设置 关系列表(value: string);
}

interface HTMLAreaElement {
    获取 关系列表(): DOMTokenList;
    设置 关系列表(value: string);
}

interface HTMLFormElement {
    获取 关系列表(): DOMTokenList;
    设置 关系列表(value: string);
}

interface HTMLIFrameElement {
    获取 沙箱(): DOMTokenList;
    设置 沙箱(value: string);
}

interface HTMLLinkElement {
    获取 阻塞(): DOMTokenList;
    设置 阻塞(value: string);
    获取 关系列表(): DOMTokenList;
    设置 关系列表(value: string);
    获取 尺寸表(): DOMTokenList;
    设置 尺寸表(value: string);
}

interface HTMLScriptElement {
    获取 阻塞(): DOMTokenList;
    设置 阻塞(value: string);
}

interface HTMLStyleElement {
    获取 阻塞(): DOMTokenList;
    设置 阻塞(value: string);
}

interface SVGAElement {
    获取 关系列表(): DOMTokenList;
    设置 关系列表(value: string);
}

interface StyleSheet {
    获取 媒体(): MediaList;
    设置 媒体(mediaText: string);
}

