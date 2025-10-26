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
import { CheckCircleIcon, ClockIcon ,ArrowUpTrayIcon,InformationCircleIcon } from '@heroicons/react/20/solid';
import Home from "../../../assets/tutor.png"
import Logo from "../../../assets/logo.png";
import UploadCard from "../../../components/UploadCard";
import PastQuestionsCard from "../../../components/PastQuestionsCard";


export default function DashboardContent() {
  return (
     <div className="px-4 sm:px-6 lg:px-8">
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
                              <div className="max-w-6xl mx-auto p-4">
                                <div className="mb-6">
                                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-3">
                                    <div className="flex gap-4 flex-1 min-w-0">
                                      <div className="relative flex-shrink-0 rounded-xl shadow-lg border-2 border-white dark:border-gray-700 w-16 h-16">
                                        <img
                                          alt="zz"
                                          loading="lazy"
                                          width={64}
                                          height={64}
                                          decoding="async"
                                          data-nimg={1}
                                          className="w-full h-full object-contain rounded-xl"
                                          srcSet="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          style={{ color: "transparent" }}
                                        />
                                        <div className="absolute -top-1 -right-1">
                                          <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="group-hover:opacity-75 ease-in-out duration-300"
                                          >
                                            <g clipPath="url(#clip0_2861_13849)">
                                              <path
                                                d="M15.314 12.4939C15.534 11.8339 16.466 11.8339 16.686 12.4939L17.976 16.3679C18.2599 17.2195 18.7383 17.9933 19.3733 18.6279C20.0082 19.2625 20.7822 19.7405 21.634 20.0239L25.506 21.3139C26.166 21.5339 26.166 22.4659 25.506 22.6859L21.632 23.9759C20.7804 24.2599 20.0066 24.7383 19.372 25.3732C18.7374 26.0082 18.2595 26.7822 17.976 27.6339L16.686 31.5059C16.6386 31.6505 16.5467 31.7763 16.4235 31.8655C16.3003 31.9548 16.1521 32.0028 16 32.0028C15.8479 32.0028 15.6997 31.9548 15.5765 31.8655C15.4533 31.7763 15.3614 31.6505 15.314 31.5059L14.024 27.6319C13.7402 26.7805 13.2621 26.0069 12.6276 25.3723C11.993 24.7378 11.2194 24.2597 10.368 23.9759L6.49399 22.6859C6.34946 22.6385 6.22361 22.5466 6.13439 22.4235C6.04517 22.3003 5.99713 22.152 5.99713 21.9999C5.99713 21.8478 6.04517 21.6996 6.13439 21.5764C6.22361 21.4532 6.34946 21.3614 6.49399 21.3139L10.368 20.0239C11.2194 19.7402 11.993 19.2621 12.6276 18.6275C13.2621 17.9929 13.7402 17.2193 14.024 16.3679L15.314 12.4939ZM7.58799 2.29593C7.61667 2.20932 7.67191 2.13395 7.74587 2.08053C7.81984 2.02711 7.90875 1.99836 7.99999 1.99836C8.09122 1.99836 8.18014 2.02711 8.2541 2.08053C8.32806 2.13395 8.38331 2.20932 8.41199 2.29593L9.18599 4.61994C9.53199 5.65594 10.344 6.46794 11.38 6.81394L13.704 7.58793C13.7906 7.61661 13.866 7.67186 13.9194 7.74582C13.9728 7.81978 14.0016 7.9087 14.0016 7.99994C14.0016 8.09117 13.9728 8.18009 13.9194 8.25405C13.866 8.32801 13.7906 8.38326 13.704 8.41193L11.38 9.18594C10.8687 9.35561 10.4042 9.64231 10.0233 10.0232C9.64237 10.4041 9.35566 10.8687 9.18599 11.3799L8.41199 13.7039C8.38331 13.7905 8.32806 13.8659 8.2541 13.9193C8.18014 13.9728 8.09122 14.0015 7.99999 14.0015C7.90875 14.0015 7.81984 13.9728 7.74587 13.9193C7.67191 13.8659 7.61667 13.7905 7.58799 13.7039L6.81399 11.3799C6.64431 10.8687 6.35761 10.4041 5.97671 10.0232C5.59581 9.64231 5.13124 9.35561 4.61999 9.18594L2.29599 8.41193C2.20938 8.38326 2.13401 8.32801 2.08059 8.25405C2.02717 8.18009 1.99841 8.09117 1.99841 7.99994C1.99841 7.9087 2.02717 7.81978 2.08059 7.74582C2.13401 7.67186 2.20938 7.61661 2.29599 7.58793L4.61999 6.81394C5.13124 6.64426 5.59581 6.35756 5.97671 5.97666C6.35761 5.59576 6.64431 5.13119 6.81399 4.61994L7.58799 2.29593ZM21.726 0.197935C21.7457 0.140988 21.7827 0.0916068 21.8318 0.0566582C21.8809 0.0217095 21.9397 0.00292969 22 0.00292969C22.0603 0.00292969 22.119 0.0217095 22.1681 0.0566582C22.2172 0.0916068 22.2542 0.140988 22.274 0.197935L22.79 1.74593C23.02 2.43793 23.562 2.97993 24.254 3.20993L25.802 3.72593C25.8589 3.74568 25.9083 3.78267 25.9433 3.83178C25.9782 3.88089 25.997 3.93966 25.997 3.99993C25.997 4.06021 25.9782 4.11898 25.9433 4.16809C25.9083 4.2172 25.8589 4.25419 25.802 4.27394L24.254 4.78994C23.9133 4.90393 23.6037 5.09551 23.3496 5.34957C23.0956 5.60362 22.904 5.91321 22.79 6.25394L22.274 7.80194C22.2542 7.85888 22.2172 7.90826 22.1681 7.94321C22.119 7.97816 22.0603 7.99694 22 7.99694C21.9397 7.99694 21.8809 7.97816 21.8318 7.94321C21.7827 7.90826 21.7457 7.85888 21.726 7.80194L21.21 6.25394C21.096 5.91321 20.9044 5.60362 20.6504 5.34957C20.3963 5.09551 20.0867 4.90393 19.746 4.78994L18.2 4.27394C18.143 4.25419 18.0937 4.2172 18.0587 4.16809C18.0238 4.11898 18.005 4.06021 18.005 3.99993C18.005 3.93966 18.0238 3.88089 18.0587 3.83178C18.0937 3.78267 18.143 3.74568 18.2 3.72593L19.748 3.20993C20.44 2.97993 20.982 2.43793 21.212 1.74593L21.726 0.197935Z"
                                                fill="#8963DD"
                                              />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                          <h1 className="text-xl font-bold text-primary dark:text-black truncate">
                                            zz
                                          </h1>
                                          <button className="flex-shrink-0 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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
                                              className="lucide lucide-pen-line w-3.5 h-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                            >
                                              <path d="M12 20h9" />
                                              <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                                            </svg>
                                          </button>
                                          <a
                                            aria-busy="false"
                                            className="px-2 py-1 text-[.65rem] min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-dark2 dark:hover:bg-dark dark:text-black border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center !font-semibold"
                                            aria-disabled="false"
                                            href="/platform/studysets"
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
                                              className="lucide lucide-refresh-cw w-3.5 h-3.5"
                                              aria-hidden="true"
                                            >
                                              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                                              <path d="M21 3v5h-5" />
                                              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                                              <path d="M8 16H3v5" />
                                            </svg>
                                            Switch Study Set
                                          </a>
                                        </div>
                                        <p className="text-xs text-gray-800 dark:text-gray-600 mb-2">
                                         Welcome to Edgio This is your first study set. You can add materials, create flashcards, and start learning!
                                        </p>
                                        <div className="flex flex-wrap items-center gap-1.5">
                                          <a
                                            aria-busy="false"
                                            className="px-2 py-1 text-[.65rem] min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-800 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
                                            aria-disabled="false"
                                            href="#"
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
                                              className="lucide lucide-brain w-3.5 h-3.5"
                                              aria-hidden="true"
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
                                            Class Knowledge
                                          </a>
                                          <a
                                            aria-busy="false"
                                            className="px-2 py-1 text-[.65rem] min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-800 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
                                            aria-disabled="false"
                                            href="#"
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
                                              className="lucide lucide-gamepad w-3.5 h-3.5"
                                              aria-hidden="true"
                                            >
                                              <line
                                                x1={6}
                                                x2={10}
                                                y1={12}
                                                y2={12}
                                              />
                                              <line
                                                x1={8}
                                                x2={8}
                                                y1={10}
                                                y2={14}
                                              />
                                              <line
                                                x1={15}
                                                x2="15.01"
                                                y1={13}
                                                y2={13}
                                              />
                                              <line
                                                x1={18}
                                                x2="18.01"
                                                y1={11}
                                                y2={11}
                                              />
                                              <rect
                                                width={20}
                                                height={12}
                                                x={2}
                                                y={6}
                                                rx={2}
                                              />
                                            </svg>
                                            Daily Objectives
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="mb-4">
                                  <div className="px-4 py-2 rounded-2xl border shadow-sm bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700">
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
                                      <a
                                        className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                                        href="/platform/studyset/68740f753d4c0af656ec96d8/materials"
                                      >
                                        <div className="p-2 rounded-lg bg-purple bg-opacity-10">
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
                                            className="lucide lucide-file-text"
                                          >
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                            <path d="M10 9H8" />
                                            <path d="M16 13H8" />
                                            <path d="M16 17H8" />
                                          </svg>
                                        </div>
                                        <div>
                                          <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Materials
                                          </p>
                                          <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                            2
                                          </p>
                                        </div>
                                      </a>
                                      <a
                                        className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                                        href="/platform/studyset/68740f753d4c0af656ec96d8/flashcards"
                                      >
                                        <div className="p-2 rounded-lg bg-blue bg-opacity-10">
                                          <svg
                                            width={18}
                                            height={18}
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
                                        <div>
                                          <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Flashcards
                                          </p>
                                          <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                            0
                                          </p>
                                        </div>
                                      </a>
                                      <a
                                        className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                                        href="/platform/studyset/68740f753d4c0af656ec96d8/practice"
                                      >
                                        <div className="p-2 rounded-lg bg-orange bg-opacity-10">
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
                                            className="lucide lucide-square-pen w-[18px] h-[18px] text-[#FC7059]"
                                          >
                                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                          </svg>
                                        </div>
                                        <div>
                                          <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Tests &amp; QuizFetch
                                          </p>
                                          <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                            0
                                          </p>
                                        </div>
                                      </a>
                                      <a
                                        className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                                        href="/platform/studyset/68740f753d4c0af656ec96d8/tutor-me-v2"
                                      >
                                        <div className="p-2 rounded-lg bg-orange bg-opacity-10">
                                          <img
                                            alt="Tutor Me"
                                            loading="lazy"
                                            width={18}
                                            height={18}
                                            decoding="async"
                                            data-nimg={1}
                                            className="!w-[18px] !h-[18px]"
                                            srcSet={Home}
                                            src={Home}
                                            style={{ color: "transparent" }}
                                          />
                                        </div>
                                        <div>
                                          <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Tutor Me
                                          </p>
                                          <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                            0
                                          </p>
                                        </div>
                                      </a>
                                      <a
                                        className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                                        href="/platform/studyset/68740f753d4c0af656ec96d8/arcade"
                                      >
                                        <div className="p-2 rounded-lg bg-[#E390D0] bg-opacity-10">
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
                                            className="lucide lucide-gamepad w-[18px] h-[18px] text-[#E390D0]"
                                          >
                                            <line
                                              x1={6}
                                              x2={10}
                                              y1={12}
                                              y2={12}
                                            />
                                            <line
                                              x1={8}
                                              x2={8}
                                              y1={10}
                                              y2={14}
                                            />
                                            <line
                                              x1={15}
                                              x2="15.01"
                                              y1={13}
                                              y2={13}
                                            />
                                            <line
                                              x1={18}
                                              x2="18.01"
                                              y1={11}
                                              y2={11}
                                            />
                                            <rect
                                              width={20}
                                              height={12}
                                              x={2}
                                              y={6}
                                              rx={2}
                                            />
                                          </svg>
                                        </div>
                                        <div>
                                          <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Arcade
                                          </p>
                                          <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                            0
                                          </p>
                                        </div>
                                      </a>
                                      <a
                                        className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-dark"
                                        href="/platform/studyset/68740f753d4c0af656ec96d8/audio-recap-v2"
                                      >
                                        <div className="p-2 rounded-lg bg-purple bg-opacity-10">
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
                                            className="lucide lucide-audio-lines w-[18px] h-[18px] text-purple"
                                          >
                                            <path d="M2 10v3" />
                                            <path d="M6 6v11" />
                                            <path d="M10 3v18" />
                                            <path d="M14 8v7" />
                                            <path d="M18 5v13" />
                                            <path d="M22 10v3" />
                                          </svg>
                                        </div>
                                        <div>
                                          <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Audio Recap
                                          </p>
                                          <p className="text-lg font-bold text-gray-900 dark:text-gray-900">
                                            0
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div> */}
                                {/* <div className="relative max-w-2xl mx-auto mt-8">
                                  <div
                                    className="absolute left-[30px] w-1 bg-gradient-to-b from-gray-300/50 via-gray-300/70 to-gray-300/50 dark:from-gray-600/50 dark:via-gray-600/70 dark:to-gray-600/50 rounded-full"
                                    style={{
                                      height: "calc(100% - 16px)",
                                      top: "32px",
                                    }}
                                  />
                                  <div className="flex flex-col gap-12">
                                    <div className="relative flex items-center gap-6">
                                      <button
                                        className="text-left relative flex-shrink-0 group transition-all duration-300"
                                        disabled
                                      >
                                        <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300">
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
                                              className="lucide lucide-plus w-7 h-7 text-white"
                                            >
                                              <path d="M5 12h14" />
                                              <path d="M12 5v14" />
                                            </svg>
                                          </div>
                                        </div>
                                      </button>
                                      <div className="flex-1">
                                        <div className="relative p-6 rounded-2xl transition-all duration-300 border-2 bg-white dark:bg-dark2 border-gray-300 dark:border-gray-600">
                                          <div className="absolute -top-3 left-6 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                                            <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                              Not Started
                                            </p>
                                          </div>
                                          <div className="mt-2">
                                            <h2 className="text-xl font-bold text-primary dark:text-black mb-1">
                                              Upload First Material
                                            </h2>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                              Start by uploading your first
                                              study material to this study set.
                                            </p>
                                            <div className="flex gap-3">
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
                                                  className="lucide lucide-upload w-4 h-4"
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
                                                  className="lucide lucide-wand-sparkles w-4 h-4"
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
                                                Generate Materials from Topic
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="relative flex items-center gap-6 flex-row-reverse">
                                      <button
                                        className="text-left relative flex-shrink-0 group transition-all duration-300"
                                        disabled
                                      >
                                        <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300">
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
                                              className="lucide lucide-lock w-7 h-7 text-white"
                                            >
                                              <rect
                                                width={18}
                                                height={11}
                                                x={3}
                                                y={11}
                                                rx={2}
                                                ry={2}
                                              />
                                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            </svg>
                                          </div>
                                        </div>
                                      </button>
                                      <div className="flex-1">
                                        <div className="relative p-6 rounded-2xl transition-all duration-300 border-2 border-dashed bg-white dark:bg-dark2 border-gray-300 dark:border-gray-700">
                                          <div className="absolute -top-3 left-6 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                                            <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
                                              Locked
                                            </p>
                                          </div>
                                          <div className="mt-2">
                                            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                                            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse" />
                                            <div className="h-9 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="relative flex items-center gap-6 flex-row">
                                      <button
                                        className="text-left relative flex-shrink-0 group transition-all duration-300"
                                        disabled
                                      >
                                        <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300">
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
                                              className="lucide lucide-lock w-7 h-7 text-white"
                                            >
                                              <rect
                                                width={18}
                                                height={11}
                                                x={3}
                                                y={11}
                                                rx={2}
                                                ry={2}
                                              />
                                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            </svg>
                                          </div>
                                        </div>
                                      </button>
                                      <div className="flex-1">
                                        <div className="relative p-6 rounded-2xl transition-all duration-300 border-2 border-dashed bg-white dark:bg-dark2 border-gray-300 dark:border-gray-700">
                                          <div className="absolute -top-3 left-6 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                                            <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
                                              Locked
                                            </p>
                                          </div>
                                          <div className="mt-2">
                                            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                                            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse" />
                                            <div className="h-9 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                                <div className="flex flex-wrap justify-center gap-8 p-8 min-h-screen">
                                      <UploadCard />
                                      <PastQuestionsCard />
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
