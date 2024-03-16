// components/Login.js

import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your authentication logic here, e.g., call an API to validate credentials
  };

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
