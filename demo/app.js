import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Content from "../src/components/classComponents/content/index.jsx";
import HomePage from "../src/pages/HomePage/index.jsx";
import reducers from "../src/redux/reducers/index.js";
import routes from "../src/router";

import UsersPage from "../src/pages/UsersPage/index.jsx";
import Department from "../src/pages/Department/index.jsx";
import TodosList from "../src/components/todosList/index.jsx";
import UerRequest from "../src/useRequest/index.jsx";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
//reduxThunk的原理：
// 重写了store身上的dispatch方法

// const originDispatch = store.dispatch;

// store.dispatch = (param) => {
// 	if (typeof param == 'function') {
// 		//说明传入的是函数,则调用函数，然后将最初的dispatch传回给函数，
// 		//这样在传入的函数中获取接口返回值之后，调用dispatch就可以了
// 		param(originDispatch)
// 	} else {
// 		//如果不是函数，那么则还按照同步的处理
// 		originDispatch(param)
// 	}
// }

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>{renderRoutes(routes)}</Switch>
    </Router>
  </Provider>,
  root
);
