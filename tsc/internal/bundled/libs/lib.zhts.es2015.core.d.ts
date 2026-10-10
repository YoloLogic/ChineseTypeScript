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

interface Array<T> {
    找出<S extends T>(predicate: (value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    找出(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    找出序号(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    填充(value: T, start?: number, end?: number): this;
    内部复制(target: number, start: number, end?: number): this;
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
}

interface Function {
    readonly 名称: string;
}

interface Math {
    前导零位数(x: number): number;
    整数乘(x: number, y: number): number;
    符号(x: number): number;
    签名(x: number): number;
    对数十(x: number): number;
    对数二(x: number): number;
    双曲余弦(x: number): number;
    双曲正弦(x: number): number;
    双曲正切(x: number): number;
    双曲反余弦(x: number): number;
    双曲反正弦(x: number): number;
    双曲反正切(x: number): number;
    斜边长(...values: number[]): number;
    截断(x: number): number;
    单精度(x: number): number;
    立方根(x: number): number;
}

interface ObjectConstructor {
    合入<T extends {}, U>(target: T, source: U): T & U;
    合入<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;
    合入<T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    合入(target: object, ...sources: any[]): any;
    取自有符号(o: any): symbol[];
    键列(o: {}): string[];
    设原型(o: any, proto: object | null): any;
}

interface ReadonlyArray<T> {
    找出<S extends T>(predicate: (value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined;
    找出(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined;
    找出序号(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number;
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
}

interface RegExp {
    readonly 标志集: string;
    readonly 吸顶: boolean;
    readonly 统一码: boolean;
}

interface String {
    取码点(pos: number): number | undefined;
    包含(searchString: string, position?: number): boolean;
    以结尾(searchString: string, endPosition?: number): boolean;
    规范化(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
    规范化(form?: string): string;
    重复(count: number): string;
    以开头(searchString: string, position?: number): boolean;
    锚点(name: string): string;
    闪烁(): string;
    粗体(): string;
    字体颜色(color: string): string;
    字号(size: number): string;
    字号(size: string): string;
    超链(url: string): string;
    小值(): string;
    删除线(): string;
    相减(): string;
    上标(): string;
}

interface StringConstructor {
    原始(template: { raw: readonly string[] | ArrayLike<string>; }, ...substitutions: any[]): string;
}

interface Int8Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Uint8Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Int16Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Uint16Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Int32Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Uint32Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Float32Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Float64Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

