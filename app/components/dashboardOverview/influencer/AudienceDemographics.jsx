export default function AudienceDemographics() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Audience Demographics
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-lg text-gray-700">18-24</span>
              <span className="text-lg font-medium text-gray-900">38%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "38%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-lg text-gray-700">25-34</span>
              <span className="text-lg font-medium text-gray-900">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-lg text-gray-700">35-44</span>
              <span className="text-lg font-medium text-gray-900">12%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "12%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-lg text-gray-700">45+</span>
              <span className="text-lg font-medium text-gray-900">5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "5%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
