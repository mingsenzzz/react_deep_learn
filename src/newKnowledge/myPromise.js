import React from "react";

class MyPromise {
  constructor(executor) {
    executor && executor(this.resolve, this.reject);
  }
  status = "pending";
  value = undefined;
  errorMsg = undefined;

  resolve = (value) => {
    this.value = value;
    this.status = "fullfilled";
  };

  reject = (msg) => {
    this.errorMsg = msg;
    this.status = "rejected";
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
  };

  catch = (catchFunc) => {
    catchFunc(this.errorMsg);
  };
}

export default MyPromise;
