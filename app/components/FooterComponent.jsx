import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  // Sample influencer marketing list
  const influencers = [
    "YouTube Marketing",
    "Instagram Marketing",
    "Celebrity Marketing",
    "Meme Marketing",
    "Regional Influencer Marketing",
    "Micro-Influencer",
  ];

  // Sample insights list
  const insights = [
    "Digital Marketing Trends for 2025",
    "Maximizing ROI on Social Campaigns",
    "Building Authentic Brand Presence",
    "Data-Driven Marketing Strategies",
    "Engagement Metrics That Matter",
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Sections - Influencer Marketing and Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Influencer Marketing Section */}
          <div className="flex flex-col space-y-6 px-10">
            <h2 className="text-2xl">Influencer Marketing</h2>
            <ul className="space-y-3">
              {influencers.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  <p className="text-gray-200 text-[14px] text-[14px] hover:text-white transition-colors duration-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights Section */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl  border-indigo-400">Insights</h2>
            <ul className="space-y-3">
              {insights.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  <p className="text-gray-200 text-[14px] text-[14px] hover:text-white transition-colors duration-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 border-t border-indigo-600">
          {/* About Us Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl  border-indigo-500 pb-2 mb-2">About Us</h3>
            <p className="text-gray-200 text-[14px]">
              influence AI is a data driven networking platform focused on
              high-quality campaigns Suitable for growing through social media
              networking platforms. Through influence AI we are creating
              win-win-win situation for brands, influences, customers.
            </p>
          </div>

          {/* Location Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl   border-indigo-500 pb-2 mb-2">Hyderabad</h3>
            <address className="not-italic text-gray-200 text-[14px]">
              5th phase, kphb, Hyderabad
              <br />
              Telangana, India, 500091
            </address>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl   border-indigo-500 pb-2 mb-2">
              Contact Info
            </h3>
            <div className="text-gray-200 text-[14px]">
              <p>Email: team@influenceai.in</p>
              <p>Phone: +91 8919333347</p>
              <p>Hours: Monday-Friday, 9AM-5PM EST</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl   border-indigo-500 pb-2 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transition-colors duration-300 hover:text-blue-400"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-red-400"
              >
                <Youtube size={24} />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-blue-400"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} CMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
