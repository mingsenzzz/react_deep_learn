import React, { Children, useMemo, useState, memo } from "react";
import { Button } from "antd";

//使用memo缓存组件
const Chil = memo(function Chil({ chilData }) {
  console.log("渲染子组件");
  return (
    <div>
      memoChild-----{chilData}
      <br />
      <Button onClick={() => {}}>更改父组件</Button>
    </div>
  );
});

function UseMemoFunc() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const chilData = useMemo(() => {
    return count1;
  }, [count1]);
  return (
    <div>
      COUNT: {count} <br />
      <Button
        onClick={() => {
          setCount(count + 1);
          if (count > 3) {
            setCount1(count);
          }
        }}
      >
        changeCount
      </Button>
      <Chil chilData={chilData} />
    </div>
  );
}

export default UseMemoFunc;
