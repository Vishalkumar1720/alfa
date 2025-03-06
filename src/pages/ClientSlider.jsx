import React from "react";
import "../App.css";

const ClientSlider = () => {
  const clients = [
    { id: 1, src: "https://radiantwebtech.com/website-designing-in-delhi/assets/images/client-1.png", alt: "audi" },
    { id: 2, src: "https://radiantwebtech.com/website-designing-in-delhi/assets/images/client-3.png", alt: "grantthornton" },
    { id: 3, src: "https://radiantwebtech.com/website-designing-in-delhi/assets/images/client-4.png", alt: "fitmirchi" },
    { id: 4, src: "https://radiantwebtech.com/website-designing-in-delhi/assets/images/client-5.png", alt: "astrogemslab" },
    { id: 5, src: "https://radiantwebtech.com/website-designing-in-delhi/assets/images/client-6.png", alt: "chanakyaforum" },
    { id: 6, src: "https://radiantwebtech.com/website-designing-in-delhi/assets/images/client-7.png", alt: "MDH" },
    { id: 7, src: "https://radiantwebtech.com/website-designing-in-delhi/assets/images/client-8.png", alt: "trump towers delhi ncr" },
    { id: 8, src: "https://radiantwebtech.com/website-designing-in-delhi/assets/images/client-9.png", alt: "Invent store" },
  ];

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
      
        <div className="slider slider-clockwise">
          {[...clients, ...clients].map((client, index) => (
            <div key={`cw-${index}`} className="slide">
              <img src={client.src} alt={client.alt} />
            </div>
          ))}
        </div>

        <div className="slider slider-anticlockwise">
          {[...clients, ...clients].map((client, index) => (
            <div key={`acw-${index}`} className="slide">
              <img src={client.src} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;