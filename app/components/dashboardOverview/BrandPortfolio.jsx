"use client";
import { useState } from "react";
import Head from "next/head";
import {
  Search,
  Users,
  BarChart2,
  MessageSquare,
  Calendar,
  Bell,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("discover");

  return (
    <div className="flex h-screen bg-gray-50">
      <Head>
        <title>Brand Dashboard | Influencer Marketing</title>
      </Head>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-indigo-600">InfluBrand</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab("discover")}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === "discover"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Search className="mr-3 h-5 w-5" />
              Discover Influencers
            </button>

            <button
              onClick={() => setActiveTab("campaigns")}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === "campaigns"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Calendar className="mr-3 h-5 w-5" />
              Campaign Management
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === "analytics"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <BarChart2 className="mr-3 h-5 w-5" />
              ROI Analytics
            </button>

            <button
              onClick={() => setActiveTab("messages")}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === "messages"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              Messages
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="flex items-center justify-between h-16 px-4 md:px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1 mr-4 md:hidden"
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center ml-auto">
              <button className="p-1 mr-4 text-gray-500 hover:text-gray-700">
                <Bell size={20} />
              </button>
              <div className="relative">
                <button className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                    AB
                  </div>
                  <ChevronDown size={16} className="ml-1 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {activeTab === "discover" && <DiscoverInfluencers />}
          {activeTab === "campaigns" && <CampaignManagement />}
          {activeTab === "analytics" && <ROIAnalytics />}
          {activeTab === "messages" && <Messages />}
        </main>
      </div>
    </div>
  );
}

// Discover Influencers Component
function DiscoverInfluencers() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Discover Influencers
      </h1>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search influencers by name, niche, or location"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <select className="block px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Audience Size</option>
              <option value="micro">Micro (10K-50K)</option>
              <option value="mid">Mid-tier (50K-500K)</option>
              <option value="macro">Macro (500K-1M)</option>
              <option value="mega">Mega (1M+)</option>
            </select>

            <select className="block px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Engagement</option>
              <option value="high">High (5%+)</option>
              <option value="medium">Medium (2-5%)</option>
              <option value="low">Low (0-2%)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            Fashion
          </div>
          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            Beauty
          </div>
          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            Lifestyle
          </div>
          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            Travel
          </div>
          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            Fitness
          </div>
          <div className="border border-dashed border-gray-300 text-gray-500 px-3 py-1 rounded-full text-sm">
            + Add Niche
          </div>
        </div>
      </div>

      {/* Influencer Results */}
    </div>
  );
}

// Campaign Management Component
function CampaignManagement() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Campaign Management
        </h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          + New Campaign
        </button>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Summer Collection Launch</h3>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
              Active
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">Jun 5 - Jul 10, 2025</p>
          <div className="flex justify-between text-sm mb-4">
            <div>
              <p className="text-gray-500">Budget</p>
              <p className="font-medium">$15,000</p>
            </div>
            <div>
              <p className="text-gray-500">Influencers</p>
              <p className="font-medium">8 / 10</p>
            </div>
            <div>
              <p className="text-gray-500">Posts</p>
              <p className="font-medium">24 / 30</p>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full w-3/4"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Holiday Gift Guide</h3>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
              Planning
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">Nov 1 - Dec 25, 2025</p>
          <div className="flex justify-between text-sm mb-4">
            <div>
              <p className="text-gray-500">Budget</p>
              <p className="font-medium">$25,000</p>
            </div>
            <div>
              <p className="text-gray-500">Influencers</p>
              <p className="font-medium">3 / 15</p>
            </div>
            <div>
              <p className="text-gray-500">Posts</p>
              <p className="font-medium">0 / 45</p>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Campaign Timeline
      </h2>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <div className="min-w-max">
          {/* Simple timeline visualization */}
          <div className="h-16 flex items-center">
            <div className="flex-1 h-1 bg-indigo-600"></div>
            <div className="h-4 w-4 rounded-full bg-indigo-600"></div>
            <div className="flex-1 h-1 bg-indigo-600"></div>
            <div className="h-4 w-4 rounded-full bg-indigo-600"></div>
            <div className="flex-1 h-1 bg-gray-300"></div>
            <div className="h-4 w-4 rounded-full bg-gray-300"></div>
            <div className="flex-1 h-1 bg-gray-300"></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <div>
              Planning
              <br />
              Jun 5
            </div>
            <div>
              Outreach
              <br />
              Jun 15
            </div>
            <div>
              Content
              <br />
              Jun 25
            </div>
            <div>
              Wrap-up
              <br />
              Jul 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ROI Analytics Component
function ROIAnalytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">ROI Analytics</h1>

      {/* Metrics summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Total Spend</p>
          <h3 className="text-2xl font-semibold text-gray-800">$45,320</h3>
          <p className="text-xs text-green-600 mt-1">+12% from last quarter</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Impressions</p>
          <h3 className="text-2xl font-semibold text-gray-800">3.2M</h3>
          <p className="text-xs text-green-600 mt-1">+24% from last quarter</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Engagement Rate</p>
          <h3 className="text-2xl font-semibold text-gray-800">4.8%</h3>
          <p className="text-xs text-green-600 mt-1">+1.2% from last quarter</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
          <h3 className="text-2xl font-semibold text-gray-800">2.3%</h3>
          <p className="text-xs text-green-600 mt-1">+0.5% from last quarter</p>
        </div>
      </div>

      {/* Campaign performance comparison */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Campaign Performance
        </h2>
        <div className="h-64 flex items-end justify-around">
          <div className="flex flex-col items-center">
            <div
              className="w-16 bg-indigo-600 rounded-t"
              style={{ height: "40%" }}
            ></div>
            <p className="text-xs text-gray-600 mt-2">Spring</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-16 bg-indigo-600 rounded-t"
              style={{ height: "65%" }}
            ></div>
            <p className="text-xs text-gray-600 mt-2">Summer</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-16 bg-indigo-600 rounded-t"
              style={{ height: "90%" }}
            ></div>
            <p className="text-xs text-gray-600 mt-2">Fall</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-16 bg-indigo-600 rounded-t"
              style={{ height: "50%" }}
            ></div>
            <p className="text-xs text-gray-600 mt-2">Winter</p>
          </div>
        </div>
        <div className="flex justify-between text-sm mt-4">
          <div>
            <span className="inline-block w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
            Return on Ad Spend
          </div>
        </div>
      </div>

      {/* Top performing influencers */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Top Performing Influencers
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-3">Influencer</th>
                <th className="pb-3">Campaign</th>
                <th className="pb-3">Impressions</th>
                <th className="pb-3">Engagement</th>
                <th className="pb-3">Conversions</th>
                <th className="pb-3">ROI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3">Sarah Johnson</td>
                <td>Summer Collection</td>
                <td>245K</td>
                <td>5.8%</td>
                <td>187</td>
                <td className="text-green-600">3.2x</td>
              </tr>
              <tr>
                <td className="py-3">Mark Davis</td>
                <td>Summer Collection</td>
                <td>198K</td>
                <td>4.9%</td>
                <td>143</td>
                <td className="text-green-600">2.8x</td>
              </tr>
              <tr>
                <td className="py-3">Jennifer Kim</td>
                <td>Summer Collection</td>
                <td>312K</td>
                <td>4.2%</td>
                <td>126</td>
                <td className="text-green-600">2.4x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Messages Component
function Messages() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Influencer Messages
      </h1>

      <div className="bg-white rounded-lg shadow flex h-[70vh]">
        {/* Conversation list */}
        <div className="w-1/3 border-r">
          <div className="p-3 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search messages"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="overflow-y-auto h-full pb-16">
            <div className="border-b border-gray-100 px-4 py-3 bg-indigo-50">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 mr-3">
                  SJ
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600 truncate">
                    I'd love to collaborate on the summer launch!
                  </p>
                </div>
                <div className="text-xs text-gray-500">2m</div>
              </div>
            </div>

            <div className="border-b border-gray-100 px-4 py-3">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                  MD
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Mark Davis</h4>
                  <p className="text-sm text-gray-600 truncate">
                    When do you need the content by?
                  </p>
                </div>
                <div className="text-xs text-gray-500">1h</div>
              </div>
            </div>

            <div className="border-b border-gray-100 px-4 py-3">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                  JK
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Jennifer Kim</h4>
                  <p className="text-sm text-gray-600 truncate">
                    Thanks for sending over the brief!
                  </p>
                </div>
                <div className="text-xs text-gray-500">3h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active conversation */}
        <div className="flex-1 flex flex-col">
          <div className="px-4 py-3 border-b">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 mr-3">
                SJ
              </div>
              <div>
                <h4 className="font-medium">Sarah Johnson</h4>
                <p className="text-xs text-gray-500">
                  @sarahlovesfashion • Summer Collection Campaign
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">
                  Hi there! I just saw the campaign brief for the summer
                  collection and I absolutely love the concept. Would love to be
                  part of it!
                </p>
                <p className="text-xs text-gray-500 mt-1">10:15 AM</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-indigo-100 text-indigo-800 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">
                  Hi Sarah! We're excited to have you interested in our summer
                  campaign. Your aesthetic aligns perfectly with what we're
                  looking for.
                </p>
                <p className="text-xs text-indigo-500 mt-1">10:17 AM</p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">
                  Great! What kind of content are you looking for? I can do
                  lifestyle shots at the beach with the products, or more styled
                  flat lays if you prefer.
                </p>
                <p className="text-xs text-gray-500 mt-1">10:20 AM</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-indigo-100 text-indigo-800 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">
                  We'd love both actually! The campaign requires 3 in-feed
                  posts: 2 lifestyle at the beach and 1 styled flat lay with the
                  accessories. Does that work for you?
                </p>
                <p className="text-xs text-indigo-500 mt-1">10:25 AM</p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">
                  That sounds perfect! I'm actually heading to Malibu next
                  weekend, which would be perfect timing for the beach shots.
                </p>
                <p className="text-xs text-gray-500 mt-1">10:28 AM</p>
              </div>
            </div>
          </div>

          <div className="p-3 border-t">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="block flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md text-sm font-medium">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
