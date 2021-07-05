const initialState = {
  todos: [],
};
const todos = (state = [], { type, id, text }) => {
  switch (type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: id,
          text: text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default todos;
