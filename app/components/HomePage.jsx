"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";
import ParallaxSection from "./ParallaxSection";
import MobileLayout from "./dashboardOverview/MobileLayout";
import InfluenceSearchComponent from "./dashboardOverview/InfluencerSearch";
import BrandManagementMedia from "@/app/components/dashboardOverview/influencer/BrandManagementMedia";
import NetworkingComponent from "@/app/components/dashboardOverview/influencer/NetworkingComponent";
import EngagementComponent from "@/app/components/dashboardOverview/influencer/EngagementComponent";
import EnhancedImageCarousel from "@/app/components/EnhancedImageCarousel";

//  Brand Association Section
export const BrandAssociationSection = () => {
  const brands = [
    { name: "Microsoft", logo: "/Apple-Logo.png" },
    { name: "Amazon", logo: "./file.svg" },
    { name: "Google", logo: "./globe.svg" },
    { name: "Apple", logo: "./next.svg" },
    { name: "Samsung", logo: "./influenceai-logo.svg" },
    { name: "Nike", logo: "./window.svg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <AnimatedSection animation="fade" className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600">
            Top companies rely on our platform for their influencer marketing
            campaigns
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center items-center gap-16">
          {brands.map((brand, index) => (
            <AnimatedSection
              key={brand.name}
              animation="fade"
              options={{ delay: index * 100 }}
              className="grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

//  Influencer Features Section
export const InfluencerFeaturesSection = () => {
  const images = [
    {
      src: "/dashboard-1.png",
      alt: "influencer dashboard view",
      id: "infdsh1",
    },
    {
      src: "/dashboard-2.png",
      alt: "influencer dashboard view",
      id: "infdsh2",
    },
    {
      src: "/dashboard-3.png",
      alt: "influencer dashboard view",
      id: "infdsh3",
    },
  ];
  return (
    <ParallaxSection speed={-0.5} className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right" className="relative h-fit ">
            <MobileLayout />

            {/* <div className="absolute inset-0 bg-gradient-to-bl from-red-200/40 to-transparent"></div> */}
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fade">
              <span className="text-blue-600 font-medium">For Influencers</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                Grow your audience and secure brand deals
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              <AnimatedSection
                animation="slide-left"
                options={{ delay: 100 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Build Your Portfolio"
                  description="Showcase your content and audience metrics to attract top brands."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-left"
                options={{ delay: 200 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Secure Brand Partnerships"
                  description="Get matched with brands that align with your values and audience."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-left"
                options={{ delay: 300 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Track Performance Metrics"
                  description="Monitor campaign performance with detailed analytics and insights."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-left"
                options={{ delay: 400 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Simplify Contract Management"
                  description="Manage agreements, deliverables, and payments through one platform."
                />
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade" options={{ delay: 500 }}>
              <Link
                href="/influencer"
                className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-800 hover:underline"
              >
                Learn more about influencer features →
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

//  Brand Features Section
export const BrandFeaturesSection = () => {
  return (
    <ParallaxSection speed={0.2} className="py-20">
      <div className="container relative z-10 bg-white/90 rounded-2xl p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="md:order-1">
            <AnimatedSection animation="fade">
              <span className="text-blue-600 font-medium">For Brands</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                Find the perfect influencers for your campaigns
              </h2>
            </AnimatedSection>

            <div className="space-y-2 mb-0">
              <AnimatedSection
                animation="slide-right"
                options={{ delay: 100 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Advanced Influencer Discovery"
                  description="Filter influencers by audience demographics, engagement rates, and niche."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                options={{ delay: 200 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Campaign Management Tools"
                  description="Plan, execute, and track multiple campaigns from a single dashboard."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                options={{ delay: 300 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="ROI Analytics"
                  description="Measure campaign performance with comprehensive reporting tools."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                options={{ delay: 400 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Streamlined Communication"
                  description="Manage influencer relationships through our integrated messaging system."
                />
              </AnimatedSection>
              <AnimatedSection
                animation="fade"
                options={{ delay: 500 }}
                className="hidden md:block"
              >
                <Link
                  href="/brand"
                  className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-800 hover:underline"
                >
                  Learn more about brand features →
                </Link>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection
            animation="slide-left"
            className="md:order-1 rounded-lg mt-0"
          >
            <InfluenceSearchComponent />
            {/* <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/40 to-transparent"></div> */}
          </AnimatedSection>
          <AnimatedSection
            animation="fade"
            options={{ delay: 500 }}
            className="block md:hidden"
          >
            <Link
              href="/brand"
              className="mt-6 text-blue-600 font-medium hover:text-blue-800 hover:underline"
            >
              Learn more about brand features →
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </ParallaxSection>
  );
};

export const BrandManagementSection = () => {
  return (
    <ParallaxSection speed={0.2} className="py-20">
      <div className="container relative z-10 bg-white/90 rounded-2xl p-12 shadow-xl">
        <div className="grid realtgrid-cols-1 md:grid-cols-12 items-center">
          <AnimatedSection
            animation="slide-left"
            className="order-1 col-span-5 rounded-lg mt-0"
          >
            <BrandManagementMedia />
            {/* <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/40 to-transparent"></div> */}
          </AnimatedSection>
          <div className="order-2 realtive col-span-2">
            {/*floating cards*/}
          </div>
          <div className="order-3 col-span-5">
            <AnimatedSection animation="fade">
              <span className="text-blue-600 font-medium">For Influencers</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                Save time on Brand Management
              </h2>
            </AnimatedSection>

            <div className="space-y-2 mb-0">
              <AnimatedSection
                animation="slide-right"
                options={{ delay: 100 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Enhance the potential of brand collaboration"
                  description="Filter influencers by audience demographics, engagement rates, and niche."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                options={{ delay: 200 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Influence AI offeres smooth workflow with Brands"
                  description="Plan, execute, and track multiple campaigns from a single dashboard."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                options={{ delay: 300 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="More Collaboration with less time"
                  description="Measure campaign performance with comprehensive reporting tools."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="fade"
                options={{ delay: 500 }}
                className="block"
              >
                <Link
                  href="/influencer"
                  className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-800 hover:underline"
                >
                  Learn more about influencer features →
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

// Brand's influencer management section
export const WhyInfluenceAISection = () => {
  return (
    <ParallaxSection speed={0.2} className="py-20">
      <div className="container relative z-10 bg-white/90 rounded-2xl p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="order-1">
            <AnimatedSection animation="fade">
              <span className="text-blue-600 font-medium">
                {" "}
                Why Influence AI?
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                Influencers selection, Campaign Strategy, Tracking and results
              </h2>
            </AnimatedSection>

            <div className="space-y-2 mb-0">
              <AnimatedSection
                animation="slide-left"
                options={{ delay: 100 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Influencer Networking Platform"
                  description="Strategic approaches to maximize value from brand partnerships through aligned objectives."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-left"
                options={{ delay: 200 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Viral Distribution"
                  description="Plan, execute, and track multiple campaigns from a single dashboard."
                />
              </AnimatedSection>

              <AnimatedSection
                animation="slide-left"
                options={{ delay: 300 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Data Driven Decisions"
                  description="Measure campaign performance with comprehensive reporting tools."
                />
              </AnimatedSection>
              <AnimatedSection
                animation="slide-left"
                options={{ delay: 300 }}
                className="feature-point"
              >
                <FeaturePoint
                  title="Rich Analytics and Reporting"
                  description="Measure campaign performance with comprehensive reporting tools."
                />
              </AnimatedSection>
              <AnimatedSection
                animation="fade"
                options={{ delay: 500 }}
                className="hidden md:block"
              >
                <Link
                  href="/features"
                  className="mt-6 text-blue-600 font-medium hover:text-blue-800 hover:underline"
                >
                  Learn more →
                </Link>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection
            animation="slide-left"
            className="order-1 relative rounded-lg mt-0"
          >
            <NetworkingComponent />
            <div className="absolute bottom-0 right-0 md:right-20">
              <EngagementComponent />
            </div>
            {/* <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/40 to-transparent"></div> */}
          </AnimatedSection>
        </div>
        <AnimatedSection
          animation="fade"
          options={{ delay: 500 }}
          className="block md:hidden mt-10"
        >
          <Link
            href="/features"
            className="mt-6 text-blue-600 font-medium hover:text-blue-800 hover:underline"
          >
            Learn more →
          </Link>
        </AnimatedSection>
      </div>
    </ParallaxSection>
  );
};

//  Media Gallery Section
export const MediaGallerySection = () => {
  const carouselImages = [
    {
      src: "/events/virajita.jpg",
      alt: "Image 1",
      caption: "Influencer Virajita",
      link: "https://www.instagram.com/p/Cp5G_Y4p_bV/",
    },
    {
      src: "/events/priyanka-jain.jpg",
      alt: "Image 2",
      caption: "City skyline",
      link: "https://www.instagram.com/p/CnQ3gwIo5CD/",
    },
    {
      src: "/events/suma-garu.jpg",
      alt: "Image 3",
      link: "https://www.instagram.com/p/CnPLm8hhSOz/",
    },
    {
      src: "/events/bhavishya.jpg",
      alt: "Image 4",
      caption: "Mountain scenery",
      link: "https://www.instagram.com/p/CnQ1sYmISQ6/",
    },
    {
      src: "/events/hyderabadi-palate.jpg",
      alt: "Image 5",
      caption: "Sunset view",
      link: "https://www.instagram.com/p/CnRtT51qZeV/",
    },
    {
      src: "/events/srilalitha-ugadi.jpg",
      alt: "Image 8",
      caption: "Forest trail",
      link: "https://www.instagram.com/p/CpPEspKD3CX/",
    },
    {
      src: "/events/lasya-manjunath.jpg",
      alt: "Image 6",
      caption: "Beach sunset",
      link: "https://www.instagram.com/p/CxZtrm5RRTl/",
    },
    {
      src: "/events/madhupriya.jpg",
      alt: "Image 7",
      link: "https://www.instagram.com/p/Cr2nwUppOfh/",
    },
    {
      src: "/events/srilalitha-holi.jpg",
      alt: "Image 8",
      caption: "Forest trail",
      link: "https://www.instagram.com/p/CqWwhDvJnJ-/",
    },

    {
      src: "/events/the-hungry-indians-sankranthi.jpg",
      alt: "Image 10",
      caption: "Desert landscape",
      link: "https://www.instagram.com/p/CnRsE8ZKDSo/",
    },
    {
      src: "/events/bhavishya.jpg",
      alt: "Image 11",
      caption: "Influencer Bhavishya",
      link: "https://www.instagram.com/p/Cp4RBkmjng7/",
    },
    {
      src: "/events/srilalitha-sriramanavami.jpg",
      alt: "Image 9",
      link: "https://www.instagram.com/p/Cmp_bdiB7Zv/",
    },

    {
      src: "/events/thindam-tirugudam-sankranthi.jpg",
      alt: "Image 11",
      link: "https://www.instagram.com/p/CnPUdqkB4Un/",
    },
    {
      src: "/events/thindibotu.jpg",
      alt: "Image 12",
      caption: "Snowy mountains",
      link: "https://www.instagram.com/p/Cp0GN4rA0dT/",
    },
    {
      src: "/events/virajita-ugadi.jpg",
      alt: "Image 13",
      link: "https://www.instagram.com/p/Cp5G_Y4p_bV/",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container">
        <AnimatedSection animation="fade" className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Photos & Events</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our events, campaigns, and success stories from our vibrant
            community of brands and influencers.
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fade">
          <EnhancedImageCarousel
            images={carouselImages}
            autoSlideInterval={4000}
            showItemsCount={3}
            height={300}
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

//  About Section
export const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection
            animation="slide-right"
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/file.svg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fade">
              <span className="text-blue-600 font-medium">About Us</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                Our Journey and Mission
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" options={{ delay: 200 }}>
              <p className="text-gray-700 mb-4">
                Founded in 2020, Influence AI was created to bridge the gap
                between brands and influencers. We recognized the challenges
                both sides faced in establishing authentic partnerships that
                deliver real results.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" options={{ delay: 300 }}>
              <p className="text-gray-700 mb-4">
                Our mission is to create a transparent, efficient, and
                results-driven marketplace where brands can connect with the
                right influencers to tell their story authentically.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" options={{ delay: 400 }}>
              <p className="text-gray-700 mb-6">
                With a team of marketing experts, data scientists, and industry
                veterans, we're constantly innovating to make influencer
                marketing more effective and measurable.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade" options={{ delay: 500 }}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h4 className="text-2xl font-bold text-blue-600">
                    <AnimatedCounter end={3} suffix="+" className="" />
                  </h4>
                  <p className="text-gray-600">Years in business</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h4 className="text-2xl font-bold text-blue-600">
                    <AnimatedCounter end={28} className="" />
                  </h4>
                  <p className="text-gray-600">Team members</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="zoom" options={{ delay: 600 }}>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Learn More About Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

//  Contact Form Section
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
    // Show success message
    alert("Thanks for your message! We'll get back to you shortly.");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our platform? Ready to elevate your
              influencer marketing strategy? We're here to help.
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-up"
            className="bg-white rounded-xl shadow-xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Features
const FeaturePoint = ({ title, description }) => (
  <div>
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <div className="ml-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 text-[12px] text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);
