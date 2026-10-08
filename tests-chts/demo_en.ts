// 英文对照组：与 demo.ts 逐句等价，只是关键字用英文。
// 判定要求：两者的【运行结果】必须完全一致。

interface Shape {
  area(): number;
}

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

type NumberList = number[];

function sum(list: NumberList): number {
  let total = 0;
  for (const item of list) {
    total += item;
  }
  return total;
}

const rect = new Rectangle(3, 4);
const list = [1, 2, 3, 4];

if (rect instanceof Rectangle) {
  console.log("形状判定通过");
}

if (rect.area() === 12) {
  console.log("面积计算通过");
} else {
  console.log("面积计算失败");
}

if (sum(list) === 10) {
  console.log("求和通过");
} else {
  console.log("求和失败");
}

let count = 0;
while (count < 3) {
  count++;
}
console.log("循环次数=" + count);

try {
  throw new Error("演示异常");
} catch (err) {
  console.log("异常已捕获");
} finally {
  console.log("收尾执行");
}
