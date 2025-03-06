import React from 'react';
import ClientSlider from './ClientSlider';
import '../App.css'; // Import your CSS file

const ClientsSection = () => {
  return (
    <section className="clients-section" id="client">
      <div className="container-fluid px-0">
        <div className="fade-in-move-on-scroll">
          <div className="gradiant-color">
            <p>Trusted by Top-Tier Clients</p>
          </div>
        </div>

        {/* First Slider */}
        <ClientSlider direction="ltr" />

       

        {/* <div className="text-center pt-5">
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
        </div> */}
      </div>
    </section>
  );
};

export default ClientsSection;