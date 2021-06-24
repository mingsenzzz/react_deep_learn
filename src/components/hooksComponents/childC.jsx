import React, { useContext } from "react";
import { TableDataContext } from "./index.jsx";
function ChildC() {
  const tableData = useContext(TableDataContext);
  console.log(tableData, "get-from-context");
  return JSON.stringify(tableData);
}

export default ChildC;
