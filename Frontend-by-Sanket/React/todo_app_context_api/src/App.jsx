// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
// import { useState } from "react";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./reducers/TodoReducer";

function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(TodoReducer, []);
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "todo 1", isFinished: true },
  //   { id: 2, text: "todo 2", isFinished: false },
  // ]);

  // function addTodos(todoText) {
  //   let nextId = todos.length + 1;
  //   setTodos([...todos, { id: nextId, isFinished: false, text: todoText }]);
  // }

  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
