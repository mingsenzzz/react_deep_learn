import React, { useReducer, useContext } from "react";
import { Button } from "antd";
import UseContextAndReducer from "./useContextAndUseReducer.jsx";
function changeCountReducer(state, action) {
  switch (action) {
    case "-":
      return { count: state.count - 1 };
    case "+":
      return { count: state.count + 1 };
  }
}
export const CounterContext = React.createContext({});

export function UseReducerFunc() {
  const [state, dispatchCountChanger] = useReducer(changeCountReducer, {
    count: 0,
  });
  return (
    <CounterContext.Provider value={{ state, dispatchCountChanger }}>
      COUNT: {state.count}
      <Button onClick={() => dispatchCountChanger("-")}>---</Button>
      <Button onClick={() => dispatchCountChanger("+")}>+++</Button>
      <UseContextAndReducer />
    </CounterContext.Provider>
  );
}
