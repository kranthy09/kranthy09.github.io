// components/animations/RevealOnScroll.js
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  children,
  direction = "left", // 'left', 'right', 'up', 'down'
  duration = 1,
  delay = 0,
  className = "",
  threshold = 0.1,
  once = true,
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsRevealed(false);
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

  // Set up the reveal animation based on direction
  const getRevealStyles = () => {
    // First, determine the mask direction
    let maskDirection;
    let startPosition;

    switch (direction) {
      case "left":
        maskDirection = "to right";
        startPosition = isRevealed ? "100%" : "0%";
        break;
      case "right":
        maskDirection = "to left";
        startPosition = isRevealed ? "100%" : "0%";
        break;
      case "up":
        maskDirection = "to bottom";
        startPosition = isRevealed ? "100%" : "0%";
        break;
      case "down":
        maskDirection = "to top";
        startPosition = isRevealed ? "100%" : "0%";
        break;
      default:
        maskDirection = "to right";
        startPosition = isRevealed ? "100%" : "0%";
    }

    return {
      position: "relative",
      overflow: "hidden",
      // Use a pseudo-element for the reveal mask
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(${maskDirection}, transparent ${startPosition}, white ${startPosition})`,
        transition: `all ${duration}s ease-in-out ${delay}s`,
        pointerEvents: "none",
      },
    };
  };

  // Instead of CSS-in-JS, let's use inline styles
  const containerStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const maskStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      direction === "left"
        ? `linear-gradient(to right, white ${
            isRevealed ? "0%" : "100%"
          }, transparent ${isRevealed ? "100%" : "0%"})`
        : direction === "right"
        ? `linear-gradient(to left, white ${
            isRevealed ? "0%" : "100%"
          }, transparent ${isRevealed ? "100%" : "0%"})`
        : direction === "up"
        ? `linear-gradient(to bottom, white ${
            isRevealed ? "0%" : "100%"
          }, transparent ${isRevealed ? "100%" : "0%"})`
        : `linear-gradient(to top, white ${
            isRevealed ? "0%" : "100%"
          }, transparent ${isRevealed ? "100%" : "0%"})`,
    transition: `all ${duration}s ease-in-out ${delay}s`,
    pointerEvents: "none",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 0,
  };

  return (
    <div ref={ref} className={className} style={containerStyle}>
      <div style={contentStyle}>{children}</div>
      <div style={maskStyle}></div>
    </div>
  );
}
