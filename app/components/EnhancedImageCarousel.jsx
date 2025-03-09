"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link2 } from "lucide-react";
import Image from "next/image";

const EnhancedImageCarousel = ({
  images,
  autoSlideInterval,
  showItemsCount,
  height,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);
  const totalSlides = Math.max(0, images.length - showItemsCount + 1);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // Handle next slide with animation
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
      );

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  // Handle previous slide with animation
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1
      );

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  // Touch event handlers for mobile swipe functionality
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      nextSlide();
    } else if (touchEndX - touchStartX > 75) {
      prevSlide();
    }
  };

  // Calculate the transform value for sliding
  const getTransformValue = () => {
    const slideWidth = carouselRef.current
      ? carouselRef.current.clientWidth / showItemsCount
      : 0;
    return `translateX(-${currentIndex * slideWidth}px)`;
  };

  // Handle opening link in new tab
  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-70 rounded-full z-10 flex items-center justify-center shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
        disabled={isAnimating}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        className="overflow-hidden rounded-lg shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={carouselRef}
        style={{ height: `${height}px` }}
      >
        <ul
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: getTransformValue() }}
          role="list"
        >
          {images.map((image, index) => (
            <li
              key={index}
              className="flex-shrink-0 px-2 box-border transition-all duration-300 w-fit"
              style={{
                width: `${100 / showItemsCount}%`,
                filter:
                  hoveredIndex === index
                    ? "brightness(110%)"
                    : "brightness(80%)",
              }}
              role="listitem"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full w-full rounded-lg group cursor-pointer">
                <Image
                  src={image.src}
                  fill
                  alt={image.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Link Icon */}
                <div
                  className="absolute bottom-4 right-4 bg-white bg-opacity-80 p-2 rounded-full shadow-md transform transition-transform duration-300 group-hover:scale-110 hover:bg-opacity-100 cursor-pointer"
                  onClick={() => handleLinkClick(image.link)}
                  aria-label={`Visit link for ${
                    image.alt || `Image ${index + 1}`
                  }`}
                  role="button"
                  tabIndex={0}
                >
                  <Link2 size={16} color="#f20765" strokeWidth={1} />
                </div>

                {/* Caption Text */}
                {image.text && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center transform transition-transform duration-300 group-hover:bg-opacity-80">
                    <span className="font-medium">{image.text}</span>

                    {/* Visit prompt text */}
                    <div className="mt-1 text-sm text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span>Click icon to visit</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-70 rounded-full z-10 flex items-center justify-center shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
        disabled={isAnimating}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${
              currentIndex === index
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => {
                  setIsAnimating(false);
                }, 500);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedImageCarousel;
