// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import JavaScript from './pages/JavaScript.jsx';
// import ReactExercises from './pages/ReactExercises.jsx';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <nav style={{
//         display: 'flex',
//         gap: '15px',
//         padding: '10px',
//         background: '#f0f0f0',
//         borderBottom: '2px solid #ddd'
//       }}>
//         <Link to="/">🏠 Home</Link>
//         <Link to="/js">💻 JavaScript Problems</Link>
//         <Link to="/react">⚛️ React Exercises</Link>
//       </nav>

//       <div style={{ padding: '20px' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/js" element={<JavaScript />} />
//           {/* <Route path="/react" element={<ReactExercises />} /> */}
//           <Route path="/react/*" element={<ReactExercises />} />

//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }


import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import JavaScript from "./pages/JavaScript.jsx";
import ReactExercises from "./pages/ReactExercises.jsx";

/**
 * App.jsx
 * Main router + enhanced top navigation.
 * Uses NavLink for active styling and consistent theme across all pages.
 */

export default function App() {
  return (
    <div style={appContainer}>
      <nav style={navBar}>
        <h2 style={brand}>🎇 Diwali Homework</h2>
        <div style={navLinks}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLink : {}),
            })}
          >
            🏠 Home
          </NavLink>
          <NavLink
            to="/js"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLink : {}),
            })}
          >
            🧠 JavaScript
          </NavLink>
          <NavLink
            to="/react"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLink : {}),
            })}
          >
            ⚛️ React
          </NavLink>
        </div>
      </nav>

      <main style={mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/js" element={<JavaScript />} />
          <Route path="/react/*" element={<ReactExercises />} />
        </Routes>
      </main>
    </div>
  );
}

/* ---------- STYLES ---------- */

const appContainer = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  minHeight: "100vh",
};

const navBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  background: "#fff",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  position: "sticky",
  top: 0,
  zIndex: 100,
};

const brand = {
  fontSize: "1.3rem",
  color: "#1f2937",
  fontWeight: 600,
};

const navLinks = {
  display: "flex",
  gap: "15px",
  alignItems: "center",
};

const linkStyle = {
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "20px",
  background: "#eef2ff",
  color: "#4f46e5",
  fontWeight: 600,
  fontSize: "0.95rem",
  transition: "all 0.2s ease",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
};

const activeLink = {
  background: "#4f46e5",
  color: "white",
  boxShadow: "0 3px 10px rgba(79,70,229,0.4)",
};

const mainContent = {
  padding: "30px",
  maxWidth: "1200px",
  margin: "0 auto",
};
