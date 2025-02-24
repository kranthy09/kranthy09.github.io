'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import AnimatedSection from '@/app/components/AnimatedSection';

const HeroSection = () => {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current || !contentRef.current) return;

      // Parallax effect for background
      const scrollPosition = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;

      // Content moves slower than background
      contentRef.current.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgRef} className="glowing-dots"></div>
      </div>

      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div ref={contentRef} className="container relative z-10 mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center pt-32 pb-20">
          <AnimatedSection animation="fade" options={{ delay: 300 }}>
            <span className="inline-block py-1 px-3 bg-blue-500 bg-opacity-30 rounded-full text-white text-sm font-medium mb-4">
              Launch Your Campaign Today
            </span>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" options={{ delay: 400 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Connect with Top Influencers for Your Brand
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" options={{ delay: 600 }}>
            <p className="text-xl md:text-2xl mb-12 text-blue-100">
              Leverage the power of authentic partnerships to amplify your brand's message
              through our network of trusted influencers.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" options={{ delay: 800 }}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Get Started
              </Link>
              <Link href="/casestudies" className="px-8 py-4 rounded-lg bg-white text-blue-700 font-medium hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                See Case Studies
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade" options={{ delay: 1000 }}>
            <div className="mt-16 float-animation">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </AnimatedSection>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;