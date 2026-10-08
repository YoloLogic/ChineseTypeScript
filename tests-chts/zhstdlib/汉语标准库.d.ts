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
