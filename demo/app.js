import React from "react";
import ReactDOM from "react-dom";
import Content from "../src/components/classComponents/content/index.jsx";

//测试高阶组件的使用
import WrappedComponent from "../src/components/classComponents/higher_order_component/wrappedCom.jsx";
const root = document.createElement("div");
window.document.body.appendChild(root);
ReactDOM.render(
  <div>
    <Content />
    <WrappedComponent />
  </div>,
  root
);
