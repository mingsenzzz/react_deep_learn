import React from "react";
import PropTypes from "prop-types";
import {
  func1,
  anyFunc,
  finallyFunc,
  raceFunc,
  catchAndThenFunc,
} from "./promisePratice";
const PromiseComponent = () => {
  // func1();
  // anyFunc();
  // finallyFunc();
  // raceFunc();
  catchAndThenFunc();
  return <div>2222222</div>;
};

export default PromiseComponent;
