import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function addTodo() {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  }

  function toggleDone(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <div>
      <h4>📝 TODO App</h4>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.length === 0 && <li>No tasks</li>}
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(todo.id)}
            />
            <span style={{
              textDecoration: todo.done ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
