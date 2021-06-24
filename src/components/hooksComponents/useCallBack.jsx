import React, { useCallback, useState } from "react";
import { Button } from "antd";

function computeData(count) {
  return count + 1;
}

function UseCallBackFunc() {
  const [count, setCount] = useState(0);
  //得到一个因为依赖项改变，而重新计算结果的计算函数
  const getMemoizedResult = useCallback(() => {
    return computeData(count);
  }, [count]);
  return (
    <div>
      COUNT: {count} <br />
      COMPUTED_COUNT: {getMemoizedResult()} <br />
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        changeCount
      </Button>
    </div>
  );
}

export default UseCallBackFunc;
