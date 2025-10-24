// ToggleSwitch.jsx
import React from 'react';

export default function ToggleSwitch({ selected, onChange }) {
  return (
    <div className="inline-flex border border-[#D6D6D6] rounded-lg bg-gray-200 p-1">
      <button
        onClick={() => onChange('tutor')}
        className={`px-8 py-2 rounded-lg font-medium text-gray-700 transition-all duration-300 ${
          selected === 'tutor' ? 'bg-white shadow' : ''
        }`}
      >
        For Tutors
      </button>
      <button
        onClick={() => onChange('student')}
        className={`px-6 py-2 rounded-lg font-medium text-gray-700 transition-all duration-300 ${
          selected === 'student' ? 'bg-white shadow' : ''
        }`}
      >
        For Students
      </button>
    </div>
  );
}
