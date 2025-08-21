import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const languages = [
  { name: 'English', code: '🇬🇧' },
  { name: 'Español', code: '🇪🇸' },
  { name: 'العربية', code: '🇸🇦' },
  { name: 'Deutsch', code: '🇩🇪' },
  { name: 'Français', code: '🇫🇷' },
  { name: 'Italiano', code: '🇮🇹' },
  { name: 'Filipino', code: '🇵🇭' },
  { name: 'हिन्दी', code: '🇮🇳' },
  { name: 'Nederlands', code: '🇳🇱' },
  { name: 'Português', code: '🇧🇷' },
  { name: 'Čeština', code: '🇨🇿' },
  { name: 'Polski', code: '🇵🇱' },
  { name: 'עברית', code: '🇮🇱' },
  { name: 'Bahasa Indonesia', code: '🇮🇩' },
  { name: '日本語', code: '🇯🇵' },
  { name: '한국어', code: '🇰🇷' },
  { name: '中文', code: '🇨🇳' },
  { name: 'Русский', code: '🇷🇺' },
  { name: 'Ελληνικά', code: '🇬🇷' },
  { name: 'Hrvatski', code: '🇭🇷' },
  { name: 'Türkçe', code: '🇹🇷' },
  { name: 'فارسی', code: '🇮🇷' },
  { name: 'Svenska', code: '🇸🇪' },
  { name: 'ไทย', code: '🇹🇭' },
];

const LanguageSelector = () => {
  const [selected, setSelected] = useState('English');
 const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
      <div className="w-full bg-white border-b border-gray-200 px-2 py-3 fixed top-0 z-10">
  <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
    <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-700 font-medium px-3 py-2 border rounded-md hover:bg-gray-100 transition">
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
    <button
      onClick={() => navigate("/platform/Role")}  // 👈 go to the "next" screen
      className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
    >
      Continue
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>


      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          🧠 Select Your Language
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Choose the language you'd like to use for your learning experience
        </p>
      </div>

      {/* Language Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl">
        {languages.map((lang) => (
          <button
            key={lang.name}
            onClick={() => setSelected(lang.name)}
            className={`flex items-center justify-between px-4 py-2 rounded-md border text-sm transition
              ${selected === lang.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
              hover:shadow-sm`}
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">{lang.code}</span>
              <span>{lang.name}</span>
            </span>
            {selected === lang.name && <Check className="w-4 h-4 text-blue-500" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
