import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChevronRight } from "lucide-react";

const campaignPerformanceData = [
  { name: "Beauty Brand", completion: 85, revenue: 3200 },
  { name: "Tech Company", completion: 100, revenue: 4500 },
  { name: "Fashion Label", completion: 70, revenue: 2800 },
  { name: "Fitness App", completion: 90, revenue: 3800 },
];

const audienceDemographicsData = [
  { name: "18-24", value: 35 },
  { name: "25-34", value: 40 },
  { name: "35-44", value: 15 },
  { name: "45+", value: 10 },
];

const audienceGrowthData = [
  { month: "Jan", followers: 12400 },
  { month: "Feb", followers: 14200 },
  { month: "Mar", followers: 15800 },
  { month: "Apr", followers: 17900 },
  { month: "May", followers: 20100 },
  { month: "Jun", followers: 22300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function CampaignPerformance() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 md:px-10 mb-12">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">
          Campaign Performance
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={campaignPerformanceData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Legend />
            <Bar dataKey="completion" name="Completion %" fill="#8884d8" />
            <Bar dataKey="revenue" name="Revenue ($)" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-end">
          <button className="text-blue-600 text-sm font-medium flex items-center">
            Manage Campaigns <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">
          Audience Demographics
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={audienceDemographicsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {audienceDemographicsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-end">
          <button className="text-blue-600 text-sm font-medium flex items-center">
            View Full Analytics <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
