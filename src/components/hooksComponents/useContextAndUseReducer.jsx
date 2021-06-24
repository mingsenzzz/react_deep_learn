import React, { useContext } from "react";
import { Button } from "antd";
import { CounterContext } from "./useReducer.jsx";

export default function UseContextAndRecuder() {
  const { state, dispatchCountChanger } = useContext(CounterContext);
  return (
    <div>
      从context获取的数据NUMBER:
      {state.count}
      <Button
        onClick={() => {
          dispatchCountChanger("+");
        }}
      >
        通过dispatch修改context传入的数据
      </Button>
    </div>
  );
}
