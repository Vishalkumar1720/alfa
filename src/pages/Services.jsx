import React, { useRef } from 'react';
import '../App.css';
import Carousel from '../components/Carousel';
import WorkingProcess from '../components/WorkingProcess';



const Services = () => {
  const maxTilt = 15;
  const auraDiameter = 250;          // must match your .gradient-cursor size
const auraRadius = auraDiameter/2; // 125
const handleMouseMove = (e) => {
  const wrapper = e.currentTarget;
  const card    = wrapper.querySelector('.futuristic-card');
  const cursor  = wrapper.querySelector('.gradient-cursor');

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // 3D tilt (unchanged)
  const halfW = rect.width / 2;
  const halfH = rect.height / 2;
  const rotateY = ((x - halfW) / halfW) * maxTilt;
  const rotateX = -((y - halfH) / halfH) * maxTilt;
  card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

  // move & show aura
  cursor.style.left = `${x}px`;
  cursor.style.top  = `${y}px`;
  cursor.style.opacity = '1';

  // **edge detection**
  const nearEdge = (
    x < auraRadius ||
    x > rect.width - auraRadius ||
    y < auraRadius ||
    y > rect.height - auraRadius
  );
  wrapper.classList.toggle('edge-highlight', nearEdge);
};

  const handleMouseEnter = (e) => {
    const wrapper = e.currentTarget;
    const card = wrapper.querySelector('.futuristic-card');
    const cursor = wrapper.querySelector('.gradient-cursor');

    card.classList.remove('leaving');
    card.style.transition = 'transform 0.1s ease';
    cursor.style.opacity = '1';
  };

  const handleMouseLeave = (e) => {
    const wrapper = e.currentTarget;
    const card = wrapper.querySelector('.futuristic-card');
    const cursor = wrapper.querySelector('.gradient-cursor');

    card.classList.add('leaving');
    card.style.transform = 'rotateY(0) rotateX(0)';
    cursor.style.opacity = '0';
  };



  return (
    <div className="bg-black text-white py-5 d-flex flex-column align-items-center">
      <h1 className="display-4 text-center gradient-text mb-5">
        Our Services
      </h1>

      {/* Futuristic Cards Section */}
      <div className="container-fluid mt-5">
        <div className="row g-4 justify-content-center">

          <div className="row">
            {/* 1. Custom Software Development */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="futuristic-card-wrapper h-100"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="gradient-cursor"></div>
                <div className="futuristic-card h-100">
                  <div className="card-body p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="fas fa-laptop-code fa-3x gradient-text-purple"></i>
                    </div>
                    <h3 className="card-title gradient-text-purple">
                      Custom Software Development
                    </h3>
                    <p className="card-text">
                      Tailored software solutions to meet your unique business needs.
                    </p>
                    <div className="glow-effect"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Mobile App Design and Development */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="futuristic-card-wrapper h-100"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="gradient-cursor"></div>
                <div className="futuristic-card h-100">
                  <div className="card-body p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="fas fa-mobile-alt fa-3x gradient-text-blue"></i>
                    </div>
                    <h3 className="card-title gradient-text-blue">
                      Mobile App Design and Development
                    </h3>
                    <p className="card-text">
                      Innovative mobile applications for iOS and Android platforms.
                    </p>
                    <div className="glow-effect"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Best UI/UX Design Services */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="futuristic-card-wrapper h-100"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="gradient-cursor"></div>
                <div className="futuristic-card h-100">
                  <div className="card-body p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="fas fa-palette fa-3x gradient-text-green"></i>
                    </div>
                    <h3 className="card-title gradient-text-green">
                      Best UI/UX Design Services
                    </h3>
                    <p className="card-text">
                      User-centric design that enhances user experience and satisfaction.
                    </p>
                    <div className="glow-effect"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Maintenance and Customer Support */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="futuristic-card-wrapper h-100"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="gradient-cursor"></div>
                <div className="futuristic-card h-100">
                  <div className="card-body p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="fas fa-headset fa-3x gradient-text-pink"></i>
                    </div>
                    <h3 className="card-title gradient-text-pink">
                      Maintenance and Customer Support
                    </h3>
                    <p className="card-text">
                      Reliable support and maintenance to keep your software running smoothly.
                    </p>
                    <div className="glow-effect"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Audit & IT Consulting Services */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="futuristic-card-wrapper h-100"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="gradient-cursor"></div>
                <div className="futuristic-card h-100">
                  <div className="card-body p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="fas fa-chart-line fa-3x gradient-text-purple"></i>
                    </div>
                    <h3 className="card-title gradient-text-purple">
                      Audit & IT Consulting Services
                    </h3>
                    <p className="card-text">
                      Expert guidance to optimize your IT infrastructure and processes.
                    </p>
                    <div className="glow-effect"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Web Application Design and Development */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="futuristic-card-wrapper h-100"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="gradient-cursor"></div>
                <div className="futuristic-card h-100">
                  <div className="card-body p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="fas fa-code-branch fa-3x gradient-text-blue"></i>
                    </div>
                    <h3 className="card-title gradient-text-blue">
                      Web Application Design and Development
                    </h3>
                    <p className="card-text">
                      Cutting-edge web applications that drive user engagement and business growth.
                    </p>
                    <div className="glow-effect"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>



      <Carousel className="mt-5" />

      <WorkingProcess />
    </div>

  );
};

export default Services;
