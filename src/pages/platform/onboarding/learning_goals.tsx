import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const supportOptions = [
    { id: 1, name: "Exam preparation", icon: "target" },
    { id: 2, name: "Flashcard creation", icon: "book-open-check" },
    { id: 3, name: "Study planning", icon: "calendar" },
    { id: 4, name: "Homework help", icon: "clipboard-check" },
    { id: 5, name: "Essay feedback", icon: "pen-tool" },
    { id: 6, name: "Live lecture notes", icon: "mic" },
    { id: 7, name: "Visual learning", icon: "video" },
    { id: 8, name: "Audio learning", icon: "headphones" },
    { id: 9, name: "Concept understanding", icon: "lightbulb" },
    { id: 10, name: "Content summarization", icon: "file-text" }
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOptions(prev => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      } else {
        return [...prev, optionId];
      }
    });
  };

  const handleContinue = () => {
    // Handle the continue action here
    console.log("Selected options:", selectedOptions);
    // Navigate to the next page
    navigate("/platform/goals_support");
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "target":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <circle cx={12} cy={12} r={10} />
            <circle cx={12} cy={12} r={6} />
            <circle cx={12} cy={12} r={2} />
          </svg>
        );
      case "book-open-check":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-check w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="M12 21V7" />
            <path d="m16 12 2 2 4-4" />
            <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
          </svg>
        );
      case "calendar":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width={18} height={18} x={3} y={4} rx={2} />
            <path d="M3 10h18" />
          </svg>
        );
      case "clipboard-check":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="m9 14 2 2 4-4" />
          </svg>
        );
      case "pen-tool":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
            <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
            <path d="m2.3 2.3 7.286 7.286" />
            <circle cx={11} cy={11} r={2} />
          </svg>
        );
      case "mic":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1={12} x2={12} y1={19} y2={22} />
          </svg>
        );
      case "video":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x={2} y={6} width={14} height={12} rx={2} />
          </svg>
        );
      case "headphones":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
          </svg>
        );
      case "lightbulb":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        );
      case "file-text":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      data-is-root-theme="true"
      data-accent-color="indigo"
      data-gray-color="slate"
      data-has-background="true"
      data-panel-background="translucent"
      data-radius="medium"
      data-scaling="100%"
      className="radix-themes"
    >
      <div className="w-screen h-screen flex flex-row" id="platform-layout">
        <div className="flex-1 bg-white dark:bg-dark w-full overflow-y-auto z-10 self-stretch">
          <div className="w-full h-screen flex flex-row">
            <div
              className="relative overflow-hidden"
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                overflow: "hidden",
                width: "100%",
              }}
              data-panel-group
              data-panel-group-direction="horizontal"
              data-panel-group-id="«Rkmpqmomnb»"
            >
              <div
                className="flex flex-col h-full overflow-hidden md:border-r border-r-slate-100 dark:border-r-[#AB9FF2] dark:border-opacity-20 relative "
                style={{ flex: "1 1 0px", overflow: "hidden" }}
                data-panel
                data-panel-group-id="«Rkmpqmomnb»"
                data-panel-id="«R3kmpqmomnb»"
                data-panel-size={1.0}
              >
                <div className="h-full w-full flex flex-col overflow-y-auto relative">
                  <div className="overflow-y-auto w-full h-full flex flex-col">
                    <div>
                      <main className="w-full h-full overflow-y-auto dark:bg-dark">
                        <div className="w-full max-w-screen-2xl mx-auto relative">
                          <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-50">
                            <div
                              className="h-full bg-blue"
                              style={{ width: "46.1538%" }}
                            />
                          </div>
                          <div
                            className="min-h-screen"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="flex flex-col relative h-screen w-full overflow-hidden">
                              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between gap-4 px-4 py-4 bg-white/90 dark:bg-dark/90 lg:bg-transparent lg:dark:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
                                <button
                                  onClick={() => navigate(-1)}
                                  aria-busy="false"
                                  className="px-4 py-2.5 text-[1rem] font-semibold min-h-[44px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
                                  aria-disabled="false"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-left w-5 h-5"
                                    aria-hidden="true"
                                  >
                                    <path d="m15 18-6-6 6-6" />
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div className="flex-1 overflow-y-auto pt-[72px] scrollbar:w-[5px]">
                                <div className="flex md:items-center justify-center min-h-full py-2 px-2 md:p-8">
                                  <div className="max-w-4xl w-full">
                                    <div className="text-center mb-8">
                                      <div className="flex justify-center md:mb-6">
                                        <img
                                          alt="Sparke learning goals sticker"
                                          loading="lazy"
                                          width={120}
                                          height={120}
                                          decoding="async"
                                          data-nimg={1}
                                          className="hidden md:block w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
                                          srcSet="/_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F38.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F38.png&w=256&q=75 2x"
                                          src="/_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F38.png&w=256&q=75"
                                          style={{ color: "transparent" }}
                                        />
                                      </div>
                                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                        Where can you use the most support?
                                      </h1>
                                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                        Choose what you'd like help with to
                                        customize your experience
                                      </p>
                                    </div>
                                    <div className="space-y-6">
                                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {supportOptions.map((option) => (
                                          <button
                                            key={option.id}
                                            className={`flex items-start gap-3 px-2 lg:px-5 py-2 rounded-lg border transition-all duration-200 hover:shadow-sm text-left ${
                                              selectedOptions.includes(option.id)
                                                ? "border-blue bg-blue/5 text-blue"
                                                : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                                            }`}
                                            onClick={() => handleOptionSelect(option.id)}
                                          >
                                            {getIconComponent(option.icon)}
                                            <span className="text-sm md:text-lg font-medium">
                                              {option.name}
                                            </span>
                                          </button>
                                        ))}
                                      </div>
                                      
                                      {/* Continue button */}
                                      {selectedOptions.length > 0 && (
                                        <div className="flex justify-center pt-4">
                                          <button
                                          onClick={handleContinue}
                                          className="w-full max-w-md px-16 py-4 bg-blue-500 text-white font-semibold border-blue-600 rounded-lg hover:bg-blue-600 hover:border-blue-700 transition-all duration-200 shadow-md"
                                        >
                                          Continue
                                        </button>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </main>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}