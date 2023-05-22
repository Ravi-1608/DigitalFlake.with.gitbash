import React, { useState } from 'react';
import './Login.css';
import myImage from './logo.jpg';


const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = () => {
    console.log('Forgot password for email:', email);
    setForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setForgotPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      const response = await fetch('http://localhost:8000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.reload();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (forgotPassword) {
    return (
      <div className='forgot-page'>
        <div className='headings'>  
          <h3>Did You Forgot Your Password</h3>
        </div>
        <div className="form-container">

          <p id='messege'>Enter your email to reset your password:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
          />
          <h3><a href=''>Send reset Link </a></h3>

          <button className="primary-button" onClick={handleBackToLogin}>
            Back to Login
          </button>

          {/* Add reset password logic and UI here */}
        </div>

      </div>

    );
  }

  return (
    <div className="login">
      <div className='Logo-heading'>
        <img src={myImage} alt="My Image" id='logo' />
        <p>Welcome To Digital Flake Admin</p>
      </div>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="primary-button" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          <button className="secondary-button" onClick={handleForgotPassword} >Forgot Password</button>

        </form>

      </div>

    </div>
  );
};

export default Login;
