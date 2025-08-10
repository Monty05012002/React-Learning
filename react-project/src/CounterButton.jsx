import { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // Updates state, triggers re-render
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>You've clicked {count} times</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default CounterButton;
