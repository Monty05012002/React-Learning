import React from "react";

// React.memo memoizes the entire component
function Child({ onIncrement }) {
  console.log("👶 Child component rendered");
  return (
    <div style={{ marginTop: "20px" }}>
      <h4>I am the Child Component</h4>
      <button onClick={onIncrement}>+ Increment from Child</button>
    </div>
  );
}

export default React.memo(Child);
