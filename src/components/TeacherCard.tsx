import React from "react";
import { FaFileAlt, FaChalkboardTeacher, FaFilePdf, FaVideo, FaMicrophone } from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt className="text-yellow-500 w-6 h-6" />,
    title: "Lesson Planner Generator",
    description: "Instantly generate past questions tailored to your course and exam needs",
    bg: "bg-[#D7F5DC]",
  },
  {
    icon: <FaChalkboardTeacher className="text-rose-500 w-6 h-6" />,
    title: "Teacher Assistant",
    description: "Get personalized guidance and real-time support with your AI-powered tutor",
    bg: "bg-[#FEE4E2]",
  },
  {
    icon: <FaFilePdf className="text-blue-600 w-6 h-6" />,
    title: "Exam Question Generator",
    description: "Convert detailed notes into concise, shareable PDF summaries effortlessly",
    bg: "bg-[#FFE8D6]",
  },
//   {
//     icon: <FaVideo className="text-orange-500 w-6 h-6" />,
//     title: "Virtual Campus",
//     description: "Experience a connected learning environment with our immersive virtual campus",
//     bg: "bg-[#FFE8D6]",
//   },
//   {
//     icon: <FaMicrophone className="text-green-600 w-6 h-6" />,
//     title: "Text to Voice",
//     description: "Easily convert text into natural, clear speech for hands-free learning",
//     bg: "bg-[#D7F5DC]",
//   },
];

export default function Teacher() {
  return (
    <section className="py-24 md:mt-[-70px] mt-0 mb-0 md:mb-[-70px]">
      {/* Heading section placed outside the max-w-7xl container */}
      <div className="text-left mb-12 pl-4 sm:pl-0 mx-auto max-w-[1400px]">
        <p className="text-gray-700 font-semibold">Our Reviews <span className="border-2 border-t border-black w-50 inline-block align-middle ml-2"></span></p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mt-2">Why Tutors Choose Edgio</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* First Row - Wider */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full -mx-4 sm:mx-0">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className={`rounded-3xl ${feature.bg} p-6 flex flex-col items-start  w-full max-w-xs mx-auto sm:max-w-none`}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-1 leading-tight">{feature.title}</h3>
              <p className="text-sm text-black leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - Narrower and indented */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-3xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className={`rounded-3xl ${feature.bg} p-6 flex flex-col items-start  w-full max-w-xs mx-auto sm:max-w-none`}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-1 leading-tight">{feature.title}</h3>
              <p className="text-sm text-black leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}