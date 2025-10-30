import React from 'react';

/**
 * Conditional.jsx
 * - PropsConditional: renders different content depending on boolean prop
 * - UserProfile: object prop rendering with conditional "Adult"/"Minor"
 */

export function PropsConditional({ isLoggedIn }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <h4>Props Conditional</h4>
      {isLoggedIn ? <div>Welcome back!</div> : <div>Please log in.</div>}
    </div>
  );
}

export function UserProfile({ user }) {
  if (!user) return <div>No user provided</div>;
  return (
    <div style={{ border: '1px solid #ddd', padding: 8, borderRadius: 6, marginBottom: 12 }}>
      <div><strong>Name:</strong> {user.name}</div>
      <div><strong>Age:</strong> {user.age}</div>
      <div>{user.age >= 18 ? 'Adult' : 'Minor'}</div>
    </div>
  );
}

export default {
  PropsConditional,
  UserProfile
};
