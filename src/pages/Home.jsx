import React from 'react';
import '../App.css'; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';
import Scene from "../Scene.jsx";
import Carousel from '../components/iphone_carousel/IphoneCarousel.jsx';

const Home = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <Canvas camera={{ position: [0, 2, 2], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Scene />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>

      <div className="position-absolute start-50 translate-middle text-center text-white" style={{ width: "inherit", top: "60%",pointerEvents: "none"}}>

        <h1 className="display-4 gradient-text user-select-none" style={{ pointerEvents: "none"}}>

          
          <Carousel />
        </h1>
        
      </div>
    
    </div>
  );
};

export default Home;