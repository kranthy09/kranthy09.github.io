'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';
import ParallaxSection from '@/app/components/ParallaxSection';
import AnimatedCounter from '@/app/components/AnimatedCounter';
import ScrollProgressIndicator from '@/app/components/ScrollProgress';

export default function InfluencerPage() {
    const featuresRef = useRef(null);

    // Function to scroll to features section
    const scrollToFeatures = () => {
        if (featuresRef.current) {
            featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Influencer features data
    const influencerFeatures = [
        {
            title: "Profile Enhancement",
            description: "Showcase your content, audience demographics, and engagement rates with a professional profile that helps attract brand partnerships.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Brand Matching",
            description: "Our AI-powered algorithm connects you with brands that align with your content style, values, and audience demographics.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            )
        },
        {
            title: "Campaign Management",
            description: "Track all your brand partnerships in one dashboard, with integrated content calendars, approval workflows, and deadline reminders.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        },
        {
            title: "Analytics Dashboard",
            description: "Gain insights into your performance with comprehensive analytics on engagement, audience growth, and campaign effectiveness.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Secure Contracts",
            description: "Protect your interests with standardized contracts that clearly outline deliverables, payment terms, and usage rights.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "Reliable Payments",
            description: "Get paid on time with our secure payment processing system that handles invoicing, tax documentation, and international transfers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    // Influencer benefits data
    const influencerBenefits = [
        {
            title: "Grow Your Network",
            description: "Connect with leading brands in your niche and build long-term partnerships that help expand your influence and reach.",
            image: "/globe.svg",
        },
        {
            title: "Monetize Your Content",
            description: "Turn your passion into profit with fair compensation for your creative work and audience engagement.",
            image: "/file.svg",
        },
        {
            title: "Save Time & Effort",
            description: "Focus on creating great content while we handle the paperwork, negotiations, and administrative tasks.",
            image: "/vercel.svg",
        }
    ];

    // Platform metrics data
    const platformMetrics = [
        { label: "Average Partnership Value", value: 2500, prefix: "$" },
        { label: "Brands Seeking Influencers", value: 500, suffix: "+" },
        { label: "Average Response Time", value: 24, suffix: "hrs" },
        { label: "Payment Protection", value: 100, suffix: "%" }
    ];

    // Influencer tiers data
    const influencerTiers = [
        {
            title: "Micro",
            followers: "1K-10K",
            description: "Perfect for focused niche audiences with high engagement rates",
            benefits: [
                "Brand discovery tools",
                "Basic analytics",
                "Standard contracts",
                "Direct messaging"
            ],
            fee: "No monthly fee",
            commission: "12% platform fee",
            color: "from-purple-400 to-indigo-400"
        },
        {
            title: "Rising Star",
            followers: "10K-100K",
            description: "For growing influencers with established credibility",
            benefits: [
                "Priority brand matching",
                "Advanced analytics",
                "Custom contract templates",
                "Campaign management tools",
                "Promotional opportunities"
            ],
            fee: "No monthly fee",
            commission: "10% platform fee",
            color: "from-indigo-500 to-purple-500",
            featured: true
        },
        {
            title: "Creator Pro",
            followers: "100K+",
            description: "For established influencers seeking premium partnerships",
            benefits: [
                "VIP brand introductions",
                "Comprehensive analytics suite",
                "Priority support",
                "Negotiation assistance",
                "Exclusive brand opportunities",
                "Cross-platform campaign tools"
            ],
            fee: "No monthly fee",
            commission: "8% platform fee",
            color: "from-purple-600 to-indigo-600"
        }
    ];

    return (
        <>
            <ScrollProgressIndicator />

            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/file.svg"
                        alt="Influencer creating content"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/80"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-32 pb-20">
                    <AnimatedSection animation="fade" className="mb-6">
                        <span className="inline-block py-1 px-3 bg-indigo-500 bg-opacity-30 rounded-full text-white text-sm font-medium mb-4">
                            For Influencers
                        </span>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Turn Your Influence Into Impact and Income
                        </h1>
                        <p className="text-xl text-indigo-100 mb-8">
                            Connect with brands that align with your values, manage your partnerships efficiently, and grow your career as a content creator.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade" options={{ delay: 400 }}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToFeatures}
                                className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                            >
                                Explore Features
                            </button>
                            <Link
                                href="/signup"
                                className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                            >
                                Join as Influencer
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade" options={{ delay: 600 }} className="mt-16">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-lg mx-auto">
                            <div className="text-center text-white mb-3">
                                <span className="text-indigo-200 text-sm">Join</span>
                                <div className="text-3xl font-bold">
                                    <AnimatedCounter end={25000} suffix="+" />
                                </div>
                                <span>Influencers already on our platform</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,138.7C840,139,960,181,1080,176C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Platform Metrics Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Creators Choose Our Platform</h2>
                        <p className="text-gray-600">
                            We empower influencers to build sustainable careers through meaningful brand partnerships and powerful management tools.
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
                                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                                    <AnimatedCounter prefix={metric.prefix} end={metric.value} suffix={metric.suffix} />
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
                        <span className="text-indigo-600 font-medium">Platform Features</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">Tools Built for Creator Success</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our platform provides influencers with everything needed to manage partnerships professionally, showcase their value, and maximize earnings.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {influencerFeatures.map((feature, index) => (
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
                backgroundImage="/globe.svg"
                speed={0.1}
                className="py-24"
            >
                <div className="container mx-auto px-4 relative z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection animation="zoom" options={{ delay: 300 }} className="relative">
                                <div className="rounded-xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/file.svg"
                                        alt="Influencer Analytics Dashboard"
                                        width={800}
                                        height={500}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">
                                    <div className="text-2xl font-bold">+38%</div>
                                    <div className="text-sm">Avg. Income Growth</div>
                                </div>
                            </AnimatedSection>

                            <div>
                                <AnimatedSection animation="fade">
                                    <h2 className="text-3xl font-bold mb-6">Your Campaign Command Center</h2>
                                </AnimatedSection>

                                <AnimatedSection animation="slide-left" options={{ delay: 200 }}>
                                    <p className="text-gray-700 mb-6">
                                        Track all your brand partnerships, content deliverables, and performance metrics in one intuitive dashboard designed specifically for content creators.
                                    </p>
                                </AnimatedSection>

                                <AnimatedSection animation="slide-left" options={{ delay: 300 }}>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Audience demographic insights</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Engagement rate tracking across platforms</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Content calendar with deadline reminders</span>
                                        </li>
                                    </ul>
                                </AnimatedSection>

                                <AnimatedSection animation="fade" options={{ delay: 400 }}>
                                    <Link
                                        href="/demo-influencer"
                                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                                    >
                                        See Live Demo
                                    </Link>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Key Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-16">
                        <span className="text-indigo-600 font-medium">Why Join Us</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">Benefits for Creators</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our platform is designed to help influencers build sustainable careers and meaningful brand relationships while maintaining creative authenticity.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-16">
                        {influencerBenefits.map((benefit, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fade"
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                            >
                                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                    <AnimatedSection animation={index % 2 === 0 ? "slide-right" : "slide-left"} className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                                        <Image
                                            src={benefit.image}
                                            alt={benefit.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/40 to-transparent"></div>
                                    </AnimatedSection>
                                </div>

                                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                                    <AnimatedSection animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
                                        <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                                        <p className="text-gray-600 mb-6">{benefit.description}</p>
                                        <ul className="space-y-3">
                                            {[1, 2, 3].map((i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>Benefit point {i} for {benefit.title.toLowerCase()}</span>
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
            <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-12">
                        <span className="inline-block py-1 px-3 bg-white/20 rounded-full text-indigo-100 text-sm font-medium mb-4">
                            Success Stories
                        </span>
                        <h2 className="text-3xl font-bold mb-4">Hear From Our Creators</h2>
                    </AnimatedSection>

                    <AnimatedSection animation="zoom" options={{ delay: 200 }} className="max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30">
                                        <Image
                                            src="/file.svg"
                                            alt="Lifestyle Influencer"
                                            width={128}
                                            height={128}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <svg className="h-10 w-10 text-indigo-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M10 8v12H0V8h10zm2 0h10v12H12V8z"></path>
                                    </svg>
                                    <p className="text-xl md:text-2xl mb-6 leading-relaxed">
                                        This platform transformed my influencer career. I went from struggling to find consistent brand deals to having a steady pipeline of partnerships with brands I genuinely love. The analytics tools also helped me understand my audience better and increase my engagement rates.
                                    </p>
                                    <div>
                                        <div className="font-semibold text-lg">Emma Rodriguez</div>
                                        <div className="text-indigo-200">Lifestyle Influencer, 235K followers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Pricing/Tiers Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-16">
                        <span className="text-indigo-600 font-medium">Influencer Tiers</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">Find Your Perfect Fit</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We offer specialized features and commission rates based on your audience size and career stage. There are no monthly fees—we only earn when you do.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {influencerTiers.map((tier, index) => (
                            <AnimatedSection
                                key={index}
                                animation="slide-up"
                                options={{ delay: index * 100 }}
                                className={`rounded-xl overflow-hidden ${tier.featured ? 'transform scale-105 shadow-xl border-2 border-indigo-500 relative' : 'shadow-lg'
                                    }`}
                            >
                                {tier.featured && (
                                    <div className="absolute top-0 right-0 bg-indigo-500 text-white py-1 px-4 text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <div className={`p-1 bg-gradient-to-r ${tier.color}`}>
                                    <div className="bg-white p-7 rounded-t-lg">
                                        <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
                                        <p className="text-gray-500 mb-3">{tier.followers} followers</p>
                                        <p className="text-gray-600 mb-6 h-12">{tier.description}</p>

                                        <hr className="my-6" />

                                        <ul className="space-y-3 mb-8 min-h-[180px]">
                                            {tier.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mb-2 text-center font-medium text-gray-700">{tier.fee}</div>
                                        <div className="mb-6 text-center text-indigo-600 font-bold">{tier.commission}</div>

                                        <Link
                                            href={`/signup?tier=${tier.title.toLowerCase()}`}
                                            className={`block w-full py-3 px-4 text-center font-medium rounded-lg transition-colors ${tier.featured
                                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                                }`}
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection animation="fade" options={{ delay: 400 }} className="text-center mt-12">
                        <p className="text-gray-600 mb-6">
                            Not sure which tier is right for you? Our team can help determine the best fit for your specific audience and goals.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-6 py-3 bg-white border border-gray-300 text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Talk to an Advisor
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-16">
                        <span className="text-indigo-600 font-medium">Get Started</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">How It Works for Influencers</h2>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}