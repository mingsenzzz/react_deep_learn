import React from "react";
import { Redirect } from "react-router";
import TodosList from "../components/todosList/index.jsx";
import Department from "../pages/Department/index.jsx";
import HomePage from "../pages/HomePage/index.jsx";
import UsersPage from "../pages/UsersPage/index.jsx";
import UseRequest from "../useRequest/index.jsx";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => {
      return <Redirect to="/home" />;
    },
  },
  {
    path: "/home",
    component: HomePage,
    routes: [
      {
        path: "/home",
        exact: true, //是否全部匹配，如果想要使用redirect，需要加上这个属性
        component: () => {
          return <Redirect to="/home/department" />;
        },
      },
      {
        path: "/home/department",
        component: Department,
      },
      {
        path: "/home/users",
        component: UsersPage,
      },
    ],
  },
  {
    path: "/classC",
    component: TodosList,
  },
  {
    path: "/axios",
    component: UseRequest,
  },
];

export default routes;
