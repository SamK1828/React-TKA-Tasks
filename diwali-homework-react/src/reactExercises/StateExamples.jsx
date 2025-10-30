import React, { useState } from 'react';

/**
 * StateExamples.jsx
 * - MirrorInput: shows real-time mirror of input
 * - ToggleListVisibility: toggles list display
 * - ReusableButton: small reusable button component example
 */

export function MirrorInput() {
  const [text, setText] = useState('');
  return (
    <div style={{ marginBottom: 12 }}>
      <h4>Mirror Input</h4>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Type something..." />
      <div style={{ marginTop: 8 }}>Mirror: {text}</div>
    </div>
  );
}

export function ToggleListVisibility({ items = ['Apple', 'Banana', 'Cherry'] }) {
  const [visible, setVisible] = useState(true);
  return (
    <div style={{ marginBottom: 12 }}>
      <h4>Toggle List</h4>
      <button onClick={() => setVisible(v => !v)}>{visible ? 'Hide' : 'Show'}</button>
      {visible && (
        <ul>
          {items.map((it, idx) => <li key={idx}>{it}</li>)}
        </ul>
      )}
    </div>
  );
}

export function ReusableButton({ text = 'Click', onClick }) {
  return <button onClick={onClick} style={{ padding: '6px 10px', borderRadius: 6 }}>{text}</button>;
}

export default {
  MirrorInput,
  ToggleListVisibility,
  ReusableButton
};
