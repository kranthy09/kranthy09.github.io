"use client";

import React from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Check,
} from "lucide-react";

const ContentCalendar = () => {
  // Static data (no useState needed)
  const currentMonth = new Date(2025, 2, 1); // March 2025
  const selectedDate = new Date(2025, 2, 15); // March 15, 2025

  const contentItems = [
    {
      id: 1,
      title: "Blog Post: SEO Best Practices",
      date: new Date(2025, 2, 15),
      type: "Blog",
      status: "In Progress",
      assignee: "Sarah Chen",
    },
    {
      id: 2,
      title: "Social Media Campaign: Product Launch",
      date: new Date(2025, 2, 18),
      type: "Social Media",
      status: "Planning",
      assignee: "Miguel Rodriguez",
    },
    {
      id: 3,
      title: "Email Newsletter: March Edition",
      date: new Date(2025, 2, 25),
      type: "Email",
      status: "Not Started",
      assignee: "Priya Patel",
    },
    {
      id: 4,
      title: "Video Tutorial: New Features",
      date: new Date(2025, 2, 12),
      type: "Video",
      status: "Review",
      assignee: "David Kim",
    },
  ];

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  // Format date for display
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Check if a date has content items
  const hasContentItems = (date) => {
    if (!date) return false;
    return contentItems.some(
      (item) =>
        item.date.getDate() === date.getDate() &&
        item.date.getMonth() === date.getMonth() &&
        item.date.getFullYear() === date.getFullYear()
    );
  };

  // Get content items for a specific date
  const getContentItemsForDate = (date) => {
    if (!date) return [];
    return contentItems.filter(
      (item) =>
        item.date.getDate() === date.getDate() &&
        item.date.getMonth() === date.getMonth() &&
        item.date.getFullYear() === date.getFullYear()
    );
  };

  // Check if a date is approaching deadline (within 3 days)
  const isApproachingDeadline = (date) => {
    if (!date) return false;
    const today = new Date(2025, 2, 10); // Static "today" date for demo
    const deadlineDate = new Date(date);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 3;
  };

  // Check if a date is past deadline
  const isPastDeadline = (date) => {
    if (!date) return false;
    const today = new Date(2025, 2, 10); // Static "today" date for demo
    return date < today;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Not Started":
        return "bg-gray-200 text-gray-800";
      case "Planning":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Review":
        return "bg-purple-100 text-purple-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Blog":
        return "bg-pink-100 text-pink-800";
      case "Social Media":
        return "bg-blue-100 text-blue-800";
      case "Email":
        return "bg-green-100 text-green-800";
      case "Video":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-3xl border border-gray-100">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Calendar size={20} className="mr-2 text-white opacity-90" />
              {currentMonth.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <div className="flex space-x-2">
              <button className="p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <div
                  key={index}
                  className="text-center font-medium text-gray-500 text-xs"
                >
                  {day}
                </div>
              )
            )}
          </div>

          <div className="grid grid-cols-7 gap-1.5 mb-4">
            {getDaysInMonth(currentMonth).map((day, index) => (
              <div
                key={index}
                className={`
                  min-h-12 p-1 rounded-md relative
                  ${
                    day
                      ? "bg-white shadow-sm border border-gray-100"
                      : "bg-transparent"
                  }
                  ${
                    day &&
                    day.toDateString() === new Date(2025, 2, 10).toDateString()
                      ? "ring-2 ring-indigo-500 ring-offset-1"
                      : ""
                  }
                  ${
                    day &&
                    selectedDate &&
                    day.toDateString() === selectedDate.toDateString()
                      ? "bg-indigo-50 border-indigo-200"
                      : ""
                  }
                `}
              >
                {day && (
                  <>
                    <div className="flex justify-between items-start">
                      <div
                        className={`
                        text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full
                        ${
                          day.toDateString() ===
                          new Date(2025, 2, 10).toDateString()
                            ? "bg-indigo-500 text-white"
                            : "text-gray-700"
                        }
                      `}
                      >
                        {day.getDate()}
                      </div>
                      {hasContentItems(day) && (
                        <div className="flex flex-col space-y-1">
                          {isPastDeadline(day) &&
                            !getContentItemsForDate(day).every(
                              (item) => item.status === "Completed"
                            ) && (
                              <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            )}
                          {isApproachingDeadline(day) &&
                            !isPastDeadline(day) && (
                              <span className="inline-block w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                            )}
                        </div>
                      )}
                    </div>
                    <div className="mt-1">
                      {getContentItemsForDate(day)
                        .slice(0, 1)
                        .map((item, idx) => (
                          <div
                            key={idx}
                            className="text-xs truncate mb-0.5 py-0.5 px-1 rounded"
                            style={{
                              backgroundColor:
                                item.type === "Blog"
                                  ? "#FCE7F3"
                                  : item.type === "Social Media"
                                  ? "#DBEAFE"
                                  : item.type === "Email"
                                  ? "#D1FAE5"
                                  : item.type === "Video"
                                  ? "#FEE2E2"
                                  : "#F3F4F6",
                            }}
                          >
                            {item.title.length > 10
                              ? item.title.substring(0, 10) + "..."
                              : item.title}
                          </div>
                        ))}
                      {getContentItemsForDate(day).length > 1 && (
                        <div className="text-xs text-gray-500 font-medium">
                          +{getContentItemsForDate(day).length - 1}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="border-t border-gray-100 bg-gray-50 p-4">
            <h3 className="text-md font-semibold text-gray-800 mb-3">
              {formatDate(selectedDate)}
            </h3>
            {getContentItemsForDate(selectedDate).length > 0 ? (
              <div className="space-y-2">
                {getContentItemsForDate(selectedDate).map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(
                            item.type
                          )}`}
                        >
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <img
                          src="/influencer-1.jpg"
                          alt="User"
                          className="w-4 h-4 rounded-full mr-1"
                        />
                        {item.assignee}
                      </span>
                      <div className="flex items-center">
                        {isPastDeadline(item.date) &&
                        item.status !== "Completed" ? (
                          <span className="flex items-center text-red-600">
                            <AlertTriangle size={12} className="mr-1" />
                            Overdue
                          </span>
                        ) : isApproachingDeadline(item.date) ? (
                          <span className="flex items-center text-yellow-600">
                            <AlertTriangle size={12} className="mr-1" />
                            Due soon
                          </span>
                        ) : item.status === "Completed" ? (
                          <span className="flex items-center text-green-600">
                            <Check size={12} className="mr-1" />
                            Completed
                          </span>
                        ) : (
                          <span>Due: {formatDate(item.date)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm">
                  No content scheduled for this date.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCalendar;
