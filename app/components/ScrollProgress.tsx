'use client';

import { useState, useEffect } from 'react';

const ScrollProgressIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const currentProgress = window.scrollY;
            const progress = (currentProgress / totalHeight) * 100;

            setScrollProgress(progress);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial calculation
        handleScroll();

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgressIndicator;