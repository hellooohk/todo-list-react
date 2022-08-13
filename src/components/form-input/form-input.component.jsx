import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/todo.context";
import "./form-input.styles.scss";
const FormInput = () => {
  const { setTodos, todos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: Math.floor(Math.random() * 10000),
      content: inputValue,
      is_complete:false,
    };
    setTodos([...todos, item]);
  };
  return (
 
      <form className="form-input" onSubmit={handleSubmit}>
        <input
          className=""
          type="text"
          placeholder="Add something..."
          value={inputValue}
          onChange={handleChange}
        />
        <button  type="submit">
          Add
        </button>
      </form>
   
  );
};
export default FormInput;
