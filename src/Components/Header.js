import React from 'react';
import '../App.css'; // Import the CSS file for styling
import logo from '../Assets/alfa.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo"><img src={logo} alt="Logo"  className="logo-img" /></a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
