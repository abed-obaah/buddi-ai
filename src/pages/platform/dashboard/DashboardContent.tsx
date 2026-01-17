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
import UploadCard from "../../../components/UploadCard";
import PastQuestionsCard from "../../../components/PastQuestionsCard";


export default function DashboardContent() {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="flex flex-col gap-8">

        <div className="mb-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="relative group">
                <div className="size-20 rounded-2xl overflow-hidden ring-4 ring-blue-50 transition-transform group-hover:scale-105">
                  <img
                    alt="Profile"
                    className="size-full object-cover"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  />
                  <div className="absolute -top-2 -right-2 bg-white rounded-lg p-1 shadow-md">
                    <CheckCircleIcon className="size-5 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    Welcome back, John!
                  </h1>
                  <a
                    href="/platform/studysets"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-refresh-cw"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                      <path d="M8 16H3v5" />
                    </svg>
                    Switch Study Set
                  </a>
                </div>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  Ready to excel? Your personalized study path is waiting. Access your materials, track progress, and conquer your goals with Edgio.
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
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
                      className="lucide lucide-brain text-blue-600"
                    >
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    </svg>
                    Class Knowledge
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
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
                      className="lucide lucide-gamepad text-orange-500"
                    >
                      <line x1={6} x2={10} y1={12} y2={12} />
                      <line x1={8} x2={8} y1={10} y2={14} />
                      <line x1={15} x2="15.01" y1={13} y2={13} />
                      <line x1={18} x2="18.01" y1={11} y2={11} />
                      <rect width={20} height={12} x={2} y={6} rx={2} />
                    </svg>
                    Daily Objectives
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UploadCard />
          <PastQuestionsCard />
        </div>
      </div>
    </div>
  )
}
