// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   // This method updates the state when an error happens
//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   // This method is for logging the error (can send to server)
//   componentDidCatch(error, errorInfo) {
//     console.error("Error caught by Error Boundary:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>⚠ Something went wrong. Please try again.</h2>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Updates state so fallback UI can be shown
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Logs error details to console (or send to a logging service)
    console.error("🔥 Error caught by componentDidCatch:", error);
    console.log("📜 Component stack trace:", info.componentStack);

    // Example: send error to an API
    fetch("https://example.com/log-error", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: error.message,
        stack: info.componentStack
      })
    }).catch(err => console.error("Logging failed:", err));
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠ Oops, something went wrong.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
