import React from "react";
import { User, Users, Heart } from "lucide-react";
import Image from "next/image";

export default function ProfileBoxUI() {
  return (
    <div className="w-[350px] h-[200px]">
      <div className="grid grid-cols-12 gap-1 border rounded-lg p-2 shadow-md">
        {/* Column 1: User Image */}
        <div className="col-span-2 flex justify-center items-center">
          <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
            <User size={20} className="text-gray-500" />
          </div>
        </div>

        {/* Column 2: User Info */}
        <div className="col-span-4 flex flex-col pr-1">
          {/* Row 1: Name */}
          <div className="mb-1">
            <h2 className="text-xs font-bold text-gray-800 truncate">
              Jane Doe
            </h2>
          </div>

          {/* Row 2: Bio Text */}
          <div className="mb-1">
            <p className="text-[10px] text-gray-600 line-clamp-2">
              Product designer and developer specializing in UI/UX. Creating
              intuitive interfaces.
            </p>
          </div>

          {/* Row 3: Stats with icons */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <Users className="mr-1 text-blue-500" size={10} />
              <span className="text-[8px] text-gray-700">
                <span className="font-semibold">2.4k</span> Followers
              </span>
            </div>

            <div className="flex items-center">
              <Heart className="mr-1 text-red-500" size={10} />
              <span className="text-[8px] text-gray-700">
                <span className="font-semibold">12.5k</span> Engagement
              </span>
            </div>
          </div>
        </div>

        {/* Column 3: User Posts */}
        <div className="col-span-2 flex justify-center items-center">
          <div className="bg-gray-200 w-24 h-24 flex items-center justify-center">
            <Image src={"./file.svg"} alt="User Post" height={24} width={24} />
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="bg-gray-200 w-24 h-24 flex items-center justify-center">
            <Image src={"./globe.svg"} alt="User Post" height={24} width={24} />
          </div>
        </div>

        {/* Column 4: Audience Demographics */}
        <div className="col-span-2 border-l pl-1">
          <div className="space-y-1">
            <div>
              <div className="flex justify-between">
                <span className="text-[8px] text-gray-600">18-24</span>
                <span className="text-[8px] font-medium text-gray-700">
                  38%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-blue-600 h-1 rounded-full"
                  style={{ width: "38%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="text-[8px] text-gray-600">25-34</span>
                <span className="text-[8px] font-medium text-gray-700">
                  45%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-blue-600 h-1 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="text-[8px] text-gray-600">35-44</span>
                <span className="text-[8px] font-medium text-gray-700">
                  12%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-blue-600 h-1 rounded-full"
                  style={{ width: "12%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="text-[8px] text-gray-600">45+</span>
                <span className="text-[8px] font-medium text-gray-700">5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-blue-600 h-1 rounded-full"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
