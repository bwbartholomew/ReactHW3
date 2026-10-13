# React-HW3 — ToDo List (id, name, видалення)

## Запуск

Windows PowerShell:

```powershell
npm.cmd install
npm.cmd start
```

(або `npm install` та `npm start`, якщо PowerShell дозволяє запуск скриптів)

Відкриється http://localhost:3000

## Що реалізовано

1. Продовження ToDo List з попереднього ДЗ (React HW2).
2. Початковий масив `initialTodos` у `src/App.js` з 3 елементами.
3. Кожен todo — об'єкт `{ id, name }`.
4. Масив відмальовується в дочірньому компоненті `src/components/TodoList.js`
   (дані та функція видалення передаються через props).
5. Новий todo, що додається (кнопкою або клавішею Enter), має таку саму структуру:
   `{ id: Date.now(), name: <текст з input> }`.
6. Видалення: кнопка **Delete** біля кожного todo, видаляє саме вказаний
   елемент за `id` (`todos.filter(...)`).
7. Зверху показується кількість todo у списку.

## Структура

```
React-HW3/
├── public/index.html
├── src/
│   ├── components/TodoList.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```
