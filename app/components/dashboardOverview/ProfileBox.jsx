import React from "react";
import { User, Users, Heart } from "lucide-react";
import Image from "next/image";

const images = [
  {
    src: "/user-posts.svg",
    alt: "Mountain landscape with lake",
    id: "img1",
  },
  {
    src: "/user-posts-3.svg",
    alt: "Portrait of a person smiling",
    id: "img2",
  },
];

const userImage = {
  src: "/user-pic-3.jpg",
  alt: "User Profile Picture",
  id: "userimg1",
};

export default function ProfileBoxUI() {
  return (
    <div className="h-fit bg-gray-800/60">
      <div className="grid grid-cols-12 gap-1 rounded-lg p-4 mt-10 shadow-md">
        {/* Column 1: User Image */}
        <div className="col-span-2 flex h-[86px]">
          <Image
            src={userImage.src}
            alt={userImage.alt}
            height={180}
            width={180}
            className="object-cover"
          />
        </div>

        {/* Column 2: User Info */}
        <div className="col-span-4 flex flex-col pl-4">
          {/* Row 1: Name */}
          <div className="mb-1">
            <h2 className="text-xs font-bold text-white truncate">Jane Doe</h2>
          </div>

          {/* Row 2: Bio Text */}
          <div className="mb-1">
            <p className="text-[10px] text-white line-clamp-2">
              Showing you gems around the world
            </p>
          </div>

          {/* Row 3: Stats with icons */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <Users className="mr-1 text-white" size={10} />
              <span className="text-[8px] text-white">
                <span className="font-semibold">2.4k</span> Followers
              </span>
            </div>

            <div className="flex items-center">
              <Heart className="mr-1 text-red-500" size={10} />
              <span className="text-[8px] text-white">
                <span className="font-semibold">12.5k</span> Engagement
              </span>
            </div>
          </div>
        </div>

        {/* Column 3: User Posts */}
        <div className="col-span-4 flex justify-center items-center">
          <div className="grid grid-cols-2 gap-2 h-[80px]">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={90}
                  width={60}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Audience Demographics */}
        <div className="col-span-2">
          <div className="space-y-1">
            <div>
              <div className="flex justify-between">
                <span className="text-[8px] text-white">18-24</span>
                <span className="text-[8px] font-medium text-white">38%</span>
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
                <span className="text-[8px] text-white">25-34</span>
                <span className="text-[8px] font-medium text-white">45%</span>
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
                <span className="text-[8px] text-white">35-44</span>
                <span className="text-[8px] font-medium text-white">12%</span>
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
                <span className="text-[8px] text-white">45+</span>
                <span className="text-[8px] font-medium text-white">5%</span>
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
