"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import ProfileBoxUI from "./dashboardOverview/ProfileBox";

const HeroSection = () => {
  const [titleComplete, setTitleComplete] = useState(false);

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    // Removed moveToLeft variant since we want the title to stay in place
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  // Dashboard animation variants
  const dashboardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.8,
      },
    },
  };

  // Button hover animation variants
  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Text to animate letter by letter
  const titleText = "Right Influencer \nFor Right Brand";

  useEffect(() => {
    // Set title complete after animation duration (adjust as needed)
    const timer = setTimeout(() => {
      setTitleComplete(true);
    }, titleText.length * 50 + 300); // Add buffer time after last letter

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            {/* Animated Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-heading leading-tight text-white"
              initial="hidden"
              animate={"visible"}
              variants={titleVariants}
            >
              {titleText.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Content that appears after title animation */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={titleComplete ? "visible" : "hidden"}
              variants={contentVariants}
            >
              <motion.p
                className="text-lg sm:text-xl text-blue-200 max-w-xl font-body"
                variants={contentVariants}
              >
                Streamline your business processes with our powerful dashboard.
                Save time, increase productivity, and make data-driven
                decisions.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={contentVariants}
              >
                <motion.button
                  className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl font-body"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>

                <motion.button
                  className="px-6 py-3 bg-transparent border-2 border-blue-300 text-blue-100 font-medium rounded-lg hover:bg-blue-800/30 font-body"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Dashboard Mockup */}
          <motion.div
            className="rounded-xl shadow-2xl bg-gray-900/60 backdrop-blur-sm border border-blue-500/20 overflow-hidden w-full max-w-xl mx-auto lg:mx-0 h-75"
            initial="hidden"
            animate={titleComplete ? "visible" : "hidden"}
            variants={dashboardVariants}
          >
            <div className="p-6">
              {/* Dashboard stats with animated counters */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <motion.div
                  className="bg-gray-800/60 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.0, duration: 0.5 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                    <div className="text-xs text-gray-400">REVENUE</div>
                  </div>
                  <div className="text-2xl font-bold text-white">$89.5k</div>
                  <div className="text-xs text-green-500 mt-1 flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5L12 19M12 5L18 11M12 5L6 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    +14.5%
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-800/60 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.1, duration: 0.5 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                    <div className="text-xs text-gray-400">USERS</div>
                  </div>
                  <div className="text-2xl font-bold text-white">24.8k</div>
                  <div className="text-xs text-blue-500 mt-1 flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5L12 19M12 5L18 11M12 5L6 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    +9.2%
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-800/60 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.2, duration: 0.5 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                    <div className="text-xs text-gray-400">CONVERSION</div>
                  </div>
                  <div className="text-2xl font-bold text-white">6.4%</div>
                  <div className="text-xs text-purple-500 mt-1 flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5L12 19M12 5L18 11M12 5L6 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    +2.5%
                  </div>
                </motion.div>
              </div>

              {/* Animated Charts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Line Chart with animation */}
                <motion.div
                  className="bg-gray-800/60 p-4 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.3, duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm font-medium text-gray-200">
                      Monthly Growth
                    </div>
                    <div className="text-xs text-gray-400">Last 7 months</div>
                  </div>

                  <div className="relative h-40">
                    {/* Chart grid lines */}
                    <div className="absolute inset-0 grid grid-rows-4 gap-0 h-full">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="border-t border-gray-700/30 h-0"
                        ></div>
                      ))}
                    </div>

                    {/* Animated line chart */}
                    <svg
                      className="w-full h-full absolute inset-0"
                      viewBox="0 0 280 120"
                      preserveAspectRatio="none"
                    >
                      {/* Animated path */}
                      <motion.path
                        d="M0,100 C20,80 40,95 60,60 C80,40 100,30 120,45 C140,60 160,80 180,50 C200,30 220,20 240,40 C260,60 280,30 280,30"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          delay: 1.5,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Gradient definition */}
                      <defs>
                        <linearGradient
                          id="lineGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                        <linearGradient
                          id="areaGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#3b82f6"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#3b82f6"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      {/* Area under the line */}
                      <motion.path
                        d="M0,100 C20,80 40,95 60,60 C80,40 100,30 120,45 C140,60 160,80 180,50 C200,30 220,20 240,40 C260,60 280,30 280,30 V120 H0 Z"
                        fill="url(#areaGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.8, duration: 1 }}
                      />

                      {/* Data points */}
                      {[
                        { x: 0, y: 100 },
                        { x: 40, y: 95 },
                        { x: 80, y: 40 },
                        { x: 120, y: 45 },
                        { x: 160, y: 80 },
                        { x: 200, y: 30 },
                        { x: 240, y: 40 },
                        { x: 280, y: 30 },
                      ].map((point, i) => (
                        <motion.circle
                          key={i}
                          cx={point.x}
                          cy={point.y}
                          r="4"
                          fill="#fff"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 3.5 + i * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </svg>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-500">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map(
                        (month, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 3.8 + i * 0.05,
                              duration: 0.3,
                            }}
                          >
                            {month}
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Animated donut chart */}
                <motion.div
                  className="bg-gray-800/60 p-4 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.4, duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm font-medium text-gray-200">
                      User Distribution
                    </div>
                    <div className="text-xs text-gray-400">Current quarter</div>
                  </div>

                  <div className="flex items-center justify-center h-40">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="transparent"
                        stroke="#3b82f6"
                        strokeWidth="12"
                        strokeDasharray="339.292"
                        strokeDashoffset="339.292"
                        strokeLinecap="round"
                        transform="rotate(-90, 60, 60)"
                        initial={{ strokeDashoffset: 339.292 }}
                        animate={{ strokeDashoffset: 339.292 * 0.35 }}
                        transition={{
                          delay: 3.6,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="transparent"
                        stroke="#8b5cf6"
                        strokeWidth="12"
                        strokeDasharray="339.292"
                        strokeDashoffset="339.292"
                        strokeLinecap="round"
                        transform="rotate(-90, 60, 60)"
                        initial={{ strokeDashoffset: 339.292 }}
                        animate={{ strokeDashoffset: 339.292 * 0.7 }}
                        transition={{
                          delay: 3.7,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="transparent"
                        stroke="#ec4899"
                        strokeWidth="12"
                        strokeDasharray="339.292"
                        strokeDashoffset="339.292"
                        strokeLinecap="round"
                        transform="rotate(-90, 60, 60)"
                        initial={{ strokeDashoffset: 339.292 }}
                        animate={{ strokeDashoffset: 339.292 * 0.85 }}
                        transition={{
                          delay: 3.8,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                      {/* Center text */}
                      <motion.text
                        x="60"
                        y="60"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xl font-bold"
                        fill="white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.0, duration: 0.5 }}
                      >
                        65%
                      </motion.text>
                    </svg>

                    {/* Legend */}
                    <motion.div
                      className="ml-4 space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 5.0, duration: 0.5 }}
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-300">Mobile</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-300">Desktop</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-300">Tablet</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
