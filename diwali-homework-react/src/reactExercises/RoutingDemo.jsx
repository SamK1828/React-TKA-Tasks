import React from 'react';
import { MemoryRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

/**
 * RoutingDemo.jsx
 * - Self-contained routing demo using MemoryRouter so it's safe to drop into /react page.
 * - Demonstrates nested routing with Dashboard -> Profile / Settings
 */

function DashboardLayout() {
  return (
    <div style={{ border: '1px dashed #ccc', padding: 10, borderRadius: 6 }}>
      <h4>Dashboard</h4>
      <nav style={{ display: 'flex', gap: 8 }}>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <div style={{ marginTop: 10 }}>
        <Outlet />
      </div>
    </div>
  );
}

function Profile() {
  return <div><strong>Profile</strong><p>Name: Samarth Kalegaonkar</p></div>;
}
function Settings() {
  return <div><strong>Settings</strong><p>Theme: Light</p></div>;
}

export default function RoutingDemo() {
  // MemoryRouter keeps this demo isolated from the app router and works inside any page.
  return (
    <div style={{ marginBottom: 12 }}>
      <h4>Routing Demo (isolated)</h4>
      <MemoryRouter initialEntries={['/']}>
        <div style={{ marginBottom: 8 }}>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
        </div>

        <Routes>
          <Route path="/" element={<div>Routing demo home — click Dashboard.</div>} />
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route index element={<div>Select a section.</div>} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}
