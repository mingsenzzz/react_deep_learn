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

/***
 *
 * 只要传入的可迭代的对象中，有一个promise执行成功的话，
 * 则就返回一个成功的promise，resolve的值为第一个成功的promise的值，
 * 如果全部失败，那么就返回一个失败的promise
 */

export const anyFunc = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("成功啦");
    }, 2000);
  });

  const promise2 = Promise((resolve, reject) => {
    setTimeout(() => {
      reject("失败原因");
    }, 1000);
  });

  Promise.any([promise1, promise2])
    .then((res) => {
      console.log(res, "res");
    })
    .catch((error) => {
      // console.log(error, "error");
      // AggregateError: All promises were rejected
    });
};

/**
 * 无论promise是成功还是失败，则最终都会执行 finally回调函数
 * 使用场景：不论请求是否成功，都需要将loading置为false
 */

export const finallyFunc = () => {
  new Promise((resolve, reject) => {
    resolve("2222");
  })
    .then((res) => {
      console.log(res, "成功");
    })
    .catch((err) => {
      console.log(err, "失败");
    })
    .finally(() => {
      console.log("执行finally回调函数");
    });
};

/**
 * 传入一个iterale的对象，返回一个promise，状态由第一个完成的promise的状态来决定
 */

export const raceFunc = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve成功结果");
    }, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("reject错误信息");
    }, 1000);
  });

  Promise.race([promise1, promise2])
    .then((res) => {
      console.log(res, "res");
    })
    .catch((error) => {
      console.log(error, "error");
    });
};

/**
 *
 * 当.then中传递了第二个回调函数的时候，那么catch函数就不会调用
 */

export const catchAndThenFunc = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("失败啦");
    }, 1000);
  })
    .then(
      (res) => {
        console.log(res, "成功结果");
      },
      (reject) => {
        console.log(reject, "reject");
      }
    )
    .catch((error) => {
      console.log(error, "catchError");
    });
};
