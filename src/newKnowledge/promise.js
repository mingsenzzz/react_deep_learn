import React from "react";
import PropTypes from "prop-types";
import {
  func1,
  anyFunc,
  finallyFunc,
  raceFunc,
  catchAndThenFunc,
} from "./promisePratice";
import MyPromise from "./myPromise";
const PromiseComponent = () => {
  // func1();
  // anyFunc();
  // finallyFunc();
  // raceFunc();
  // catchAndThenFunc();

  //相当于先执行执行器，然后又调用了then方法，
  //如果执行器中是异步的操作，那么在调用then方法时，promise的状态还没有改变，会有问题
  new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject("错误信息");
    }, 1000);
  }).then(
    (res) => {
      console.log(res, "res");
    },
    (error) => {
      console.log(error, "error");
    }
  );

  return <div>2222222</div>;
};

export default PromiseComponent;
