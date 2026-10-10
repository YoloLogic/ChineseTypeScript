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

declare namespace Reflect {
    function 应用<T, A extends readonly any[], R>(
        target: (this: T, ...args: A) => R,
        thisArgument: T,
        argumentsList: Readonly<A>,
    ): R;
    function 应用(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;
    function 构造<A extends readonly any[], R>(
        target: new (...args: A) => R,
        argumentsList: Readonly<A>,
        newTarget?: new (...args: any) => any,
    ): R;
    function 构造(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;
    function 定义属性(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): boolean;
    function 删特性(target: object, propertyKey: PropertyKey): boolean;
    function 获取<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
        receiver?: unknown,
    ): P extends keyof T ? T[P] : any;
    function 取自有描述<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
    ): TypedPropertyDescriptor<P extends keyof T ? T[P] : any> | undefined;
    function 取原型(target: object): object | null;
    function 含有(target: object, propertyKey: PropertyKey): boolean;
    function 是可扩展(target: object): boolean;
    function 自有键(target: object): (string | symbol)[];
    function 止扩展(target: object): boolean;
    function 设置<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
        value: P extends keyof T ? T[P] : any,
        receiver?: any,
    ): boolean;
    function 设置(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;
    function 设原型(target: object, proto: object | null): boolean;
}

