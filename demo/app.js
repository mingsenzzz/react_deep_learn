import React from "react";
import ReactDOM from "react-dom";
import Content from "../src/components/classComponents/content/index.jsx";
import HomePage from "../src/pages/HomePage/index.jsx";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import UsersPage from "../src/pages/UsersPage/index.jsx";
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
//使用useref hook组件
import UseRef from "../src/components/hooksComponents/useRef.jsx";
//使用自定义hook
import CustomeHookFunc from "../src/components/hooksComponents/customHooks.jsx";
const root = document.createElement("div");
window.document.body.appendChild(root);
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/users">
        <UsersPage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  </Router>,
  root
);
