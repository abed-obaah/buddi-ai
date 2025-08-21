import React from "react";
import buddyImg from "../assets/buddy.png";
import { LuUpload } from "react-icons/lu";
import { AiFillAudio } from "react-icons/ai";

export default function BuddyUI() {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center">
      {/* Enhanced Bottom Overlay */}
     <div className="absolute bottom-0 w-[500px] h-[300px] bg-gradient-to-t from-white via-white/100 to-white/30 z-20" />



      {/* Extremely Widely Spaced Cards */}
      <div className="absolute bottom-52 w-[800px] z-20 px-4">
        <div className="flex justify-between w-full max-w-[2400px] mx-auto">
          {/* Left Card - Extra Wide */}
 <div className="relative w-full max-w-[800px] transform -translate-x-48 ml-6 z-60">
  {/* Floating Header */}
  <div className="absolute -top-5 left-4 flex justify-between items-start w-[calc(100%-2rem)]">
    <p className="text-sm text-gray-900 font-medium">Buddy</p>
    <span className="text-xs text-gray-500">Just now</span>
  </div>

  {/* Card */}
  <div className="bg-[#3333334D] border-[#3333334D] rounded-lg p-4 pt-8 shadow-md">
   <p className="text-left text-gray-700 text-sm leading-snug mb-2">
  "Hey there! Excited to explore text-to-speech? Whether you want to convert articles, lessons, or presentations into natural-sounding audio, I've got you covered."
</p>

  </div>
  <div className="mt-3">
    <input
      type="text"
      placeholder="Insert Text"
      className="w-full px-3 py-2.5 border rounded-lg text-sm mb-2"
    />
    <button className="w-full bg-[#333333] text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
      <AiFillAudio />
       Generate Audio
    </button>
  </div>
</div>




          {/* Right Card - Extra Wide */}
  <div className="relative w-full max-w-[1100px] transform -translate-y-28 translate-x-32 mr-2 z-30">
  {/* Floating Header */}
  <div className="absolute -top-5 left-4 flex justify-between items-start w-[calc(100%-2rem)]">
    <p className="text-sm text-gray-900 font-medium">Buddy</p>
    <span className="text-xs text-gray-500">Just now</span>
  </div>

  {/* Card */}
  <div className="bg-[#3333334D] border-[#3333334D] rounded-lg px-4 pt-8 pb-3 w-full shadow-md">
   <p className="text-left text-gray-700 text-sm leading-snug mb-2">
  "Hi there! I'm Buddy. Ready to dive into generating some educational PDFs? Whether you're creating lesson plans, student handouts, quizzes, or detailed reports, I'm here to help you every step of the way."
</p>

  </div>
    <div className="mt-3">
    <button className="w-full border border-[#3333334D] bg-transparent text-[#333333] px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
        {/* Upload Icon */}
      <LuUpload />
        Insert PDF
      </button>
  </div>
</div>



        </div>
      </div>

      {/* Centered Buddy Image */}
     <div className="relative h-[750px] overflow-hidden flex items-start justify-center z-10">
  <img
    src={buddyImg}
    alt="Buddy"
    className="w-[380px] sm:w-[500px]"
  />
</div>

    </div>
  );
}