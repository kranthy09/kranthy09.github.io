'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';
import ScrollProgressIndicator from '@/app/components/ScrollProgress';
import ParallaxSection from '../components/ParallaxSection';

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState('brands');
    const featuresRef = useRef(null);

    const scrollToFeatures = () => {
        if (featuresRef.current) {
            featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Common features data
    const commonFeatures = [
        {
            title: "AI-Powered Matching",
            description: "Our proprietary algorithm analyzes audience demographics, content quality, engagement metrics, and brand values to create perfect partnerships.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            image: "/file.svg",
            color: "from-purple-500 to-blue-500"
        },
        {
            title: "Smart Contract Management",
            description: "Create, negotiate, and sign contracts digitally with standardized templates, automated milestone tracking, and revision history.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            image: "/file.svg",
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Secure Payment Processing",
            description: "Transparent invoicing, automated payments, secure escrow services, and tax documentation simplify financial transactions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            image: "/file.svg",
            color: "from-blue-500 to-indigo-500"
        }
    ];

    // Brand-specific features
    const brandFeatures = [
        {
            title: "Influencer Discovery Engine",
            description: "Find the perfect influencers with advanced filters for audience demographics, engagement rates, content categories, and performance metrics.",
            image: "/file.svg",
            stats: [
                { value: "10,000+", label: "Active Influencers" },
                { value: "30+", label: "Filtering Parameters" }
            ]
        },
        {
            title: "Campaign Management Hub",
            description: "Plan, execute, and monitor multiple campaigns simultaneously with content calendars, approval workflows, and real-time status tracking.",
            image: "/file.svg",
            stats: [
                { value: "45%", label: "Time Saved" },
                { value: "24/7", label: "Campaign Monitoring" }
            ]
        },
        {
            title: "Performance Analytics Dashboard",
            description: "Measure ROI with comprehensive performance tracking across impressions, engagement, conversions, and audience growth metrics.",
            image: "/file.svg",
            stats: [
                { value: "Real-time", label: "Data Processing" },
                { value: "12+", label: "Customizable Reports" }
            ]
        },
        {
            title: "Brand Protection Tools",
            description: "Ensure content aligns with your brand values through content verification, automated brand guideline checks, and sentiment analysis.",
            image: "/file.svg",
            stats: [
                { value: "98%", label: "Brand Safety Rate" },
                { value: "24hr", label: "Avg. Approval Time" }
            ]
        }
    ];

    // Influencer-specific features
    const influencerFeatures = [
        {
            title: "Portfolio Showcase",
            description: "Create a professional profile that highlights your content, audience demographics, engagement metrics, and past collaborations.",
            image: "/file.svg",
            stats: [
                { value: "80%", label: "Profile Completion Rate" },
                { value: "3x", label: "Brand Interest Boost" }
            ]
        },
        {
            title: "Opportunity Marketplace",
            description: "Browse and apply to brand campaigns that match your content niche, audience, and partnership preferences.",
            image: "/file.svg",
            stats: [
                { value: "Daily", label: "New Opportunities" },
                { value: "1-Click", label: "Application Process" }
            ]
        },
        {
            title: "Content Management System",
            description: "Schedule posts, track content approvals, and manage deliverables across multiple platforms and campaigns.",
            image: "/file.svg",
            stats: [
                { value: "35%", label: "Time Saved" },
                { value: "5+", label: "Platform Integrations" }
            ]
        },
        {
            title: "Growth Analytics",
            description: "Track audience growth, engagement trends, and campaign performance to optimize your content strategy.",
            image: "/file.svg",
            stats: [
                { value: "Custom", label: "Performance Reports" },
                { value: "12+ mo", label: "Historical Data" }
            ]
        }
    ];

    return (
        <>
            <ScrollProgressIndicator />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden flex items-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="glowing-dots"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 pt-20 pb-12">
                    <AnimatedSection animation="fade" className="text-center mb-12">
                        <span className="inline-block py-1 px-3 bg-white/20 rounded-full text-blue-100 text-sm font-medium mb-4">
                            Platform Features
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Powerful Tools for Modern<br />Influencer Marketing
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                            Our comprehensive suite of features empowers brands and influencers to create successful partnerships through technology and transparency.
                        </p>
                        <button
                            onClick={scrollToFeatures}
                            className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                        >
                            Explore Features
                        </button>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" options={{ delay: 300 }} className="relative mt-16">
                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/tool.png"
                                alt="Platform dashboard"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <div className="text-2xl md:text-3xl font-bold mb-2">All-in-One Platform</div>
                                <p className="text-blue-100 max-w-2xl">Discover, manage, measure, and grow—all in one seamless ecosystem.</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-5 right-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg shadow-xl transform rotate-3">
                            <div className="font-bold">62%</div>
                            <div className="text-xs">Higher ROI</div>
                        </div>
                    </AnimatedSection>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,234.7C672,245,768,203,864,170.7C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Shared Features Section */}
            <section ref={featuresRef} className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-16">
                        <span className="text-blue-600 font-medium">Core Platform Features</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Powerful Tools for Everyone</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our platform offers powerful features designed to streamline collaboration between brands and influencers, ensuring successful partnerships.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-16 md:space-y-24">
                        {commonFeatures.map((feature, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fade"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                        <div className="relative">
                                            <div className={`absolute -top-6 -left-6 md:-top-10 md:-left-10 bg-gradient-to-r ${feature.color} p-4 md:p-6 rounded-2xl shadow-lg z-10`}>
                                                {feature.icon}
                                            </div>
                                            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={index % 2 === 1 ? "md:order-1" : ""}>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                                        <p className="text-gray-600 text-lg mb-6">{feature.description}</p>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm">For Brands</span>
                                            <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm">For Influencers</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* User-Specific Features Section */}
            <ParallaxSection
                backgroundImage="vercel.svg"
                speed={0.1}
                className="py-24"
            >


            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-16">
                        <span className="text-blue-600 font-medium">Role-Specific Features</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Specialized Tools for Every Need</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our platform provides tailored features that address the specific needs of both brands and influencers.
                        </p>
                    </AnimatedSection>

                    <div className="flex justify-center mb-16">
                        <div className="inline-flex bg-white rounded-full p-1 shadow-md">
                            <button
                                className={`px-6 py-3 rounded-full transition-all ${activeTab === 'brands'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                onClick={() => setActiveTab('brands')}
                            >
                                For Brands
                            </button>
                            <button
                                className={`px-6 py-3 rounded-full transition-all ${activeTab === 'influencers'
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-700 hover:text-indigo-600'
                                    }`}
                                onClick={() => setActiveTab('influencers')}
                            >
                                For Influencers
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {(activeTab === 'brands' ? brandFeatures : influencerFeatures).map((feature, index) => (
                            <AnimatedSection
                                key={index}
                                animation="slide-up"
                                options={{ delay: index * 100 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                            >
                                <div className="relative h-48 md:h-64">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{feature.title}</h3>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow">
                                    <p className="text-gray-600 mb-6">{feature.description}</p>
                                    <div className="flex gap-6">
                                        {feature.stats.map((stat, i) => (
                                            <div key={i} className="text-center">
                                                <div className={`text-xl font-bold ${activeTab === 'brands' ? 'text-blue-600' : 'text-indigo-600'}`}>{stat.value}</div>
                                                <div className="text-sm text-gray-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection animation="fade" options={{ delay: 400 }} className="text-center mt-16">
                        <Link
                            href={activeTab === 'brands' ? "/brand" : "/influencer"}
                            className={`inline-block px-8 py-4 rounded-lg text-white font-medium transform hover:-translate-y-1 transition-all duration-300 ${activeTab === 'brands' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-indigo-600 hover:bg-indigo-700'
                                }`}
                        >
                            Learn More About {activeTab === 'brands' ? 'Brand' : 'Influencer'} Features
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
            </ParallaxSection>

            {/* Platform Comparison */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-16">
                        <span className="text-blue-600 font-medium">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The Complete Platform for Influencer Marketing</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            See how our comprehensive feature set compares to other solutions in the market.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" className="overflow-x-auto">
                        <table className="w-full min-w-[768px] border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-4 text-left border-b-2 border-gray-200">Features</th>
                                    <th className="p-4 text-center border-b-2 border-gray-200">
                                        <div className="font-bold text-xl text-blue-600">Our Platform</div>
                                    </th>
                                    <th className="p-4 text-center border-b-2 border-gray-200">
                                        <div className="font-medium">Basic Solutions</div>
                                    </th>
                                    <th className="p-4 text-center border-b-2 border-gray-200">
                                        <div className="font-medium">Enterprise Tools</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4 border-b border-gray-200 font-medium">AI-Powered Matching</td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-gray-200 font-medium">Contract Management</td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-gray-200 font-medium">Payment Processing</td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-gray-200 font-medium">Performance Analytics</td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-gray-200 font-medium">Content Approval Workflow</td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </td>
                                    <td className="p-4 border-b border-gray-200 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-gray-200 font-medium">Pricing</td>
                                    <td className="p-4 border-b border-gray-200 text-center font-medium text-blue-600">Flexible & Transparent</td>
                                    <td className="p-4 border-b border-gray-200 text-center">Affordable</td>
                                    <td className="p-4 border-b border-gray-200 text-center">Enterprise-level</td>
                                </tr>
                            </tbody>
                        </table>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="glowing-dots"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4">
                    <AnimatedSection animation="fade" className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Influencer Marketing?</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Join thousands of brands and influencers already using our platform to create successful partnerships.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/signup"
                                className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/demo"
                                className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}