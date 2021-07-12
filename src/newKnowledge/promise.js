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

  new MyPromise((resolve, reject) => {
    reject("错误信息");
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
