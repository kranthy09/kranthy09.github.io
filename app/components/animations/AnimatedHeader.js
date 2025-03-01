"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedHeader = () => {
  // State to check if component is in viewport
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Setup intersection observer to detect when header enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Unobserve after animation has triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const headerElement = document.getElementById("animated-header");
    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);

  // Animation variants for background
  const backgroundVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the tool images
  const imageVariants = {
    hidden: (custom) => ({
      opacity: 0,
      x:
        custom.direction === "left"
          ? -50
          : custom.direction === "right"
          ? 50
          : 0,
      y: custom.direction === "bottom" ? 50 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Example data for tool images (replace with your actual images)
  const toolImages = [
    {
      src: "/file.svg",
      alt: "Analytics Dashboard",
      direction: "left",
      delay: 0.3,
    },
    {
      src: "/globe.svg",
      alt: "Campaign Management",
      direction: "bottom",
      delay: 0.5,
    },
    {
      src: "/file.svg",
      alt: "Influencer Metrics",
      direction: "bottom",
      delay: 0.7,
    },
    {
      src: "/window.svg",
      alt: "Performance Reporting",
      direction: "right",
      delay: 0.9,
    },
  ];

  return (
    <section
      id="animated-header"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-amber-300 bg-opacity-80"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={backgroundVariants}
      >
        {/* Background animated shapes/particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 200 - 100],
                x: [0, Math.random() * 200 - 100],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Header Content */}
      <div className="max-w-7xl w-full px-4 md:px-8 z-10 text-center text-white">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-md"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ delay: 0.1 }}
        >
          Influencer Metrics Platform
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Monitor performance, manage campaigns, and maximize ROI with our
          advanced analytics suite
        </motion.p>

        {/* Tool Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {toolImages.map((image, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
              custom={{ direction: image.direction }}
              transition={{ delay: image.delay }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 font-medium text-lg">
                  {image.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <time dateTime="2016-10-25" suppressHydrationWarning />
    </section>
  );
};

export default AnimatedHeader;
