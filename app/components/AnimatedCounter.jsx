'use client';

import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({
    end,
    start = 0,
    duration = 2000,
    prefix = '',
    suffix = '',
    className = '',
    decimals = 0,
}) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(null);
    const observerRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCounter();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observerRef.current.observe(countRef.current);
        }

        return () => {
            if (observerRef.current && countRef.current) {
                observerRef.current.unobserve(countRef.current);
            }
        };
    }, []);

    const animateCounter = () => {
        const step = (end - start) / (duration / 16);
        let current = start;
        const timer = setInterval(() => {
            current += step;
            if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(current);
            }
        }, 16);
    };

    const formattedCount = count.toFixed(decimals);

    return (
        <span ref={countRef} className={`count-animation ${className}`}>
            {prefix}
            {formattedCount}
            {suffix}
        </span>
    );
};

export default AnimatedCounter;