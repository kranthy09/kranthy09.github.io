"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function TrackMetricsComponent() {
  const engagementData = [
    { name: "Jan", likes: 12400, comments: 1840, shares: 3200 },
    { name: "Feb", likes: 14200, comments: 2100, shares: 3700 },
    { name: "Mar", likes: 13800, comments: 2300, shares: 3500 },
    { name: "Apr", likes: 15600, comments: 2600, shares: 4200 },
    { name: "May", likes: 16900, comments: 2800, shares: 4500 },
    { name: "Jun", likes: 18200, comments: 3100, shares: 5100 },
  ];
  return (
    <div className="w-fit bg-white rounded-lg shadow p-2">
      <div className="flex justify-between items-center mb-6 mr-10">
        <h3 className="text-md font-semibold text-gray-800">
          Track Performance Metrics
        </h3>
        <div className="flex space-x-2 ml-20">
          <button className="px-3 py-1 text-[10px] bg-indigo-50 text-indigo-600 rounded">
            Monthly
          </button>
          <button className="px-3 py-1 text-[10px] text-gray-600 hover:bg-gray-50 rounded">
            Quarterly
          </button>
          <button className="px-3 py-1 text-[10px] text-gray-600 hover:bg-gray-50 rounded">
            Yearly
          </button>
        </div>
      </div>

      <div className="h-32">
        <ResponsiveContainer width="90%" height="80%">
          <AreaChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="likes"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="comments"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="shares"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="pb-4 grid grid-cols-3 gap-12 w-fit">
        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-[10px] text-purple-600">Likes</p>
          <p className="text-[10px] font-bold text-gray-800">18.2K</p>
          <p className="text-[10px] text-green-600">+12.4%</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-[10px] text-blue-600">Comments</p>
          <p className="text-[10px] font-bold text-gray-800">3.1K</p>
          <p className="text-[10px] text-green-600">+10.7%</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-[10px] text-green-600">Shares</p>
          <p className="text-[10px] font-bold text-gray-800">5.1K</p>
          <p className="text-[10px] text-green-600">+13.3%</p>
        </div>
      </div>
    </div>
  );
}
