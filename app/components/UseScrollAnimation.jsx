'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A custom hook that provides scroll-based animations for components
 * @param {string} animation - The animation type (fade, slide-up, slide-in-right, etc.)
 * @param {object} options - Configuration options
 * @returns {object} - Ref object to attach to the element
 */
export default function useScrollAnimation(animation = 'fade', options = {}) {
    const {
        threshold = 0.1,
        root = null,
        rootMargin = '0px',
        triggerOnce = true,
        delay = 0,
    } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;

        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add delay if specified
                    if (delay > 0) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    } else {
                        setIsVisible(true);
                    }

                    // Unobserve after animation if triggerOnce is true
                    if (triggerOnce) {
                        observer.unobserve(currentRef);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                root,
                rootMargin,
                threshold,
            }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, root, rootMargin, triggerOnce, delay]);

    const getAnimationClass = () => {
        if (!isVisible) return 'scroll-hidden';

        switch (animation) {
            case 'fade':
                return 'scroll-fade';
            case 'slide-up':
                return 'scroll-slide-up';
            case 'slide-down':
                return 'scroll-slide-down';
            case 'slide-left':
                return 'scroll-slide-left';
            case 'slide-right':
                return 'scroll-slide-right';
            case 'zoom':
                return 'scroll-zoom';
            case 'flip':
                return 'scroll-flip';
            default:
                return 'scroll-fade';
        }
    };

    return { ref, isVisible, animationClass: getAnimationClass() };
}