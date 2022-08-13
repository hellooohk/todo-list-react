import { createContext, useState } from "react";
export const TodoContext = createContext({
  todos: [],
  setTodos: () => null,
});
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const value = { todos, setTodos };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
