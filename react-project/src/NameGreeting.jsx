import { useState } from 'react';

function NameGreeting() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value); // updates the state with input value
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input 
        type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <h2>Hello, {name || 'Stranger'}!</h2>
    </div>
  );
}

export default NameGreeting;
