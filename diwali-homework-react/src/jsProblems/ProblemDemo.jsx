import React, { useState } from "react";
import { jsProblems } from "./problems";

export default function ProblemDemo() {
  const [output, setOutput] = useState("");

  async function run(fn) {
    try {
      let res;
      switch (fn) {
        case "chunkArray":
          res = jsProblems.chunkArray([1, 2, 3, 4, 5, 6], 2);
          break;
        case "sumNestedProperty":
          res = jsProblems.sumNestedProperty(
            [{ id: 1, value: 10 }, { id: 2, value: 20, children: [{ value: 5 }] }],
            "value"
          );
          break;
        case "generateDateRange":
          res = jsProblems.generateDateRange(
            new Date("2025-10-01"),
            new Date("2025-10-03")
          );
          break;
        case "intersection":
          res = jsProblems.intersection([1, 2, 3, 4], [2, 4, 6]);
          break;
        case "flatten":
          res = jsProblems.flatten([1, [2, [3, 4], 5], 6]);
          break;
        case "pattern":
          res = jsProblems.pattern(4);
          break;
        default:
          res = "Click a valid problem.";
      }
      setOutput(JSON.stringify(res, null, 2));
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  }

  const buttonList = [
    { id: "chunkArray", label: "Array Chunking" },
    { id: "sumNestedProperty", label: "Nested Sum" },
    { id: "generateDateRange", label: "Date Range" },
    { id: "intersection", label: "Intersection" },
    { id: "flatten", label: "Flatten Array" },
    { id: "pattern", label: "Number Pattern" },
  ];

  return (
    <div style={container}>
      <h3 style={{ marginBottom: "10px", color: "#333" }}>Run JavaScript Problems</h3>
      <div style={grid}>
        {buttonList.map((btn) => (
          <button
            key={btn.id}
            onClick={() => run(btn.id)}
            style={button}
            onMouseEnter={(e) => (e.target.style.background = "#4338ca")}
            onMouseLeave={(e) => (e.target.style.background = "#4f46e5")}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <pre style={outputBox}>{output}</pre>
    </div>
  );
}

// ---------- Styles ----------
const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "12px",
  width: "100%",
  maxWidth: "600px",
  marginBottom: "20px",
};

const button = {
  background: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  padding: "10px 12px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "0.95rem",
  transition: "0.3s",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const outputBox = {
  background: "#f8f9fa",
  borderRadius: "8px",
  padding: "16px",
  width: "100%",
  maxWidth: "600px",
  height: "200px",
  overflowY: "auto",
  whiteSpace: "pre-wrap",
  textAlign: "left",
  border: "1px solid #ddd",
  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
};
