import React, { useState } from 'react';
import loginImage from '../assets/login.jpg';
import { FaRegSmileWink } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  const handleGoogleLogin = () => {
    console.log('Google login initiated');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Illustration" className="login-illustration" />
      </div>

      <div className="login-right">
        <div className="login-form-wrapper">
          <div className="login-logo">
            <FaRegSmileWink className="login-icon" />
            <span className="login-title">DebateH</span>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <label>Email</label>
            <input
              type="email"
              placeholder="user@debatehub.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="remember-container">
              <input type="checkbox" id="remember" defaultChecked />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="login-button">Log in</button>

            <div className="or-separator">or</div>

            <button type="button" className="google-login-button" onClick={handleGoogleLogin}>
              <FcGoogle className="google-icon" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
