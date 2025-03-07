import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


function Card({ imagen,keyindex }) {

  const [show, setShown] = useState(false);
const [keykey,setKeykey] = useState(0)
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
  <div>
    
    <animated.div
    onClick={()=>setKeykey(keyindex)}
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
     
      <div className={Styles.btnn}>
        {/* <Button text="Demo" />
        <Button text="Code" /> */}
      
      </div>
    </animated.div>
    </div>
  );
}

export default Card;
