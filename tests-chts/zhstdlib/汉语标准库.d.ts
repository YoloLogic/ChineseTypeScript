// 标准库汉化【试点】（数组 + 数学）—— 汉语别名声明。
//
// 这是验证机制的试点，不是最终形态：最终会由工具从上游 lib 生成（见 stdlib/README.md）。
// 机制（2026-10-08 定）：声明层用汉语名；运行时那一半由【编译器改写】负责 ——
// emit 时把汉语标准库名打回英文规范名（甲.追加 → 甲.push），产物是标准 JS。
interface Array<T> {
    长度: number;
    追加(...项: T[]): number;
    末尾弹出(): T | undefined;
    开头弹出(): T | undefined;
    开头插入(...项: T[]): number;
    截取(起: number, 末?: number): T[];
    映射<U>(回调: (值: T, 序号: number, 数组: T[]) => U): U[];
    过滤(谓词: (值: T, 序号: number, 数组: T[]) => boolean): T[];
    归纳<U>(回调: (累积: U, 值: T, 序号: number, 数组: T[]) => U, 初值: U): U;
    排序(比较?: (甲: T, 乙: T) => number): this;
    反转(): T[];
    逐个处理(回调: (值: T, 序号: number, 数组: T[]) => void): void;
}

interface Math {
    向下取整(数: number): number;
    向上取整(数: number): number;
    四舍五入(数: number): number;
    平方根(数: number): number;
    绝对值(数: number): number;
    最大(...数: number[]): number;
    最小(...数: number[]): number;
    随机(): number;
}

declare var 数学: Math;
declare var 控制台: Console;
type 数组<T> = Array<T>;

// 以下两段补上译名表里其余名字的声明（TS 接口会【合并】，所以在这里再开一块完全合法）。
// 由 judge_zhstdlib 第⑧项守卫：译名表里每个名字都必须有声明，否则判定变红。
interface Array<T> {
    转字符串(): string;
    本地转字符串(): string;
    拼接(...项: T[][]): T[];
    连接成串(分隔符?: string): string;
    剪接(起: number, 删除数?: number, ...项: T[]): T[];
    找序号(值: T, 起?: number): number;
    末次序号(值: T, 起?: number): number;
    全部满足(谓词: (值: T, 序号: number, 数组: T[]) => boolean): boolean;
    存在满足(谓词: (值: T, 序号: number, 数组: T[]) => boolean): boolean;
    反向归纳<U>(回调: (累积: U, 值: T, 序号: number, 数组: T[]) => U, 初值: U): U;
}

interface Math {
    反余弦(数: number): number;
    反正弦(数: number): number;
    反正切(数: number): number;
    反正切二(纵: number, 横: number): number;
    余弦(数: number): number;
    指数(数: number): number;
    对数(数: number): number;
    乘方(底: number, 指: number): number;
    正弦(数: number): number;
    正切(数: number): number;
    截断(数: number): number;
    符号(数: number): number;
    立方根(数: number): number;
    对数二(数: number): number;
    对数十(数: number): number;
    斜边长(...数: number[]): number;
}

interface String {
    转字符串(): string;
    取字符(位置: number): string;
    取字符码(位置: number): number;
    取码点(位置: number): number | undefined;
    本地比较(比较对象: string): number;
    匹配(正则: RegExp): RegExpMatchArray | null;
    替换(查找: string, 替换成: string): string;
    查找(正则: RegExp): number;
    拆分(分隔: string): string[];
    取子串(起: number, 末?: number): string;
    转小写(): string;
    转大写(): string;
    去空白(): string;
    重复(次数: number): string;
    以开头(查找: string): boolean;
    以结尾(查找: string): boolean;
    包含(查找: string): boolean;
    前补(总长: number, 填充?: string): string;
    后补(总长: number, 填充?: string): string;
    取值(): string;
    规范化(): string;
}

// 内建构造器的汉语别名：类型位与值位都给（`新建 集合<数字>()` 与 `集合<数字>` 都能写）。
type 承诺<T> = Promise<T>;
declare var 承诺: PromiseConstructor;
type 映射表<K, V> = Map<K, V>;
declare var 映射表: MapConstructor;
type 集合<T> = Set<T>;
declare var 集合: SetConstructor;
type 日期 = Date;
declare var 日期: DateConstructor;
type 正则 = RegExp;
declare var 正则: RegExpConstructor;
type 错误 = Error;
declare var 错误: ErrorConstructor;

// Map / Set 的核心成员（`大小/含有/删除/清空` 同时出现在两者上，映射到各自的英文原名）。
interface Map<K, V> {
    获取(键: K): V | undefined;
    设置(键: K, 值: V): this;
    含有(键: K): boolean;
    删除(键: K): boolean;
    清空(): void;
    大小: number;
}
interface Set<T> {
    添加(值: T): this;
    含有(值: T): boolean;
    删除(值: T): boolean;
    清空(): void;
    大小: number;
}

// Promise（`catch` 与关键字「捕获」同名，这里先不译，留给后续统一处理）。
interface Promise<T> {
    然后<U>(回调: (值: T) => U | Promise<U>): Promise<U>;
    最终(回调?: () => void): Promise<T>;
}
interface PromiseConstructor {
    解决<T>(值: T | Promise<T>): Promise<T>;
    拒绝(原因?: any): Promise<never>;
    全部<T>(值: Iterable<T | Promise<T>>): Promise<T[]>;
    竞速<T>(值: Iterable<T | Promise<T>>): Promise<Awaited<T>>;
}

// Date 的常用取值（`日期` 全局别名已在上面声明）。
interface Date {
    取时刻(): number;
    取年(): number;
    取月(): number;
    取日(): number;
}
interface DateConstructor {
    此刻(): number;
}

// RegExp / JSON 的常用成员。
interface RegExp {
    测试(串: string): boolean;
    执行(串: string): RegExpExecArray | null;
}
interface JSON {
    解析(文本: string): any;
    序列化(值: any): string;
}

// console 的常用成员（`控制台` 全局别名已在上面声明）。
interface Console {
    日志(...数据: any[]): void;
    报错(...数据: any[]): void;
    警告(...数据: any[]): void;
}

// Array 的其余常用成员。
interface Array<T> {
    找出(谓词: (值: T, 序号: number, 数组: T[]) => boolean): T | undefined;
    找出序号(谓词: (值: T, 序号: number, 数组: T[]) => boolean): number;
    填充(值: T, 起?: number, 末?: number): this;
    取第(序号: number): T | undefined;
}

// String 的其余 ES2015+ 成员。
interface String {
    全替换(查找: string, 替换成: string): string;
    去头空白(): string;
    去尾空白(): string;
    全匹配(正则: RegExp): IterableIterator<RegExpMatchArray>;
}
