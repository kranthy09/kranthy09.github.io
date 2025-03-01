"use client";

import React from "react";
import StarrySpace from "@/app/components/animations/AnimatedStars";

const StarsHeader = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Starry space background */}
      <StarrySpace
        starCount={300}
        speed={0.3}
        depth={1500}
        backgroundColor="#0a0a1a"
        starColors={["#ffffff", "#f0f8ff", "#e6e6fa", "#b0e0e6", "#87cefa"]}
      />

      {/* Header content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Explore the Universe
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          Journey through infinite possibilities in our cosmic landscape
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
          Begin Your Journey
        </button>
      </div>
    </header>
  );
};

export default StarsHeader;
