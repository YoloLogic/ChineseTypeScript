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

interface Symbol {
    转字符串(): string;
    取值(): symbol;
}

interface PropertyDescriptor {
    可配置?: boolean;
    可枚举?: boolean;
    值内容?: any;
    可写?: boolean;
    获取?(): any;
    设置?(v: any): void;
}

interface Object {
    转字符串(): string;
    本地转字符串(): string;
    取值(): Object;
    有自有属性(v: PropertyKey): boolean;
    是原型(v: Object): boolean;
    属性可枚举(v: PropertyKey): boolean;
}

interface ObjectConstructor {
    readonly 原型: Object;
    取原型(o: any): any;
    取自有描述(o: any, p: PropertyKey): PropertyDescriptor | undefined;
    取自有属性名(o: any): string[];
    创建(o: object | null): any;
    创建(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;
    定义属性<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;
    密封<T>(o: T): T;
    冻结<T extends Function>(f: T): T;
    冻结<T extends { [idx: string]: U | null | undefined | object; }, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;
    冻结<T>(o: T): Readonly<T>;
    止扩展<T>(o: T): T;
    是密封(o: any): boolean;
    是冻结(o: any): boolean;
    是可扩展(o: any): boolean;
    键列(o: object): string[];
}

interface Function {
    应用(this: Function, thisArg: any, argArray?: any): any;
    调用(this: Function, thisArg: any, ...argArray: any[]): any;
    绑定(this: Function, thisArg: any, ...argArray: any[]): any;
    转字符串(): string;
    原型: any;
    readonly 长度: number;
    调用者: Function;
}

interface FunctionConstructor {
    readonly 原型: Function;
}

interface CallableFunction {
    应用<T, R>(this: (this: T) => R, thisArg: T): R;
    应用<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;
    调用<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;
    绑定<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
    绑定<T, A extends any[], B extends any[], R>(this: (this: T, ...args: [...A, ...B]) => R, thisArg: T, ...args: A): (...args: B) => R;
}

interface NewableFunction {
    应用<T>(this: new () => T, thisArg: T): void;
    应用<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, args: A): void;
    调用<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A): void;
    绑定<T>(this: T, thisArg: any): T;
    绑定<A extends any[], B extends any[], R>(this: new (...args: [...A, ...B]) => R, thisArg: any, ...args: A): new (...args: B) => R;
}

interface IArguments {
    长度: number;
    被调用者: Function;
}

