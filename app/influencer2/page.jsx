"use client";

import { useState } from "react";
import {
  Users,
  Briefcase,
  TrendingUp,
  FileText,
  Bell,
  Settings,
  MessageSquare,
  DollarSign,
  Award,
} from "lucide-react";
import PortfolioComponent from "@/app/components/dashboardOverview/Portfolio";
import BrandPartnershipsComponent from "@/app/components/dashboardOverview/BrandPartnerships";
import TrackMetricsComponent from "@/app/components/dashboardOverview/TrackMetrics";

export default function InfluencerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for charts
  const audienceData = [
    { name: "Jan", followers: 5400 },
    { name: "Feb", followers: 5900 },
    { name: "Mar", followers: 6700 },
    { name: "Apr", followers: 7200 },
    { name: "May", followers: 8100 },
    { name: "Jun", followers: 8800 },
  ];

  const campaignData = [
    { name: "Beauty Co", value: 3500, status: "Completed" },
    { name: "Fashion Brand", value: 5200, status: "Active" },
    { name: "Food Delivery", value: 2800, status: "Pending" },
    { name: "Tech Gadget", value: 4100, status: "Negotiating" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">InfluPro</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <MessageSquare size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
              JD
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white rounded-lg shadow p-4">
            <nav className="space-y-1">
              <button
                className={`w-full flex items-center space-x-3 p-3 rounded-md ${
                  activeTab === "overview"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                <TrendingUp size={20} />
                <span>Overview</span>
              </button>
              <button
                className={`w-full flex items-center space-x-3 p-3 rounded-md ${
                  activeTab === "portfolio"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("portfolio")}
              >
                <Briefcase size={20} />
                <span>Portfolio</span>
              </button>
              <button
                className={`w-full flex items-center space-x-3 p-3 rounded-md ${
                  activeTab === "partnerships"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("partnerships")}
              >
                <Award size={20} />
                <span>Brand Partnerships</span>
              </button>
              <button
                className={`w-full flex items-center space-x-3 p-3 rounded-md ${
                  activeTab === "metrics"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("metrics")}
              >
                <TrendingUp size={20} />
                <span>Performance Metrics</span>
              </button>
              <button
                className={`w-full flex items-center space-x-3 p-3 rounded-md ${
                  activeTab === "contracts"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("contracts")}
              >
                <FileText size={20} />
                <span>Contract Management</span>
              </button>
              <button
                className={`w-full flex items-center space-x-3 p-3 rounded-md ${
                  activeTab === "settings"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("settings")}
              >
                <Settings size={20} />
                <span>Settings</span>
              </button>
            </nav>

            <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-medium text-indigo-800">Pro Membership</h3>
              <p className="text-sm text-indigo-600 mt-1">
                Unlock premium features
              </p>
              <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Upgrade Now
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Grow Your Influence
              </h2>
              <p className="text-gray-600 mt-1">
                Build your brand, showcase your content, and secure valuable
                partnerships all in one place.
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                    <Users size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-500 text-sm">Total Followers</h3>
                    <p className="text-2xl font-bold text-gray-800">8,842</p>
                    <p className="text-sm text-green-600 flex items-center">
                      <span>+8.2%</span>
                      <span className="ml-1">this month</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <DollarSign size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-500 text-sm">Campaign Revenue</h3>
                    <p className="text-2xl font-bold text-gray-800">$15,600</p>
                    <p className="text-sm text-green-600 flex items-center">
                      <span>+12.5%</span>
                      <span className="ml-1">vs last quarter</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <Briefcase size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-500 text-sm">
                      Active Partnerships
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">7</p>
                    <p className="text-sm text-green-600 flex items-center">
                      <span>2 new</span>
                      <span className="ml-1">this month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Portfolio Section */}
              <PortfolioComponent />
              {/* Brand Partnerships Section */}
              <BrandPartnershipsComponent />
            </div>

            {/* Performance Metrics and Contract Management */}
            <div className="grid grid-cols-1 gap-6">
              {/* Performance Metrics Section */}
              <TrackMetricsComponent />

              {/* Contract Management Section */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Simplify Contract Management
                  </h3>
                  <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">
                    New Contract
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Brand
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Value
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Due Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            Fashion Brand
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            Sponsored Content
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">$5,200</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            Jul 15, 2025
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">
                          <button>View Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            Tech Gadget
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            Product Review
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">$4,100</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">-</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Negotiating
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">
                          <button>Review Proposal</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            Beauty Co
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            Brand Ambassador
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">$3,500</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            Jun 30, 2025
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">
                          <button>View Invoice</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
