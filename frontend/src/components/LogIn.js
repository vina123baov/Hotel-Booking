import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../imgs/img1.jpg';
import './style.css'; 

const LogIn = () => {
  return (
    <div className="d-flex vh-100">
      <div className="login-info-container d-flex flex-column justify-content-center align-items-center bg-light w-50">
        <div className="login-container text-center p-4">
          <h2>Login</h2>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p className="mt-3">
            <Link to="/register">Don't have an account? Register here!</Link>
          </p>
        </div>
      </div>

      <div className="cover-container d-flex align-items-center justify-content-center bg-primary">
        <img src={img1} alt="Cover" />
      </div>
    </div>
  );
}

export default LogIn;
