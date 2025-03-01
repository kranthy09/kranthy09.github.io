// components/animations/AnimatedText.js
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AnimatedText({
  text,
  animation = "letter-fade", // 'letter-fade', 'word-fade', 'typewriter', 'wave'
  className = "",
  letterDelay = 0.05,
  wordDelay = 0.2,
  duration = 0.5,
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

  // Split the text based on animation type
  const renderAnimatedText = () => {
    switch (animation) {
      case "letter-fade":
        return text.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity ${duration}s ease-out ${
                index * letterDelay
              }s, transform ${duration}s ease-out ${index * letterDelay}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ));

      case "word-fade":
        return text.split(" ").map((word, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity ${duration}s ease-out ${
                index * wordDelay
              }s, transform ${duration}s ease-out ${index * wordDelay}s`,
              marginRight: "0.3em",
            }}
          >
            {word}
          </span>
        ));

      case "typewriter":
        return (
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: isVisible ? "100%" : "0",
              transition: `width ${text.length * letterDelay}s steps(${
                text.length
              })`,
            }}
          >
            {text}
          </span>
        );

      case "wave":
        return text.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              transform: isVisible
                ? `translateY(${Math.sin(index * 0.3) * 10}px)`
                : "translateY(0)",
              transition: `transform ${duration}s ease-in-out ${
                index * letterDelay
              }s`,
              animationName: isVisible ? "waveAnimation" : "none",
              animationDuration: "2s",
              animationDelay: `${index * letterDelay}s`,
              animationIterationCount: "infinite",
              animationDirection: "alternate",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ));

      default:
        return text;
    }
  };

  // Add wave animation keyframes to the document if it doesn't exist
  useEffect(() => {
    if (animation === "wave" && typeof document !== "undefined") {
      const styleEl = document.createElement("style");
      const keyframes = `
        @keyframes waveAnimation {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `;
      styleEl.innerHTML = keyframes;
      document.head.appendChild(styleEl);

      return () => {
        document.head.removeChild(styleEl);
      };
    }
  }, [animation]);

  return (
    <div ref={ref} className={className}>
      {renderAnimatedText()}
    </div>
  );
}
