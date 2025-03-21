import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import logo from "../Assets/images/Alfas_c.png";

const Footer = () => {
  return (

    <>
      <SocialMediaIcons />
      <footer className="bottom-0 w-100 text-center py-3 text-white">
        <p className="mb-0">&copy; 2025 Alfa Square Software Solution.</p>
        <p className="mb-0">All Rights Reserved.</p>
        <div className="mt-4" style={{ width: "100%", height: "auto", overflow: "hidden" }}>
          <img
            src={logo}
            alt="Image description"
            className="img-fluid rounded"
            style={{
              width: "100%",
              height: "auto",  // Auto height preserves the aspect ratio
              filter: "invert(1) grayscale(1)"
            }}
          />
        </div>

      </footer>
    </>

  );
};

export default Footer;
