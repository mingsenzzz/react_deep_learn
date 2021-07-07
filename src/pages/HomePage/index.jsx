import React, { useState } from "react";
import { Button, Tabs } from "antd";
import "./index.less";
import { Router, withRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const { TabPane } = Tabs;
function Home(props) {
  const { history, route } = props;
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
      {/* 为了渲染子路由 */}
      <Switch>{renderRoutes(route.routes)}</Switch>
    </div>
  );
}

export default withRouter(Home);
