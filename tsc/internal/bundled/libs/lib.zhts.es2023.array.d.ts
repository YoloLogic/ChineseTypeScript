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
    反转副本(): T[];
    排序副本(compareFn?: (a: T, b: T) => number): T[];
}

interface ReadonlyArray<T> {
    反转副本(): T[];
    排序副本(compareFn?: (a: T, b: T) => number): T[];
}

interface Int8Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Int8Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Int8Array<ArrayBuffer>;
}

interface Uint8Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Uint8Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Uint8Array<ArrayBuffer>;
}

interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Uint8ClampedArray<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Uint8ClampedArray<ArrayBuffer>;
}

interface Int16Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Int16Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Int16Array<ArrayBuffer>;
}

interface Uint16Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Uint16Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Uint16Array<ArrayBuffer>;
}

interface Int32Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Int32Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Int32Array<ArrayBuffer>;
}

interface Uint32Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Uint32Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Uint32Array<ArrayBuffer>;
}

interface Float32Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Float32Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Float32Array<ArrayBuffer>;
}

interface Float64Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Float64Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Float64Array<ArrayBuffer>;
}

interface BigInt64Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): BigInt64Array<ArrayBuffer>;
    排序副本(compareFn?: (a: bigint, b: bigint) => number): BigInt64Array<ArrayBuffer>;
}

interface BigUint64Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): BigUint64Array<ArrayBuffer>;
    排序副本(compareFn?: (a: bigint, b: bigint) => number): BigUint64Array<ArrayBuffer>;
}

