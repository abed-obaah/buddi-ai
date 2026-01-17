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

      <div className="min-h-screen bg-gray-50/50">
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5 text-white hover:scale-110 transition-transform">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>

              {/* Sidebar component */}
              <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img alt="StudyBuddy" src={Logo} className="h-8 w-auto" />
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
                                e.preventDefault();
                                handleNavigationClick(item);
                              }}
                              className={classNames(
                                activeItem.name === item.name
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600',
                                'group flex gap-x-3 rounded-xl p-3 text-sm font-semibold transition-all duration-200',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  activeItem.name === item.name ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600',
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
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Your notes</div>
                      <ul role="list" className="-mx-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className="group flex gap-x-3 rounded-xl p-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all"
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-blue-200 group-hover:text-blue-600">
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
                        className="group -mx-2 flex gap-x-3 rounded-xl p-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all"
                      >
                        <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="StudyBuddy"
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
                              ? 'bg-blue-50 text-blue-600 shadow-sm'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600',
                            'group flex gap-x-3 rounded-xl p-3 text-sm/6 font-semibold transition-all duration-200',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              activeItem.name === item.name ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600',
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
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Your notes</div>
                  <ul role="list" className="-mx-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className="group flex gap-x-3 rounded-xl p-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all"
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-blue-200 group-hover:text-blue-600">
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
                    className="group -mx-2 flex gap-x-3 rounded-xl p-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all"
                  >
                    <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-100 bg-white/80 backdrop-blur-md px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-500 hover:text-gray-900 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex flex-1" />
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
                >
                  <ArrowUpTrayIcon aria-hidden="true" className="size-4" />
                  Upgrade Plan
                </button>

                <button
                  type="button"
                  className="relative -m-2.5 p-2.5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                  <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                </button>

                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="relative flex items-center p-1 rounded-full hover:bg-gray-100 transition-all">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt="Avatar"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full object-cover ring-2 ring-white"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-3 text-sm font-semibold text-gray-700">
                        John Doe
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 size-4 text-gray-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-2xl bg-white p-1.5 shadow-xl ring-1 ring-gray-900/5 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
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

          <main className="py-8">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {activeItem.content}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
