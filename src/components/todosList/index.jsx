import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { addTodoItem } from "../../redux/actions/index.js";
import List from "./list.jsx";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addOneTask = (next) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          type: "ADD_TODO",
          text: this.inputRef?.value,
          id: Date.now(),
        });
      }, 2000);
    }).then((res) => {
      next(res);
      this.inputRef.value = "";
    });
  };

  addTodo = () => {
    const { dispatch } = this.props;
    //一般dispatch只能传入一个对象{type: xx, data: xx}, 但是使用redux-thunk之后，
    //可以传入函数（调用接口的函数），并会收到一个改造后的dispatch方法，在获取接口结果时，再分发reducer的调用
    dispatch(this.addOneTask);
  };

  render() {
    const { todosList } = this.props;
    return (
      <div>
        <div>一共{todosList.length}条todos</div>
        <List />
        <div>
          <input placeholder="请输入" ref={(el) => (this.inputRef = el)} />
          <Button onClick={this.addTodo}>添加</Button>
        </div>
      </div>
    );
  }
}

export default connect(({ todos, ...rest }) => {
  return {
    todosList: todos,
  };
})(TodoList);
