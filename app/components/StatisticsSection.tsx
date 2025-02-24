'use client';

import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';


const StatisticsSection = () => {
    const stats = [
        {
            value: 10000,
            suffix: '+',
            label: 'Influencers',
            description: 'Active on our platform',
        },
        {
            value: 500,
            suffix: '+',
            label: 'Brands',
            description: 'Working with our influencers',
        },
        {
            value: 1.5,
            suffix: 'M',
            label: 'Engagements',
            description: 'Generated monthly',
            decimals: 1,
        },
        {
            value: 98,
            suffix: '%',
            label: 'Satisfaction Rate',
            description: 'From our customers',
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <AnimatedSection animation="fade" as="div" className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Platform in Numbers</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Connecting brands and influencers at scale to create authentic partnerships
                        that drive results.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <AnimatedSection
                            key={index}
                            animation="slide-up"
                            options={{ delay: index * 150 }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                <AnimatedCounter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    decimals={stat.decimals || 0}
                                    className="text-blue-600"
                                />
                            </h3>
                            <p className="text-xl font-semibold mb-1">{stat.label}</p>
                            <p className="text-gray-600">{stat.description}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;