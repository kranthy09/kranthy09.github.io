import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronRight } from "lucide-react";
const engagementData = [
  { month: "Jan", rate: 4.2 },
  { month: "Feb", rate: 4.8 },
  { month: "Mar", rate: 5.1 },
  { month: "Apr", rate: 5.7 },
  { month: "May", rate: 6.3 },
  { month: "Jun", rate: 6.8 },
];

const audienceGrowthData = [
  { month: "Jan", followers: 12400 },
  { month: "Feb", followers: 14200 },
  { month: "Mar", followers: 15800 },
  { month: "Apr", followers: 17900 },
  { month: "May", followers: 20100 },
  { month: "Jun", followers: 22300 },
];

export default function AudienceGrowthChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 md:px-10 mb-12">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">
          Audience Growth
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={audienceGrowthData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <defs>
              <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="followers"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorFollowers)"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex mt-4 justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-600">14.2K</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">8.1K</span>
            </div>
          </div>
          <button className="text-blue-600 text-sm font-medium flex items-center">
            View Details <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">
          Engagement Rate
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={engagementData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex mt-4 justify-between items-center">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Top performing content:</span> Product
            reviews
          </div>
          <button className="text-blue-600 text-sm font-medium flex items-center">
            View Details <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
