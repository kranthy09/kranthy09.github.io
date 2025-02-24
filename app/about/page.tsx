'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';
import ScrollProgressIndicator from '@/app/components/ScrollProgress';

export default function AboutPage() {
    // Company stats
    const companyStats = [
        { label: "Founded", value: "2020" },
        { label: "Team Members", value: "48" },
        { label: "Countries", value: "12" },
        { label: "Brands & Influencers", value: "10K+" }
    ];

    // Core values
    const coreValues = [
        {
            title: "Authenticity",
            description: "We believe in fostering genuine connections between brands and influencers that resonate with audiences.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        },
        {
            title: "Transparency",
            description: "Clear communication, honest metrics, and fair business practices are at the heart of everything we do.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Innovation",
            description: "We continuously evolve our platform with cutting-edge technology to meet the changing needs of the industry.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    // Leadership team
    const leadershipTeam = [
        {
            name: "Sarah Johnson",
            title: "Founder & CEO",
            bio: "Former marketing executive with 15+ years of experience in digital strategy and brand partnerships.",
            image: "/file.svg"
        },
        {
            name: "Michael Chen",
            title: "CTO",
            bio: "Tech visionary with background in AI and data science, previously led engineering teams at top tech companies.",
            image: "/file.svg"
        },
        {
            name: "Aisha Patel",
            title: "COO",
            bio: "Operations expert with extensive experience scaling startups and optimizing business processes.",
            image: "/file.svg"
        }
    ];

    return (
        <>
            <ScrollProgressIndicator />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="glowing-dots"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                        <p className="text-xl text-blue-100 mb-8">
                            We're on a mission to transform influencer marketing through technology, transparency, and authentic connections.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" options={{ delay: 200 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-12">
                        {companyStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-blue-200">{stat.label}</div>
                            </div>
                        ))}
                    </AnimatedSection>
                </div>

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

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="slide-right" className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/about/mission.jpg"
                                alt="Our mission"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent"></div>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-left">
                            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
                            <p className="text-gray-700 mb-4">
                                Founded in 2020, our platform was created to bridge the gap between brands and influencers. We recognized the challenges both sides faced in establishing authentic partnerships that deliver real results.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our mission is to create a transparent, efficient, and results-driven marketplace where brands can connect with the right influencers to tell their story authentically.
                            </p>
                            <p className="text-gray-700">
                                We envision a future where influencer marketing is accessible to businesses of all sizes, with clear metrics and genuine relationships at its core.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            These principles guide our decisions, shape our culture, and define how we interact with our community.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <AnimatedSection
                                key={index}
                                animation="slide-up"
                                options={{ delay: index * 100 }}
                                className="bg-white p-8 rounded-xl shadow-md"
                            >
                                <div className="mb-5">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Meet the experienced professionals guiding our company's vision and growth.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadershipTeam.map((member, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fade"
                                options={{ delay: index * 100 }}
                                className="text-center"
                            >
                                <div className="relative h-64 w-64 rounded-full overflow-hidden mx-auto mb-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-blue-600 mb-3">{member.title}</p>
                                <p className="text-gray-600">{member.bio}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade" className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                        <p className="text-xl mb-8">
                            Whether you're a brand looking to grow or an influencer ready to build your career, we'd love to have you as part of our story.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/signup"
                                className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Join Today
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}