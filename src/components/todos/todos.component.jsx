import { useContext} from "react";
import { TodoContext } from "../../contexts/todo.context";
import "./todos.styles.scss";
const Todos = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const handleComplete = (id) => {
    const modifyTodos = todos.filter((todo) => {
      if (todo.id === id) {
        todo.is_complete = !todo.is_complete;
      }
      return todo;
    });
    setTodos(modifyTodos);
  };
  const handleEdit = (id) => {
    const modifyTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.edit = true;
      }
      return todo;
    });
    setTodos(modifyTodos);
  };
  const handleOnBlur = (id, value) => {
    const modifyTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.edit = false;
        todo.content = value;
      }
      return todo;
    });
    setTodos(modifyTodos);
  };
  return (
    <div className="Todos">
      {todos.map((item) => (
        <div key={item.id} className="todo-item">
          <input type="checkbox" onClick={() => handleComplete(item.id)} />
          <input
            className={`todo-content ${item.is_complete ? "underline" : ""}`}
            defaultValue={item.content}
            disabled={!item.edit}
            onBlur={(event) => handleOnBlur(item.id, event.target.value)}
          />

          <div className="todo-buttons">
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Todos;
