import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);

  function onDeletedTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
    // const newTodoList = todos.filter((todo) => todo.id !== id);
    // setTodos(newTodoList);
  }

  function onEditTodo(id, newTodo) {
    dispatch({ type: "edit_todo", payload: { id, newTodo } });
    // const newTodoList = todos.map((todo) => {
    //   if (todo.id == id) {
    //     todo.text = newTodo;
    //   }
    //   return todo;
    // });
    // setTodos(newTodoList);
  }

  function onFinishTodo(id, state) {
    dispatch({ type: "finish_todo", payload: { id, state } });
    // const newTodoList = todos.map((todo) => {
    //   if (todo.id == id) {
    //     todo.isFinished = state;
    //   }
    //   return todo;
    // });

    // setTodos(newTodoList);
  }

  return (
    todos &&
    todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        id={todo.id}
        isFinished={todo.isFinished}
        editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
        deleteTodo={() => onDeletedTodo(todo.id)}
        finishTodo={(state) => onFinishTodo(todo.id, state)}
      />
    ))
  );
}

export default TodoList;
