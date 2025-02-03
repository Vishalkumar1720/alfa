import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS bundle
import "../Assets/styles/global.css";
import logo from "../Assets/images/Alfasq  logo.png"; // Import your logo
import "../App.css";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false); // Track navbar expansion

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992); // Small screen if width < 992px
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex justify-content-center fixed-top p-2">
      <nav
        className={`navbar navbar-expand-lg position-fixed ${
          !isSmallScreen || !isNavExpanded ? "rounded-pill" : ""
        }`}
        style={{
          maxWidth: "730px",
          width: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          backgroundColor: "rgba(33, 33, 33, 0.8)",
          border: "1px solid rgba(255, 255, 255, .1)",
        }}
      >
        <a className="navbar-brand d-flex align-items-center ps-md-4" href="/">
          <img
            src={logo}
            alt="Alfasquare logo"
            className="brand-image"
            style={{
              width: "120px",
              filter: "invert(1) grayscale(1)",
            }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#smallScreenMenu"
          aria-controls="smallScreenMenu"
          aria-expanded={isNavExpanded}
          aria-label="Toggle navigation"
          onClick={() => setIsNavExpanded(!isNavExpanded)} // Toggle state
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`} id="smallScreenMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">

              <Link
                className="nav-link text-custom"
                to="home"
                smooth={true}
                spy={true}
                duration={500}
                onClick={() => setIsNavExpanded(false)} // Close navbar on click
              >

                Home
              </Link>
            </li>
            <li className="nav-item">

              <Link
                className="nav-link text-custom"
                to="about"
                smooth={true}
                spy={true}
                duration={500}
                onClick={() => setIsNavExpanded(false)}
              >

                About
              </Link>
            </li>
            <li className="nav-item">

              <Link
                className="nav-link text-custom"
                to="services"
                smooth={true}
                spy={true}
                duration={500}
                onClick={() => setIsNavExpanded(false)}
              >

                Services
              </Link>
            </li>
            <li className="nav-item">

              <Link
                className="nav-link text-custom"
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                onClick={() => setIsNavExpanded(false)}
              >

                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
