// ConditionalDemo.jsx
import { useState } from 'react';

function ConditionalDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3);

  // if-else outside JSX
  let loginMessage;
  if (isLoggedIn) {
    loginMessage = <p>You're logged in!</p>;
  } else {
    loginMessage = <p>Please log in.</p>;
  }

  return (
    <div className="card">
      <h2>Conditional Rendering Example</h2>

      {/* if-else rendered above */}
      {loginMessage}

      {/* Ternary operator */}
      <p>
        {isLoggedIn ? 'Welcome back, user!' : 'You are browsing as guest.'}
      </p>

      {/* Logical && operator */}
      {unreadMessages > 0 && (
        <p>You have {unreadMessages} unread message(s).</p>
      )}

      {/* Toggle login button */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default ConditionalDemo;
