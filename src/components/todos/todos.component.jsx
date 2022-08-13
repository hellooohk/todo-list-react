import { useContext } from "react";
import { TodoContext } from "../../contexts/todo.context";
import "./todos.styles.scss";
const Todos = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const handleDelete = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }
  const handleComplete = (id) => {
    const modifyTodos = todos.filter(todo => {
        if(todo.id === id){
            todo.is_complete = !todo.is_complete;
        }
        return todo;
    })
    setTodos(modifyTodos);
  }
  return (
    <div className="Todos">
      {todos.map((item) => (
        <div key={item.id} className="todo-item">
          <div onClick={()=> handleComplete(item.id)} className={`todo-content ${item.is_complete ? 'underline': ''}`}>{item.content}</div>
          <button onClick={()=> handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Todos;
