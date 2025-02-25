"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/app/components/AnimatedSection";
import ScrollProgressIndicator from "@/app/components/ScrollProgress";

export default function CaseStudiesPageComponent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const caseListRef = useRef(null);

  // Filter categories
  const categories = [
    "All",
    "E-commerce",
    "Technology",
    "Health & Wellness",
    "Finance",
    "Beauty",
    "Travel",
  ];

  // Mock data for case studies
  const allCaseStudies = [
    {
      id: 1,
      category: "E-commerce",
      title: "How FashionBrand increased sales by 73% with micro-influencers",
      summary:
        "FashionBrand partnered with 25 micro-influencers to promote their summer collection, resulting in a 73% increase in sales compared to the previous quarter.",
      metrics: { roi: "387%", engagement: "152K", revenue: "73%" },
      image: "/file.svg",
      logo: "/globe.svg",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      category: "Technology",
      title: `TechGadget's successful product launch with influencer marketing`,
      summary:
        "TechGadget leveraged our platform to find tech influencers for their new product launch, generating over 12,500 pre-orders and significant media attention.",
      metrics: { roi: "245%", preorders: "12.5K", mentions: "85K" },
      image: "/globe.svg",
      logo: "/vercel.svg",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      category: "Health & Wellness",
      title: `WellnessApp's campaign that drove 45K app downloads`,
      summary:
        "WellnessApp worked with health and fitness influencers to promote their meditation app, achieving 45,000 downloads with a retention rate well above industry average.",
      metrics: { downloads: "45K", retention: "68%", cpi: "$1.87" },
      image: "/globe.svg",
      logo: "/file.svg",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      category: "Finance",
      title: `FinanceApp's influencer strategy that increased user signups by 128%`,
      summary:
        "FinanceApp collaborated with financial education influencers to explain complex investment concepts, driving a significant increase in new account signups.",
      metrics: { growth: "128%", retention: "72%", conversion: "8.3%" },
      image: "/globe.svg",
      logo: "/vercel.svg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      category: "Beauty",
      title:
        "How BeautyCo launched a new product line with influencer partnerships",
      summary: `BeautyCo's influencer-led product launch generated 3.2M impressions and sold out their initial inventory within 48 hours of release.`,
      metrics: { impressions: "3.2M", sellout: "48hrs", mentions: "42K" },
      image: "/vercel.svg",
      logo: "/file.svg",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 6,
      category: "Travel",
      title: `TravelAgency's destination campaign that increased bookings by 65%`,
      summary:
        "TravelAgency partnered with travel influencers to showcase exotic destinations, resulting in a significant increase in bookings and engagement.",
      metrics: { bookings: "+65%", engagement: "320K", reach: "4.7M" },
      image: "/vercel.svg",
      logo: "/file.svg",
      color: "from-sky-500 to-blue-500",
    },
  ];

  // Filter case studies based on active filter
  const filteredCaseStudies =
    activeFilter === "All"
      ? allCaseStudies
      : allCaseStudies.filter((study) => study.category === activeFilter);

  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);

    // Smooth scroll back to top of case studies list
    if (caseListRef.current) {
      setTimeout(() => {
        caseListRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <>
      <ScrollProgressIndicator />

      {/* Hero section */}
      <section className="hero-section relative py-24 bg-gradient-to-r from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="glowing-dots"></div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection
            animation="fade"
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore real success stories from brands that have leveraged our
              platform to create impactful influencer marketing campaigns.
            </p>
          </AnimatedSection>
        </div>

        {/* Curved divider */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            style={{ display: "block" }}
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </section>

      {/* Filter section */}
      <section className="py-12 bg-white" ref={caseListRef}>
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade" className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Filter by Industry</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full transition-all duration-300 category-button ${
                    activeFilter === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Case studies grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
            {filteredCaseStudies.length > 0 ? (
              filteredCaseStudies.map((caseStudy, index) => (
                <AnimatedSection
                  key={caseStudy.id}
                  animation="zoom"
                  options={{ delay: index * 100 }}
                  className="case-study-card rounded-xl overflow-hidden bg-white shadow-lg"
                >
                  <Link
                    href={`/casestudies/${caseStudy.id}`}
                    className="block h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-90 z-10`}
                      ></div>
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover image-zoom"
                      />
                      <div className="absolute top-4 left-4 bg-white rounded-lg p-2 z-20 shimmer">
                        <Image
                          src={caseStudy.logo}
                          alt={`${caseStudy.category} logo`}
                          width={60}
                          height={30}
                          className="h-7 w-auto"
                        />
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 text-gray-800 text-xs font-medium py-1 px-2 rounded z-20">
                        {caseStudy.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {caseStudy.summary}
                      </p>

                      <div className="flex justify-between items-center">
                        <div
                          className={`text-sm font-semibold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}
                        >
                          View Case Study
                        </div>
                        <div className="text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-500">
                  No case studies found for this category
                </h3>
                <button
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setActiveFilter("All")}
                >
                  View All Case Studies
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection
            animation="fade"
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to create your success story?
            </h2>
            <p className="text-gray-600 mb-8">
              Join the growing list of brands leveraging our platform to create
              meaningful connections with influencers and drive business
              results.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Start Your Campaign
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
