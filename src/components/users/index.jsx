import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Table, Spin } from "antd";

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
function UsersTable({ activeDepartment = {} }, ref) {
  const [usersData, setUsersData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setUsersData([
        {
          key: "1",
          name: `胡彦斌-${activeDepartment.id}`,
          age: 32,
          address: "西湖区湖底公园1号",
        },
        {
          key: "2",
          name: `胡彦斌-${activeDepartment.id}`,
          age: 42,
          address: "西湖区湖底公园1号",
        },
      ]);
      setLoadingData(false);
    }, 800);
  }, [activeDepartment]);

  useImperativeHandle(ref, () => {
    return {
      totalCount: usersData.length,
    };
  });
  return (
    <>
      {loadingData ? (
        <Spin />
      ) : (
        <Table dataSource={usersData} columns={columns} />
      )}
    </>
  );
}

const UsersC = forwardRef(UsersTable);

export default UsersC;
