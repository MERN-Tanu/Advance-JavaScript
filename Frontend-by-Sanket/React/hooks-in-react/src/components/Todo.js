import TodoList from "./TodoList";
import React, { useState } from "react";

function Todo() {
  // let todos = [
  //   { id: 1, data: "Todo 1" },
  //   { id: 2, data: "Todo 2" },
  //   { id: 3, data: "Todo 3" },
  // ];

  const [todos, setTodos] = useState([]);
  const [newTodo, setTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="new todo.."
        onChange={(e) => setTodo(e.target.value)}
      />
      <br />
      {/* <button onClick={() => todos.push(newTodo)}>Add Todo</button> */}
      <button onClick={() => setTodos([...todos, newTodo])}>Add todo</button>
      <TodoList todos={todos} />
    </div>
  );
}

/**todos.push(newTodo)} this won't work **/
export default Todo;
