import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../imgs/img2.jpg';
import './style.css'; 

const Register = () => {
  return (
    <div className='d-flex vh-100'>
      <div className="cover-container d-flex align-items-center justify-content-center bg-primary">
        <img src={img2} alt="Cover" />
      </div>
      <div className="register-info-container d-flex flex-column justify-content-center align-items-center bg-light w-50">
        <div className="register-container text-center p-4">
          <h2>Register</h2>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="tel" className="form-control" id="floatingInput" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            <label htmlFor="floatingInput">Phone number</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn-register btn btn-primary w-100">Register</button>
          <p className="mt-3">
            <Link to="/log-in">Have an account? Login here!</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
