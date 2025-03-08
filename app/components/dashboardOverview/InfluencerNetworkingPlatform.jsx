"use client";

import React, { useState } from "react";
import {
  Search,
  Users,
  MessageSquare,
  Bell,
  Star,
  TrendingUp,
  Filter,
  ChevronDown,
} from "lucide-react";

const InfluencerNetworkingPlatform = () => {
  const [activeTab, setActiveTab] = useState("discover");

  // Sample influencer data
  const influencers = [
    {
      id: 1,
      name: "Alex Morgan",
      handle: "@alexcreates",
      avatar: "/api/placeholder/64/64",
      category: "Lifestyle & Fashion",
      followers: "1.2M",
      engagement: "4.8%",
      rating: 4.9,
      verified: true,
    },
    {
      id: 2,
      name: "Jamie Chen",
      handle: "@jamietech",
      avatar: "/api/placeholder/64/64",
      category: "Technology",
      followers: "850K",
      engagement: "5.2%",
      rating: 4.7,
      verified: true,
    },
    {
      id: 3,
      name: "Taylor Wilson",
      handle: "@taylorfit",
      avatar: "/api/placeholder/64/64",
      category: "Fitness & Health",
      followers: "2.1M",
      engagement: "3.9%",
      rating: 4.6,
      verified: false,
    },
    {
      id: 4,
      name: "Jordan Smith",
      handle: "@jordantravels",
      avatar: "/api/placeholder/64/64",
      category: "Travel",
      followers: "720K",
      engagement: "6.1%",
      rating: 4.8,
      verified: true,
    },
  ];

  // Sample message notifications
  const messages = [
    {
      id: 1,
      from: "Alex Morgan",
      preview: "Hey! I'd love to collaborate on...",
      time: "2h ago",
      unread: true,
    },
    {
      id: 2,
      from: "Taylor Wilson",
      preview: "Thanks for connecting! When would...",
      time: "1d ago",
      unread: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-indigo-600">InfluNet</h1>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="relative">
              <MessageSquare className="w-6 h-6 text-gray-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="rounded-full"
              />
              <span className="font-medium">BrandName</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-3">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/api/placeholder/64/64"
                alt="Brand Profile"
                className="rounded-full"
              />
              <div>
                <h2 className="font-bold">BrandName</h2>
                <p className="text-sm text-gray-500">Premium Account</p>
              </div>
            </div>

            <nav>
              <ul>
                <li
                  className={`mb-2 p-2 rounded-md ${
                    activeTab === "discover"
                      ? "bg-indigo-50 text-indigo-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("discover")}
                >
                  <button className="flex items-center space-x-3 w-full">
                    <Users className="w-5 h-5" />
                    <span>Discover Influencers</span>
                  </button>
                </li>
                <li
                  className={`mb-2 p-2 rounded-md ${
                    activeTab === "messages"
                      ? "bg-indigo-50 text-indigo-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("messages")}
                >
                  <button className="flex items-center space-x-3 w-full">
                    <MessageSquare className="w-5 h-5" />
                    <span>Messages</span>
                  </button>
                </li>
                <li
                  className={`mb-2 p-2 rounded-md ${
                    activeTab === "analytics"
                      ? "bg-indigo-50 text-indigo-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("analytics")}
                >
                  <button className="flex items-center space-x-3 w-full">
                    <TrendingUp className="w-5 h-5" />
                    <span>Campaign Analytics</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {activeTab === "discover" && (
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-medium mb-3">Filter Influencers</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Category
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>All Categories</option>
                    <option>Fashion & Lifestyle</option>
                    <option>Technology</option>
                    <option>Fitness & Health</option>
                    <option>Travel</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Followers
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Any followers</option>
                    <option>10K - 50K</option>
                    <option>50K - 100K</option>
                    <option>100K - 500K</option>
                    <option>500K - 1M</option>
                    <option>1M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Engagement Rate
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Any engagement</option>
                    <option>1% - 3%</option>
                    <option>3% - 5%</option>
                    <option>5%+</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600"
                    />
                    <span className="text-sm text-gray-600">Verified only</span>
                  </label>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <div className="col-span-9">
          {activeTab === "discover" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Discover Influencers</h2>
                <div className="relative w-64">
                  <input
                    type="text"
                    placeholder="Search influencers..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-medium mb-4">Recommended for You</h3>
                <div className="grid grid-cols-2 gap-4">
                  {influencers.slice(0, 2).map((influencer) => (
                    <div
                      key={influencer.id}
                      className="border rounded-lg p-4 flex"
                    >
                      <img
                        src={influencer.avatar}
                        alt={influencer.name}
                        className="rounded-full w-16 h-16"
                      />
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="font-bold">{influencer.name}</h4>
                          {influencer.verified && (
                            <span className="ml-1 text-blue-500">✓</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          {influencer.handle}
                        </p>
                        <p className="text-sm">{influencer.category}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <span className="text-sm">
                            {influencer.followers} followers
                          </span>
                          <span className="text-sm">
                            {influencer.engagement} eng.
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b">
                  <h3 className="font-medium">Top Influencers</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Sort by:</span>
                    <select className="border-0 text-sm font-medium">
                      <option>Relevance</option>
                      <option>Followers: High to Low</option>
                      <option>Engagement: High to Low</option>
                      <option>Rating: High to Low</option>
                    </select>
                  </div>
                </div>

                <ul>
                  {influencers.map((influencer) => (
                    <li
                      key={influencer.id}
                      className="border-b last:border-0 p-4 hover:bg-gray-50"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <img
                            src={influencer.avatar}
                            alt={influencer.name}
                            className="rounded-full w-12 h-12"
                          />
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h4 className="font-medium">{influencer.name}</h4>
                              {influencer.verified && (
                                <span className="ml-1 text-blue-500">✓</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">
                              {influencer.handle}
                            </p>
                            <p className="text-sm">{influencer.category}</p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end">
                          <div className="flex items-center mb-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="ml-1">{influencer.rating}</span>
                          </div>
                          <button className="bg-indigo-600 text-white px-4 py-1 rounded-md text-sm hover:bg-indigo-700">
                            Connect
                          </button>
                        </div>
                      </div>

                      <div className="flex space-x-4 mt-3 ml-16">
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {influencer.followers} followers
                        </div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {influencer.engagement} engagement
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center p-4 border-t">
                  <button className="text-indigo-600 font-medium">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "messages" && (
            <div>
              <h2 className="text-xl font-bold mb-6">Messages</h2>
              <div className="bg-white rounded-lg shadow">
                <div className="flex border-b">
                  {/* Message sidebar */}
                  <div className="w-1/3 border-r">
                    <div className="p-4 border-b">
                      <input
                        type="text"
                        placeholder="Search messages..."
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <ul>
                      {messages.map((message) => (
                        <li
                          key={message.id}
                          className={`border-b p-4 hover:bg-gray-50 cursor-pointer ${
                            message.unread ? "bg-blue-50" : ""
                          }`}
                        >
                          <div className="flex justify-between">
                            <h4 className="font-medium">{message.from}</h4>
                            <span className="text-xs text-gray-500">
                              {message.time}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">
                            {message.preview}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Message content */}
                  <div className="w-2/3 flex flex-col">
                    <div className="p-4 border-b flex items-center">
                      <img
                        src="/api/placeholder/40/40"
                        alt="Alex Morgan"
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <h4 className="font-medium">Alex Morgan</h4>
                        <p className="text-xs text-gray-500">
                          @alexcreates • Online
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 p-4 overflow-auto">
                      <div className="space-y-4">
                        <div className="flex">
                          <img
                            src="/api/placeholder/32/32"
                            alt="Brand"
                            className="rounded-full h-8 w-8"
                          />
                          <div className="ml-2 bg-gray-100 rounded-lg p-3 max-w-md">
                            <p className="text-sm">
                              Hi Alex! I've been following your content and love
                              your style. I think our brand would be a great fit
                              for a collaboration.
                            </p>
                            <span className="text-xs text-gray-500 mt-1">
                              2:45 PM
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <div className="mr-2 bg-indigo-100 rounded-lg p-3 max-w-md">
                            <p className="text-sm">
                              Hey! I'd love to collaborate on something. I've
                              actually been using your products for a while now
                              and genuinely enjoy them!
                            </p>
                            <span className="text-xs text-gray-500 mt-1">
                              3:02 PM
                            </span>
                          </div>
                          <img
                            src="/api/placeholder/32/32"
                            alt="Alex Morgan"
                            className="rounded-full h-8 w-8"
                          />
                        </div>

                        <div className="flex">
                          <img
                            src="/api/placeholder/32/32"
                            alt="Brand"
                            className="rounded-full h-8 w-8"
                          />
                          <div className="ml-2 bg-gray-100 rounded-lg p-3 max-w-md">
                            <p className="text-sm">
                              That's great to hear! We're planning a new
                              campaign for our summer collection. Would you be
                              interested in being one of our featured
                              influencers?
                            </p>
                            <span className="text-xs text-gray-500 mt-1">
                              3:15 PM
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border-t">
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div>
              <h2 className="text-xl font-bold mb-6">Campaign Analytics</h2>
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-medium mb-4">Overview</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="text-gray-500 text-sm">Active Campaigns</h4>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-green-500">+1 from last month</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="text-gray-500 text-sm">
                      Engaged Influencers
                    </h4>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-green-500">+4 from last month</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="text-gray-500 text-sm">Total Reach</h4>
                    <p className="text-2xl font-bold">8.2M</p>
                    <p className="text-sm text-green-500">
                      +1.5M from last month
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-medium mb-4">
                    Top Performing Influencers
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="/api/placeholder/32/32"
                          alt="Jamie Chen"
                          className="rounded-full w-8 h-8"
                        />
                        <span className="ml-2">Jamie Chen</span>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">235K</p>
                        <p className="text-xs text-gray-500">impressions</p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="/api/placeholder/32/32"
                          alt="Alex Morgan"
                          className="rounded-full w-8 h-8"
                        />
                        <span className="ml-2">Alex Morgan</span>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">189K</p>
                        <p className="text-xs text-gray-500">impressions</p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="/api/placeholder/32/32"
                          alt="Jordan Smith"
                          className="rounded-full w-8 h-8"
                        />
                        <span className="ml-2">Jordan Smith</span>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">142K</p>
                        <p className="text-xs text-gray-500">impressions</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-medium mb-4">Engagement by Platform</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Instagram</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>TikTok</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>YouTube</span>
                        <span>32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: "32%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Twitter</span>
                        <span>21%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: "21%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InfluencerNetworkingPlatform;
