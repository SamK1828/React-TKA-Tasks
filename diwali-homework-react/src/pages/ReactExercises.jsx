// import React from "react";
// import { Greeting, Counter, Toggle, ColorPicker} from "../reactExercises/SmallComponents";
// import TodoApp from "../reactExercises/TodoApp";
// import { LoginForm, RegistrationForm, EmailValidation } from "../reactExercises/Forms";
// import { PropsConditional, UserProfile } from "../reactExercises/Conditional";
// import { MirrorInput, ToggleListVisibility, ReusableButton } from "../reactExercises/StateExamples";
// import RoutingDemo from "../reactExercises/RoutingDemo";

// /**
//  * ReactExercises.jsx
//  * Combines all 20+ React exercises into one unified dashboard.
//  * Organized by category: Basic Components, State/Props, Forms, Conditional Rendering, Routing, CRUD.
//  */

// export default function ReactExercises() {
//   const sampleUser = { name: "Samarth", age: 22 };

//   return (
//     <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>⚛️ React Exercises Dashboard</h1>

//       {/* ========== 1️⃣ Basic Components ========== */}
//       <section style={sectionStyle}>
//         <h2>1️⃣ Basic Components</h2>
//         <Greeting name="Sam" />
//         <Counter />
//         <Toggle />
//         <ColorPicker />
//         <TodoApp />
//       </section>

//       {/* ========== 2️⃣ State & Controlled Inputs ========== */}
//       <section style={sectionStyle}>
//         <h2>2️⃣ State & Controlled Inputs</h2>
//         <MirrorInput />
//         <ToggleListVisibility />
//         <ReusableButton text="Click Me" onClick={() => alert("Button Clicked!")} />
//       </section>

//       {/* ========== 3️⃣ Conditional Rendering ========== */}
//       <section style={sectionStyle}>
//         <h2>3️⃣ Conditional Rendering</h2>
//         <PropsConditional isLoggedIn={true} />
//         <PropsConditional isLoggedIn={false} />
//         <UserProfile user={sampleUser} />
//       </section>

//       {/* ========== 4️⃣ Forms & Validation ========== */}
//       <section style={sectionStyle}>
//         <h2>4️⃣ Forms & Validation</h2>
//         <LoginForm />
//         <RegistrationForm />
//         <EmailValidation />
//       </section>

//       {/* ========== 5️⃣ Routing Demo ========== */}
//       <section style={sectionStyle}>
//         <h2>5️⃣ Routing Demo</h2>
//         <RoutingDemo />
//       </section>

//       <footer style={{ marginTop: "30px", textAlign: "center", fontSize: "0.9em", color: "#555" }}>
//         © 2025 Samarth Kalegaonkar — Diwali React Assignments
//       </footer>
//     </div>
//   );
// }

// const sectionStyle = {
//   border: "1px solid #ccc",
//   borderRadius: "8px",
//   padding: "16px",
//   marginBottom: "20px",
//   boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
// };

import React from "react";
import {
  Greeting,
  Counter,
  Toggle,
  ColorPicker,
} from "../reactExercises/SmallComponents";
import TodoApp from "../reactExercises/TodoApp";
import {
  LoginForm,
  RegistrationForm,
  EmailValidation,
} from "../reactExercises/Forms";
import { PropsConditional, UserProfile } from "../reactExercises/Conditional";
import {
  MirrorInput,
  ToggleListVisibility,
  ReusableButton,
} from "../reactExercises/StateExamples";
import RoutingDemo from "../reactExercises/RoutingDemo";

/**
 * ReactExercises.jsx
 * Enhanced UI with styled cards for each section.
 * Each category (Basic, State, Forms, Conditional, Routing) is visually separated.
 */

export default function ReactExercises() {
  const sampleUser = { name: "Samarth", age: 22 };

  return (
    <div style={container}>
      <h1 style={pageTitle}>⚛️ React Exercises Dashboard</h1>
      <p style={subtitle}>
        A complete collection of <strong>20 React assignments</strong> covering
        props, state, conditional rendering, forms, and routing — all
        interactive, well-structured, and visually balanced.
      </p>

      {/* 1️⃣ Basic Components */}
      <section style={card}>
        <h2 style={sectionTitle}>1️⃣ Basic Components</h2>
        <div style={contentGrid}>
          <Greeting name="Sam" />
          <Counter />
          <Toggle />
          <ColorPicker />
          <TodoApp />
        </div>
      </section>

      {/* 2️⃣ State & Controlled Inputs */}
      <section style={card}>
        <h2 style={sectionTitle}>2️⃣ State & Controlled Inputs</h2>
        <div style={contentGrid}>
          <MirrorInput />
          <ToggleListVisibility />
          <ReusableButton
            text="Reusable Button"
            onClick={() => alert("Reusable Button Clicked!")}
          />
        </div>
      </section>

      {/* 3️⃣ Conditional Rendering */}
      <section style={card}>
        <h2 style={sectionTitle}>3️⃣ Conditional Rendering</h2>
        <div style={contentGrid}>
          <PropsConditional isLoggedIn={true} />
          <PropsConditional isLoggedIn={false} />
          <UserProfile user={sampleUser} />
        </div>
      </section>

      {/* 4️⃣ Forms & Validation */}
      <section style={card}>
        <h2 style={sectionTitle}>4️⃣ Forms & Validation</h2>
        <div style={contentGrid}>
          <LoginForm />
          <RegistrationForm />
          <EmailValidation />
        </div>
      </section>

      {/* 5️⃣ Routing Demo */}
      <section style={card}>
        <h2 style={sectionTitle}>5️⃣ Routing Demo</h2>
        <RoutingDemo />
      </section>

      <footer style={footer}>
        © 2025 Samarth Kalegaonkar — Diwali React Exercises Dashboard
      </footer>
    </div>
  );
}

// ---------- STYLES ----------
const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  minHeight: "100vh",
};

const pageTitle = {
  textAlign: "center",
  fontSize: "2rem",
  marginBottom: "10px",
  color: "#1f2937",
};

const subtitle = {
  textAlign: "center",
  color: "#4b5563",
  fontSize: "1.1rem",
  marginBottom: "30px",
  lineHeight: "1.6",
};

const card = {
  background: "#fff",
  borderRadius: "12px",
  padding: "25px 30px",
  marginBottom: "25px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const sectionTitle = {
  borderBottom: "2px solid #4f46e5",
  paddingBottom: "5px",
  marginBottom: "15px",
  color: "#111827",
  fontSize: "1.3rem",
};

const contentGrid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};

const footer = {
  textAlign: "center",
  color: "#6b7280",
  fontSize: "0.9rem",
  marginTop: "40px",
};
