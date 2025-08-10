import React, { useState } from "react";

function BuggyButton() {
  const [count, setCount] = useState(0);

  if (count === 3) {
    // Simulate an error when count reaches 3
    throw new Error("💥 Count reached 3!");
  }

  return (
    <button onClick={() => setCount(count + 1)}>
      Click me ({count})
    </button>
  );
}

export default BuggyButton;
