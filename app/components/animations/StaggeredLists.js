// components/animations/StaggeredList.js
"use client";

import React, { useEffect, useRef, useState } from "react";

// Wrapper component
export function StaggeredList({
  children,
  staggerAmount = 0.1,
  threshold = 0.1,
  once = true,
  className = "",
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

  // Clone children with additional props
  const staggeredChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.5s ease-out ${
            index * staggerAmount
          }s, transform 0.5s ease-out ${index * staggerAmount}s`,
        },
      });
    }
    return child;
  });

  return (
    <div ref={ref} className={className}>
      {staggeredChildren}
    </div>
  );
}

// Item component for convenience
export function StaggeredItem({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
