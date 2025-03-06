import { TrendingUp, Users, ShoppingBag, FileText, Star } from "lucide-react";

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-2 gap-3 px-6 md:px-10 mb-12">
      <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Users className="h-2 w-2 text-blue-600" />
          </div>
          <h3 className="ml-3 font-semibold text-sm text-gray-800">
            Total Audience
          </h3>
        </div>
        <p className="text-md font-bold text-gray-800">22.3K</p>
        <p className="text-green-600 flex items-center text-sm mt-1">
          <TrendingUp className="h-2 w-2 mr-1" />
          +11.2% from last month
        </p>
      </div>

      <div className="bg-green-50 rounded-xl p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Star className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="ml-3 font-semibold text-lg text-gray-800">
            Avg. Engagement
          </h3>
        </div>
        <p className="text-3xl font-bold text-gray-800">6.8%</p>
        <p className="text-green-600 flex items-center text-sm mt-1">
          <TrendingUp className="h-4 w-4 mr-1" />
          +0.5% from last month
        </p>
      </div>

      <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <ShoppingBag className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="ml-3 font-semibold text-lg text-gray-800">
            Active Campaigns
          </h3>
        </div>
        <p className="text-3xl font-bold text-gray-800">4</p>
        <p className="text-gray-500 text-sm mt-1">2 pending approval</p>
      </div>

      <div className="bg-amber-50 rounded-xl p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-amber-100 rounded-lg">
            <FileText className="h-6 w-6 text-amber-600" />
          </div>
          <h3 className="ml-3 font-semibold text-lg text-gray-800">
            Total Earnings
          </h3>
        </div>
        <p className="text-3xl font-bold text-gray-800">$14,300</p>
        <p className="text-green-600 flex items-center text-sm mt-1">
          <TrendingUp className="h-4 w-4 mr-1" />
          +$3,800 from last month
        </p>
      </div>
    </div>
  );
}
