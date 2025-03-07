"use client";

import { Users, Briefcase, TrendingUp, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InfluencerSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            For Influencers
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Grow your audience and secure brand deals with our comprehensive
            platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <div className="rounded-xl shadow-2xl bg-white overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="h-8 bg-indigo-600 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="relative aspect-[16/9]">
              <Image
                src="/influencer-dashboard-preview.png"
                alt="Influencer Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Briefcase size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Build Your Portfolio
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Showcase your content and audience metrics to attract top
                  brands.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Secure Brand Partnerships
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Get matched with brands that align with your values and
                  audience.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Track Performance Metrics
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Monitor campaign performance with detailed analytics and
                  insights.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FileText size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Simplify Contract Management
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Manage agreements, deliverables, and payments through one
                  platform.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/influencer/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Join as an Influencer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
