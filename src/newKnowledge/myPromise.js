import React from "react";

class MyPromise {
  constructor(executor) {
    executor && executor(this.resolve, this.reject);
  }
  status = "pending";
  value = undefined;
  errorMsg = undefined;
  onResolveCallback = null;
  onRejectCallback = null;

  resolve = (value) => {
    this.value = value;
    this.status = "fullfilled";

    //当状态改变成时，则执行回调函数
    if (this.onResolveCallback) {
      this.onResolveCallback(value);
    }
  };

  reject = (msg) => {
    this.errorMsg = msg;
    this.status = "rejected";

    //当状态改变成时，则执行回调函数
    if (this.onRejectCallback) {
      this.onRejectCallback(msg);
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

    if (this.status == "pending") {
      this.onResolveCallback = resolveFun;
      this.onRejectCallback = rejectFun;
    }
  };

  catch = (catchFunc) => {
    catchFunc(this.errorMsg);
  };
}

export default MyPromise;
