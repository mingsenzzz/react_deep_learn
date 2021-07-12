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
  const childP = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("成功啦");
    }, 1000);
  });

  childP.then((res) => {
    console.log(res, "res1111");
  });

  childP.then((res) => {
    console.log(res, "res2222");
  });

  childP.then((res) => {
    console.log(res, "res3333");
  });

  return <div>2222222</div>;
};

export default PromiseComponent;
