export const addTodoItem = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    id,
    text,
  };
};
