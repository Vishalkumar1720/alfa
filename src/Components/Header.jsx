import React from 'react';
import { Link } from 'react-router-dom';
import "../Assets/styles/global.css";
import logo from "../Assets/images/Alfasq  logo.png";

const Header = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src={logo} alt="Alfa Logo" className="logo-img" />
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
