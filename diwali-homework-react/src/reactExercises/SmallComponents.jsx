import React, { useState } from 'react';

export function Greeting({ name }) {
  return <h3>Hello, {name}!</h3>;
}

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={() => setCount(c => Math.max(0, c - 1))}>-</button>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <p>Toggle: {on ? 'ON' : 'OFF'}</p>
      <button onClick={() => setOn(v => !v)}>Toggle</button>
    </div>
  );
}

export function ColorPicker() {
  const [color, setColor] = useState('');
  return (
    <div>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="">Select color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <div style={{
        width: '100px',
        height: '40px',
        background: color || '#ccc',
        marginTop: '10px'
      }} />
    </div>
  );
}
