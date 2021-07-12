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
    this.status = "";

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
    if (this.status == "fullfilled") {
      resolveFun(this.value);
    }
    if (this.status == "rejected") {
      if (rejectFun) {
        rejectFun(this.errorMsg);
      } else {
        this.catch();
      }
    }

    //因为如果执行器中有异步操作的话，
    //并且修改状态的resolve和reject在异步操作中，
    //那么状态不会修改，所以需要存储，.then时传入的两个异步回调；
    if (this.status == "pending") {
      this.onResolveCallback.push(resolveFun);
      this.onRejectCallback.push(rejectFun);
    }
  };

  catch = (catchFunc) => {
    catchFunc(this.errorMsg);
  };
}

export default MyPromise;
