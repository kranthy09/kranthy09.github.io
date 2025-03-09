"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link2 } from "lucide-react";
import Image from "next/image";

const ImageCarousel = ({
  images = [],
  autoSlideInterval = 3000,
  showItemsCount = 3,
  height = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef(null);
  const totalSlides = Math.max(0, images.length - showItemsCount + 1);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // Handle next slide with boundary check
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide with boundary check
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1
    );
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

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-70 rounded-full z-10 flex items-center justify-center shadow-md hover:bg-opacity-90 focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous slide"
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
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={carouselRef}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: getTransformValue(),
            height: `${height}px`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 box-border"
              style={{ width: `${100 / showItemsCount}%` }}
            >
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt || `Slide ${index + 1}`}
                  fill
                  className="w-full h-full object-contain"
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
                {image.text && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
                    {image.text}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-70 rounded-full z-10 flex items-center justify-center shadow-md hover:bg-opacity-90 focus:outline-none"
        onClick={nextSlide}
        aria-label="Next slide"
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
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
