'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  AcademicCapIcon,
  ShareIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon, ClockIcon, ArrowUpTrayIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import panda from '../../../assets/panda.png'

export default function DashboardContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-white dark:bg-dark">
        {/* Mobile sidebar toggle */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          {/* <div className="flex items-center">
            <img
              src="/_next/image?url=%2Ficons%2Fplatform%2Fchat.png&w=256&q=100"
              alt="Chat"
              className="h-8 w-8"
            />
            <span className="ml-2 text-lg font-semibold text-primary dark:text-black">
              New Chat Session
            </span>
          </div> */}
          <div className="w-6" />
        </div>

        {/* Sidebar for mobile */}
        <Dialog
          as="div"
          className="md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <DialogBackdrop className="fixed inset-0 z-40 bg-gray-900 bg-opacity-75 transition-opacity" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white dark:bg-dark p-4 transform transition-transform">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-primary dark:text-white">Menu</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            {/* Sidebar content would go here */}
            <div className="space-y-4">
              <div className="p-2 rounded-md bg-gray-100 dark:bg-dark2 text-gray-700 dark:text-gray-300">
                Chat History
              </div>
              {/* Add other sidebar items as needed */}
            </div>
          </DialogPanel>
        </Dialog>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top navigation for desktop */}
          <nav className="hidden md:flex items-center px-4 py-2 bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-700">
            <div className="flex-1 flex items-center">
              {/* <div className="flex items-center">
                <img
                  src="/_next/image?url=%2Ficons%2Fplatform%2Fchat.png&w=256&q=100"
                  alt="Chat"
                  className="h-6 w-6"
                />
                <span className="ml-2 text-base font-semibold text-primary dark:text-black">
                  New Chat Session
                </span>
              </div> */}
              <div className="ml-4">
                <button
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-primary hover:bg-gray-50 dark:hover:bg-dark2"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-history"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M12 7v5l4 2" />
                  </svg>
                  <span>Chat History</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </nav>

          {/* Chat content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto w-full">
              <div className="text-center mb-6">
                <div className="flex justify-center">
 <img
  alt="Spark.E"
  loading="lazy"
  width={250}
  height={250}
  decoding="async"
  className="w-60 h-60 md:w-72 md:h-72"
  src={panda}
/>


                </div>
                <div className="flex flex-col items-center justify-center py-1 gap-2 mt-2">
                  <div className="flex flex-wrap justify-center gap-2">
                    <button className="group flex items-center gap-2 bg-[#F5F2FF] dark:bg-dark2 rounded-md px-3 py-1.5 text-xs md:text-sm text-primary dark:text-black hover:bg-purple transition-all duration-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:animate-jiggle"
                      >
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      Personalities & Skillsets
                    </button>
                    <button className="group flex items-center gap-2 bg-[#F5F2FF] dark:bg-dark2 hover:bg-purple rounded-md px-3 py-1.5 text-xs md:text-sm text-primary dark:text-black transition-all duration-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:animate-jiggle"
                      >
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                        <path d="M20 3v4" />
                        <path d="M22 5h-4" />
                        <path d="M4 17v2" />
                        <path d="M5 18H3" />
                      </svg>
                      Scenarios
                    </button>
                  </div>
                </div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-600 mt-4">
                  Hi, I'm Joya
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-500 mb-4">
                  Ask me anything about learning, or try one of these examples:
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 w-full max-w-2xl mx-auto">
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 bg-gray-50 text-gray-600 dark:bg-dark2/60 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark2 border border-gray-200 dark:border-gray-700/50">
                    Explain Concepts
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 bg-gray-50 text-gray-600 dark:bg-dark2/60 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark2 border border-gray-200 dark:border-gray-700/50">
                    Summarize
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 bg-gray-50 text-gray-600 dark:bg-dark2/60 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark2 border border-gray-200 dark:border-gray-700/50">
                    Find Citations
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 bg-gray-50 text-gray-600 dark:bg-dark2/60 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark2 border border-gray-200 dark:border-gray-700/50">
                    Study Techniques
                  </button>
                </div>
              </div>

              {/* Input area */}
              <div className="mt-20">
                <form className="w-full">
                  <div className="flex flex-col bg-white dark:bg-dark2 border border-gray-300 dark:border-[#2D2D2D] rounded-2xl">
                    <div className="flex items-center">
                      <textarea
                        className="flex-1 p-3 text-sm dark:text-black text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none resize-none max-h-32 min-h-[44px]"
                        placeholder="Ask your AI tutor anything..."
                        style={{ height: '45px' }}
                      />
                      <button
                        type="submit"
                        className="flex items-center justify-center mr-2 p-1 rounded-full bg-blue text-white hover:bg-blue2 transition-colors duration-200 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 12 7-7 7 7" />
                          <path d="M12 19V5" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center p-2 pt-0 gap-2">
                      <label
                        htmlFor="file-input"
                        className="p-1 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <rect
                            width={18}
                            height={18}
                            x={3}
                            y={3}
                            rx={2}
                            ry={2}
                          />
                          <circle cx={9} cy={9} r={2} />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </label>
                      <input
                        id="file-input"
                        className="hidden"
                        multiple
                        accept="image/*,application/pdf"
                        type="file"
                      />
                      
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hidden md:block"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>
                          <span>Web Browsing</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hidden md:block"
                          >
                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                            <path d="M22 10v6" />
                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                          </svg>
                          <span>Search Academic Papers</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10"
                        >
                          <span>Using 0 material(s)</span>
                          <span className="text-blue text-[.6rem]">Select Materials</span>
                        </button>
                      </div>
                      
                      <button
                        className="p-1 rounded-md transition-all ease-in-out duration-200 hover:bg-gray-100 dark:hover:bg-dark2 ml-auto"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1={2} x2={22} y1={2} y2={22} />
                          <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
                          <path d="M5 10v2a7 7 0 0 0 12 5" />
                          <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
                          <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
                          <line x1={12} x2={12} y1={19} y2={22} />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}