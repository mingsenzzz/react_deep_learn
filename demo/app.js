import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Content from "../src/components/classComponents/content/index.jsx";
import HomePage from "../src/pages/HomePage/index.jsx";
import reducers from "../src/redux/reducers/index.js";

import UsersPage from "../src/pages/UsersPage/index.jsx";
import Department from "../src/pages/Department/index.jsx";
import TodosList from "../src/components/todosList/index.jsx";
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

const store = createStore(reducers, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
          {/* 嵌套子路由 */}
          <Switch>
            <Route path="/home/department" component={Department} />
            <Route path="/home/users" component={UsersPage} />
          </Switch>
        </Route>
        <Route path="/classC">
          <TodosList />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  root
);
