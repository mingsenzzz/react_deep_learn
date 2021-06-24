import React, { useState, useEffect } from "react";
import { Table } from "antd";
import UseContext from "./useContext.jsx";

import { makeData } from "./utils.js";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
export const TableDataContext = React.createContext([]);
export function BasicHook() {
  const [tableData, setTableData] = useState([]);
  const [currPage, setCurrpage] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setTableData(makeData(22));
    }, 500);
  }, [currPage]);

  return (
    <div style={{ width: 888 }}>
      <Table
        dataSource={tableData}
        columns={columns}
        pagination={{
          total: 22,
          pageSize: 3,
          current: currPage,
          onChange: function (page) {
            setCurrpage(page);
          },
        }}
      />
      <TableDataContext.Provider value={tableData}>
        <UseContext />
      </TableDataContext.Provider>
    </div>
  );
}
