import React from "react";
function HigherOrderComponent(WrappedComponent) {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 222,
        age: 11,
      };
    }
    render() {
      const { name, age } = this.state;
      const newProps = {
        name,
        age,
      };
      return <WrappedComponent {...newProps} />;
    }
  };
}

export default HigherOrderComponent;
