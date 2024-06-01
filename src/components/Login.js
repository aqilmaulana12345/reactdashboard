// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Verifikasi email dan password di sisi client
      if (email === 'admin@gmail.com' && password === 'adminpassword') {
        // Jika email dan password adalah admin
        // Lakukan login sebagai admin
        localStorage.setItem('token', 'admin-token');
        localStorage.setItem('role', 'admin');
        navigate('/admin');
      } else if (email === 'user@gmail.com' && password === 'userpassword') {
        // Jika email dan password adalah user
        // Lakukan login sebagai user
        localStorage.setItem('token', 'user-token');
        localStorage.setItem('role', 'user');
        navigate('/user');
      } else {
        // Jika email atau password tidak valid
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Enter Your Email and password below</p>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? sign up</p>
    </div>
  );
}

export default Login;
