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

interface PromiseConstructor {
    readonly 原型: Promise<any>;
    全部<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;
    竞速<T extends readonly unknown[] | []>(values: T): Promise<Awaited<T[number]>>;
    拒绝<T = never>(reason?: any): Promise<T>;
    解决(): Promise<void>;
    解析路径(): Promise<void>;
    解决<T>(value: T): Promise<Awaited<T>>;
    解析路径<T>(value: T): Promise<Awaited<T>>;
    解决<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;
    解析路径<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;
}

