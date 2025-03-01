// components/animations/SlideIn.js
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SlideIn({
  children,
  direction = "left", // 'left', 'right', 'up', 'down'
  distance = 50, // in pixels
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.1,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Calculate initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return `translateX(-${distance}px)`;
      case "right":
        return `translateX(${distance}px)`;
      case "up":
        return `translateY(-${distance}px)`;
      case "down":
        return `translateY(${distance}px)`;
      default:
        return `translateX(-${distance}px)`;
    }
  };

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} style={animationStyle} className={className}>
      {children}
    </div>
  );
}
