import React from "react";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";

/**
 * RoutingDemo.jsx
 * Demonstrates nested routing inside the main BrowserRouter context.
 * Fixed and styled version — no nested Routers, matches new UI theme.
 */

function DashboardLayout() {
  const location = useLocation();

  return (
    <div style={dashboardCard}>
      <h4 style={sectionTitle}>🏠 Dashboard</h4>
      <nav style={navBar}>
        <Link
          to="/react/dashboard/profile"
          style={{
            ...navLink,
            ...(location.pathname.endsWith("profile") ? activeLink : {}),
          }}
        >
          👤 Profile
        </Link>
        <Link
          to="/react/dashboard/settings"
          style={{
            ...navLink,
            ...(location.pathname.endsWith("settings") ? activeLink : {}),
          }}
        >
          ⚙️ Settings
        </Link>
      </nav>

      <div style={contentBox}>
        <Outlet />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h5 style={subTitle}>👤 Profile Page</h5>
      <p>Name: <strong>Samarth Kalegaonkar</strong></p>
      <p>Role: Developer</p>
      <p>Status: Active</p>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h5 style={subTitle}>⚙️ Settings Page</h5>
      <p>Theme: Light Mode</p>
      <p>Notifications: Enabled</p>
    </div>
  );
}

function DashboardHome() {
  return (
    <div>
      <h5 style={subTitle}>Welcome to the Dashboard</h5>
      <p>Select <strong>Profile</strong> or <strong>Settings</strong> from above.</p>
    </div>
  );
}

export default function RoutingDemo() {
  return (
    <div style={container}>
      <h3 style={mainTitle}>🧭 Routing Demo</h3>
      <p style={description}>
        Demonstration of nested routes using <strong>React Router v6</strong>.
        Each section below is loaded dynamically without a full page refresh.
      </p>

      <Routes>
        <Route path="/react/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

/* ---------- Styles ---------- */

const container = {
  padding: "15px",
  borderRadius: "12px",
  background: "#f9fafb",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const mainTitle = {
  fontSize: "1.3rem",
  marginBottom: "5px",
  color: "#1f2937",
};

const description = {
  color: "#4b5563",
  fontSize: "0.95rem",
  marginBottom: "20px",
};

const dashboardCard = {
  background: "#fff",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
};

const sectionTitle = {
  fontSize: "1.1rem",
  marginBottom: "10px",
  borderBottom: "2px solid #4f46e5",
  display: "inline-block",
  paddingBottom: "4px",
};

const navBar = {
  display: "flex",
  gap: "12px",
  marginBottom: "15px",
  marginTop: "8px",
  flexWrap: "wrap",
};

const navLink = {
  textDecoration: "none",
  color: "#4f46e5",
  fontWeight: 600,
  background: "#eef2ff",
  padding: "6px 12px",
  borderRadius: "6px",
  transition: "0.2s ease",
};

const activeLink = {
  background: "#4f46e5",
  color: "white",
  boxShadow: "0 2px 6px rgba(79,70,229,0.4)",
};

const contentBox = {
  background: "#f8fafc",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  minHeight: "100px",
};

const subTitle = {
  marginBottom: "8px",
  color: "#111827",
};
