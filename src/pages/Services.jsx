import React from 'react';
import '../App.css';
import Carousel from '../components/Carousel';

const Services = () => {
  return (
    <div className="bg-black text-white vh-100 d-flex flex-column justify-content-start align-items-center">
      <h1 className="display-4 text-center gradient-text mt-4">
        Our Services
      </h1>
      <Carousel />
    </div>
  );
};

export default Services;
