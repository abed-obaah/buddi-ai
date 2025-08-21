import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [selected, setSelected] = useState('tutor');

  return (
    <div className="inline-flex border border-[#D6D6D6] rounded-lg bg-[#D6D6D6] p-1">
      <button
        onClick={() => setSelected('tutor')}
        className={`px-8 py-2 rounded-lg font-medium text-gray-700 transition-all duration-300 ${
          selected === 'tutor' ? 'bg-white shadow' : ''
        }`}
      >
        For Tutors
      </button>
      <button
        onClick={() => setSelected('student')}
        className={`px-6 py-2 rounded-lg font-medium text-gray-700 transition-all duration-300 ${
          selected === 'student' ? 'bg-white shadow' : ''
        }`}
      >
        For Students
      </button>
    </div>
  );
}
