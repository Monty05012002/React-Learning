// File: RenderTracker.jsx
import { useState, useEffect, useRef } from "react";

function RenderTracker() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // Persisted between renders, but does not cause re-renders

  useEffect(() => {
    renderCount.current += 1;
    console.log("Component rendered");
  });

  return (
    <div className="card">
      <h2>Button Click Counter</h2>
      <p>Count: {count}</p>
      <p>This component has rendered <strong>{renderCount.current}</strong> times.</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default RenderTracker;
