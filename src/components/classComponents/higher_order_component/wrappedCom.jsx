import React from "react";
import HigherOrderFunc from "./hocFunc.jsx";
class WrappedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, age } = this.props;
    return (
      <div>
        222222222
        {name && `姓名：${name}`}
        {name && `年龄：${age}`}
      </div>
    );
  }
}

export default HigherOrderFunc(WrappedComponent);
