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

interface SharedArrayBuffer {
    readonly 字节长度: number;
    截取(begin?: number, end?: number): SharedArrayBuffer;
}

interface SharedArrayBufferConstructor {
    readonly 原型: SharedArrayBuffer;
}

interface Atomics {
    添加(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
    比较交换(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, expectedValue: number, replacementValue: number): number;
    交换(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
    无锁(size: number): boolean;
    加载(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number): number;
    存储(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
    相减(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
    等待(typedArray: Int32Array<ArrayBufferLike>, index: number, value: number, timeout?: number): "ok" | "not-equal" | "timed-out";
    通知(typedArray: Int32Array<ArrayBufferLike>, index: number, count?: number): number;
    异或(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
}

