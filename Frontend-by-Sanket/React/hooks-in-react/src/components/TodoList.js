//todos ->[{},{}]

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

// todo -> {id: 1, data: 'some todo'}

export default TodoList;
