// 第 9 课：异步
//
// 关键字（英文对照）：异步(async) 等待(await) 函数(function) 返回(return)
//   新建(new) 数字(number) 字符串(string) 空型(void) 常量(const) 局部变量(let)
// 符号：=> 箭头、< > 泛型、.then 链式调用、() 调用
//
// 期望输出：
// 先打印这一行
// 等待得到=42
// 出错也接住了
// 两件事都做完了

// —— 异步函数：函数前面加 异步，它就返回一个 Promise ——
异步 函数 取数(): Promise<数字> {
  返回 42;
}

异步 函数 会失败(): Promise<数字> {
  抛出 new Error("故意失败");
}

异步 函数 主(): Promise<空型> {
  console.log("先打印这一行");

  常量 值 = 等待 取数();               // 等待 = await：等 Promise 出结果
  console.log("等待得到=" + 值);

  尝试 {                                // 尝试 = try
    等待 会失败();
  } 捕获 (错误) {                       // 捕获 = catch
    console.log("出错也接住了");
  }
}

// 主() 返回 Promise，用 .then 接住它（.then 是英文方法名）
主().then(() => {
  console.log("两件事都做完了");
});
