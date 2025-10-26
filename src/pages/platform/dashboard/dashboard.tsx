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
// import Home from "../../../assets/tutor.png"
import Logo from "../../../assets/logo.png";
import DashboardContent from "./DashboardContent";
import Chats from "./Chats";
import LiveLectures from "./live-lecture";
import Calender from "./calender";
import Essaygrading from "./essay-grading";
import Explainers from "./explainers";

// const navigation = [
//   { name: 'Home', href: '#', icon: HomeIcon, current: true },
//   { name: 'Chat', href: '#', icon: UsersIcon, current: false },
//   { name: 'Live lecture', href: '#', icon: FolderIcon, current: false },
//   { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
//   // { name: 'Flashcards', href: '#', icon: DocumentDuplicateIcon, current: false },
//   // { name: 'Tests & quizfetch', href: '#', icon: ChartPieIcon, current: false },
//   // { name: 'Tutor me', href: '#', icon: ChartPieIcon, current: false },
//   // { name: 'Arcade', href: '#', icon: ChartPieIcon, current: false },
//   { name: 'Essay Grading', href: '#', icon: ChartPieIcon, current: false },
//   { name: 'Explainers', href: '#', icon: ChartPieIcon, current: false },
//   // { name: 'Audio Recap', href: '#', icon: ChartPieIcon, current: false },
//   // { name: 'Notes & materials', href: '#', icon: ChartPieIcon, current: false },
// ]



const navigation = [
  { 
    name: 'Home', 
    href: '#', 
    icon: HomeIcon, 
    current: true,
    content: <DashboardContent />
  },
  { 
    name: 'Chat', 
    href: '#', 
    icon: UsersIcon, 
    current: false,
    content: <Chats />
  },
  // { 
  //    name: 'Live lecture', 
  //   href: '#', 
  //   icon: FolderIcon, 
  //   current: false,
  //   content: <LiveLectures />
  // },
  // { 
  //   name: 'Calendar', 
  //   href: '#', 
  //   icon: CalendarIcon, 
  //   current: false,
  //   content: <Calender />
  // },
  // { 
  //   name: 'Essay Grading', 
  //   href: '#', 
  //   icon: DocumentDuplicateIcon, 
  //   current: false,
  //   content: <Essaygrading  />
  // },
  { 
   name: 'Explainers', 
    href: '#', 
    icon: ChartPieIcon, 
    current: false,
    content: <Explainers />
  },
]

const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(navigation[0])
  
    const handleNavigationClick = (item) => {
      // Update the active item
      setActiveItem(item)
      
      // Close the mobile sidebar when an item is clicked
      setSidebarOpen(false)
    }

  return (
    <>
     
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-white transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <div className="relative flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src={Logo}
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="relative flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                         {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault()
                                handleNavigationClick(item)
                              }}
                              className={classNames(
                                activeItem.name === item.name
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold cursor-pointer',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  activeItem.name === item.name ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs/6 font-semibold text-gray-400">Your notes</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-white/5 text-white'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[0.625rem] font-medium text-gray-400 group-hover:border-white/20 group-hover:text-white">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-white/5 hover:text-white"
                      >
                        <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                        Study Sets
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden bg-[#fff] ring-1 ring-white/10 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto  px-6 pb-4 border-r border-gray-200">
            <div className="flex h-16 shrink-0 items-center">
              <img 
                alt="Your Company"
                src={Logo}
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                   {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault()
                                handleNavigationClick(item)
                              }}
                              className={classNames(
                                activeItem.name === item.name
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold cursor-pointer',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  activeItem.name === item.name ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs/6 font-semibold text-gray-400">Your notes</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current ? 'bg-white/5 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[0.625rem] font-medium text-gray-400 group-hover:border-white/20 group-hover:text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-white/5 hover:text-white"
                  >
                    <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                     Study Sets
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                {/* <input
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                /> */}
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {/* <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md border border-green-300 px-3 py-2 text-sm font-semibold text-green-600  hover:border-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 bg-transparent"
                        >
                        <ShareIcon aria-hidden="true" className="-ml-0.5 size-5 text-green-600" />
                        Share
                  </button> */}
 
                 <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <ArrowUpTrayIcon aria-hidden="true" className="-ml-0.5 size-5" />
                        Upgrade
                    </button>
                 {/* <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <InformationCircleIcon aria-hidden="true" className="-ml-0.5 size-5" />
                        Feedback
                    </button> */}
               
               <button
                type="button"
                // onClick={() => setOpen(!open)}
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
                <span className="sr-only">View notifications</span>
                <AcademicCapIcon aria-hidden="true" className="size-6" />
            </button>

        {open && (
        <div className="absolute right-0 mt-3 w-80 rounded-xl bg-white shadow-lg ring-1 ring-black/5 z-50">
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-orange-100">
                {/* Placeholder icon */}
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h2 className="font-bold text-indigo-900">res</h2>
                <p className="text-gray-500 text-sm">
                  Your personalized study roadmap
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-gray-500">
                <span className="h-2 w-2 rounded-full border border-gray-400"></span>
                68 To Start
              </span>
              <span className="flex items-center gap-1 text-yellow-500">
                <ClockIcon className="h-4 w-4" />
                1 Active
              </span>
              <span className="flex items-center gap-1 text-green-500">
                <span className="h-2 w-2 rounded-full border border-green-500 bg-green-500"></span>
                0 Done
              </span>
            </div>

            {/* Currently Learning */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <ClockIcon className="h-4 w-4 text-gray-400" />
                CURRENTLY LEARNING
              </p>
              <p className="mt-1 font-semibold text-indigo-900">
                Professional Identity & Core Specializations
              </p>
            </div>

            {/* Continue Button */}
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-500 transition">
              <AcademicCapIcon className="h-5 w-5 text-white" />
              Continue
            </button>
          </div>
        </div>
      )}

                {/* Separator */}
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="relative flex items-center">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                        Tom Cook
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
                {activeItem.content}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
