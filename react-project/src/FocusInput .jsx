import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // 🔍 Access the input DOM and focus it
  };

  return (
    <div className="container my-4">
      <h2>🔎 Focus Input using useRef</h2>
      <input ref={inputRef} type="text" className="form-control" placeholder="Click the button to focus" />
      <button onClick={handleClick} className="btn btn-primary mt-2">
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
