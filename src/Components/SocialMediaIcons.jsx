import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";  // Import FontAwesome CSS
import "../App.scss";
import "../App.css";

const SocialMediaIcons = () => {
  const socialLinks = [
    { href: "#", icon: "fab fa-facebook-f" },
    { href: "#", icon: "fab fa-instagram" },
    { href: "#", icon: "fab fa-linkedin-in" },
    { href: "#", icon: "fab fa-whatsapp" },
  ];

  return (
    <div className="social-icons-line-container">
    <div className="line"></div>
    <div className="social-icons-container">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} className="glassIco">
          <i className={link.icon}></i> {/* Font Awesome icon */}
        </a>
      ))}
    </div>
    <div className="line"></div>
  </div>
  
  );
};

export default SocialMediaIcons;
