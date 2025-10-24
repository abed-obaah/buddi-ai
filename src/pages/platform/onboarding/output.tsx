import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";


export default function RoleSelection() {
//   const [selectedRole, setSelectedRole] = useState("student");

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
                          style={{ width: "90.9091%" }}
                        />
                      </div>
                      <div
                        className="min-h-screen"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <div className="flex flex-col relative h-screen w-full overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between gap-4 px-4 py-4 bg-white/90 dark:bg-dark/90 lg:bg-transparent lg:dark:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
                            <button
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
                              aria-busy="false"
                              className="px-4 py-2.5 text-[1rem] font-semibold min-h-[44px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-blue hover:bg-blue2 text-white border border-blue hover:border-blue2 focus:ring-blue dark:focus:ring-blue2 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
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
                            <div className="flex flex-wrap">
                              <div className="w-full md:w-1/2 lg:w-3/5 p-4">
                                <div className="max-w-2xl mx-auto">
                                  <div className="flex items-start gap-3 mb-10">
                                    <div className="p-2 bg-blue/10 rounded-lg">
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
                                        className="lucide lucide-sparkles w-6 h-6 text-blue"
                                      >
                                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                        <path d="M20 3v4" />
                                        <path d="M22 5h-4" />
                                        <path d="M4 17v2" />
                                        <path d="M5 18H3" />
                                      </svg>
                                    </div>
                                    <div>
                                      <h2 className="text-2xl font-bold text-primary dark:text-white">
                                        Example Preview of Study Plan
                                      </h2>
                                      <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Here is an example of what your study
                                        plan would look like if you uploaded
                                        materials, we break down complex
                                        materials into digestible steps for
                                        efficient learning
                                      </p>
                                    </div>
                                  </div>
                                  <div className="relative max-w-2xl mx-auto mt-8">
                                    <div
                                      className="absolute left-[30px] top-[32px] w-1 bg-gradient-to-b from-gray-300/50 via-gray-300/70 to-gray-300/50 dark:from-gray-600/50 dark:via-gray-600/70 dark:to-gray-600/50 rounded-full"
                                      style={{ height: "436px" }}
                                    />
                                    <div className="flex flex-col gap-8">
                                      <div className="relative flex items-center gap-6 flex-row">
                                        <div>
                                          <button className="text-left relative flex-shrink-0 group transition-all duration-300">
                                            <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20 dark:group-hover:shadow-white/10">
                                              <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-500 dark:group-hover:bg-gray-500" />
                                              <svg className="absolute inset-0 w-full h-full -rotate-90">
                                                <circle
                                                  cx={32}
                                                  cy={32}
                                                  r={28}
                                                  stroke="currentColor"
                                                  strokeWidth={4}
                                                  fill="none"
                                                  className="text-gray-200 dark:text-gray-700"
                                                />
                                                <circle
                                                  cx={32}
                                                  cy={32}
                                                  r={28}
                                                  stroke="currentColor"
                                                  strokeWidth={4}
                                                  fill="none"
                                                  strokeDasharray="175.92918860102841"
                                                  strokeDashoffset="175.92918860102841"
                                                  className="transition-all duration-500 text-gray-400/70"
                                                />
                                              </svg>
                                              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
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
                                                  className="lucide lucide-play w-7 h-7 text-white"
                                                >
                                                  <polygon points="6 3 20 12 6 21 6 3" />
                                                </svg>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                        <div className="flex-1 pointer-events-none">
                                          <div className="flex-1">
                                            <button className="w-full text-left relative p-4 rounded-xl transition-all duration-300 bg-white dark:bg-dark2 border-2 border-gray-300 dark:border-gray-600">
                                              <div className="absolute -top-3 left-6">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-400 text-white">
                                                  Ready
                                                </span>
                                              </div>
                                              <div className="mt-1">
                                                <h2 className="text-lg font-bold text-primary dark:text-white">
                                                  Mathematics Fundamentals
                                                </h2>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                                                  3 topics
                                                </p>
                                                <div>
                                                  <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                      Progress
                                                    </span>
                                                    <span className="text-xs font-bold text-primary dark:text-white">
                                                      0%
                                                    </span>
                                                  </div>
                                                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div
                                                      className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 bg-gray-400"
                                                      style={{ width: "0%" }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="relative flex items-center gap-6 flex-row-reverse">
                                        <div>
                                          <button className="text-left relative flex-shrink-0 group transition-all duration-300">
                                            <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20 dark:group-hover:shadow-white/10">
                                              <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-500 dark:group-hover:bg-gray-500" />
                                              <svg className="absolute inset-0 w-full h-full -rotate-90">
                                                <circle
                                                  cx={32}
                                                  cy={32}
                                                  r={28}
                                                  stroke="currentColor"
                                                  strokeWidth={4}
                                                  fill="none"
                                                  className="text-gray-200 dark:text-gray-700"
                                                />
                                                <circle
                                                  cx={32}
                                                  cy={32}
                                                  r={28}
                                                  stroke="currentColor"
                                                  strokeWidth={4}
                                                  fill="none"
                                                  strokeDasharray="175.92918860102841"
                                                  strokeDashoffset="175.92918860102841"
                                                  className="transition-all duration-500 text-gray-400/70"
                                                />
                                              </svg>
                                              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
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
                                                  className="lucide lucide-play w-7 h-7 text-white"
                                                >
                                                  <polygon points="6 3 20 12 6 21 6 3" />
                                                </svg>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                        <div className="flex-1 pointer-events-none">
                                          <div className="flex-1">
                                            <button className="w-full text-left relative p-4 rounded-xl transition-all duration-300 bg-white dark:bg-dark2 border-2 border-gray-300 dark:border-gray-600">
                                              <div className="absolute -top-3 left-6">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-400 text-white">
                                                  Ready
                                                </span>
                                              </div>
                                              <div className="mt-1">
                                                <h2 className="text-lg font-bold text-primary dark:text-white">
                                                  Science Concepts
                                                </h2>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                                                  4 topics
                                                </p>
                                                <div>
                                                  <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                      Progress
                                                    </span>
                                                    <span className="text-xs font-bold text-primary dark:text-white">
                                                      0%
                                                    </span>
                                                  </div>
                                                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div
                                                      className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 bg-gray-400"
                                                      style={{ width: "0%" }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="relative flex items-center gap-6 flex-row">
                                        <div>
                                          <button className="text-left relative flex-shrink-0 group transition-all duration-300">
                                            <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20 dark:group-hover:shadow-white/10">
                                              <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-500 dark:group-hover:bg-gray-500" />
                                              <svg className="absolute inset-0 w-full h-full -rotate-90">
                                                <circle
                                                  cx={32}
                                                  cy={32}
                                                  r={28}
                                                  stroke="currentColor"
                                                  strokeWidth={4}
                                                  fill="none"
                                                  className="text-gray-200 dark:text-gray-700"
                                                />
                                                <circle
                                                  cx={32}
                                                  cy={32}
                                                  r={28}
                                                  stroke="currentColor"
                                                  strokeWidth={4}
                                                  fill="none"
                                                  strokeDasharray="175.92918860102841"
                                                  strokeDashoffset="175.92918860102841"
                                                  className="transition-all duration-500 text-gray-400/70"
                                                />
                                              </svg>
                                              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
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
                                                  className="lucide lucide-play w-7 h-7 text-white"
                                                >
                                                  <polygon points="6 3 20 12 6 21 6 3" />
                                                </svg>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                        <div className="flex-1 pointer-events-none">
                                          <div className="flex-1">
                                            <button className="w-full text-left relative p-4 rounded-xl transition-all duration-300 bg-white dark:bg-dark2 border-2 border-gray-300 dark:border-gray-600">
                                              <div className="absolute -top-3 left-6">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-400 text-white">
                                                  Ready
                                                </span>
                                              </div>
                                              <div className="mt-1">
                                                <h2 className="text-lg font-bold text-primary dark:text-white">
                                                  Literature &amp; Writing
                                                </h2>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                                                  3 topics
                                                </p>
                                                <div>
                                                  <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                      Progress
                                                    </span>
                                                    <span className="text-xs font-bold text-primary dark:text-white">
                                                      0%
                                                    </span>
                                                  </div>
                                                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div
                                                      className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 bg-gray-400"
                                                      style={{ width: "0%" }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="relative flex items-center gap-6 flex-row-reverse">
                                        <div>
                                          <button className="text-left relative flex-shrink-0 group transition-all duration-300">
                                            <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20 dark:group-hover:shadow-white/10">
                                              <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-500 dark:group-hover:bg-gray-500" />
                                              <svg className="absolute inset-0 w-full h-full -rotate-90">
                                                <circle
                                                  cx={32}
                                                  cy={32}
                                                  r={28}
                                                  stroke="currentColor"
                                                  strokeWidth={4}
                                                  fill="none"
                                                  className="text-gray-200 dark:text-gray-700"
                                                />
                                                <circle
                                                  cx={32}
                                                  cy={32}
                                                  r={28}
                                                  stroke="currentColor"
                                                  strokeWidth={4}
                                                  fill="none"
                                                  strokeDasharray="175.92918860102841"
                                                  strokeDashoffset="175.92918860102841"
                                                  className="transition-all duration-500 text-gray-400/70"
                                                />
                                              </svg>
                                              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
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
                                                  className="lucide lucide-play w-7 h-7 text-white"
                                                >
                                                  <polygon points="6 3 20 12 6 21 6 3" />
                                                </svg>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                        <div className="flex-1 pointer-events-none">
                                          <div className="flex-1">
                                            <button className="w-full text-left relative p-4 rounded-xl transition-all duration-300 bg-white dark:bg-dark2 border-2 border-gray-300 dark:border-gray-600">
                                              <div className="absolute -top-3 left-6">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-400 text-white">
                                                  Ready
                                                </span>
                                              </div>
                                              <div className="mt-1">
                                                <h2 className="text-lg font-bold text-primary dark:text-white">
                                                  History &amp; Social Studies
                                                </h2>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                                                  2 topics
                                                </p>
                                                <div>
                                                  <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                      Progress
                                                    </span>
                                                    <span className="text-xs font-bold text-primary dark:text-white">
                                                      0%
                                                    </span>
                                                  </div>
                                                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div
                                                      className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 bg-gray-400"
                                                      style={{ width: "0%" }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block md:w-1/2 lg:w-2/5 p-4">
                                <div className="max-w-lg mx-auto">
                                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                    <div className="mb-4">
                                      <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">
                                        What StudyFetch Can Do for You
                                      </h3>
                                      <p className="text-sm text-gray-600 dark:text-gray-400">
                                        StudyFetch is your personal AI tutor,
                                        helping you learn faster and smarter.
                                      </p>
                                    </div>
                                    <div className="space-y-2">
                                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700 border hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-[#FC7059]/10">
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
                                            className="lucide lucide-square-pen w-5 h-5 text-[#FC7059]"
                                          >
                                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                          </svg>
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                                            QuizFetch
                                          </h4>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                            AI-powered quizzes to test your
                                            knowledge
                                          </p>
                                        </div>
                                        <button
                                          aria-busy="false"
                                          className="px-2 py-1 min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex-shrink-0 min-w-[80px] text-xs font-medium"
                                          aria-disabled="false"
                                        >
                                          Learn More
                                        </button>
                                      </div>
                                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700 border hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-yellow/10">
                                          <img
                                            alt="Tutor Me"
                                            loading="lazy"
                                            width={20}
                                            height={20}
                                            decoding="async"
                                            data-nimg={1}
                                            className="w-5 h-5"
                                            srcSet="/_next/image?url=%2Ficons%2Fplatform%2Ftutorme.png&w=32&q=75 1x, /_next/image?url=%2Ficons%2Fplatform%2Ftutorme.png&w=48&q=75 2x"
                                            src="/_next/image?url=%2Ficons%2Fplatform%2Ftutorme.png&w=48&q=75"
                                            style={{ color: "transparent" }}
                                          />
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                                            Real Time Tutoring
                                          </h4>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Get personalized help from AI tutors
                                          </p>
                                        </div>
                                        <button
                                          aria-busy="false"
                                          className="px-2 py-1 min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex-shrink-0 min-w-[80px] text-xs font-medium"
                                          aria-disabled="false"
                                        >
                                          Learn More
                                        </button>
                                      </div>
                                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700 border hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-green/10">
                                          <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="max-w-full max-h-full object-contain"
                                          >
                                            <path
                                              className="group-hover:rotate-3 transition-all duration-300"
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M7.15964 26.6252C6.9418 26.2654 6.86318 25.8244 6.78455 25.3833C6.75801 24.717 7.02742 24.0726 7.42754 23.6441L22.2845 8.34212C22.7542 7.87293 23.3546 7.61959 24.0162 7.62277C24.6081 7.66661 25.2175 7.89501 25.7749 8.34864L36.758 19.1729C37.7335 20.1615 37.8041 21.6787 36.9082 22.689L22.0513 37.991C21.1119 38.9293 19.6756 38.8917 18.5609 37.9844L7.5778 27.1601C7.44709 26.9443 7.29035 26.841 7.15964 26.6252Z"
                                              fill="#FFBE00"
                                            />
                                            <path
                                              className="group-hover:rotate-3 transition-all duration-300"
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M6.10076 27.2892C5.78946 27.0314 5.58294 26.6511 5.37641 26.2708C5.15015 25.6648 5.20557 24.9782 5.44777 24.4461L14.6255 5.25524C14.9201 4.66197 15.4015 4.22336 16.0172 4.00069C16.5806 3.83929 17.2161 3.84228 17.8713 4.07091L31.3535 10.3165C32.5593 10.8964 33.0839 12.2727 32.557 13.5108L23.3793 32.7017C22.7901 33.8882 21.4439 34.3433 20.1334 33.886L6.65122 27.6404C6.46444 27.4857 6.28754 27.4439 6.10076 27.2892Z"
                                              fill="#36D99E"
                                            />
                                          </svg>
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                                            Flashcards AI
                                          </h4>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Create and study with smart
                                            flashcards
                                          </p>
                                        </div>
                                        <button
                                          aria-busy="false"
                                          className="px-2 py-1 min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex-shrink-0 min-w-[80px] text-xs font-medium"
                                          aria-disabled="false"
                                        >
                                          Learn More
                                        </button>
                                      </div>
                                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700 border hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-purple/10">
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
                                            className="lucide lucide-audio-lines w-5 h-5 text-purple"
                                          >
                                            <path d="M2 10v3" />
                                            <path d="M6 6v11" />
                                            <path d="M10 3v18" />
                                            <path d="M14 8v7" />
                                            <path d="M18 5v13" />
                                            <path d="M22 10v3" />
                                          </svg>
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                                            Audio Recaps
                                          </h4>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Listen to AI-generated audio
                                            summaries
                                          </p>
                                        </div>
                                        <button
                                          aria-busy="false"
                                          className="px-2 py-1 min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex-shrink-0 min-w-[80px] text-xs font-medium"
                                          aria-disabled="false"
                                        >
                                          Learn More
                                        </button>
                                      </div>
                                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700 border hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-[#60A5FA]/10">
                                          <img
                                            alt="AI Chat"
                                            loading="lazy"
                                            width={20}
                                            height={20}
                                            decoding="async"
                                            data-nimg={1}
                                            className="w-5 h-5"
                                            srcSet="/_next/image?url=%2Ficons%2Fplatform%2Fchat.png&w=32&q=75 1x, /_next/image?url=%2Ficons%2Fplatform%2Fchat.png&w=48&q=75 2x"
                                            src="/_next/image?url=%2Ficons%2Fplatform%2Fchat.png&w=48&q=75"
                                            style={{ color: "transparent" }}
                                          />
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                                            AI Chat
                                          </h4>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Ask questions and get instant
                                            answers
                                          </p>
                                        </div>
                                        <button
                                          aria-busy="false"
                                          className="px-2 py-1 min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex-shrink-0 min-w-[80px] text-xs font-medium"
                                          aria-disabled="false"
                                        >
                                          Learn More
                                        </button>
                                      </div>
                                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700 border hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-[#60A5FA]/10">
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
                                            className="lucide lucide-video w-5 h-5 text-[#60A5FA]"
                                          >
                                            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                                            <rect
                                              x={2}
                                              y={6}
                                              width={14}
                                              height={12}
                                              rx={2}
                                            />
                                          </svg>
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                                            Explainer Videos
                                          </h4>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Watch AI-generated video
                                            explanations
                                          </p>
                                        </div>
                                        <button
                                          aria-busy="false"
                                          className="px-2 py-1 min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex-shrink-0 min-w-[80px] text-xs font-medium"
                                          aria-disabled="false"
                                        >
                                          Learn More
                                        </button>
                                      </div>
                                      <div className="flex items-start gap-3 p-3 rounded-lg bg-blue/10 dark:bg-blue/20 border-blue/20 dark:border-blue/30 border transition-all duration-200">
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-[#60A5FA]/10">
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
                                            className="lucide lucide-sparkles w-5 h-5 text-[#60A5FA]"
                                          >
                                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                            <path d="M20 3v4" />
                                            <path d="M22 5h-4" />
                                            <path d="M4 17v2" />
                                            <path d="M5 18H3" />
                                          </svg>
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                                            AI-Powered Learning
                                          </h4>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Your personalized study plan adapts
                                            to your learning style and progress
                                          </p>
                                        </div>
                                      </div>
                                    </div>
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
