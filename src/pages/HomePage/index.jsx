import React, { useState } from "react";
import { Button, Tabs } from "antd";
import "./index.less";
import { Router, withRouter } from "react-router-dom";

const { TabPane } = Tabs;
function Home(props) {
  const { history } = props;
  const isInUser = history.location.pathname.indexOf("users") > -1;
  //刷新之后定位到路由
  const [activeTab, setActiveTab] = useState(isInUser ? "2" : "3");
  function onTabChange(key) {
    history.push(key == 2 ? "/home/users" : "/home/department");
    setActiveTab(key);
  }
  return (
    <div className="company">
      <Tabs activeKey={activeTab} onChange={onTabChange}>
        <TabPane tab="Tab 2" key="2" />
        <TabPane tab="Tab 3" key="3" />
      </Tabs>
    </div>
  );
}

export default withRouter(Home);
