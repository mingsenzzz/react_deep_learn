import React from "react";
import { connect } from "react-redux";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todosList } = this.props;
    return (
      <div>
        {todosList.map((item, index) => {
          return <div key={index}>{item.text}</div>;
        })}
      </div>
    );
  }
}

export default connect(({ todos }) => ({ todosList: todos }))(List);
