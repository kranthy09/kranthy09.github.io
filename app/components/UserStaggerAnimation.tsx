'use client';

import { useEffect, useRef } from 'react';

export default function useStaggerAnimation() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Get all stagger items
        const staggerItems = containerRef.current.querySelectorAll('.stagger-item');

        // Set initial delay for staggered animation
        let delay = 100;

        // Create observer for intersection detection
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add visible class with a delay
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, delay);

                        // Increment delay for next element
                        delay += 100;

                        // Unobserve after animation
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        // Observe each item
        staggerItems.forEach((item) => {
            observer.observe(item);
        });

        return () => {
            if (staggerItems) {
                staggerItems.forEach((item) => {
                    observer.unobserve(item);
                });
            }
        };
    }, []);

    return containerRef;
}