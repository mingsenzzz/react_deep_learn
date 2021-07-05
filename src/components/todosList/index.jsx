import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";

import List from "./list.jsx";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addTodo = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "ADD_TODO",
      text: this.inputRef?.value,
      id: Date.now(),
    });
    this.inputRef.value = "";
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
