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

interface SymbolConstructor {
    readonly 迭代器: unique symbol;
}

interface IteratorYieldResult<TYield> {
    已完成?: false;
    值内容: TYield;
}

interface IteratorReturnResult<TReturn> {
    已完成: true;
    值内容: TReturn;
}

interface Iterator<T, TReturn = any, TNext = any> {
    下一个(...[value]: [] | [TNext]): IteratorResult<T, TReturn>;
}

interface Array<T> {
    条目(): ArrayIterator<[number, T]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<T>;
}

interface ReadonlyArray<T> {
    条目(): ArrayIterator<[number, T]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<T>;
}

interface Map<K, V> {
    条目(): MapIterator<[K, V]>;
    键列(): MapIterator<K>;
    值列(): MapIterator<V>;
}

interface ReadonlyMap<K, V> {
    条目(): MapIterator<[K, V]>;
    键列(): MapIterator<K>;
    值列(): MapIterator<V>;
}

