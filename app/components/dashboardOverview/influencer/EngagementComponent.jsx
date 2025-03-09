export default function EngagementComponent() {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full ml-5">
      <h3 className="text-[14px] mb-4">Engagement by Platform</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-[10px]">Instagram</span>
            <span className="text-[10px]">68%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: "68%" }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-[10px]">YouTube</span>
            <span className="text-[10px]">32%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: "32%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-[10px]">Twitter</span>
            <span className="text-[10px]">21%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: "21%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
