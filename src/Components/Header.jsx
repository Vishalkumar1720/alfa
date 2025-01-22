import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import "../Assets/styles/global.css";
import logo from "../Assets/images/Alfasq  logo.png"; // Import your logo
import '../App.css'

const Header = () => {
  return (
    <div className="d-flex justify-content-center fixed-top p-2">
      <nav
        className="navbar navbar-expand-lg  rounded-pill position-fixed "
        style={{
          maxWidth: "730px", // Adjust this value to increase the width
          width: "100%", // Ensures responsiveness
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          backgroundColor: "rgba(33, 33, 33, 0.8)"
        }}
      >
        <a className="navbar-brand d-flex align-items-center ps-md-4" href="">
          <img
            src={logo}
            alt="Alfasquare logo"
            className="brand-image ml-1"
            style={{
              width: "120px",
              filter: "invert(1) grayscale(1)"
            }}
          />

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <a className="nav-link text-custom" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-custom" href="/about">
                About
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-custom" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-custom" href="/contact">
                Contact
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Header;
