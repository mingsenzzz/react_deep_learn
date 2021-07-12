import React from "react";

class MyPromise {
  constructor(executor) {
    executor && executor(this.resolve, this.reject);
  }
  status = "pending";
  value = undefined;
  errorMsg = undefined;
  onResolveCallback = [];
  onRejectCallback = [];

  resolve = (value) => {
    this.value = value;
    this.status = "fullfilled";

    //当状态改变成时，则执行回调函数
    while (this.onResolveCallback.length) {
      this.onResolveCallback.shift()(value);
    }
  };

  reject = (msg) => {
    this.errorMsg = msg;
    this.status = "rejected";

    //当状态改变成时，则执行回调函数
    while (this.onRejectCallback.length) {
      this.onRejectCallback.shift()(msg);
    }
  };

  then = (resolveFun, rejectFun) => {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status == "fullfilled") {
        //获取执行resolve回调函数之后的结果（.then中第一个回调return的值）
        const x = resolveFun(this.value);

        resolvePromise(x, resolve, reject);
      }
      if (this.status == "rejected") {
        rejectFun(this.errorMsg);
      }
      //因为如果执行器中有异步操作的话，
      //并且修改状态的resolve和reject在异步操作中，
      //那么状态不会修改，所以需要存储，.then时传入的两个异步回调；
      if (this.status == "pending") {
        this.onResolveCallback.push(resolveFun);
        this.onRejectCallback.push(rejectFun);
      }
    });
    return promise2;
  };

  catch = (catchFunc) => {
    catchFunc(this.errorMsg);
  };
}

function resolvePromise(x, resolve, reject) {
  //判断.then中第一个回调函数的返回值，如果是promise的话，执行它的then
  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  } else {
    //如果.then 第一个回调中return一个常量，则会返回一个成功的promise
    resolve(x);
  }
}

export default MyPromise;
