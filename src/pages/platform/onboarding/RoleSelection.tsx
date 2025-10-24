import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const roles = [
  {
    id: "student",
    label: "Student",
    description: "I'm here to study and learn",
    icon: "🎓",
  },
  {
    id: "teacher",
    label: "Teacher",
    description: "I'm here to create content for my students",
    icon: "👩‍🏫",
  },
  {
    id: "professor",
    label: "Professor",
    description: "I'm an educator at a higher education institution",
    icon: "🏛️",
  },
  {
    id: "parent",
    label: "Parent",
    description: "I'm here to support my child's learning",
    icon: "🏠",
  },
];

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState("student");
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10">
         <div className="w-full bg-white border-b border-gray-200 px-2 py-3 fixed top-0 z-10">
  <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
    <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-700 font-medium px-3 py-2 border rounded-md hover:bg-gray-100 transition">
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
    <button   onClick={() => navigate("/platform/how_you_heard")} className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition">
      Continue
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          How will you use Edgio?
        </h1>
        <p className="text-center text-lg text-gray-500 mb-12">
          This helps us personalize your experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`flex flex-col items-center p-8 border-2 rounded-2xl transition-all duration-200 ease-in-out focus:outline-none text-center ${
                selectedRole === role.id
                  ? "bg-blue-100 border-blue-500 ring-4 ring-blue-300 scale-105"
                  : "border-gray-200 hover:shadow-xl"
              }`}
            >
              <div
                className={`text-5xl mb-4 ${
                  selectedRole === role.id ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {role.icon}
              </div>
              <p className="text-xl font-semibold text-gray-800">{role.label}</p>
              <p className="text-md text-gray-500 mt-2">
                {role.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-xl transition-all">
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
