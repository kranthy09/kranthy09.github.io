"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const NavigationProgressBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMount, setIsMount] = useState(false);

  // Handle initial mount
  useEffect(() => {
    setIsMount(true);
    // Simulate initial page load progress
    setIsNavigating(true);
    setProgress(0);

    const initialLoadTimeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsNavigating(false);
      }, 500);
    }, 600);

    return () => clearTimeout(initialLoadTimeout);
  }, []);

  // Handle route changes
  useEffect(() => {
    if (!isMount) return;

    // Reset and start animation when route changes
    setIsNavigating(true);
    setProgress(0);

    let animationInterval;
    let completionTimeout;

    // Animate to 80% quickly
    animationInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 80) {
          clearInterval(animationInterval);
          return 80;
        }
        return prev + 5;
      });
    }, 10);

    // Complete to 100% after a delay (simulating page load completion)
    completionTimeout = setTimeout(() => {
      setProgress(100);

      // Hide the navigation bar after completion
      setTimeout(() => {
        setIsNavigating(false);
      }, 500);
    }, 600);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(completionTimeout);
    };
  }, [pathname, searchParams?.toString(), isMount]);

  // Handle scroll progress
  useEffect(() => {
    if (!isMount) return;

    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        // Only update scroll progress if page is scrollable
        const newScrollProgress = (currentScroll / totalHeight) * 100;
        setScrollProgress(newScrollProgress);
      } else {
        setScrollProgress(0);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isMount]);

  // Always show the progress bar container
  // Use scroll progress when not navigating, even if it's 0
  const displayProgress = isNavigating ? progress : scrollProgress;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[9999]">
      <div
        className="h-full bg-blue-600 transition-all duration-300 ease-out"
        style={{ width: `${displayProgress}%` }}
      />
    </div>
  );
};

export default NavigationProgressBar;
