import React, { useEffect, useState, useRef, useCallback } from "react";

const AnimatedCounter = ({ maxNumber, duration, suffix }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Prevent re-triggering
  const counterRef = useRef(null);

  // Define the animation logic with useCallback for stable reference
  const animateCounter = useCallback(() => {
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
  }, [maxNumber, duration]);

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

    // Store the reference in a local variable for cleanup
    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateCounter, hasAnimated]);

  return (
    <h1 ref={counterRef} className="gradient-text">
      {currentNumber}
      {suffix}
    </h1>
  );
};

export default AnimatedCounter;
