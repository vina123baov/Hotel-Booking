import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../imgs/logo.svg';
import './style.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
