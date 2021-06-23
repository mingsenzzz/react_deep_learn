/**
 * render prop 的方式，复用组件
 */
import React from "react";
import Mouse from "../Mouse/index.jsx";
import "./index.less";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Mouse
          render={(mouse) => {
            return <Cat mouse={mouse} />;
          }}
        />
      </>
    );
  }
}

class Cat extends React.Component {
  render() {
    const { x, y } = this.props.mouse;
    return (
      <div className="catC" style={{ left: x, top: y }}>
        给我飘起来把,miao~
      </div>
    );
  }
}

export default Content;
