"use client";
import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
export default function NetworkingComponent() {
  const influencers = [
    {
      id: 1,
      name: "Alex Morgan",
      handle: "@alexcreates",
      avatar: "/influencer-1.jpg",
      category: "Lifestyle & Fashion",
      followers: "1.2M",
      engagement: "4.8%",
      rating: 4.9,
      verified: true,
    },
    {
      id: 2,
      name: "Jamie Chen",
      handle: "@jamietech",
      avatar: "/influencer-2.avif",
      category: "Technology",
      followers: "850K",
      engagement: "5.2%",
      rating: 4.7,
      verified: true,
    },
    {
      id: 3,
      name: "Taylor Wilson",
      handle: "@taylorfit",
      avatar: "/influencer-3.webp",
      category: "Fitness & Health",
      followers: "2.1M",
      engagement: "3.9%",
      rating: 4.6,
      verified: false,
    },
  ];

  return (
    <ul>
      {influencers.map((influencer) => (
        <li
          key={influencer.id}
          className="border-b w-fit last:border-0 p-4 hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={influencer.avatar}
                alt={influencer.name}
                width={64}
                height={64}
                className="object-cover rounded-full w-full h-full"
              />
              <div className="ml-4">
                <div className="flex items-center">
                  <h4 className="text-[14px]">{influencer.name}</h4>
                  {influencer.verified && (
                    <span className="text-[10px] ml-1 text-blue-500">✓</span>
                  )}
                </div>
                <p className="text-[10px] text-gray-500">{influencer.handle}</p>
                <p className="text-[10px]">{influencer.category}</p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-[12px] ml-1">{influencer.rating}</span>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-1 rounded-md text-[10px] hover:bg-indigo-700">
                Connect
              </button>
            </div>
          </div>

          <div className="flex space-x-4 mt-3 ml-16">
            <div className="bg-gray-100 px-3 py-1 rounded-full text-[10px]">
              {influencer.followers} followers
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded-full text-[10px]">
              {influencer.engagement} engagement
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
