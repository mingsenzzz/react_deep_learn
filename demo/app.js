import React from "react";
import ReactDOM from "react-dom";
import Content from "../src/components/classComponents/content/index.jsx";
const root = document.createElement("div");
window.document.body.appendChild(root);
ReactDOM.render(
  <div>
    <Content />
  </div>,
  root
);
