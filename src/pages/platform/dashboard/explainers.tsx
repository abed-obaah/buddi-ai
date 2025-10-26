'use client'

import { useState } from 'react'
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
import Home from "../../../assets/tutor.png"
import Logo from "../../../assets/logo.png";

export default function DashboardContent() {
  return (
    <div className="px-3 sm:px-4 lg:px-6 xl:px-8">
      <div
        className="relative overflow-hidden"
        data-panel-group
        data-panel-group-direction="horizontal"
        data-panel-group-id="«r5»"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          className="flex flex-col h-full overflow-hidden md:border-r border-r-slate-100 dark:border-r-[#AB9FF2] dark:border-opacity-20 relative"
          data-panel
          data-panel-group-id="«r5»"
          data-panel-id="«r6»"
          data-panel-size={1.0}
          style={{ flex: "1 1 0px", overflow: "hidden" }}
        >
          <div className="h-full w-full flex flex-col overflow-y-auto relative">
            <div className="overflow-y-auto w-full h-full flex flex-col">
              <div
                className="w-full h-full flex flex-row"
                style={{ position: "relative" }}
              >
                <div className="overflow-y-auto w-full h-full flex flex-col">
                  <div className="w-full h-full overflow-y-auto">
                    <div className="max-w-6xl mx-auto p-3 sm:p-4 lg:p-6">
                     
                      {/* Stats Grid - Responsive */}
                      <div className="mb-4 sm:mb-6">
                        <div className="px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border shadow-sm bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700">
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
                            {/* Materials Card */}
                            <a
                              className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                              href="/platform/studyset/68740f753d4c0af656ec96d8/materials"
                            >
                              <div className="p-1.5 sm:p-2 rounded-lg bg-purple bg-opacity-10 flex-shrink-0">
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
                                  className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                                >
                                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                  <path d="M10 9H8" />
                                  <path d="M16 13H8" />
                                  <path d="M16 17H8" />
                                </svg>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                  Materials
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                  2
                                </p>
                              </div>
                            </a>

                            {/* Flashcards Card */}
                            <a
                              className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                              href="/platform/studyset/68740f753d4c0af656ec96d8/flashcards"
                            >
                              <div className="p-1.5 sm:p-2 rounded-lg bg-blue bg-opacity-10 flex-shrink-0">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 42 42"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 sm:w-[18px] sm:h-[18px] max-w-full max-h-full object-contain"
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
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                  Flashcards
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                  0
                                </p>
                              </div>
                            </a>

                            {/* Tests & Quiz Card */}
                            <a
                              className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                              href="/platform/studyset/68740f753d4c0af656ec96d8/practice"
                            >
                              <div className="p-1.5 sm:p-2 rounded-lg bg-orange bg-opacity-10 flex-shrink-0">
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
                                  className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#FC7059]"
                                >
                                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                </svg>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                  Tests & Quiz
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                  0
                                </p>
                              </div>
                            </a>

                            {/* Tutor Me Card */}
                            <a
                              className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                              href="/platform/studyset/68740f753d4c0af656ec96d8/tutor-me-v2"
                            >
                              <div className="p-1.5 sm:p-2 rounded-lg bg-orange bg-opacity-10 flex-shrink-0">
                                <img
                                  alt="Tutor Me"
                                  loading="lazy"
                                  width={18}
                                  height={18}
                                  decoding="async"
                                  className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                                  srcSet={Home}
                                  src={Home}
                                  style={{ color: "transparent" }}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                  Tutor Me
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                  0
                                </p>
                              </div>
                            </a>

                            {/* Arcade Card */}
                            <a
                              className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                              href="/platform/studyset/68740f753d4c0af656ec96d8/arcade"
                            >
                              <div className="p-1.5 sm:p-2 rounded-lg bg-[#E390D0] bg-opacity-10 flex-shrink-0">
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
                                  className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#E390D0]"
                                >
                                  <line x1={6} x2={10} y1={12} y2={12} />
                                  <line x1={8} x2={8} y1={10} y2={14} />
                                  <line x1={15} x2="15.01" y1={13} y2={13} />
                                  <line x1={18} x2="18.01" y1={11} y2={11} />
                                  <rect width={20} height={12} x={2} y={6} rx={2} />
                                </svg>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                  Arcade
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                  0
                                </p>
                              </div>
                            </a>

                            {/* Audio Recap Card */}
                            <a
                              className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                              href="/platform/studyset/68740f753d4c0af656ec96d8/audio-recap-v2"
                            >
                              <div className="p-1.5 sm:p-2 rounded-lg bg-purple bg-opacity-10 flex-shrink-0">
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
                                  className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-purple"
                                >
                                  <path d="M2 10v3" />
                                  <path d="M6 6v11" />
                                  <path d="M10 3v18" />
                                  <path d="M14 8v7" />
                                  <path d="M18 5v13" />
                                  <path d="M22 10v3" />
                                </svg>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                  Audio Recap
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                  0
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Progress Timeline - Responsive */}
                      <div className="relative max-w-4xl mx-auto mt-6 sm:mt-8 lg:mt-12">
                        <div
                          className="absolute left-4 sm:left-[30px] w-1 bg-gradient-to-b from-gray-300/50 via-gray-300/70 to-gray-300/50 dark:from-gray-600/50 dark:via-gray-600/70 dark:to-gray-600/50 rounded-full"
                          style={{
                            height: "calc(100% - 16px)",
                            top: "24px",
                          }}
                        />
                        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
                          {/* First Step */}
                          <div className="relative flex items-center gap-4 sm:gap-6">
                            <button
                              className="text-left relative flex-shrink-0 group transition-all duration-300"
                              disabled
                            >
                              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300">
                                <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gray-400 dark:bg-gray-600" />
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
                                <div className="relative z-10 transition-transform duration-300">
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
                                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
                                  >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <div className="flex-1 min-w-0">
                              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 border-2 bg-white dark:bg-dark2 border-gray-300 dark:border-gray-600">
                                <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                    Not Started
                                  </p>
                                </div>
                                <div className="mt-2">
                                  <h2 className="text-lg sm:text-xl font-bold text-primary dark:text-black mb-1">
                                    Upload First Material
                                  </h2>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                                    Start by uploading your first study material to this study set.
                                  </p>
                                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                    <a
                                      className="px-2.5 py-1.5 text-xs font-medium min-h-[36px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue hover:bg-blue2 text-black border border-blue hover:border-blue2 focus:ring-blue dark:focus:ring-blue2 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center flex-1"
                                      href="/platform/studyset/68740f753d4c0af656ec96d8/addMaterial"
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
                                        className="w-3 h-3 sm:w-4 sm:h-4"
                                        aria-hidden="true"
                                      >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1={12} x2={12} y1={3} y2={15} />
                                      </svg>
                                      Upload Materials
                                    </a>

                                    <button
                                      aria-busy="false"
                                      className="px-2.5 py-1.5 text-xs font-medium min-h-[36px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center flex-1"
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
                                        className="w-3 h-3 sm:w-4 sm:h-4"
                                        aria-hidden="true"
                                      >
                                        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
                                        <path d="m14 7 3 3" />
                                        <path d="M5 6v4" />
                                        <path d="M19 14v4" />
                                        <path d="M10 2v2" />
                                        <path d="M7 8H3" />
                                        <path d="M21 16h-4" />
                                        <path d="M11 3H9" />
                                      </svg>
                                      Generate Materials
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Second Step - Reversed on larger screens */}
                          <div className="relative flex items-center gap-4 sm:gap-6 flex-col sm:flex-row-reverse">
                            <button
                              className="text-left relative flex-shrink-0 group transition-all duration-300"
                              disabled
                            >
                              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300">
                                <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gray-400 dark:bg-gray-600" />
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
                                <div className="relative z-10 transition-transform duration-300">
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
                                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
                                  >
                                    <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <div className="flex-1 min-w-0 w-full sm:w-auto">
                              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 border-2 border-dashed bg-white dark:bg-dark2 border-gray-300 dark:border-gray-700">
                                <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
                                    Locked
                                  </p>
                                </div>
                                <div className="mt-2">
                                  <div className="h-5 sm:h-6 w-32 sm:w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                                  <div className="h-3 sm:h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-3 sm:mb-4 animate-pulse" />
                                  <div className="h-8 sm:h-9 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Third Step */}
                          <div className="relative flex items-center gap-4 sm:gap-6 flex-col sm:flex-row">
                            <button
                              className="text-left relative flex-shrink-0 group transition-all duration-300"
                              disabled
                            >
                              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300">
                                <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gray-400 dark:bg-gray-600" />
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
                                <div className="relative z-10 transition-transform duration-300">
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
                                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
                                  >
                                    <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <div className="flex-1 min-w-0 w-full sm:w-auto">
                              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 border-2 border-dashed bg-white dark:bg-dark2 border-gray-300 dark:border-gray-700">
                                <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
                                    Locked
                                  </p>
                                </div>
                                <div className="mt-2">
                                  <div className="h-5 sm:h-6 w-32 sm:w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                                  <div className="h-3 sm:h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-3 sm:mb-4 animate-pulse" />
                                  <div className="h-8 sm:h-9 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    inset: "0px",
                    overflow: "hidden",
                    pointerEvents: "none",
                    userSelect: "none",
                    zIndex: 99999,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}