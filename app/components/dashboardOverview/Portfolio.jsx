import { Award } from "lucide-react";

export default function PortfolioComponent() {
  return (
    <div className="h-fit bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold text-gray-800">
            Build Your Portfolio
          </h3>
          <button className="text-indigo-600 text-[10px] font-medium">
            View All
          </button>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="p-3 rounded-full bg-pink-100 text-pink-600 flex-shrink-0">
            <Award size={16} />
          </div>
          <div>
            <h4 className="text-md">Instagram</h4>
            <p className="text-[10px] text-gray-600">
              5.2K followers • 4.8% engagement
            </p>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="p-3 rounded-full bg-red-100 text-red-600 flex-shrink-0">
            <Award size={16} />
          </div>
          <div>
            <h4 className="font-medium">YouTube</h4>
            <p className="text-[10px] text-gray-600">
              2.1K subscribers • 6.3K views/video
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-3">
        <button className="text-indigo-600 font-medium text-[10px]">
          Connect more platforms +
        </button>
      </div>
    </div>
  );
}
