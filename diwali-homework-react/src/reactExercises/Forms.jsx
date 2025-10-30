import React, { useState } from 'react';

/**
 * Forms.jsx
 * - LoginForm: simple controlled login form (console logs)
 * - RegistrationForm: multi-field form with basic validation + reset
 * - EmailValidation: validates on blur and shows inline error
 */

export function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  function submit(e) {
    e.preventDefault();
    console.log('Login submitted:', form);
    alert(`Login submitted: ${JSON.stringify({ username: form.username })}`);
  }
  return (
    <form onSubmit={submit} style={{ marginBottom: 12 }}>
      <h4>Login</h4>
      <input
        placeholder="Username"
        value={form.username}
        onChange={e => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
        style={{ marginLeft: 8 }}
      />
      <button type="submit" style={{ marginLeft: 8 }}>Submit</button>
    </form>
  );
}

export function RegistrationForm() {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  function validate() {
    const e = {};
    if (!data.name.trim()) e.name = 'Name required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Invalid email';
    if (data.password.length < 6) e.password = 'Minimum 6 chars';
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    console.log('Registered:', data);
    alert('Registration successful');
    setData({ name: '', email: '', password: '' });
    setErrors({});
  }
  return (
    <form onSubmit={submit} style={{ marginBottom: 12 }}>
      <h4>Register</h4>
      <div>
        <input placeholder="Name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>
      <div>
        <input placeholder="Email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <input placeholder="Password" type="password" value={data.password} onChange={e => setData({ ...data, password: e.target.value })} />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export function EmailValidation() {
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  function onBlur() {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setErr(ok ? '' : 'Invalid email format');
  }
  return (
    <div style={{ marginBottom: 12 }}>
      <h4>Email Validation</h4>
      <input value={email} onChange={e => setEmail(e.target.value)} onBlur={onBlur} placeholder="example@domain.com" />
      {err && <div style={{ color: 'red' }}>{err}</div>}
      {!err && email && <div style={{ color: 'green' }}>Looks good</div>}
    </div>
  );
}

export default {
  LoginForm,
  RegistrationForm,
  EmailValidation
};
