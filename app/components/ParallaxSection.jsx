'use client';

import { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({
  backgroundImage,
  backgroundPosition = 'center',
  speed = 0.5,
  children,
  className = '',
  minHeight = '500px',
}) => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true after component mounts
    setIsMounted(true);

    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      try {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate the position in viewport (-1 to 1 range)
        const positionInViewport = sectionTop / windowHeight;

        // Apply parallax effect
        const yOffset = positionInViewport * speed * 100;
        bgRef.current.style.transform = `translateY(${yOffset}px)`;
      } catch (error) {
        console.error("Parallax error:", error);
      }
    };

    // Only add the scroll listener if component is mounted
    if (isMounted) {
      window.addEventListener('scroll', handleScroll);

      // Call once to initialize position
      handleScroll();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, isMounted]);

  return (
    <section
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={{ minHeight }}
    >
      {isMounted && (
        <div
          ref={bgRef}
          className="parallax-bg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition,
          }}
        />
      )}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;