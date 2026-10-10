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

interface Float16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    readonly 每元素字节: number;
    readonly 缓冲: TArrayBuffer;
    readonly 字节长度: number;
    readonly 字节偏移: number;
    取第(index: number): number | undefined;
    内部复制(target: number, start: number, end?: number): this;
    全部满足(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): boolean;
    填充(value: number, start?: number, end?: number): this;
    过滤(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array<ArrayBuffer>;
    滤镜(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array<ArrayBuffer>;
    找出(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number | undefined;
    找出序号(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number;
    逐个处理(callbackfn: (value: number, index: number, array: this) => void, thisArg?: any): void;
    包含(searchElement: number, fromIndex?: number): boolean;
    找序号(searchElement: number, fromIndex?: number): number;
    连接成串(separator?: string): string;
    末次序号(searchElement: number, fromIndex?: number): number;
    readonly 长度: number;
    映射(callbackfn: (value: number, index: number, array: this) => number, thisArg?: any): Float16Array<ArrayBuffer>;
    归纳(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number): number;
    归纳(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number, initialValue: number): number;
    归纳<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: this) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number): number;
    反向归纳(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number, initialValue: number): number;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: this) => U, initialValue: U): U;
    反转(): this;
    设置(array: ArrayLike<number>, offset?: number): void;
    截取(start?: number, end?: number): Float16Array<ArrayBuffer>;
    存在满足(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): boolean;
    排序(compareFn?: (a: number, b: number) => number): this;
    子数组(begin?: number, end?: number): Float16Array<TArrayBuffer>;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    反转副本(): Float16Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Float16Array<ArrayBuffer>;
    转字符串(): string;
    取值(): this;
    条目(): ArrayIterator<[number, number]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<number>;
}

interface Float16ArrayConstructor {
    readonly 原型: Float16Array<ArrayBufferLike>;
    readonly 每元素字节: number;
}

