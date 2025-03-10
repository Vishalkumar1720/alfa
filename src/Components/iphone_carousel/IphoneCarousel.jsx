import React from "react";
import "../../App.css";

import Card from "./Card.jsx";
import Carousel from "./Carousels.jsx";
import image1 from "../../Assets/images/1.png";
import image2 from "../../Assets/images/2.png";
import image3 from "../../Assets/images/3.png";
import image4 from "../../Assets/images/4.png";

const App2 = () => {
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
    <div className="container-fluid py-5">
      <div className="row align-items-center text-white">
        
               <Carousel
            cards={cards}
            height="500px"
            width="70%"
            margin="0 auto"
            offset={10}
            showArrows={false}
          />
       
      </div>
    </div>
  );
};

export default App2;
