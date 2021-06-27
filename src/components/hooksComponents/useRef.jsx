import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Button } from "antd";

function Child(props, ref) {
  const [count, setCount] = useState(0);
  //使用这个hook，可以获取函数组件内的方法、状态
  useImperativeHandle(ref, () => {
    return {
      childCCount: count,
      setCount,
    };
  });
  return <p>子元素{count}</p>;
}

const ChildC = forwardRef(Child);

function UseRefFunc() {
  const chilcRef = useRef(null);
  return (
    <div>
      <ChildC ref={chilcRef} />
      <Button
        onClick={() => {
          chilcRef.current.setCount(chilcRef.current.childCCount + 1);
        }}
      >
        查看
      </Button>
    </div>
  );
}

export default UseRefFunc;