interface String {
    转字符串(): string;
    取字符(pos: number): string;
    取字符码(index: number): number;
    拼接(...strings: string[]): string;
    找序号(searchString: string, position?: number): number;
    末次序号(searchString: string, position?: number): number;
    本地比较(that: string): number;
    匹配(regexp: string | RegExp): RegExpMatchArray | null;
    替换(searchValue: string | RegExp, replaceValue: string): string;
    替换(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
    查找(regexp: string | RegExp): number;
    截取(start?: number, end?: number): string;
    拆分(separator: string | RegExp, limit?: number): string[];
    取子串(start: number, end?: number): string;
    转小写(): string;
    转大写(): string;
    去空白(): string;
    readonly 长度: number;
    截取子串(from: number, length?: number): string;
    取值(): string;
}

interface StringConstructor {
    readonly 原型: String;
}

interface Boolean {
    取值(): boolean;
}

interface BooleanConstructor {
    readonly 原型: Boolean;
}

interface Number {
    转字符串(radix?: number): string;
    定点(fractionDigits?: number): string;
    指数记法(fractionDigits?: number): string;
    定精度(precision?: number): string;
    取值(): number;
}

interface NumberConstructor {
    readonly 原型: Number;
}

interface TemplateStringsArray {
    readonly 原始: readonly string[];
}

interface Math {
    绝对值(x: number): number;
    反余弦(x: number): number;
    反正弦(x: number): number;
    反正切(x: number): number;
    反正切二(y: number, x: number): number;
    向上取整(x: number): number;
    余弦(x: number): number;
    指数(x: number): number;
    向下取整(x: number): number;
    对数(x: number): number;
    日志(x: number): number;
    最大(...values: number[]): number;
    最大限制(...values: number[]): number;
    最小(...values: number[]): number;
    最小限制(...values: number[]): number;
    乘方(x: number, y: number): number;
    随机(): number;
    四舍五入(x: number): number;
    正弦(x: number): number;
    平方根(x: number): number;
    正切(x: number): number;
}

interface Date {
    转字符串(): string;
    转日期串(): string;
    转时刻串(): string;
    本地转字符串(): string;
    本地日期串(): string;
    本地时刻串(): string;
    取值(): number;
    取时刻(): number;
    取年(): number;
    取世界年(): number;
    取月(): number;
    取日(): number;
    取星期(): number;
    取时(): number;
    取分(): number;
    取秒(): number;
    取毫秒(): number;
    取时区偏移(): number;
    设时刻(time: number): number;
    设毫秒(ms: number): number;
    设秒(sec: number, ms?: number): number;
    设分(min: number, sec?: number, ms?: number): number;
    设时(hours: number, min?: number, sec?: number, ms?: number): number;
    设日(date: number): number;
    设月(month: number, date?: number): number;
    设年(year: number, month?: number, date?: number): number;
    转国际串(): string;
    转数据(key?: any): string;
}

interface DateConstructor {
    readonly 原型: Date;
    解析(s: string): number;
    此刻(): number;
    当前值(): number;
}

interface RegExpMatchArray {
    序号?: number;
    输入?: string;
}

interface RegExpExecArray {
    序号: number;
    输入: string;
}

interface RegExp {
    执行(string: string): RegExpExecArray | null;
    测试(string: string): boolean;
    readonly 来源: string;
    readonly 多行: boolean;
    编译(pattern: string, flags?: string): this;
}

interface Error {
    名称: string;
    消息: string;
    调用栈?: string;
}

interface ErrorConstructor {
    readonly 原型: Error;
}

interface EvalErrorConstructor {
    readonly 原型: EvalError;
}

interface RangeErrorConstructor {
    readonly 原型: RangeError;
}

interface ReferenceErrorConstructor {
    readonly 原型: ReferenceError;
}

interface SyntaxErrorConstructor {
    readonly 原型: SyntaxError;
}

interface TypeErrorConstructor {
    readonly 原型: TypeError;
}

interface URIErrorConstructor {
    readonly 原型: URIError;
}

interface JSON {
    解析(text: string, reviver?: (this: any, key: string, value: any) => any): any;
    序列化(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    序列化(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}

interface ReadonlyArray<T> {
    readonly 长度: number;
    转字符串(): string;
    本地转字符串(): string;
    拼接(...items: ConcatArray<T>[]): T[];
    拼接(...items: (T | ConcatArray<T>)[]): T[];
    连接成串(separator?: string): string;
    截取(start?: number, end?: number): T[];
    找序号(searchElement: T, fromIndex?: number): number;
    末次序号(searchElement: T, fromIndex?: number): number;
    全部满足<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[];
    全部满足(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
    存在满足(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
    逐个处理(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;
    映射<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[];
    过滤<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
    滤镜<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
    过滤(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];
    滤镜(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
    归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
}

interface ConcatArray<T> {
    readonly 长度: number;
    连接成串(separator?: string): string;
    截取(start?: number, end?: number): T[];
}

interface Array<T> {
    长度: number;
    转字符串(): string;
    本地转字符串(): string;
    末尾弹出(): T | undefined;
    追加(...items: T[]): number;
    拼接(...items: ConcatArray<T>[]): T[];
    拼接(...items: (T | ConcatArray<T>)[]): T[];
    连接成串(separator?: string): string;
    反转(): T[];
    开头弹出(): T | undefined;
    截取(start?: number, end?: number): T[];
    排序(compareFn?: (a: T, b: T) => number): this;
    剪接(start: number, deleteCount?: number): T[];
    剪接(start: number, deleteCount: number, ...items: T[]): T[];
    开头插入(...items: T[]): number;
    找序号(searchElement: T, fromIndex?: number): number;
    末次序号(searchElement: T, fromIndex?: number): number;
    全部满足<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    全部满足(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    存在满足(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    逐个处理(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    映射<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    过滤<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    滤镜<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    过滤(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    滤镜(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}

interface ArrayConstructor {
    readonly 原型: any[];
}

interface TypedPropertyDescriptor<T> {
    可枚举?: boolean;
    可配置?: boolean;
    可写?: boolean;
    值内容?: T;
    获取?: () => T;
    设置?: (value: T) => void;
}

interface PromiseLike<T> {
    然后<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;
}

interface Promise<T> {
    然后<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
}

interface ArrayLike<T> {
    readonly 长度: number;
}

// 全局对象 / 类型别名（Array / Math / Date / RegExp / Error 都在 es5）
type 数组<T> = Array<T>;
declare var 数学: Math;
type 日期 = Date;
declare var 日期: DateConstructor;
type 正则 = RegExp;
declare var 正则: RegExpConstructor;
type 错误 = Error;
declare var 错误: ErrorConstructor;

