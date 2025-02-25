'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const NavigationProgressBar = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isNavigating, setIsNavigating] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Reset and start animation when route changes
        setIsNavigating(true);
        setProgress(0);

        let animationInterval;
        let completionTimeout;

        if (isNavigating) {
            // Animate to 80% quickly
            animationInterval = setInterval(() => {
                setProgress(prev => {
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

                // Hide the bar after completion
                setTimeout(() => {
                    setIsNavigating(false);
                    setProgress(0);
                }, 500);
            }, 600);
        }

        return () => {
            clearInterval(animationInterval);
            clearTimeout(completionTimeout);
        };
    }, [pathname, searchParams.toString()]);

    if (!isNavigating && progress === 0) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-50">
            <div
                className="h-full bg-blue-600 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default NavigationProgressBar;