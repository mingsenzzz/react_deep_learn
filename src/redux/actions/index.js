export const addTodoItem = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    id,
    text,
  };
};

//异步的action
export const addOneTaskAction = (next, getstate, text, callback) => {
  //第一个参数是改造前的dispatch
  //第二个参数是获取redux中的原状态
  //第二个参数后面的是自定义的参数
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        type: "ADD_TODO",
        text,
        id: Date.now(),
      });
    }, 2000);
  }).then((res) => {
    next(res);
    callback && callback();
  });
};
