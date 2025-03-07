import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../../App.css";

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

  return (
    <div className="container-fluid py-5">
      <div className="row align-items-center text-white">
        
        {/* Left Side: Text Content */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start px-4">
          <h1 className="fw-bold display-5 mb-3">
            <span style={{ color: "#ffcc00" }}>Transforming</span> Ideas into{" "}
            <span style={{ color: "#00ccff" }}>Intelligent</span> Software Solutions
          </h1>
          <p className="lead d-flex align-items-center gap-2">
            <FaCheckCircle style={{ color: "#00ccff" }} />
            Custom-built applications designed to grow with your business.
          </p>
          <p className="lead d-flex align-items-center gap-2">
            <FaCheckCircle style={{ color: "#3fff00" }} />
            Innovative technology, delivered with precision and speed.
          </p>

          <a
            title="Get in Touch"
            className="btn btn-warning btn-lg rounded-pill fw-bold mt-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            href="#"
            style={{ width: "220px" }}
          >
            Get A Quote
          </a>
        </div>

        {/* Right Side: Carousel */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-5 mt-lg-0">
          <Carousel
            cards={cards}
            height="500px"
            width="70%"
            margin="0 auto"
            offset={10}
            showArrows={false}
          />
        </div>

      </div>
    </div>
  );
};

export default App2;
