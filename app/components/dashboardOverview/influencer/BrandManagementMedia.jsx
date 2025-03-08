export default function BrandManagementMedia() {
  return (
    <>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <button className="px-4 py-2 bg-indigo-600 text-white text-[10px] text-[10px] rounded hover:bg-indigo-700">
            New Contract
          </button>
        </div>

        <div className="overflow-hidden">
          <table className="w-fit divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-[8px] text-[10px] text-gray-500 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-3 py-3 text-left text-[8px] text-[10px] text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-3 py-3 text-left text-[8px] text-[10px] text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-3 py-3 text-left text-[8px] text-[10px] text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-3 py-3 text-left text-[8px] text-[10px] text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">Fashion Brand</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">$5,200</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">Jul 15, 2025</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <span className="px-3 inline-flex text-[8px] leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-[10px] text-indigo-600">
                  <button>View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">Tech Gadget</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">$4,100</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">-</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <span className="px-3 inline-flex text-[8px] leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Negotiating
                  </span>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-[10px] text-indigo-600">
                  <button>Review Proposal</button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">Beauty Co</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">$3,500</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-[10px] text-gray-900">Jun 30, 2025</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <span className="px-3 inline-flex text-[8px] leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Completed
                  </span>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-[10px] text-indigo-600">
                  <button>View Invoice</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
