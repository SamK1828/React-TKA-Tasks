import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import JavaScriptPage from './pages/JavaScript.jsx';
import ReactExercises from './pages/ReactExercises.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{
        display: 'flex',
        gap: '15px',
        padding: '10px',
        background: '#f0f0f0',
        borderBottom: '2px solid #ddd'
      }}>
        <Link to="/">🏠 Home</Link>
        <Link to="/js">💻 JavaScript Problems</Link>
        <Link to="/react">⚛️ React Exercises</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/js" element={<JavaScriptPage />} />
          <Route path="/react" element={<ReactExercises />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
