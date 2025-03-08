import React from "react";
import PortfolioComponent from "./Portfolio";
import TrackMetricsComponent from "./TrackMetrics";
import BrandPartnershipsComponent from "./BrandPartnerships";

const MobileLayout = () => {
  return (
    <div
      className="max-w-md mx-auto h-[600px] flex flex-col bg-black shadow-4xl"
      style={{
        borderRadius: "40px",
        overflow: "hidden",
        position: "relative",
        border: "10px solid black",
      }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10"></div>

      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1/4 h-8 bg-black rounded-full z-10 flex justify-center items-center">
        <div className="bg-gray-700 w-2 h-2 rounded-full mr-12"></div>
        <div className="bg-gray-700 w-3 h-3 rounded-full"></div>
      </div>

      {/* Status Bar */}
      <div className="bg-black text-white px-6 pt-8 pb-1 flex justify-between text-xs z-0">
        <span>9:41</span>
        <div className="flex space-x-1">
          <span>5G</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M3.75 5.25h12.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75Zm1.5 1.5v6h9.5v-6h-9.5Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 8 8 0 0 0-6.225-.2A8.051 8.051 0 0 0 2.93 5.318a8 8 0 0 0-.9 7.887 8.028 8.028 0 0 0 2.819 3.500 8 8 0 0 0 7.668.9 8.051 8.051 0 0 0 3.917-3.815 8 8 0 0 0 .121-8.379Zm-1.555 7.842a5.99 5.99 0 0 1-2.186 2.348 6.023 6.023 0 0 1-6.816-.503 6 6 0 0 1-1.405-1.883 6.023 6.023 0 0 1-.501-6.818 6 6 0 0 1 2.346-2.186 6.023 6.023 0 0 1 6.818.504 6 6 0 0 1 1.404 1.883 6.026 6.026 0 0 1 .5 6.82 6 6 0 0 1-.16.035Z" />
          </svg>
        </div>
      </div>
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">InfluenceAI</h1>
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden bg-gray-100 overflow-scroll">
        <div className="space-y-4 p-4 pt-6">
          {/* Latest Updates */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <PortfolioComponent />
          </div>

          {/* Trending Topic */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <TrackMetricsComponent />
          </div>
          {/* Featured Content */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <BrandPartnershipsComponent />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      {/* <nav className="bg-black text-white pt-2 pb-6">
        <div className="flex justify-around">
          <div className="p-4 flex flex-col items-center w-1/4 text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </div>

          <div className="p-4 flex flex-col items-center w-1/4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="text-xs mt-1">Explore</span>
          </div>

          <div className="p-4 flex flex-col items-center w-1/4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </div>

          <div className="p-4 flex flex-col items-center w-1/4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="text-xs mt-1">Alerts</span>
          </div>
        </div>
      </nav> */}

      {/* Home Bar Indicator */}
      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-400 rounded-full"></div> */}
    </div>
  );
};

export default MobileLayout;
