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
import { CheckCircleIcon, ClockIcon ,ArrowUpTrayIcon,InformationCircleIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
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

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
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
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
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
                              className={classNames(
                                item.current
                                  ? 'bg-white/5 text-white'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon aria-hidden="true" className="size-6 shrink-0" />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
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
        <div className="hidden bg-gray-900 ring-1 ring-white/10 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
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
                          className={classNames(
                            item.current ? 'bg-white/5 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon aria-hidden="true" className="size-6 shrink-0" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
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
                    Settings
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
                <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md border border-green-300 px-3 py-2 text-sm font-semibold text-green-600  hover:border-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 bg-transparent"
                        >
                        <ShareIcon aria-hidden="true" className="-ml-0.5 size-5 text-green-600" />
                        Share
                        </button>
 
                 <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <ArrowUpTrayIcon aria-hidden="true" className="-ml-0.5 size-5" />
                        Upgrade
                    </button>
                 <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <InformationCircleIcon aria-hidden="true" className="-ml-0.5 size-5" />
                        Feedback
                    </button>
               
               <button
                type="button"
                onClick={() => setOpen(!open)}
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
                      <div className="relative">
                        <nav className="w-full flex items-center px-3 py-2 bg-white dark:bg-dark z-[5]">
                          <div className="flex flex-1 justify-end w-full items-center">
                            <div className="mr-auto ml-2" />
                            <div className="flex items-center">
                              <div className="hidden md:block">
                                <div>
                                  <button
                                    aria-busy="false"
                                    className="px-2.5 py-1.5 text-xs font-medium min-h-[36px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-blue hover:bg-blue2 text-blue hover:text-white focus:ring-blue focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center lg:mr-2"
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
                                      className="lucide lucide-user-plus w-4 h-4"
                                      aria-hidden="true"
                                    >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                      <circle cx={9} cy={7} r={4} />
                                      <line x1={19} x2={19} y1={8} y2={14} />
                                      <line x1={22} x2={16} y1={11} y2={11} />
                                    </svg>
                                    Share
                                  </button>
                                </div>
                              </div>
                              <div className="px-2">
                                <button
                                  aria-busy="false"
                                  className="px-2.5 py-1.5 text-xs font-medium min-h-[36px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-green hover:bg-[#00A86B] text-white border border-green hover:border-[#00A86B] focus:ring-green dark:focus:ring-[#00A86B] focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
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
                                    className="lucide lucide-arrow-up-from-line w-4 h-4"
                                    aria-hidden="true"
                                  >
                                    <path d="m18 9-6-6-6 6" />
                                    <path d="M12 3v14" />
                                    <path d="M5 21h14" />
                                  </svg>
                                  Upgrade
                                </button>
                              </div>
                              <div className="hidden md:block">
                                <div aria-expanded="false">
                                  <button
                                    aria-busy="false"
                                    className="px-2.5 py-1.5 text-xs font-medium min-h-[36px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
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
                                      className="lucide lucide-info w-4 h-4"
                                      aria-hidden="true"
                                    >
                                      <circle cx={12} cy={12} r={10} />
                                      <path d="M12 16v-4" />
                                      <path d="M12 8h.01" />
                                    </svg>
                                    Feedback
                                  </button>
                                </div>
                              </div>
                              <div className="relative hidden md:block">
                                <button
                                  className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 relative text-gray-600 dark:text-gray-400"
                                  aria-expanded="false"
                                >
                                  <div className="relative">
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
                                      className="lucide lucide-file-up w-6 h-6"
                                    >
                                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                      <path d="M12 12v6" />
                                      <path d="m15 15-3-3-3 3" />
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div className="px-2 z-[51]">
                                <div className="relative group lg:z-[9999]">
                                  <div className="flex gap-3 items-center z-[3245723452534]">
                                    <div className="group relative hidden md:flex" />
                                    <div className="group relative">
                                      <a
                                        className="flex items-center justify-end px-2 group-hover:bg-primary group-hover:bg-opacity-20 dark:group-hover:bg-dark2 dark:group-hover:bg-opacity-20 rounded-2xl transition-all duration-300 min-h-[36px] py-1"
                                        href="/platform/gameProfile"
                                      >
                                        <div className="relative flex items-center">
                                          <div className="relative">
                                            <div className="rounded-full overflow-hidden w-7 h-7 md:w-8 md:h-8">
                                              <img
                                                alt="Profile Picture"
                                                loading="lazy"
                                                width={75}
                                                height={75}
                                                decoding="async"
                                                data-nimg={1}
                                                className="group-hover:scale-110 transition-all duration-300"
                                                srcSet="
                                                                                        /_next/image?url=https%3A%2F%2Fstudyfetch.sfo3.cdn.digitaloceanspaces.com%2Fprofile%2F235905%2F1752113488216.webp&w=96&q=75  1x,
                                                                                        /_next/image?url=https%3A%2F%2Fstudyfetch.sfo3.cdn.digitaloceanspaces.com%2Fprofile%2F235905%2F1752113488216.webp&w=256&q=75 2x
                                                                                    "
                                                src="/_next/image?url=https%3A%2F%2Fstudyfetch.sfo3.cdn.digitaloceanspaces.com%2Fprofile%2F235905%2F1752113488216.webp&w=256&q=75"
                                                style={{ color: "transparent" }}
                                              />
                                            </div>
                                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 rounded-full w-full border-2 border-primary dark:border-2 dark:border-purple bg-white2 text-sm font-semibold text-center text-primary dark:text-primary hidden md:block">
                                              1
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="absolute pt-2 right-0 z-[99999] transform scale-0 group-hover:scale-100 transition-all duration-100">
                                        <div className="bg-white dark:bg-dark border border-purple/50 rounded-lg shadow-lg origin-top whitespace-nowrap min-w-[200px]">
                                          <div className="flex flex-col py-1">
                                            <a
                                              className="flex items-center gap-2 px-3 py-2 text-sm text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-dark2 transition-all duration-300 ease-in-out font-medium"
                                              href="/platform/gameProfile"
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
                                                className="lucide lucide-gamepad"
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
                                              <span>Your Profile</span>
                                            </a>
                                            <a
                                              className="flex items-center gap-2 px-3 py-2 text-sm text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-dark2 transition-all duration-300 ease-in-out font-medium"
                                              href="/platform/profile"
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
                                                className="lucide lucide-settings"
                                              >
                                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                                <circle cx={12} cy={12} r={3} />
                                              </svg>
                                              <span>Settings</span>
                                            </a>
                                            <button className="flex items-center gap-2 px-3 py-2 text-sm text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-dark2 transition-all duration-300 ease-in-out font-medium">
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
                                                className="lucide lucide-moon"
                                              >
                                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                              </svg>
                                              <span>Dark Mode</span>
                                            </button>
                                            <button
                                              className="flex items-center gap-2 px-3 py-2 text-sm text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-dark2 transition-all duration-300 ease-in-out font-medium"
                                              aria-expanded="false"
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
                                                className="lucide lucide-square-pen"
                                              >
                                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                              </svg>
                                              <span>Give Us Feedback</span>
                                            </button>
                                            <button className="flex items-center gap-2 px-3 py-2 text-sm text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-dark2 transition-all duration-300 ease-in-out font-medium">
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
                                                className="lucide lucide-message-circle-question"
                                              >
                                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                <path d="M12 17h.01" />
                                              </svg>
                                              <span>Support</span>
                                            </button>
                                            <a
                                              href="https://discord.gg/StudyFetch"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-2 px-3 py-2 text-sm text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-dark2 transition-all duration-300 ease-in-out font-medium"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="text-[#5865F2]"
                                              >
                                                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.9-.608 1.3A18.566 18.566 0 0 0 8.844 3.3a.077.077 0 0 0-.079-.037c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.209 13.209 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.129 12.407 12.407 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.278c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                              </svg>
                                              <span>Discord</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex p-3 rounded-md bg-[#dad3ff] top-[calc(130%+10px)] right-3 z-[9999] min-w-max">
                                    <div className="absolute w-0 h-0 border-[10px] bottom-full left-[90%] transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-[#dad3ff]" />
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
                                      className="lucide lucide-lightbulb text-primary self-center mr-3 text-xl"
                                    >
                                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                      <path d="M9 18h6" />
                                      <path d="M10 22h4" />
                                    </svg>
                                    <div className="flex flex-col">
                                      <span className="font-bold text-base text-primary">
                                        Try out Dark Mode!
                                      </span>
                                      <span className="text-primary text-xs font-normal">
                                        Toggle the dark mode to give your eyes a
                                        break.
                                      </span>
                                      <button className="hover:bg-[#d2c9fd] rounded-md p-1 text-primary text-xs font-semibold self-start mt-3">
                                        Dismiss
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
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
                                          srcSet="
                                                                            /_next/image?url=https%3A%2F%2Fstudyfetch.sfo3.cdn.digitaloceanspaces.com%2Fset-icons%2Fknowledge%2F20.png&w=64&q=75  1x,
                                                                            /_next/image?url=https%3A%2F%2Fstudyfetch.sfo3.cdn.digitaloceanspaces.com%2Fset-icons%2Fknowledge%2F20.png&w=128&q=75 2x
                                                                        "
                                          src="/_next/image?url=https%3A%2F%2Fstudyfetch.sfo3.cdn.digitaloceanspaces.com%2Fset-icons%2Fknowledge%2F20.png&w=128&q=75"
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
                                          <h1 className="text-xl font-bold text-primary dark:text-white truncate">
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
                                            className="px-2 py-1 text-[.65rem] min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-dark2 dark:hover:bg-dark dark:text-white border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center !font-semibold"
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
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                          zzz
                                        </p>
                                        <div className="flex flex-wrap items-center gap-1.5">
                                          <a
                                            aria-busy="false"
                                            className="px-2 py-1 text-[.65rem] min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
                                            aria-disabled="false"
                                            href="/platform/studyset/68740f753d4c0af656ec96d8/knowledge"
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
                                            className="px-2 py-1 text-[.65rem] min-h-[32px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
                                            aria-disabled="false"
                                            href="/platform/gameProfile"
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
                                <div className="mb-4">
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
                                          <p className="text-lg font-bold text-gray-900 dark:text-white">
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
                                          <p className="text-lg font-bold text-gray-900 dark:text-white">
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
                                          <p className="text-lg font-bold text-gray-900 dark:text-white">
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
                                            srcSet="/_next/image?url=%2Ficons%2Fplatform%2Ftutorme.png&w=32&q=75 1x, /_next/image?url=%2Ficons%2Fplatform%2Ftutorme.png&w=48&q=75 2x"
                                            src="/_next/image?url=%2Ficons%2Fplatform%2Ftutorme.png&w=48&q=75"
                                            style={{ color: "transparent" }}
                                          />
                                        </div>
                                        <div>
                                          <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Tutor Me
                                          </p>
                                          <p className="text-lg font-bold text-gray-900 dark:text-white">
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
                                          <p className="text-lg font-bold text-gray-900 dark:text-white">
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
                                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                                            0
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative max-w-2xl mx-auto mt-8">
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
                                            <h2 className="text-xl font-bold text-primary dark:text-white mb-1">
                                              Upload First Material
                                            </h2>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                              Start by uploading your first
                                              study material to this study set.
                                            </p>
                                            <div className="flex gap-3">
                                              <a
                                                aria-busy="false"
                                                className="px-2.5 py-1.5 text-xs font-medium min-h-[36px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-blue hover:bg-blue2 text-white border border-blue hover:border-blue2 focus:ring-blue dark:focus:ring-blue2 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center flex-1"
                                                aria-disabled="false"
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
                                                  <line
                                                    x1={12}
                                                    x2={12}
                                                    y1={3}
                                                    y2={15}
                                                  />
                                                </svg>
                                                Upload Materials
                                              </a>
                                              <button
                                                aria-busy="false"
                                                className="px-2.5 py-1.5 text-xs font-medium min-h-[36px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center flex-1"
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
          </main>
        </div>
      </div>
    </>
  )
}
