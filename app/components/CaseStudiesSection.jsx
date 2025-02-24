'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';

const CaseStudiesSection = () => {
  // State for selected case study
  const [activeCase, setActiveCase] = useState(0);
  const categoryRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // Mock data for case studies
  const caseStudies = [
    {
      id: 1,
      category: 'E-commerce',
      title: 'How FashionBrand increased sales by 73% with micro-influencers',
      metrics: [
        { label: 'ROI', value: '387%' },
        { label: 'Engagement', value: '152K' },
        { label: 'Revenue Increase', value: '73%' }
      ],
      description: 'FashionBrand partnered with 25 micro-influencers to promote their summer collection, resulting in a 73% increase in sales compared to the previous quarter.',
      image: "/globe.svg",
      logo: '/casestudies/fashion-logo.svg',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      category: 'Technology',
      title: `TechGadget's successful product launch with influencer marketing`,
      metrics: [
        { label: 'Pre-orders', value: '12.5K' },
        { label: 'Media Coverage', value: '47' },
        { label: 'Social Mentions', value: '85K' }
      ],
      description: 'TechGadget leveraged our platform to find tech influencers for their new product launch, generating over 12,500 pre-orders and significant media attention.',
      image: "/file.svg",
      logo: '/casestudies/tech-logo.svg',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      category: 'Health & Wellness',
      title: `WellnessApp's campaign that drove 45K app downloads`,
      metrics: [
        { label: 'App Downloads', value: '45K' },
        { label: 'Retention Rate', value: '68%' },
        { label: 'Cost per Install', value: '$1.87' }
      ],
      description: 'WellnessApp worked with health and fitness influencers to promote their meditation app, achieving 45,000 downloads with a retention rate well above industry average.',
      image: "/vercel.svg",
      logo: '/casestudies/wellness-logo.svg',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Check if viewport is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle category selection
  const selectCategory = (index) => {
    setActiveCase(index);

    // Scroll into view on mobile
    if (isMobile && categoryRefs.current[index]) {
      categoryRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  // Add reference to category refs
  const addCategoryRef = (el, index) => {
    if (el && !categoryRefs.current.includes(el)) {
      categoryRefs.current[index] = el;
    }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade" className="text-center mb-16">
          <span className="text-blue-600 font-medium">Success Stories</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover how leading brands have achieved remarkable results through
            strategic influencer marketing campaigns on our platform.
          </p>
        </AnimatedSection>

        {/* Categories Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-2 md:space-x-4">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                ref={(el) => addCategoryRef(el, index)}
                className={`px-5 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeCase === index
                    ? `bg-gradient-to-r ${caseStudy.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => selectCategory(index)}
              >
                {caseStudy.category}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Content */}
        <div className="relative">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`transition-all duration-500 absolute inset-0 ${
                activeCase === index
                  ? 'opacity-100 z-10 translate-x-0'
                  : index < activeCase
                    ? 'opacity-0 -z-10 -translate-x-full'
                    : 'opacity-0 -z-10 translate-x-full'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-20`}></div>
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white rounded-lg p-3 shadow-lg">
                      <Image
                        src={caseStudy.logo}
                        alt={`${caseStudy.category} logo`}
                        width={80}
                        height={40}
                        className="h-8 w-auto"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12">
                    <AnimatedSection animation="fade" options={{ delay: 100 }}>
                      <h3 className="text-2xl font-bold mb-6">{caseStudy.title}</h3>
                    </AnimatedSection>

                    <AnimatedSection animation="fade" options={{ delay: 200 }}>
                      <p className="text-gray-600 mb-8">{caseStudy.description}</p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade" options={{ delay: 300 }}>
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {caseStudy.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className={`text-2xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" options={{ delay: 400 }}>
                      <Link
                        href={`/casestudies/${caseStudy.id}`}
                        className={`inline-block px-6 py-3 rounded-lg text-white bg-gradient-to-r ${caseStudy.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                      >
                        Read Full Case Study
                      </Link>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for absolute positioning */}
          <div className="invisible">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto lg:aspect-square"></div>
                <div className="p-8 md:p-12 h-full">
                  <h3 className="text-2xl font-bold mb-6">Placeholder</h3>
                  <p className="text-gray-600 mb-8">Placeholder description text for height maintenance.</p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="h-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => selectCategory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCase === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View case study ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection animation="fade" className="text-center mt-12">
          <Link
            href="/casestudies"
            className="inline-block px-8 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
          >
            View All Case Studies
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudiesSection;