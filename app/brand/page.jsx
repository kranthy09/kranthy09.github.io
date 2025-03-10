"use client";

import { Suspense, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/app/components/AnimatedSection";
import ParallaxSection from "@/app/components/ParallaxSection";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import ScrollProgressIndicator from "@/app/components/ScrollProgress";

export default function BrandPage() {
  const featuresRef = useRef(null);

  // Function to scroll to features section
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Brand features data
  const brandFeatures = [
    {
      title: "Advanced Influencer Discovery",
      description:
        "Find the perfect influencers for your brand through our AI-powered matching system that analyzes audience demographics, engagement metrics, and content quality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "Campaign Management Hub",
      description:
        "Plan, execute, and monitor multiple campaigns simultaneously through our intuitive dashboard. Set goals, track deliverables, and manage content approvals in one place.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Performance Analytics",
      description:
        "Measure campaign success with comprehensive reporting tools that track impressions, engagement, conversions, and ROI. Gain actionable insights to optimize future campaigns.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Contract & Payment Management",
      description:
        "Streamline agreements with automated contract generation and secure payment processing. Manage terms, deliverables, and milestone-based payments all within the platform.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Audience Analysis",
      description:
        "Gain deep insights into influencer audiences through demographic analysis, interest mapping, and engagement patterns to ensure your brand reaches the right consumers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Content Approval Workflow",
      description:
        "Review and approve influencer content before publication with our collaborative workflow tools featuring commenting, revision tracking, and approval automation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
  ];

  // Brand benefits data
  const brandBenefits = [
    {
      title: "Increase Brand Awareness",
      description:
        "Expand your reach and increase visibility through authentic partnerships with influencers who resonate with your target audience.",
      image: "/icons/brand-awareness-icon.svg",
    },
    {
      title: "Drive Conversions & Sales",
      description:
        "Generate measurable results with conversion-focused campaigns that turn influencer audiences into loyal customers.",
      image: "/icons/conversions-sales-icon.svg",
    },
    {
      title: "Build Brand Trust & Credibility",
      description:
        "Leverage the trust influencers have established with their audiences to build credibility for your brand and products.",
      image: "/icons/brand-trust-static-icon.svg",
    },
  ];

  // Platform metrics data
  const platformMetrics = [
    { label: "Brands", value: 500, suffix: "+" },
    { label: "Influencers", value: 10000, suffix: "+" },
    { label: "Campaigns", value: 1500, suffix: "+" },
    { label: "Content Pieces", value: 50000, suffix: "+" },
  ];

  return (
    <>
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section
        className="relative min-h-screen overflow-hidden"
        ref={featuresRef}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/header/influencer-header.png"
            alt="Brand Marketing Dashboard"
            fill
            className="object-contain md:object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-32 pb-20">
          <AnimatedSection animation="fade" className="mb-6">
            <span className="inline-block py-1 px-3 bg-blue-500 bg-opacity-30 rounded-full text-white text-sm font-medium mb-4">
              For Brands
            </span>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Amplify Your Brand Through Authentic Influencer Partnerships
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with the perfect influencers for your brand, manage
              campaigns efficiently, and measure real results with our
              comprehensive platform.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade" options={{ delay: 400 }}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToFeatures}
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Explore Features
              </button>
              <Link
                href="/signup"
                className="px-8 py-4 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="fade"
            options={{ delay: 600 }}
            className="mt-16"
          >
            <div className="flex justify-center">
              <div className="flex space-x-8 items-center md:h-20"></div>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Platform Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            animation="fade"
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-gray-600">
              Our platform connects brands with influencers who authentically
              align with their values and goals, driving measurable results
              across all channels.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformMetrics.map((metric, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                options={{ delay: index * 100 }}
                className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade" className="text-center mb-16">
            <span className="text-blue-600 font-medium">Platform Features</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              Everything You Need for Successful Influencer Campaigns
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides brands with all the tools
              needed to discover perfect influencer matches, manage campaigns
              effectively, and measure real business impact.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandFeatures.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                options={{ delay: index * 100 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <ParallaxSection
        backgroundImage="vercel.svg"
        speed={0.1}
        className="py-24"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection animation="fade">
                  <h2 className="text-3xl font-bold mb-6">
                    Powerful Analytics Dashboard
                  </h2>
                </AnimatedSection>

                <AnimatedSection
                  animation="slide-right"
                  options={{ delay: 200 }}
                >
                  <p className="text-gray-700 mb-6">
                    Our intuitive dashboard gives you a comprehensive view of
                    all your influencer marketing campaigns. Track performance
                    metrics, monitor content approvals, and measure ROI—all in
                    one place.
                  </p>
                </AnimatedSection>

                <AnimatedSection
                  animation="slide-right"
                  options={{ delay: 300 }}
                >
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Real-time campaign performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Custom reporting and data visualization</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Content approval workflows and status tracking
                      </span>
                    </li>
                  </ul>
                </AnimatedSection>

                <AnimatedSection animation="fade" options={{ delay: 400 }}>
                  <Link
                    href="/demo"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Request a Demo
                  </Link>
                </AnimatedSection>
              </div>

              <AnimatedSection
                animation="zoom"
                options={{ delay: 300 }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/icons/brand-dashboard-icon.svg"
                    alt="Brand Analytics Dashboard"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade" className="text-center mb-16">
            <span className="text-blue-600 font-medium">Why Choose Us</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              Key Benefits for Brands
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to help brands maximize the impact of
              their influencer marketing efforts through strategic partnerships
              and data-driven decision making.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {brandBenefits.map((benefit, index) => (
              <AnimatedSection
                key={index}
                animation="fade"
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <AnimatedSection
                    animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                    className="relative h-96 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="w-fit h-fit object-contain"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent"></div> */}
                  </AnimatedSection>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <AnimatedSection
                    animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                  >
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 mb-6">{benefit.description}</p>
                    <ul className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>
                            Benefit point {i} for {benefit.title.toLowerCase()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade" className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-white/20 rounded-full text-blue-100 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold mb-4">
              What Brands Say About Us
            </h2>
          </AnimatedSection>

          <AnimatedSection
            animation="zoom"
            options={{ delay: 200 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30">
                    <Image
                      src="/globe.svg"
                      alt="Marketing Director"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <svg
                    className="h-10 w-10 text-blue-300 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8v12H0V8h10zm2 0h10v12H12V8z"></path>
                  </svg>
                  <p className="text-xl md:text-2xl mb-6 leading-relaxed">
                    This platform has transformed our influencer marketing
                    strategy. We've seen a 45% increase in engagement and a
                    significant boost in conversions. The analytics tools make
                    it easy to demonstrate ROI to our leadership team.
                  </p>
                  <div>
                    <div className="font-semibold text-lg">Sarah Johnson</div>
                    <div className="text-blue-200">
                      Marketing Director, TechBrand
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
