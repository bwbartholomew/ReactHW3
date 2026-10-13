// Дочірній компонент: відмальовує масив todo, які прийшли через props
function TodoList({ todos, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.name}</span>
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
