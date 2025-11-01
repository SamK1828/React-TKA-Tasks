// import React, { useState } from 'react';

// export default function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   function addTodo() {
//     if (!input.trim()) return;
//     setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
//     setInput('');
//   }

//   function toggleDone(id) {
//     setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
//   }

//   function deleteTodo(id) {
//     setTodos(todos.filter(t => t.id !== id));
//   }

//   return (
//     <div>
//       <h4>📝 TODO App</h4>
//       <input
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         placeholder="Enter task"
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.length === 0 && <li>No tasks</li>}
//         {todos.map(todo => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.done}
//               onChange={() => toggleDone(todo.id)}
//             />
//             <span style={{
//               textDecoration: todo.done ? 'line-through' : 'none'
//             }}>
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  }

  function toggleDone(id) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div style={card}>
      <h3 style={title}>📝 To-Do App</h3>

      <div style={inputRow}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task..."
          style={inputBox}
        />
        <button onClick={addTodo} style={addBtn}>
          ➕ Add
        </button>
      </div>

      <ul style={list}>
        {todos.length === 0 && (
          <li style={{ color: "#6b7280", textAlign: "center", padding: "10px" }}>
            No tasks yet
          </li>
        )}

        {todos.map((todo) => (
          <li key={todo.id} style={todoItem}>
            <div style={todoLeft}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <span
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                  color: todo.done ? "#9ca3af" : "#111827",
                  fontWeight: 500,
                }}
              >
                {todo.text}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} style={delBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- STYLES ---------- */

const card = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  maxWidth: "400px",
  margin: "auto",
  marginTop: "20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const title = {
  textAlign: "center",
  color: "#1f2937",
  marginBottom: "15px",
};

const inputRow = {
  display: "flex",
  gap: "10px",
  marginBottom: "15px",
};

const inputBox = {
  flex: 1,
  padding: "8px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  outline: "none",
  fontSize: "0.95rem",
};

const addBtn = {
  background: "#4f46e5",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "8px 14px",
  cursor: "pointer",
  fontWeight: 600,
  transition: "background 0.2s ease",
};

const list = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  maxHeight: "250px",
  overflowY: "auto",
};

const todoItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 10px",
  borderBottom: "1px solid #e5e7eb",
  borderRadius: "6px",
  background: "#f9fafb",
  marginBottom: "6px",
  transition: "background 0.2s ease",
};

const todoLeft = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  wordBreak: "break-word",
};

const delBtn = {
  background: "transparent",
  border: "none",
  color: "#ef4444",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "transform 0.2s ease",
};
