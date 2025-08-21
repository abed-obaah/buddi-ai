import React from "react";
import { FaSmile, FaThumbsUp, FaHandshake, FaLink } from "react-icons/fa";

const stats = [
  {
    icon: <FaSmile className="text-gray-600 w-6 h-6" />,
    value: "1100",
    label: "Enrolled Student",
  },
  {
    icon: <FaThumbsUp className="text-gray-600 w-6 h-6" />,
    value: "780",
    label: "Academic Progress",
  },
  {
    icon: <FaHandshake className="text-gray-600 w-6 h-6" />,
    value: "82%",
    label: "Student Engagement",
  },
  {
    icon: <FaLink className="text-gray-600 w-6 h-6" />,
    value: "82%",
    label: "Student Connecting",
  },
];

export default function AchievementStats() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-36 text-center">
         <div className="max-w-7xl mx-auto">
      <div className="mb-10 text-left">
        <p className="text-left  text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
          SOME FUN FACT <span className="w-12 h-px bg-black inline-block"></span>
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-black mt-2">
          Our <span className="text-black">Great</span> <span className="text-gray-700 border-b-4 border-gray-400 pb-1 inline-block">Achievement</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2">{stat.icon}</div>
            <p className="text-xl md:text-2xl font-bold text-[#001244]">{stat.value}</p>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
