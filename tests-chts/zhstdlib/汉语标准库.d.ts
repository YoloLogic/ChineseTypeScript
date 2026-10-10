/// <reference path="汉语标准库-成员.generated.d.ts" />
// 标准库汉化 —— 【全局别名】部分（手写）。
//
// 【成员声明】不在这里：它们全部由生成物 汉语标准库-成员.generated.d.ts 提供
// （由 tools/gen_zhstdlib_lib.ps1 从上游 lib + stdlib/试点-数组与数学.tsv 生成）。
// 本文件只负责「全局的名字」—— 这些没法从成员表推出来（要知道是类型位、值位、还是两者）。
//
// 机制（2026-10-08 定）：声明层用汉语名；运行时那一半由【编译器改写】负责 ——
// emit 时把汉语标准库名打回英文规范名（甲.追加 → 甲.push），产物是标准 JS。
//
// 【// @lib <键>】标记：告诉生成器这一段该归到哪个来源 lib 的分块（规格六·十二）。
// 自动加载时每个块只随自己的来源 lib 一起加载 —— 例如只加载 es2020 而不加载 dom 时，
// 「控制台」(Console) 这一段就不该出现（否则引用的 Console 不可用）。

// @lib es5
// 全局对象 / 类型别名（Array / Math / Date / RegExp / Error 都在 es5）
type 数组<T> = Array<T>;
declare var 数学: Math;
type 日期 = Date;
declare var 日期: DateConstructor;
type 正则 = RegExp;
declare var 正则: RegExpConstructor;
type 错误 = Error;
declare var 错误: ErrorConstructor;

// @lib es2015
// 内建构造器：类型位与值位都给（写「集合<数字>」或「新建 集合()」都可以）
type 承诺<T> = Promise<T>;
declare var 承诺: PromiseConstructor;
type 映射表<K, V> = Map<K, V>;
declare var 映射表: MapConstructor;
type 集合<T> = Set<T>;
declare var 集合: SetConstructor;

// @lib dom
declare var 控制台: Console;
// 全局函数（不是接口成员，生成器不管；emit 里全局名在引用位就会改写）
declare function 创建对象地址(对象: Blob | MediaSource): string;
declare function 撤销对象地址(地址: string): void;
