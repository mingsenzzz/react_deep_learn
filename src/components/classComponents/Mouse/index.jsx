import React from "react";
import "./index.less";

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  changeMousePosition = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div onMouseMove={this.changeMousePosition} className="mouseWrap">
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default Mouse;
