import React from "react";
import ProblemDemo from "../jsProblems/ProblemDemo";

/**
 * JavaScript.jsx
 * Displays all 20 JavaScript assignments interactively
 * through the ProblemDemo component, wrapped in a styled layout.
 */

export default function JavaScript() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🧠 JavaScript Assignments</h1>
        <p style={subtitleStyle}>
          Explore <strong>20 JavaScript challenges</strong> — including array manipulation,
          recursion, DOM operations, async fetches, caching, and more.  
          Click a button below to run each problem and see results instantly.
        </p>

        <div style={{ marginTop: "30px" }}>
          <ProblemDemo />
        </div>

        <p style={footerStyle}>
          © 2025 Samarth Kalegaonkar — Diwali JavaScript Problem Set
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
  maxWidth: "900px",
  width: "100%",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "2rem",
  marginBottom: "10px",
};

const subtitleStyle = {
  fontSize: "1.1rem",
  color: "#555",
  marginBottom: "20px",
  lineHeight: "1.6",
};

const footerStyle = {
  marginTop: "40px",
  color: "#666",
  fontSize: "0.9rem",
};
