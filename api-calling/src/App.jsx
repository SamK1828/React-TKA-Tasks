import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);


  // API URL
  //https://dummyjson.com/todos
  const fetchData = () => {
    fetch('https://dummyjson.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center py-10 px-2">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 drop-shadow-lg">Todo List</h1>
      <div className="overflow-x-auto w-full max-w-3xl shadow-2xl rounded-xl bg-white/80 backdrop-blur-lg">
        <table className="min-w-full text-sm md:text-base">
          <thead>
            <tr className="bg-purple-500 text-white">
              <th className="py-3 px-4 font-semibold text-center">ID</th>
              <th className="py-3 px-4 font-semibold text-left">Todo</th>
              <th className="py-3 px-4 font-semibold text-center">Completed</th>
              <th className="py-3 px-4 font-semibold text-center">User ID</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((rec) => (
              <tr
                key={rec.id}
                className="border-b last:border-none hover:bg-purple-100 transition-colors"
              >
                <td className="py-2 px-4 text-center">{rec.id}</td>
                <td className="py-2 px-4 text-left">{rec.todo}</td>
                <td className="py-2 px-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-semibold ${rec.completed
                        ? "bg-green-400 text-green-900"
                        : "bg-red-400 text-red-900"
                      }`}
                  >
                    {rec.completed ? "Yes" : "No"}
                  </span>
                </td>
                <td className="py-2 px-4 text-center">{rec.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
