import React from "react";
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root") // Render outside #root
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "400px",
  margin: "100px auto",
};

export default Modal;
