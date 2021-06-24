import React from "react";
import ReactDOM from "react-dom";
import Content from "../src/components/classComponents/content/index.jsx";

//测试高阶组件的使用
import WrappedComponent from "../src/components/classComponents/higher_order_component/wrappedCom.jsx";
//测试hooks组件
import { BasicHook } from "../src/components/hooksComponents/index.jsx";
//使用useReducer hook的组件
import { UseReducerFunc } from "../src/components/hooksComponents/useReducer.jsx";
//使用UseCallBack hook的组件
import UseCallBackFunc from "../src/components/hooksComponents/useCallBack.jsx";
//使用useMemo hook的组件
import UseMemo from "../src/components/hooksComponents/useMemo.jsx";
const root = document.createElement("div");
window.document.body.appendChild(root);
ReactDOM.render(
  <div>
    {/* <Content /> */}
    {/* <UseReducerFunc /> */}
    {/* <BasicHook /> */}
    {/* <WrappedComponent /> */}
    {/* <UseCallBackFunc /> */}
    <UseMemo />
  </div>,
  root
);
