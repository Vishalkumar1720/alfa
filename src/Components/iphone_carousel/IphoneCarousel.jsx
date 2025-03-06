import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import '../../App.css';

import Card from "./Card.jsx";
import Carousel from "./Carousels.jsx";
import image1 from "../../Assets/images/1.png";
import image2 from "../../Assets/images/2.png";
import image3 from "../../Assets/images/3.png";
import image4 from "../../Assets/images/4.png";

const App2 = () => {


  let cards = [
    { key: 1, imagen: image1 },
    { key: 2, imagen: image2 },
    { key: 3, imagen: image3 },
    { key: 4, imagen: image4 },
  ].map((slide) => {
    return {
      ...slide,
      content: <Card imagen={slide.imagen} keyindex={slide.key} />,
      onClick: () => console.log(`Image ${slide.key} clicked`),
    };
  });

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px",pointerEvents: "none" }}>
      
      {/* Left Side Text Content */}
      <div style={{ flex: 1, padding: "20px", color: "#fff", textAlign: "left" }}>
  <h1 style={{ fontSize: "46px", fontWeight: "900", marginBottom: "15px" }}>
    <span style={{ color: "#ffcc00" }}>Transforming</span> Ideas into{" "}
    <span style={{ color: "#00ccff" }}>Intelligent</span> Software Solutions
  </h1>
  <p style={{ fontSize: "18px", color: "#bbb", display: "flex", alignItems: "center", gap: "8px" }}>
    <FaCheckCircle style={{ color: "#00ccff" }} />
    Custom-built applications designed to grow with your business.
  </p>
  <p style={{ fontSize: "18px", color: "#bbb", display: "flex", alignItems: "center", gap: "8px" }}>
    <FaCheckCircle style={{ color: "#3fff00" }} />
    Innovative technology, delivered with precision and speed.
  </p>
 
          <a
            title="Get in Touch"
            className="btn racb-btn btn-lg cta-btn-lg rounded-pill fw600 position-relative z-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            href="#"
            style={{ width: "220px" }}
          >
            <div className="tap_invite">
              <div className="white_dot"></div>
              <div className="circle one"></div>
              <div className="circle two"></div>
              <div className="circle three"></div>
            </div>  
            Get A Quote
          </a>
    
</div>

    


      
      
      {/* Right Side Carousel */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center",pointerEvents: "all" }}>
        <Carousel
          cards={cards}
          height="500px"
          width="55%"
          margin="0 auto"
          offset={10}
          showArrows={false}
        />
      </div>
    </div>
  );
};

export default App2;
