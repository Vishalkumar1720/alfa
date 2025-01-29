import React from 'react';
import '../App.css'; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';
import Scene from "../Scene.jsx";

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

      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-4 gradient-text">
          Welcome to Alfasquare Software Solution
        </h1>
      </div>
    </div>
  );
};

export default Home;
