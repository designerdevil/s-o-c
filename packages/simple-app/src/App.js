/**
 * Ensure to remove below react import
 * For optimizing the build package
 * that will be passed to s-o-c app
 */
import React from 'react';

export default function App() {
  return (
    <>
      <h1>Hello, LMT!</h1>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times.
    </button>
  );
}