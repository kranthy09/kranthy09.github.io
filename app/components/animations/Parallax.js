// components/animations/Parallax.js
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Parallax({
  children,
  speed = 0.5, // Negative values move faster, positive values move slower
  className = "",
}) {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      // Get the element's position relative to the viewport
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;

      // Calculate how far we've scrolled past the element
      const scrollPosition = window.scrollY;
      const relativeScroll = scrollPosition - elementTop + window.innerHeight;

      // Only start the effect when the element is in view
      if (
        relativeScroll > 0 &&
        scrollPosition + window.innerHeight > elementTop
      ) {
        setOffset(relativeScroll * speed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
