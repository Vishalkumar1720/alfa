import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import "../Assets/styles/global.css";
import logo from "../Assets/images/Alfasq  logo.png"; // Import your logo

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" href="#">
         <img src={logo} loading="lazy" alt="Alfasquare logo" className="brand-image w-25" />
         </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link" to="">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">Contact</Link>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
  );
};

export default Header;
