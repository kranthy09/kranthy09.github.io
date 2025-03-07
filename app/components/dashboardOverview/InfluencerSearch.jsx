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
import Image from "next/image";
import CampaignCardComponent from "./brand/CampaignCard";
import MetricsSummaryComponent from "./brand/RoiAnalytics";

export default function InfluenceSearchComponent() {
  return (
    <div className="grid w-fit grid-cols-1 gap-6">
      <div className="bg-white rounded-lg shadow overflow-hidden mt-20">
        <div className="flex-1">
          <div className="md:hidden flex-col">
            <CampaignCardComponent />
          </div>
          <div className="md:hidden flex-col">
            <MetricsSummaryComponent />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search influencers by name, niche, or location"
              className="block text-[10px] w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="relative h-48 bg-indigo-100">
          <Image
            src={"/user-pic-1.avif"}
            alt={"User Profile Picture"}
            fill
            className="h-full w-full object-cover rounded-lg object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-[12px] font-semibold">
              Sarah Johnson
            </h3>
            <p className="text-white/80 text-[10px]">@sarahlovesfashion</p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between mb-3">
            <div>
              <p className="text-[12px] text-gray-500">Fashion & Lifestyle</p>
            </div>
            <div className="bg-green-100 text-green-800 px-2 py-1 ml-10 rounded text-[10px]">
              5.2% Engagement
            </div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-600 mb-4">
            <div>
              <p>
                <strong>125K</strong> Followers
              </p>
            </div>
            <div>
              <p>
                <strong>$1.2K</strong> Est. Cost
              </p>
            </div>
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-[10px]">
            View Profile
          </button>
          <div className="hidden md:block md:absolute md:top-0 md:right-20">
            <CampaignCardComponent />
          </div>
          <div className="hidden md:block md:absolute md:bottom-0 md:right-20">
            <MetricsSummaryComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
