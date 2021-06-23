import React from "react";
import { Button } from "antd";
import "./index.less";

export default class herComponent extends React.Component {
  render() {
    const num = 2;
    return (
      <div className="green">
        herComponent <Button type="primary">herComponent</Button>
        ---NUMBER: {num}
      </div>
    );
  }
}
