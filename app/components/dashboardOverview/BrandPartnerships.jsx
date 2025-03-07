export default function BrandPartnershipsComponent() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Secure Brand Partnerships
          </h3>
          <button className="text-indigo-600 text-sm font-medium">
            Browse Opportunities
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Fashion Brand</h4>
              <span className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded">
                Active
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Summer collection promotion • $5,200
            </p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              60% completed • Due in 14 days
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Tech Gadget</h4>
              <span className="text-sm bg-yellow-100 text-yellow-800 py-1 px-2 rounded">
                Negotiating
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Product review • $4,100 (proposed)
            </p>
            <button className="mt-2 text-sm text-indigo-600 font-medium">
              Review proposal
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-3">
        <button className="text-indigo-600 font-medium text-sm">
          View all partnerships
        </button>
      </div>
    </div>
  );
}
