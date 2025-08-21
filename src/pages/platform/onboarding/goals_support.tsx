import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RoleSelection() {
//   const [selectedRole, setSelectedRole] = useState("student");
  const navigate = useNavigate();


    const handleContinue = () => {
    // Handle the continue action here
    // console.log("Selected options:", selectedOptions);
    // Navigate to the next page
    navigate("/platform/study_set");
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
                                style={{ width: "53.8462%" }}
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
                                 <button
                                 onClick={handleContinue}
                                    aria-busy="false"
                                    className="px-6 py-3 text-[1rem] font-semibold min-h-[44px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
                                    bg-blue-500 hover:bg-blue-600 text-white 
                                    border-2 border-blue-600 hover:border-blue-700 
                                    focus:ring-blue-500 dark:focus:ring-blue-400 
                                    focus:ring-offset-white dark:focus:ring-offset-gray-900 
                                    inline-flex gap-2 justify-center items-center shadow-md"
                                    aria-disabled="false"
                                  >
                                    Continue
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
                                      className="lucide lucide-arrow-right w-5 h-5"
                                      aria-hidden="true"
                                    >
                                      <path d="M5 12h14" />
                                      <path d="m12 5 7 7-7 7" />
                                    </svg>
                                  </button>

                                </div>
                                <div className="flex-1 overflow-y-auto pt-[72px] scrollbar:w-[5px]">
                                  <div className="flex flex-col items-center md:justify-center min-h-full">
                                    <div className="w-full max-w-6xl mx-auto py-2 px-4 md:px-8 md:py-4">
                                      <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                                        <div className="flex justify-center mb-2 sm:mb-4">
                                          <img
                                            alt="Sparke excited sticker"
                                            loading="lazy"
                                            width={100}
                                            height={100}
                                            decoding="async"
                                            data-nimg={1}
                                            className="hidden md:block w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                                            srcSet="/_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F7.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F7.png&w=256&q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F7.png&w=256&q=75"
                                            style={{ color: "transparent" }}
                                          />
                                        </div>
                                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary dark:text-white mb-1">
                                          Here's How StudyFetch Helps With Exam
                                          Preparation
                                        </h1>
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                          Comprehensive exam preparation powered
                                          by AI
                                        </p>
                                      </div>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
                                        <div className="rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
                                          <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl flex-shrink-0 bg-purple/10">
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
                                                className="lucide lucide-file-question w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple"
                                              >
                                                <path d="M12 17h.01" />
                                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                                                <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
                                              </svg>
                                            </div>
                                            <div>
                                              <h3 className="text-sm sm:text-base font-semibold text-primary dark:text-white mb-1 sm:mb-2">
                                                Practice Exam Generation
                                              </h3>
                                              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                Generate practice exams from
                                                your study materials
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
                                          <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl flex-shrink-0 bg-yellow/10">
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
                                                className="lucide lucide-bot w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow"
                                              >
                                                <path d="M12 8V4H8" />
                                                <rect
                                                  width={16}
                                                  height={12}
                                                  x={4}
                                                  y={8}
                                                  rx={2}
                                                />
                                                <path d="M2 14h2" />
                                                <path d="M20 14h2" />
                                                <path d="M15 13v2" />
                                                <path d="M9 13v2" />
                                              </svg>
                                            </div>
                                            <div>
                                              <h3 className="text-sm sm:text-base font-semibold text-primary dark:text-white mb-1 sm:mb-2">
                                                24/7 AI Tutor
                                              </h3>
                                              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                AI tutor available 24/7 for
                                                instant explanations
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
                                          <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl flex-shrink-0 bg-green/10">
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
                                                className="lucide lucide-timer w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green"
                                              >
                                                <line
                                                  x1={10}
                                                  x2={14}
                                                  y1={2}
                                                  y2={2}
                                                />
                                                <line
                                                  x1={12}
                                                  x2={15}
                                                  y1={14}
                                                  y2={11}
                                                />
                                                <circle cx={12} cy={14} r={8} />
                                              </svg>
                                            </div>
                                            <div>
                                              <h3 className="text-sm sm:text-base font-semibold text-primary dark:text-white mb-1 sm:mb-2">
                                                Timed Practice
                                              </h3>
                                              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                Timed practice sessions to
                                                improve speed
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                        <div className="bg-purple/20 dark:bg-purple/10 rounded-lg p-3 sm:p-4 lg:p-6 text-center col-span-2 sm:col-span-1">
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
                                            className="lucide lucide-brain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple mx-auto mb-2 sm:mb-3"
                                          >
                                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                            <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                                          </svg>
                                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                                            AI-Powered Learning
                                          </h3>
                                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                            Personalized to your needs
                                          </p>
                                        </div>
                                        <div className="bg-yellow/20 dark:bg-yellow/10 rounded-lg p-3 sm:p-4 lg:p-6 text-center">
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
                                            className="lucide lucide-clock w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow mx-auto mb-2 sm:mb-3"
                                          >
                                            <circle cx={12} cy={12} r={10} />
                                            <polyline points="12 6 12 12 16 14" />
                                          </svg>
                                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                                            Save Time
                                          </h3>
                                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                            Study smarter, not harder
                                          </p>
                                        </div>
                                        <div className="bg-green/20 dark:bg-green/10 rounded-lg p-3 sm:p-4 lg:p-6 text-center">
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
                                            className="lucide lucide-target w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green mx-auto mb-2 sm:mb-3"
                                          >
                                            <circle cx={12} cy={12} r={10} />
                                            <circle cx={12} cy={12} r={6} />
                                            <circle cx={12} cy={12} r={2} />
                                          </svg>
                                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                                            Achieve Your Goals
                                          </h3>
                                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                            Track progress &amp; improve
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </main>
                        {/*$*/}
                        {/*/$*/}
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
