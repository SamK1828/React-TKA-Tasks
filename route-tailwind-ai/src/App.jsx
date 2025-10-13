import './App.css'
import Login from './components/Login'
import Menu from './components/Menu'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Menu />
      <Routes>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/register" element = {<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
