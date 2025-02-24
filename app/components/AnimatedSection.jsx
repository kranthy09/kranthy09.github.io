'use client';

import React from 'react';
import useScrollAnimation from "@/app/components/UseScrollAnimation";

/**
 * AnimatedSection component that provides scroll-based animations
 * @param {object} props - Component props
 * @param {string} props.animation - Animation type
 * @param {object} props.options - Animation options
 * @param {React.ReactNode} props.children - Child elements
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.as - HTML element to render
 * @returns {JSX.Element} - Animated section component
 */
const AnimatedSection = ({
  animation = 'fade',
  options = {},
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const { ref, animationClass } = useScrollAnimation(animation, options);

  return (
    <Component
      ref={ref}
      className={`${animationClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;