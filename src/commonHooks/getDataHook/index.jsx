import { useState, useEffect } from "react";
const mock = {
  department: [
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
  ],
  users: [
    {
      key: "1",
      name: `胡彦斌-`,
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: `胡彦斌-`,
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ],
};

function useGetDataListCommonHook({ type }) {
  const [listData, setListData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setListData(mock[type]);
      setLoadingData(false);
    }, 800);
  }, []);

  return {
    listData,
    loadingData,
  };
}

export default useGetDataListCommonHook;
