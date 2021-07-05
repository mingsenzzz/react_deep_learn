import React from "react";
import { Button } from "antd";
import { Router, withRouter } from "react-router-dom";

function Home(props) {
  const { history } = props;
  console.log(props, "props");
  return (
    <div>
      hgomePage
      <Button
        onClick={() => {
          history.push("/users");
        }}
      >
        To users page
      </Button>
    </div>
  );
}

export default withRouter(Home);
