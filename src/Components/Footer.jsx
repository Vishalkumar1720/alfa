import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import logo from "../Assets/images/Alfas_c.png";

const Footer = () => {
  return (
    <>
      <SocialMediaIcons />
      
      <footer className="bottom-0 w-100 text-center text-white">
        <p className="mb-0">&copy; 2025 Alfa Square Software Solution.</p>
        <p className="mb-0">All Rights Reserved.</p>
        <div className="mt-4 glass-container" style={{ width: "100%", height: "auto", overflow: "hidden", position: "relative" }}>
          <img
            src={logo}
            alt="Company Logo"
            className="img-fluid rounded"
            style={{ 
              width: "100%",
              height: "auto",
              filter: "invert(1) grayscale(1)",
              position: "relative",
              zIndex: 1,
            }}
          />

          <style jsx>{`
  @keyframes laserScan {
    0% { top: -10%; }
    50% { top: 110%; }
    100% { top: -10%; }
  }

  .glass-container::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.8) 50%,
      rgba(255,255,255,0) 100%
    );
    box-shadow: 0 0 15px rgba(255,255,255,0.3);
    animation: laserScan 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
  }
`}</style>
        </div>
      </footer> 
    </>
  );
};

export default Footer;