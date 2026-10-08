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
type 数组<T> = Array<T>;
