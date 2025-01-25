import React, { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ maxNumber, duration, suffix }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To prevent re-triggering
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true); // Prevent animation from running again
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    let startNumber = 0;
    const increment = maxNumber / (duration / 50); // Calculate the increment step
    const interval = setInterval(() => {
      startNumber += increment;
      if (startNumber >= maxNumber) {
        clearInterval(interval);
        setCurrentNumber(maxNumber); // Set the final value
      } else {
        setCurrentNumber(Math.ceil(startNumber)); // Round up for smooth animation
      }
    }, 50);
  };

  return (
    <h1 ref={counterRef} className="gradient-text">
      {currentNumber}
      {suffix}
    </h1>
  );
};

export default AnimatedCounter;

