import { useState } from "react";

function handleClick(todo) {
  console.log(todo);
  alert(`${todo} clicked`);
}

function TodoItem(props) {
  let todos = [
    { id: 1, data: "Todo 1" },
    { id: 2, data: "Todo 2" },
    { id: 3, data: "Todo 3" },
  ];
  const [isFinished, setFinished] = useState(false);
  return (
    <div>
      <li onClick={() => handleClick(props.todo.data)}>{props.todo.data}</li>
      <button onClick={() => setFinished(!isFinished)}>
        {isFinished ? "Redo" : "Done"}
      </button>
    </div>
  );
}

export default TodoItem;
