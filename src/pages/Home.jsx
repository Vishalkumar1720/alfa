import React from 'react';
import '../App.css'; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';
import Scene from "../Scene.jsx";
import Carousel from '../components/iphone_carousel/IphoneCarousel.jsx';
import { FaCheckCircle } from 'react-icons/fa';
import Card from "../components/iphone_carousel/Card.jsx";

import image1 from "../Assets/images/1.png";
import image2 from "../Assets/images/2.png";
import image3 from "../Assets/images/3.png";
import image4 from "../Assets/images/4.png";

const Home = () => {
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
    <div 
      className="container-fluid" 
      style={{ backgroundColor: "black", position: "relative", height: "100vh" }}
    >
    
      <Canvas 
        camera={{ position: [0, 2, 2], fov: 50 }} 
        style={{ height: "100vh", width: "100vw" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Scene />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>

    
      <div 
        className="overlay-content container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: "none" 
        }}
      >
        <div className="row h-100 align-items-center">
        
          <div className="col-12 col-md-6 text-white" style={{ pointerEvents: "auto" }}>
            <h1>
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
          </div>

         
          <div className="col-12 col-md-6" style={{ pointerEvents: "auto" }}>
            <Carousel
              cards={cards}
              height="375px"
              width="70%"
              margin="0 auto"
              offset={10}
              showArrows={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
