import React from "react";
import { Greeting, Counter, Toggle, ColorPicker} from "../reactExercises/SmallComponents";
import TodoApp from "../reactExercises/TodoApp";
import { LoginForm, RegistrationForm, EmailValidation } from "../reactExercises/Forms";
import { PropsConditional, UserProfile } from "../reactExercises/Conditional";
import { MirrorInput, ToggleListVisibility, ReusableButton } from "../reactExercises/StateExamples";
import RoutingDemo from "../reactExercises/RoutingDemo";

/**
 * ReactExercises.jsx
 * Combines all 20+ React exercises into one unified dashboard.
 * Organized by category: Basic Components, State/Props, Forms, Conditional Rendering, Routing, CRUD.
 */

export default function ReactExercises() {
  const sampleUser = { name: "Samarth", age: 22 };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>⚛️ React Exercises Dashboard</h1>

      {/* ========== 1️⃣ Basic Components ========== */}
      <section style={sectionStyle}>
        <h2>1️⃣ Basic Components</h2>
        <Greeting name="Sam" />
        <Counter />
        <Toggle />
        <ColorPicker />
        <TodoApp />
      </section>

      {/* ========== 2️⃣ State & Controlled Inputs ========== */}
      <section style={sectionStyle}>
        <h2>2️⃣ State & Controlled Inputs</h2>
        <MirrorInput />
        <ToggleListVisibility />
        <ReusableButton text="Click Me" onClick={() => alert("Button Clicked!")} />
      </section>

      {/* ========== 3️⃣ Conditional Rendering ========== */}
      <section style={sectionStyle}>
        <h2>3️⃣ Conditional Rendering</h2>
        <PropsConditional isLoggedIn={true} />
        <PropsConditional isLoggedIn={false} />
        <UserProfile user={sampleUser} />
      </section>

      {/* ========== 4️⃣ Forms & Validation ========== */}
      <section style={sectionStyle}>
        <h2>4️⃣ Forms & Validation</h2>
        <LoginForm />
        <RegistrationForm />
        <EmailValidation />
      </section>

      {/* ========== 5️⃣ Routing Demo ========== */}
      <section style={sectionStyle}>
        <h2>5️⃣ Routing Demo</h2>
        <RoutingDemo />
      </section>

      <footer style={{ marginTop: "30px", textAlign: "center", fontSize: "0.9em", color: "#555" }}>
        © 2025 Samarth Kalegaonkar — Diwali React Assignments
      </footer>
    </div>
  );
}

const sectionStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "20px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};
