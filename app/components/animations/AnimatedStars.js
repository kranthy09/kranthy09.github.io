"use client";

import React, { useEffect, useRef } from "react";

const StarrySpace = ({
  starCount = 200,
  speed = 0.5,
  depth = 1000,
  backgroundColor = "#000",
  starColors = ["#ffffff", "#fffafa", "#f8f8ff", "#f0ffff", "#e6e6fa"],
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    // Handle resize
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recreate stars when resizing
      initStars();
    }

    // Initialize stars
    function initStars() {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * depth,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          size: Math.random() * 1.5 + 0.5,
          twinkleSpeed: Math.random() * 0.05 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    // Animation function
    function animate() {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move stars
        star.z = star.z - speed;

        // Reset star when it goes out of the screen
        if (star.z <= 0) {
          star.z = depth;
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
        }

        // Calculate star position
        const scale = depth / star.z;
        const x = star.x * scale + centerX;
        const y = star.y * scale + centerY;

        // Calculate star size and brightness (for twinkling effect)
        const twinkleFactor =
          Math.sin(Date.now() * star.twinkleSpeed + star.twinklePhase) * 0.2 +
          0.8;
        const size = star.size * scale * twinkleFactor;
        const opacity = Math.min(1, twinkleFactor + 0.3);

        // Skip stars that are outside the canvas
        if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
          continue;
        }

        // Draw star
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity;

        // For larger stars, create a more realistic glow effect
        if (size > 1.2) {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
          gradient.addColorStop(0, star.color);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = gradient;
          ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        } else {
          ctx.arc(x, y, size, 0, Math.PI * 2);
        }

        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // Set up canvas and start animation
    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, speed, depth, backgroundColor, starColors]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      aria-hidden="true"
    />
  );
};

export default StarrySpace;
