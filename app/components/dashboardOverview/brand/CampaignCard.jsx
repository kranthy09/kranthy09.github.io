export default function CampaignCardComponent() {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-fit h-fit">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Summer Collection Launch</h3>
        <span className="px-2 py-1 ml-5 bg-green-100 text-green-800 rounded text-[10px]">
          Active
        </span>
      </div>
      <p className="text-[10px] text-gray-600 mb-3">Jun 5 - Jul 10, 2025</p>
      <div className="flex justify-between text-[10px] mb-4">
        <div>
          <p className="text-gray-500">Budget</p>
          <p className="text-[10px]">$15,000</p>
        </div>
        <div>
          <p className="text-gray-500">Influencers</p>
          <p className="text-[10px]">8 / 10</p>
        </div>
        <div>
          <p className="text-gray-500">Posts</p>
          <p className="text-[10px]">24 / 30</p>
        </div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div className="h-2 bg-indigo-600 rounded-full w-3/4"></div>
      </div>
    </div>
  );
}
