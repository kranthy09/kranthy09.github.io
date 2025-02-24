'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';
import AnimatedCounter from '@/app/components/AnimatedCounter';
import ScrollProgressIndicator from '@/app/components/ScrollProgress';

// This would normally be fetched based on the route parameter
export default function CaseStudyDetail({ params }) {
  const contentRef = useRef(null);
  const scrollRef = useRef(0);

  // Mock data for a single case study
  const caseStudy = {
    id: 1,
    category: 'E-commerce',
    title: 'How FashionBrand increased sales by 73% with micro-influencers',
    clientName: 'FashionBrand',
    clientDescription: 'A direct-to-consumer fashion brand specializing in sustainable clothing for young adults.',
    challenge: 'FashionBrand was struggling to gain traction in a competitive market. Their traditional marketing approaches were not resonating with their target audience, and their customer acquisition costs were too high to be sustainable in the long run.',
    solution: `Our platform helped FashionBrand identify and collaborate with 25 micro-influencers whose audiences closely matched their ideal customer profile. We focused on authentic content creation that highlighted the brand's sustainability mission and unique designs.`,
    approach: [
      {
        title: 'Audience Analysis',
        description: `We used data analytics to identify the exact demographic and psychographic profiles of FashionBrand's ideal customers.`
      },
      {
        title: 'Influencer Matching',
        description: 'Our AI-powered algorithm identified micro-influencers with high engagement rates whose followers matched the target audience.'
      },
      {
        title: 'Content Strategy',
        description: `We developed a content calendar and creative brief that aligned with both the brand's message and each influencer's unique voice.`
      },
      {
        title: 'Performance Tracking',
        description: 'Custom UTM parameters and promo codes enabled precise attribution and ROI measurement for each influencer.'
      }
    ],
    results: {
      salesIncrease: 73,
      roi: 387,
      engagement: 152000,
      cac: 42,
      newFollowers: 28500
    },
    testimonial: {
      quote: "Working with this platform transformed our marketing strategy. The micro-influencer approach delivered authentic connections with our audience that traditional advertising simply couldn't match.",
      author: "Sarah Johnson",
      title: "Marketing Director, FashionBrand"
    },
    image: "/globe.svg",
    logo: '/casestudies/fashion-logo.svg',
    color: 'from-pink-500 to-rose-500',
    gallery: [
      '/casestudies/fashion-gallery-1.jpg',
      '/casestudies/fashion-gallery-2.jpg',
      '/casestudies/fashion-gallery-3.jpg'
    ]
  };

  // Parallax scrolling effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      // Only apply parallax in the hero section
      if (window.scrollY < window.innerHeight) {
        contentRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }

      // Track scroll direction for animations
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${caseStudy.color} opacity-70`}></div>
        </div>

        <div ref={contentRef} className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <AnimatedSection animation="fade" className="mb-6">
            <div className="inline-block bg-white rounded-lg p-4 shadow-lg mb-4">
              <Image
                src={caseStudy.logo}
                alt={caseStudy.clientName}
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <span className="inline-block py-1 px-3 bg-white text-gray-800 font-medium rounded-full text-sm mb-4">
              {caseStudy.category}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Learn how {caseStudy.clientName} partnered with our platform to identify the perfect micro-influencers for their brand, resulting in significant growth and ROI.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade" options={{ delay: 400 }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl">
              <div className="text-center text-white">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.salesIncrease} suffix="%" />
                </div>
                <div className="text-sm opacity-80">Sales Increase</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.roi} suffix="%" />
                </div>
                <div className="text-sm opacity-80">ROI</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.engagement / 1000} suffix="K" />
                </div>
                <div className="text-sm opacity-80">Engagements</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.cac} suffix="%" />
                </div>
                <div className="text-sm opacity-80">Lower CAC</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade" className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-0.5 w-12 bg-gray-300"></div>
                <h2 className="text-2xl font-bold">Overview</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Client</h3>
                  <p className="text-gray-600">{caseStudy.clientDescription}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                  <p className="text-gray-600">{caseStudy.challenge}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade" className="mb-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-700">{caseStudy.solution}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade" className="mb-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-0.5 w-12 bg-gray-300"></div>
                <h2 className="text-2xl font-bold">Our Approach</h2>
              </div>
              <p className="text-gray-600 mb-10">
                We implemented a comprehensive strategy to help {caseStudy.clientName} leverage micro-influencers effectively.
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {caseStudy.approach.map((step, index) => (
                <AnimatedSection
                  key={index}
                  animation="slide-right"
                  options={{ delay: index * 100 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r ${caseStudy.color} text-white font-bold mr-4`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={`py-16 bg-gradient-to-r ${caseStudy.color} text-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Results</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                The campaign delivered exceptional results across all key metrics, significantly outperforming the client's expectations.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
              <AnimatedSection animation="zoom" options={{ delay: 0 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.salesIncrease} suffix="%" />
                </div>
                <div className="text-sm opacity-80">Sales Increase</div>
              </AnimatedSection>

              <AnimatedSection animation="zoom" options={{ delay: 100 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.roi} suffix="%" />
                </div>
                <div className="text-sm opacity-80">ROI</div>
              </AnimatedSection>

              <AnimatedSection animation="zoom" options={{ delay: 200 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.engagement / 1000} suffix="K" />
                </div>
                <div className="text-sm opacity-80">Engagements</div>
              </AnimatedSection>

              <AnimatedSection animation="zoom" options={{ delay: 300 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.cac} suffix="%" />
                </div>
                <div className="text-sm opacity-80">Lower CAC</div>
              </AnimatedSection>

              <AnimatedSection animation="zoom" options={{ delay: 400 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={caseStudy.results.newFollowers / 1000} suffix="K" />
                </div>
                <div className="text-sm opacity-80">New Followers</div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade" options={{ delay: 300 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <svg className="h-12 w-12 text-white opacity-30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v12H0V8h10zm2 0h10v12H12V8z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xl italic mb-4">"{caseStudy.testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{caseStudy.testimonial.author}</div>
                    <div className="text-sm opacity-80">{caseStudy.testimonial.title}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade" className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Campaign Gallery</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A selection of content created during the {caseStudy.clientName} influencer campaign.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.gallery.map((image, index) => (
                <AnimatedSection
                  key={index}
                  animation="zoom"
                  options={{ delay: index * 150 }}
                  className="rounded-xl overflow-hidden shadow-lg aspect-square relative group"
                >
                  <Image
                    src={image}
                    alt={`${caseStudy.clientName} campaign image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm">Campaign content {index + 1}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade" className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to create your success story?</h2>
            <p className="text-gray-600 mb-8">
              Join the growing list of brands leveraging our platform to connect with the
              perfect influencers for your unique brand goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className={`px-8 py-4 rounded-lg bg-gradient-to-r ${caseStudy.color} text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
              >
                Start Your Campaign
              </Link>
              <Link
                href="/casestudies"
                className="px-8 py-4 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                View More Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}