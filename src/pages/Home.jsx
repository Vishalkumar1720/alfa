import React from 'react';
import '../App.css'; // Link the CSS file
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <div className="container-fluid bg-black text-white vh-100 d-flex justify-content-center align-items-center">
        <h1 className="display-4 text-center gradient-text">
          Welcome to Alfasquare Software Solution
        </h1>
      </div>
      <Contact />
    </>
  );
};

export default Home;
