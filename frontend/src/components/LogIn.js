import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../imgs/img1.jpg';
import './style.css';
import Navbar from './Navbar';

const LogIn = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="info-container">
          <div className="form-container">
            <h2>Welcome Back</h2>
            <div className="form-floating">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Example@email.com" />
            </div>
            <div className="form-floating">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="At least 8 characters" />
            </div>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            <button type="submit" className="btn">Login</button>
            <p className="link">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={img1} alt="Decoration" />
        </div>
      </div>
    </>
  );
};

export default LogIn;
