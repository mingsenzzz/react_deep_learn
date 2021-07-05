import React, { useState, useEffect, memo, forwardRef, useRef } from "react";
import { Spin } from "antd";
import Users from "../../components/users/index.jsx";
// import useGetDataListCommonHook from "../../commonHooks/getDataHook/index.jsx";
import "./index.less";
function Department() {
  const [departmentLoading, setDepartmentLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState({});

  useEffect(() => {
    setDepartmentLoading(true);
    setTimeout(() => {
      const data = [
        {
          name: "信息科技部",
          id: 11111,
        },
        {
          name: "销售部",
          id: 22222,
        },
        {
          name: "网络安全",
          id: 33333,
        },
      ];
      setDepartments(data);
      setActiveDepartment(data[0]);
      setDepartmentLoading(false);
    }, 1000);
  }, []);
  const usersRef = useRef(null);
  return (
    <div className="departmentWrap">
      <div className="departments">
        {departmentLoading ? (
          <Spin />
        ) : (
          departments.map((item) => {
            return (
              <div
                className={`${
                  activeDepartment.id == item.id ? "activeItem" : ""
                } item`}
                key={item.id}
                onClick={() => {
                  setActiveDepartment(item);
                }}
              >
                {item.name}
              </div>
            );
          })
        )}
      </div>
      <div className="usersWrap">
        <div className="title">
          {activeDepartment.name} 总共{usersRef.current?.totalCount}人
        </div>
        <Users activeDepartment={activeDepartment} ref={usersRef} />
      </div>
    </div>
  );
}

export default Department;
