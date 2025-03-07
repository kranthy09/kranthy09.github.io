export default function MetricsSummaryComponent() {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6 w-fit">
      <div className="bg-white rounded-lg shadow p-4 w">
        <p className="text-[10px] text-gray-500 mb-1">Total Spend</p>
        <h3 className="text-[12px] font-semibold text-gray-800">$45,320</h3>
        <p className="text-[8px] text-green-600 mt-1">+12% from last quarter</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 w-fit">
        <p className="text-[10px] text-gray-500 mb-1">Impressions</p>
        <h3 className="text-[12px] font-semibold text-gray-800">3.2M</h3>
        <p className="text-[8px] text-green-600 mt-1">+24% from last quarter</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 w-fit">
        <p className="text-[10px] text-gray-500 mb-1">Engagement Rate</p>
        <h3 className="text-[12px] font-semibold text-gray-800">4.8%</h3>
        <p className="text-[8px] text-green-600 mt-1">+1.2% from last quarter</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 w-fit">
        <p className="text-[10px] text-gray-500 mb-1">Conversion Rate</p>
        <h3 className="text-[12px] font-semibold text-gray-800">2.3%</h3>
        <p className="text-[8px] text-green-600 mt-1">+0.5% from last quarter</p>
      </div>
    </div>
  );
}
