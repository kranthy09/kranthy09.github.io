// components/animations/HoverEffects.js
"use client";

import React, { useState } from "react";

// Tilt hover effect
export function TiltHover({
  children,
  className = "",
  perspective = 1000,
  scale = 1.05,
  tiltAmount = 15, // degrees
  transitionDuration = 0.3,
}) {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to the element
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element

    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angle (inverted so it follows the mouse)
    const rotateX = ((y - centerY) / centerY) * -tiltAmount;
    const rotateY = ((x - centerX) / centerX) * tiltAmount;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: `transform ${transitionDuration}s ease-out`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
      transition: `transform ${transitionDuration}s ease-out`,
    });
  };

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        ...tiltStyle,
      }}
    >
      {children}
    </div>
  );
}

// Shine effect (glossy moving highlight)
export function ShineEffect({
  children,
  className = "",
  color = "rgba(255, 255, 255, 0.3)",
  duration = 0.3,
}) {
  const [shineStyle, setShineStyle] = useState({
    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
    position: "absolute",
    transform: "translateX(-100%)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    transition: `transform ${duration}s ease-out, opacity ${duration}s ease-out`,
    pointerEvents: "none",
  });

  const handleMouseEnter = () => {
    setShineStyle((prev) => ({
      ...prev,
      opacity: 1,
      transform: "translateX(100%)",
    }));
  };

  const handleMouseLeave = () => {
    setShineStyle((prev) => ({
      ...prev,
      opacity: 0,
      transform: "translateX(-100%)",
    }));
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div style={shineStyle} />
    </div>
  );
}

// Scale on hover with smooth transition
export function ScaleHover({
  children,
  className = "",
  scale = 1.05,
  duration = 0.3,
}) {
  const [scaleStyle, setScaleStyle] = useState({
    transform: "scale(1)",
    transition: `transform ${duration}s ease-out`,
  });

  const handleMouseEnter = () => {
    setScaleStyle({
      transform: `scale(${scale})`,
      transition: `transform ${duration}s ease-out`,
    });
  };

  const handleMouseLeave = () => {
    setScaleStyle({
      transform: "scale(1)",
      transition: `transform ${duration}s ease-out`,
    });
  };

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={scaleStyle}
    >
      {children}
    </div>
  );
}

// Button hover effect with expanding background
export function ButtonHover({
  children,
  className = "",
  hoverColor = "#3b82f6",
  textColor = "white",
  duration = 0.3,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    color: isHovered ? textColor : "inherit",
    transition: `color ${duration}s ease-out`,
  };

  const backgroundStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: hoverColor,
    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: `transform ${duration}s ease-out`,
    zIndex: -1,
  };

  return (
    <div
      className={className}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={backgroundStyle} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
