import React, { useState, useEffect } from "react";

//获取接口的hook
function useGetPersonDetailHook(id) {
  const config = {
    1: { name: "我的名字1" },
    2: { name: "我的名字2" },
    3: { name: "我的名字3" },
    4: { name: "我的名字4" },
    5: { name: "我的名字5" },
    6: { name: "我的名字6" },
  };
  const [detail, setDetail] = useState({});
  const [loadingDetail, setLoading] = useState(true);
  //保证只执行一次
  useEffect(() => {
    setTimeout(() => {
      setDetail(config[id]);
      setLoading(false);
    }, 300);
  }, []);
  return [loadingDetail, detail];
}

//获取一个人的详情hook
function getAllGoodsNameById(id) {
  const [loadingDetail, detail] = useGetPersonDetailHook(id);
  return <div key={id}>{loadingDetail ? "获取详情中" : detail.name}</div>;
}

function MakePersonList() {
  const arr = [1, 2, 3, 4, 5];
  return arr.map((item) => {
    return getAllGoodsNameById(item);
  });
}

export default MakePersonList;
