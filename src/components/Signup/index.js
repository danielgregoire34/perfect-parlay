import React from 'react';
import './index.css';

const SignUp = () => {
  return (
    <div className="SignUpContainer">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="SignUpContainer">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const AuthPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SignUp />
      <Login />
    </div>
  );
};

export default AuthPage;

