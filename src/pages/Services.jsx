import React from 'react';
import '../App.css';
import Carousel from '../components/Carousel';

const Services = () => {
  return (
    <div className="bg-black text-white py-5 d-flex flex-column align-items-center">
    <h1 className="display-4 text-center gradient-text mb-5">
      Our Services
    </h1>
  
  {/* Futuristic Cards Section */}
  <div className="container mt-5">
    <div className="row g-4 justify-content-center">
      {/* Card 1 - AI Solutions */}
      <div className="col-12 col-md-4">
  <div className="futuristic-card h-100">
    <div className="card-body p-4">
      <div className="icon-wrapper mb-3">
        <i className="fas fa-laptop-code fa-3x gradient-text-purple"></i>
      </div>
      <h3 className="card-title gradient-text-purple">
      Custom Software Development</h3>
      <p className="card-text">Tailored software solutions to meet your unique business needs.</p>
      <div className="glow-effect"></div>
    </div>
  </div>
</div>

{/* Card 2 - Mobile Development */}
<div className="col-12 col-md-4">
  <div className="futuristic-card h-100">
    <div className="card-body p-4">
      <div className="icon-wrapper mb-3">
        <i className="fas fa-mobile-alt fa-3x gradient-text-blue"></i>
      </div>
      <h3 className="card-title gradient-text-blue">Mobile App Design and Development</h3>
      <p className="card-text">Innovative mobile applications for iOS and Android platforms.</p>
      <div className="glow-effect"></div>
    </div>
  </div>
</div>

{/* Card 3 - UI/UX Design */}
<div className="col-12 col-md-4">
  <div className="futuristic-card h-100">
    <div className="card-body p-4">
      <div className="icon-wrapper mb-3">
        <i className="fas fa-palette fa-3x gradient-text-green"></i>
      </div>
      <h3 className="card-title gradient-text-green">Best UI/UX Design Services</h3>
      <p className="card-text">User-centric design that enhances user experience and satisfaction.</p>
      <div className="glow-effect"></div>
    </div>
  </div>
</div>

{/* Card 4 - Maintenance */}
<div className="col-12 col-md-4">
  <div className="futuristic-card h-100">
    <div className="card-body p-4">
      <div className="icon-wrapper mb-3">
        <i className="fas fa-headset fa-3x gradient-text-pink"></i>
      </div>
      <h3 className="card-title gradient-text-pink">Maintenance and Customer Support</h3>
      <p className="card-text">Reliable support and maintenance to keep your software running smoothly.</p>
      <div className="glow-effect"></div>
    </div>
  </div>
</div>

{/* Card 5 - IT Consulting */}
<div className="col-12 col-md-4">
  <div className="futuristic-card h-100">
    <div className="card-body p-4">
      <div className="icon-wrapper mb-3">
        <i className="fas fa-chart-line fa-3x gradient-text-purple"></i>
      </div>
      <h3 className="card-title gradient-text-purple">Audit & IT Consulting Services</h3>
      <p className="card-text">Expert guidance to optimize your IT infrastructure and processes.</p>
      <div className="glow-effect"></div>
    </div>
  </div>
</div>

{/* Card 6 - Web Development */}
<div className="col-12 col-md-4">
  <div className="futuristic-card h-100">
    <div className="card-body p-4">
      <div className="icon-wrapper mb-3">
        <i className="fas fa-code-branch fa-3x gradient-text-blue"></i>
      </div>
      <h3 className="card-title gradient-text-blue">Web Application Design and Development</h3>
      <p className="card-text">Cutting-edge web applications that drive user engagement and business growth.</p>
      <div className="glow-effect"></div>
    </div>
  </div>
</div>


    </div>
  </div>

  

  <Carousel className="mt-5" />
</div>

  );
};

export default Services;
