"use client";

import React, { useEffect, useRef, useState } from "react";

const ScrollSection = ({
  items = [
    {
      image: "/placeholder-1.jpg",
      title: "First Item",
      points: ["Point 1.1", "Point 1.2", "Point 1.3"],
    },
    {
      image: "/placeholder-2.jpg",
      title: "Second Item",
      points: ["Point 2.1", "Point 2.2", "Point 2.3"],
    },
    {
      image: "/placeholder-3.jpg",
      title: "Third Item",
      points: ["Point 3.1", "Point 3.2", "Point 3.3"],
    },
    {
      image: "/placeholder-4.jpg",
      title: "Fourth Item",
      points: ["Point 4.1", "Point 4.2", "Point 4.3"],
    },
  ],
  sectionHeight = "400vh",
  sectionBackground = "#f5f5f5",
  textColor = "#333",
}) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const handleScroll = () => {
      // Get section position
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // If section is not in view, do nothing
      if (sectionTop > viewportHeight || sectionTop + sectionHeight < 0) return;

      // Calculate scroll progress through the section (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(1, 1 - sectionTop / (sectionHeight - viewportHeight))
      );

      setProgress(scrollProgress);

      // Determine which item to show based on scroll progress
      const itemCount = items.length;
      const itemIndex = Math.min(
        itemCount - 1,
        Math.floor(scrollProgress * itemCount)
      );

      setCurrentIndex(itemIndex);

      // Calculate progress within current item (0 to 1)
      const itemProgress = scrollProgress * itemCount - itemIndex;

      // Set CSS variables for animations
      container.style.setProperty("--item-progress", itemProgress);
      container.style.setProperty("--global-progress", scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: sectionHeight, background: sectionBackground }}
    >
      <div
        ref={containerRef}
        className="sticky top-0 flex flex-col md:flex-row w-full h-screen overflow-hidden"
      >
        {/* Image Column */}
        <div className="w-full md:w-1/2 relative h-1/2 md:h-screen">
          {items.map((item, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-500 ease-in-out"
              style={{
                opacity:
                  index === currentIndex
                    ? 1 - Math.abs(progress * items.length - index - 0.5) * 2
                    : index === currentIndex + 1
                    ? (progress * items.length - currentIndex) * 2
                    : 0,
                zIndex: items.length - index,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full rounded-lg shadow-xl transform transition-transform duration-700 ease-out"
                style={{
                  transform: `scale(${index === currentIndex ? 1 : 0.8})
                            rotate(${
                              index === currentIndex
                                ? 0
                                : index < currentIndex
                                ? -5
                                : 5
                            }deg)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Text Column */}
        <div className="w-full md:w-1/2 flex items-center p-8 h-1/2 md:h-screen">
          <div className="w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="text-content mb-16 last:mb-0 transition-all duration-500 ease-in-out"
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transform: `translateY(${
                    index === currentIndex
                      ? 0
                      : index < currentIndex
                      ? "-20px"
                      : "20px"
                  })`,
                  color: textColor,
                }}
              >
                <h2 className="text-3xl font-bold mb-6">{item.title}</h2>
                <ul className="space-y-4">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-center transition-all duration-500 ease-in-out"
                      style={{
                        opacity:
                          index === currentIndex
                            ? pointIndex / item.points.length <
                              progress * items.length - index
                              ? 1
                              : 0
                            : 0,
                        transform: `translateX(${
                          index === currentIndex
                            ? pointIndex / item.points.length <
                              progress * items.length - index
                              ? "0"
                              : "20px"
                            : "20px"
                        })`,
                      }}
                    >
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
