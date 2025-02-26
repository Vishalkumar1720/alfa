import React from 'react';
import '../App.css'; // Import your CSS file


const ClientSlider = ({ direction }) => {
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
    <div className={`clients-slider swiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden ${direction === 'rtl' ? 'swiper-rtl' : ''}`} dir={direction}>
      <div className="swiper-wrapper" aria-live="off">
        {clients.map((client) => (
          <div key={client.id} className="swiper-slide" role="group" aria-label={`${client.id} / ${clients.length}`} style={{ width: '172.6px', marginRight: '24px' }}>
            <div className="client-block">
              <img src={client.src} alt={client.alt} />
            </div>
          </div>
        ))}
      </div>
      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  );
};

export default ClientSlider;