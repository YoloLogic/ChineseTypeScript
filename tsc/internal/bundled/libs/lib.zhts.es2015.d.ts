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

// 内建构造器：类型位与值位都给（写「集合<数字>」或「新建 集合()」都可以）
type 承诺<T> = Promise<T>;
declare var 承诺: PromiseConstructor;
type 映射表<K, V> = Map<K, V>;
declare var 映射表: MapConstructor;
type 集合<T> = Set<T>;
declare var 集合: SetConstructor;

