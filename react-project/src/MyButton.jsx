// MyButton.jsx
import React from "react";

function MyButton({ label }) {
  return (
    <button onClick={() => console.log("Button clicked!")}>
      {label}
    </button>
  );
}

export default MyButton;
