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
      constructor(props) {
        super(props);
        this.state = {
          storeContext: mapStateToProps(store.getState()),
        };
      }

      componentDidMount() {
        //订阅store的变化
        this.unSubscribe = store.subscribe(() => {
          this.setState({
            storeContext: store.getState(),
          });
        });
      }

      componentWillUnmount() {
        //清除订阅
        this.unSubscribe();
      }

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
