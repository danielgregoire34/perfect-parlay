import React, { useState } from 'react';
import { login } from '../../../server/controllers/user-controller';
import './index.css';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/authenticate', { username, password });
      const token = response.data.token;
      // Store the JWT in client-side storage
      localStorage.setItem('token', token);
    } catch (error) {
      console.error(error);
    }
  }

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', { username, password });
      const token = response.data.token;
      // Store the JWT in client-side storage
      localStorage.setItem('token', token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

const AuthPage = () => {
  return login (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SignUp />
      <Login />
    </div>
  );
};

export default {AuthPage , SignIn};


