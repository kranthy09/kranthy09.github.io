"use client";

import { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Combine pathname and search params to detect navigation events
  const fullPath = pathname + searchParams.toString();

  useEffect(() => {
    if (prevPathname !== pathname) {
      // Start exit animation
      setIsAnimating(true);

      // After exit animation, update children
      const timeout = setTimeout(() => {
        setDisplayChildren(children);

        // Small delay before starting entrance animation
        setTimeout(() => {
          setIsAnimating(false);
          setPrevPathname(pathname);
        }, 50);
      }, 400); // Match this to the exit animation duration

      return () => clearTimeout(timeout);
    }
  }, [fullPath, children, pathname, prevPathname]);

  return (
    <Suspense>
      <div
        className={`page-transition-container ${
          isAnimating ? "page-transitioning-out" : "page-transitioning-in"
        }`}
      >
        {displayChildren}
      </div>
    </Suspense>
  );
};

export default PageTransition;
