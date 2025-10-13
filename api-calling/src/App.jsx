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
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((rec) => (
              <tr key={rec.id}>
                <td>{rec.id}</td>
                <td>{rec.todo}</td>
                <td>{rec.completed?'Yes':'No'}</td>
                <td>{rec.userId}</td>
              </tr>
            )
            )
          }
        </tbody>


      </table>
    </>
  )
}

export default App
