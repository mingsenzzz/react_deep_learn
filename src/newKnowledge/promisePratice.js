/**
 * 测试allSettled方法
 * 与.all方法不同，all方法会在所以的promise执行成功之后，直接拿到结果，如果有一个失败，则停止执行，返回一个失败的promise
 * allSettled方法，会执行所有的promise，不会停止，会拿到所有promise的状态和结果（一般用在，几个promise之间没有依赖的情况下）
 */
export const func1 = () => {
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "错误原因");
  });
  const promises = [promise1, promise2];
  Promise.allSettled(promises).then((results) => {
    //console.log(results, "results");
    // [
    //   {
    //     status: "fulfilled",
    //     value: 3,
    //   },
    //   {
    //     status: "rejected",
    //     reason: "错误原因",
    //   },
    // ];
  });
};
