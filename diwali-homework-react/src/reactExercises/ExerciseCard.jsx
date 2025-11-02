import React, { useState } from "react";

/**
 * ExerciseCard.jsx
 * Wrapper for all React exercises with show/hide code toggle.
 * Props:
 *  - title: string
 *  - description: string
 *  - children: React node
 *  - code: string (source code to display)
 */

export default function ExerciseCard({ title, description, children, code }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div style={card}>
      <div style={headerRow}>
        <h3 style={heading}>{title}</h3>
        <button
          style={codeBtn}
          onClick={() => setShowCode((prev) => !prev)}
        >
          {showCode ? "Hide Code ⬆" : "Show Code ⬇"}
        </button>
      </div>

      {description && <p style={desc}>{description}</p>}

      <div style={contentBox}>{children}</div>

      {showCode && (
        <pre style={codeBox}>
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

/* ---------- Styles ---------- */

const card = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  marginBottom: "25px",
  borderLeft: "5px solid #4f46e5",
  transition: "0.3s ease",
};

const headerRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const heading = {
  fontSize: "1.1rem",
  color: "#1f2937",
  marginBottom: "8px",
};

const desc = {
  color: "#4b5563",
  fontSize: "0.9rem",
  marginBottom: "15px",
};

const contentBox = {
  background: "#f9fafb",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  padding: "15px",
};

const codeBtn = {
  background: "#eef2ff",
  border: "1px solid #c7d2fe",
  borderRadius: "6px",
  color: "#4f46e5",
  fontWeight: 600,
  fontSize: "0.85rem",
  cursor: "pointer",
  padding: "6px 12px",
  transition: "all 0.2s ease",
};

const codeBox = {
  background: "#111827",
  color: "#f9fafb",
  borderRadius: "8px",
  padding: "15px",
  marginTop: "15px",
  whiteSpace: "pre-wrap",
  fontFamily: "Consolas, Monaco, 'Courier New', monospace",
  fontSize: "0.85rem",
  overflowX: "auto",
};
