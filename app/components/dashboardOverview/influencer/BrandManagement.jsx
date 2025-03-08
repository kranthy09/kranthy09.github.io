"use client";

import { useState } from "react";
import { Calendar, Sparkles, PieChart, BriefcaseBusiness } from "lucide-react";

export default function InfluencerFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "AI-Powered Brand Matching",
      description:
        "Our proprietary algorithm analyzes your content style, audience demographics, and engagement patterns to recommend brands that align with your authentic voice. Stop wasting time on mismatched partnership inquiries.",
      icon: <Sparkles className="h-10 w-10 text-indigo-500" />,
      stats: "85% higher collaboration success rate",
    },
    {
      id: 2,
      title: "Unified Campaign Hub",
      description:
        "Manage all brand relationships through a single dashboard with customizable workspaces. Track deliverables, deadlines, and payment milestones across multiple campaigns without switching between platforms or emails.",
      icon: <BriefcaseBusiness className="h-10 w-10 text-indigo-500" />,
      stats: "Save 12+ hours weekly on administrative tasks",
    },
    {
      id: 3,
      title: "Performance Analytics Suite",
      description:
        "Generate comprehensive cross-platform performance reports that go beyond basic metrics. Compare campaign results against industry benchmarks and identify your highest-performing content types to strengthen future brand pitches.",
      icon: <PieChart className="h-10 w-10 text-indigo-500" />,
      stats: "Increase repeat collaborations by 64%",
    },
    {
      id: 4,
      title: "Smart Content Calendar",
      description:
        "Schedule and visualize your branded content alongside organic posts with our intelligent content calendar. Our AI suggests optimal posting times based on your audience activity and helps maintain the perfect balance of sponsored versus non-sponsored content.",
      icon: <Calendar className="h-10 w-10 text-indigo-500" />,
      stats: "Maintain 30% higher engagement on sponsored content",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Built for Influencers
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features that elevate your brand collaborations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            InfluenceAI streamlines your workflow so you can focus on creating
            content that resonates.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Feature Navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-start gap-4 ${
                    index === activeFeature
                      ? "bg-indigo-50 border-l-4 border-indigo-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`mt-1 ${
                      index === activeFeature
                        ? "text-indigo-500"
                        : "text-gray-400"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className={`font-medium ${
                        index === activeFeature
                          ? "text-indigo-700"
                          : "text-gray-900"
                      }`}
                    >
                      {feature.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Detail */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-xl bg-gray-50 shadow">
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {features[activeFeature].title}
                  </h3>
                  {features[activeFeature].icon}
                </div>
                <p className="mt-6 text-base leading-7 text-gray-700">
                  {features[activeFeature].description}
                </p>
                <div className="mt-8 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                  {features[activeFeature].stats}
                </div>
              </div>
              <div className="bg-indigo-700 h-64 flex items-center justify-center">
                <p className="text-white text-center px-4">
                  [Interactive feature demonstration would appear here]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
