/**
 *
 * connect函数的实现原理
 */
import React from "react";
import { createStore } from "redux";
import reducers from "../reducers/index.js";

const store = createStore(reducers);
function connect(mapStateToProps, mapDispatchToProp) {
  return function enHanceHoc(WrappedComponent) {
    return class HocComponent extends React.Component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProp(store.dispatch)}
          />
        );
      }
    };
  };
}

//使用connect方式

// connect(state => {
// 	return {}
// }, dispatch => {
// 	return dispatch;
// })(<组件 />)
