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

interface Map<K, V> {
    清空(): void;
    删除(key: K): boolean;
    逐个处理(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    获取(key: K): V | undefined;
    含有(key: K): boolean;
    设置(key: K, value: V): this;
    readonly 大小: number;
}

interface MapConstructor {
    readonly 原型: Map<any, any>;
}

interface ReadonlyMap<K, V> {
    逐个处理(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    获取(key: K): V | undefined;
    含有(key: K): boolean;
    readonly 大小: number;
}

interface WeakMap<K extends WeakKey, V> {
    删除(key: K): boolean;
    获取(key: K): V | undefined;
    含有(key: K): boolean;
    设置(key: K, value: V): this;
}

interface WeakMapConstructor {
    readonly 原型: WeakMap<WeakKey, any>;
}

interface Set<T> {
    添加(value: T): this;
    清空(): void;
    删除(value: T): boolean;
    逐个处理(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    含有(value: T): boolean;
    readonly 大小: number;
}

interface SetConstructor {
    readonly 原型: Set<any>;
}

interface ReadonlySet<T> {
    逐个处理(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
    含有(value: T): boolean;
    readonly 大小: number;
}

interface WeakSet<T extends WeakKey> {
    添加(value: T): this;
    删除(value: T): boolean;
    含有(value: T): boolean;
}

interface WeakSetConstructor {
    readonly 原型: WeakSet<WeakKey>;
}

