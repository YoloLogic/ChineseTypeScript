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

interface BigIntToLocaleStringOptions {
    样式?: string;
    数字系统?: string;
    单位?: string;
    货币?: string;
    记法?: string;
}

interface BigInt {
    转字符串(radix?: number): string;
    本地转字符串(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;
    取值(): bigint;
}

interface BigIntConstructor {
    readonly 原型: BigInt;
}

interface BigInt64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    readonly 每元素字节: number;
    readonly 缓冲: TArrayBuffer;
    readonly 字节长度: number;
    readonly 字节偏移: number;
    内部复制(target: number, start: number, end?: number): this;
    条目(): ArrayIterator<[number, bigint]>;
    全部满足(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    填充(value: bigint, start?: number, end?: number): this;
    过滤(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => any, thisArg?: any): BigInt64Array<ArrayBuffer>;
    滤镜(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => any, thisArg?: any): BigInt64Array<ArrayBuffer>;
    找出(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): bigint | undefined;
    找出序号(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): number;
    逐个处理(callbackfn: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => void, thisArg?: any): void;
    包含(searchElement: bigint, fromIndex?: number): boolean;
    找序号(searchElement: bigint, fromIndex?: number): number;
    连接成串(separator?: string): string;
    键列(): ArrayIterator<number>;
    末次序号(searchElement: bigint, fromIndex?: number): number;
    readonly 长度: number;
    映射(callbackfn: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => bigint, thisArg?: any): BigInt64Array<ArrayBuffer>;
    归纳(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array<TArrayBuffer>) => bigint): bigint;
    归纳<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array<TArrayBuffer>) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array<TArrayBuffer>) => bigint): bigint;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array<TArrayBuffer>) => U, initialValue: U): U;
    反转(): this;
    设置(array: ArrayLike<bigint>, offset?: number): void;
    截取(start?: number, end?: number): BigInt64Array<ArrayBuffer>;
    存在满足(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    排序(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
    子数组(begin?: number, end?: number): BigInt64Array<TArrayBuffer>;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    转字符串(): string;
    取值(): BigInt64Array<TArrayBuffer>;
    值列(): ArrayIterator<bigint>;
}

interface BigInt64ArrayConstructor {
    readonly 原型: BigInt64Array<ArrayBufferLike>;
    readonly 每元素字节: number;
}

interface BigUint64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    readonly 每元素字节: number;
    readonly 缓冲: TArrayBuffer;
    readonly 字节长度: number;
    readonly 字节偏移: number;
    内部复制(target: number, start: number, end?: number): this;
    条目(): ArrayIterator<[number, bigint]>;
    全部满足(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    填充(value: bigint, start?: number, end?: number): this;
    过滤(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => any, thisArg?: any): BigUint64Array<ArrayBuffer>;
    滤镜(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => any, thisArg?: any): BigUint64Array<ArrayBuffer>;
    找出(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): bigint | undefined;
    找出序号(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): number;
    逐个处理(callbackfn: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => void, thisArg?: any): void;
    包含(searchElement: bigint, fromIndex?: number): boolean;
    找序号(searchElement: bigint, fromIndex?: number): number;
    连接成串(separator?: string): string;
    键列(): ArrayIterator<number>;
    末次序号(searchElement: bigint, fromIndex?: number): number;
    readonly 长度: number;
    映射(callbackfn: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => bigint, thisArg?: any): BigUint64Array<ArrayBuffer>;
    归纳(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array<TArrayBuffer>) => bigint): bigint;
    归纳<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array<TArrayBuffer>) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array<TArrayBuffer>) => bigint): bigint;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array<TArrayBuffer>) => U, initialValue: U): U;
    反转(): this;
    设置(array: ArrayLike<bigint>, offset?: number): void;
    截取(start?: number, end?: number): BigUint64Array<ArrayBuffer>;
    存在满足(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    排序(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
    子数组(begin?: number, end?: number): BigUint64Array<TArrayBuffer>;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    转字符串(): string;
    取值(): BigUint64Array<TArrayBuffer>;
    值列(): ArrayIterator<bigint>;
}

interface BigUint64ArrayConstructor {
    readonly 原型: BigUint64Array<ArrayBufferLike>;
    readonly 每元素字节: number;
}

