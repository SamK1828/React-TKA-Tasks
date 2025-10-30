import React from "react";
import { Link } from "react-router-dom";

/**
 * Home.jsx
 * Landing page for the Diwali Homework React Project.
 * Provides navigation to JavaScript Problems and React Exercises sections.
 */

export default function Home() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🎇 Diwali Homework Dashboard</h1>
        <p style={subtitleStyle}>
          Welcome to the interactive dashboard containing all <strong>20 JavaScript</strong> and
          <strong> 20 ReactJS</strong> assignments — each implemented, runnable, and beautifully organized.
        </p>

        <div style={buttonContainer}>
          <Link to="/js" style={btnStyle}>🧠 JavaScript Problems</Link>
          <Link to="/react" style={btnStyle}>⚛️ React Exercises</Link>
        </div>

        <p style={footerStyle}>
          Built by <strong>Samarth Kalegaonkar</strong> — 2025 Edition
        </p>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: "20px",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "40px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  maxWidth: "700px",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "2rem",
  marginBottom: "10px",
};

const subtitleStyle = {
  fontSize: "1.1rem",
  color: "#555",
  marginBottom: "30px",
  lineHeight: "1.6",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  marginBottom: "25px",
};

const btnStyle = {
  textDecoration: "none",
  padding: "12px 24px",
  backgroundColor: "#4f46e5",
  color: "white",
  borderRadius: "8px",
  fontWeight: "bold",
  transition: "0.3s",
};

const footerStyle = {
  marginTop: "20px",
  color: "#666",
  fontSize: "0.9rem",
};
