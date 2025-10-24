import React from "react";
import { FaFileAlt, FaChalkboardTeacher, FaFilePdf, FaVideo, FaMicrophone } from "react-icons/fa";
import imageTHAT from "../assets/graphic.png";

const features = [
  {
    icon: <FaFileAlt className="text-yellow-500 w-6 h-6" />,
    title: "Past Question Generator",
    description: "Instantly generate past questions tailored to your course and exam needs",
    bg: "bg-[#FFF5D9]",
  },
  {
    icon: <FaChalkboardTeacher className="text-rose-500 w-6 h-6" />,
    title: "Ai Tutor",
    description: "Get personalized guidance and real-time support with your AI-powered tutor",
    bg: "bg-[#FEE4E2]",
  },
  {
    icon: <FaFilePdf className="text-blue-600 w-6 h-6" />,
    title: "Pdf Summary",
    description: "Convert detailed notes into concise, shareable PDF summaries effortlessly",
    bg: "bg-[#E0EAFF]",
  },
  {
    icon: <FaVideo className="text-orange-500 w-6 h-6" />,
    title: "Virtual Campus",
    description: "Experience a connected learning environment with our immersive virtual campus",
    bg: "bg-[#FFE8D6]",
  },
  {
    icon: <FaMicrophone className="text-green-600 w-6 h-6" />,
    title: "Text to Voice",
    description: "Easily convert text into natural, clear speech for hands-free learning",
    bg: "bg-[#D7F5DC]",
  },
];

export default function WhyChooseUs() {
  return (
    // <section className="w-full py-12 px-4 sm:px-8">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="text-left mb-12 pl-4 sm:pl-0">
    //       <p className="text-gray-700 font-semibold">Our Reviews <span className="border-2 border-t border-black w-50 inline-block align-middle ml-2"></span></p>
    //       <h2 className="text-4xl md:text-5xl font-extrabold text-black mt-2">Why Choose Us?</h2>
    //     </div>

    //     {/* First Row - Wider */}
    //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full -mx-4 sm:mx-0">
    //       {features.slice(0, 3).map((feature, index) => (
    //         <div
    //           key={index}
    //           className={`rounded-3xl ${feature.bg} p-6 flex flex-col items-start  w-full max-w-xs mx-auto sm:max-w-none`}
    //         >
    //           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
    //             {feature.icon}
    //           </div>
    //           <h3 className="text-lg font-bold text-black mb-1 leading-tight">{feature.title}</h3>
    //           <p className="text-sm text-black leading-snug">
    //             {feature.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Second Row - Narrower and indented */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-3xl mx-auto">
    //       {features.slice(3).map((feature, index) => (
    //         <div
    //           key={index}
    //           className={`rounded-3xl ${feature.bg} p-6 flex flex-col items-start  w-full max-w-xs mx-auto sm:max-w-none`}
    //         >
    //           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
    //             {feature.icon}
    //           </div>
    //           <h3 className="text-lg font-bold text-black mb-1 leading-tight">{feature.title}</h3>
    //           <p className="text-sm text-black leading-snug">
    //             {feature.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="py-24 md:mt-[-70px] mt-0 mb-0 md:mb-[-70px] ">
           <div className="text-left mb-12 pl-4 sm:pl-0">
           <p className="text-gray-700 font-semibold">Our Reviews <span className="border-2 border-t border-black w-50 inline-block align-middle ml-2"></span></p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mt-2">Why Choose Us?</h2>
        </div>
  <div className="container ">
    <div className="relative rounded-[50px] bg-white p-8 lg:py-16">
      <div className="mx-auto max-w-[1500px] md:grid md:grid-cols-2 md:items-center md:gap-8 lg:gap-16">
      <div className="mb-16 text-center md:mb-0 md:text-left">
      <p className="font-semibold mb-3 w-72 rounded-2xl bg-[#F4F5F7] px-3 py-1 text-sm text-black mx-auto md:mx-0">
        Every Student Deserves a Smart Buddy.
      </p>

      <h1 className="mb-4 text-4xl leading-tight font-semibold text-black lg:text-5xl">
        Affordable, Accessible, and Inclusive
      </h1>

      <ul className="text-muted-foreground space-y-2 text-base list-disc list-inside md:list-outside md:pl-5 mx-auto md:mx-0 max-w-md">
        <li>Interactive & Engaging Learning Experience</li>
        <li>24/7 Smart Study Companion</li>
        <li>Smart Analytics & Progress Tracking</li>
      </ul>
    </div>

        <div className="mx-auto w-full max-w-[500px] md:mr-0 md:ml-auto">
          <img
            alt="Dashboard Interface"
            loading="lazy"
            width={600}
            height={450}
            decoding="async"
            data-nimg={1}
            className="h-full w-full object-cover"
          src={imageTHAT}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}