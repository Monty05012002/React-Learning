// withLogger.js
import React, { useEffect } from "react";

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);
      return () => console.log(`Component ${WrappedComponent.name} unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;
