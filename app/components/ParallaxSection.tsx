'use client';

import { useEffect, useRef } from 'react';

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

    useEffect(() => {
        if (!sectionRef.current || !bgRef.current) return;

        const handleScroll = () => {
            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Calculate the position in viewport (-1 to 1 range)
            const positionInViewport = sectionTop / windowHeight;

            // Apply parallax effect
            const yOffset = positionInViewport * speed * 100;
            bgRef.current.style.transform = `translateY(${yOffset}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        // Call once to initialize position
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed]);

    return (
        <section
            ref={sectionRef}
            className={`parallax-section ${className}`}
            style={{ minHeight }}
        >
            <div
                ref={bgRef}
                className="parallax-bg"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition,
                }}
            />
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </section>
    );
};

export default ParallaxSection;