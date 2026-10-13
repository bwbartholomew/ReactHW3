import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';

// Початковий масив даних: кожен todo — це об'єкт з id та name
const initialTodos = [
  { id: 1, name: 'Вивчити React' },
  { id: 2, name: 'Зробити домашнє завдання' },
  { id: 3, name: 'Випити каву' },
];

function App() {
  // Те, що користувач зараз вводить в input
  const [inputValue, setInputValue] = useState('');
  // Список всіх to do (початково — наш масив з трьох елементів)
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = () => {
    const name = inputValue.trim();
    if (name === '') return; // порожні задачі не додаємо

    // Новий todo має таку саму структуру: { id, name }
    const newTodo = {
      id: Date.now(), // унікальний id
      name: name,
    };

    setTodos([...todos, newTodo]);
    setInputValue(''); // очищаємо input
  };

  // Видалення: залишаємо всі todo, id яких НЕ дорівнює вказаному
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Додавання по натисканню клавіші Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="new task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <p className="count">{todos.length}</p>

      {/* Дочірній компонент отримує масив і функцію видалення через props */}
      <TodoList todos={todos} onDelete={deleteTodo} />

      <button onClick={addTodo}>Add TO DO</button>
    </div>
  );
}

export default App;
