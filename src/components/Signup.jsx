import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import './SignUp.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted:', formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login initiated`);
  };

  const handleClose = () => {
    console.log('Close button clicked');
  };

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>
        
        <div className="signup-header">
          <h1 className="signup-title">Sign up</h1>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label className="form-label">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@email.com"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Password *
            </label>
            <p className="password-hint">Between 8 and 72 characters</p>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create password"
                className="form-input password-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="join-button">
            Join for Free
          </button>
        </form>

        <div className="separator">
          <span>or</span>
        </div>

        <div className="social-buttons">
          <button
            type="button"
            className="social-button google-button"
            onClick={() => handleSocialLogin('Google')}
          >
            <FcGoogle className="social-icon" />
            Continue with Google
          </button>

          <button
            type="button"
            className="social-button facebook-button"
            onClick={() => handleSocialLogin('Facebook')}
          >
            <FaFacebook className="social-icon facebook-icon" />
            Continue with Facebook
          </button>

          <button
            type="button"
            className="social-button apple-button"
            onClick={() => handleSocialLogin('Apple')}
          >
            <FaApple className="social-icon apple-icon" />
            Continue with Apple
          </button>
        </div>

        <div className="login-links">
          <p className="login-text">
            Already on DebateX? <a href="#" className="link">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;