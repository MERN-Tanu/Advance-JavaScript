import { useState, useContext } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo() {
  const { dispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  function addTodo(todoText) {
    dispatch({ type: "add_todo", payload: { todoText } });
    // let nextId = todos.length + 1;
    // setTodos([...todos, { id: nextId, text: todoText, isFinished: false }]);
  }
  return (
    <>
      <input
        placeholder="add your next video...."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        onClick={() => {
          // let nextId = todos.length + 1;
          // setTodos([
          //   ...todos,
          //   { id: nextId, text: todoText, isFinished: false },
          // ]);
          addTodo(todoText);
          setTodoText("");
        }}>
        Submit
      </button>
    </>
  );
}

export default AddTodo;
