# Home Screens

This example requires some changes to your config:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
```

````tsx
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
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Bars3Icon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Deployments', href: '#', icon: ServerIcon, current: true },
  { name: 'Activity', href: '#', icon: SignalIcon, current: false },
  { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
]
const statuses = {
  offline: 'text-gray-500 bg-gray-100/10',
  online: 'text-green-400 bg-green-400/10',
  error: 'text-rose-400 bg-rose-400/10',
}
const environments = {
  Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
}
const deployments = [
  {
    id: 1,
    href: '#',
    projectName: 'ios-app',
    teamName: 'Planetaria',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
  // More deployments...
]
const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 xl:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
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
                                item.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="h-6 w-6 shrink-0"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs font-semibold leading-6 text-gray-400">
                        Your teams
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                              )}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="-mx-6 mt-auto">
                      <a
                        href="#"
                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                      >
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="h-8 w-8 rounded-full bg-gray-800"
                        />
                        <span className="sr-only">Your profile</span>
                        <span aria-hidden="true">Tom Cook</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
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
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 shrink-0"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full bg-gray-800"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-white xl:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="flex flex-1">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                  />
                  <input
                    id="search-field"
                    name="search"
                    type="search"
                    placeholder="Search..."
                    className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
                  />
                </div>
              </form>
            </div>
          </div>

          <main className="lg:pr-96">
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-white">
                Deployments
              </h1>

              {/* Sort dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-x-1 text-sm font-medium leading-6 text-white">
                  Sort by
                  <ChevronUpDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500"
                  />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                    >
                      Name
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                    >
                      Date updated
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                    >
                      Environment
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </header>

            {/* Deployment list */}
            <ul role="list" className="divide-y divide-white/5">
              {deployments.map((deployment) => (
                <li
                  key={deployment.id}
                  className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"
                >
                  <div className="min-w-0 flex-auto">
                    <div className="flex items-center gap-x-3">
                      <div
                        className={classNames(
                          statuses[deployment.status],
                          'flex-none rounded-full p-1'
                        )}
                      >
                        <div className="h-2 w-2 rounded-full bg-current" />
                      </div>
                      <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                        <a href={deployment.href} className="flex gap-x-2">
                          <span className="truncate">
                            {deployment.teamName}
                          </span>
                          <span className="text-gray-400">/</span>
                          <span className="whitespace-nowrap">
                            {deployment.projectName}
                          </span>
                          <span className="absolute inset-0" />
                        </a>
                      </h2>
                    </div>
                    <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                      <p className="truncate">{deployment.description}</p>
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                      >
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      <p className="whitespace-nowrap">
                        {deployment.statusText}
                      </p>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      environments[deployment.environment],
                      'flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset'
                    )}
                  >
                    {deployment.environment}
                  </div>
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                </li>
              ))}
            </ul>
          </main>

          {/* Activity feed */}
          <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
              <h2 className="text-base font-semibold leading-7 text-white">
                Activity feed
              </h2>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-indigo-400"
              >
                View all
              </a>
            </header>
            <ul role="list" className="divide-y divide-white/5">
              {activityItems.map((item) => (
                <li key={item.commit} className="px-4 py-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-x-3">
                    <img
                      alt=""
                      src={item.user.imageUrl}
                      className="h-6 w-6 flex-none rounded-full bg-gray-800"
                    />
                    <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
                      {item.user.name}
                    </h3>
                    <time
                      dateTime={item.dateTime}
                      className="flex-none text-xs text-gray-600"
                    >
                      {item.date}
                    </time>
                  </div>
                  <p className="mt-3 truncate text-sm text-gray-500">
                    Pushed to{' '}
                    <span className="text-gray-400">{item.projectName}</span> (
                    <span className="font-mono text-gray-400">
                      {item.commit}
                    </span>{' '}
                    on <span className="text-gray-400">{item.branch}</span>)
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  )
}
````

```tsx
;('use client')

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid'
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Invoices', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'Expenses', href: '#' },
]
const secondaryNavigation = [
  { name: 'Last 7 days', href: '#', current: true },
  { name: 'Last 30 days', href: '#', current: false },
  { name: 'All-time', href: '#', current: false },
]
const stats = [
  {
    name: 'Revenue',
    value: '$405,091.00',
    change: '+4.75%',
    changeType: 'positive',
  },
  {
    name: 'Overdue invoices',
    value: '$12,787.00',
    change: '+54.02%',
    changeType: 'negative',
  },
  {
    name: 'Outstanding invoices',
    value: '$245,988.00',
    change: '-1.39%',
    changeType: 'positive',
  },
  {
    name: 'Expenses',
    value: '$30,156.00',
    change: '+10.18%',
    changeType: 'negative',
  },
]
const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]
const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/plus/img/logos/48x48/tuple.svg',
    lastInvoice: {
      date: 'December 13, 2022',
      dateTime: '2022-12-13',
      amount: '$2,000.00',
      status: 'Overdue',
    },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/plus/img/logos/48x48/savvycal.svg',
    lastInvoice: {
      date: 'January 22, 2023',
      dateTime: '2023-01-22',
      amount: '$14,000.00',
      status: 'Paid',
    },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/plus/img/logos/48x48/reform.svg',
    lastInvoice: {
      date: 'January 23, 2023',
      dateTime: '2023-01-23',
      amount: '$7,600.00',
      status: 'Paid',
    },
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-3 p-3 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-5 w-5 text-gray-900" />
            </button>
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full bg-gray-800"
              />
            </a>
          </div>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <div className="relative isolate overflow-hidden pt-16">
          {/* Secondary navigation */}
          <header className="pb-4 pt-6 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-gray-900">
                Cashflow
              </h1>
              <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      item.current ? 'text-indigo-600' : 'text-gray-700'
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusSmallIcon aria-hidden="true" className="-ml-1.5 h-5 w-5" />
                New invoice
              </a>
            </div>
          </header>

          {/* Stats */}
          <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={classNames(
                    statIdx % 2 === 1
                      ? 'sm:border-l'
                      : statIdx === 2
                        ? 'lg:border-l'
                        : '',
                    'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8'
                  )}
                >
                  <dt className="text-sm font-medium leading-6 text-gray-500">
                    {stat.name}
                  </dt>
                  <dd
                    className={classNames(
                      stat.changeType === 'negative'
                        ? 'text-rose-600'
                        : 'text-gray-700',
                      'text-xs font-medium'
                    )}
                  >
                    {stat.change}
                  </dd>
                  <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            aria-hidden="true"
            className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
          >
            <div
              style={{
                clipPath:
                  'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
              }}
              className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
            />
          </div>
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          {/* Recent activity table */}
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
                Recent activity
              </h2>
            </div>
            <div className="mt-6 overflow-hidden border-t border-gray-100">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                  <table className="w-full text-left">
                    <thead className="sr-only">
                      <tr>
                        <th>Amount</th>
                        <th className="hidden sm:table-cell">Client</th>
                        <th>More details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {days.map((day) => (
                        <Fragment key={day.dateTime}>
                          <tr className="text-sm leading-6 text-gray-900">
                            <th
                              scope="colgroup"
                              colSpan={3}
                              className="relative isolate py-2 font-semibold"
                            >
                              <time dateTime={day.dateTime}>{day.date}</time>
                              <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                              <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                            </th>
                          </tr>
                          {day.transactions.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="relative py-5 pr-6">
                                <div className="flex gap-x-6">
                                  <transaction.icon
                                    aria-hidden="true"
                                    className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                  />
                                  <div className="flex-auto">
                                    <div className="flex items-start gap-x-3">
                                      <div className="text-sm font-medium leading-6 text-gray-900">
                                        {transaction.amount}
                                      </div>
                                      <div
                                        className={classNames(
                                          statuses[transaction.status],
                                          'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                        )}
                                      >
                                        {transaction.status}
                                      </div>
                                    </div>
                                    {transaction.tax ? (
                                      <div className="mt-1 text-xs leading-5 text-gray-500">
                                        {transaction.tax} tax
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                                <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                              </td>
                              <td className="hidden py-5 pr-6 sm:table-cell">
                                <div className="text-sm leading-6 text-gray-900">
                                  {transaction.client}
                                </div>
                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                  {transaction.description}
                                </div>
                              </td>
                              <td className="py-5 text-right">
                                <div className="flex justify-end">
                                  <a
                                    href={transaction.href}
                                    className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                                  >
                                    View
                                    <span className="hidden sm:inline">
                                      {' '}
                                      transaction
                                    </span>
                                    <span className="sr-only">
                                      , invoice #{transaction.invoiceNumber},{' '}
                                      {transaction.client}
                                    </span>
                                  </a>
                                </div>
                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                  Invoice{' '}
                                  <span className="text-gray-900">
                                    #{transaction.invoiceNumber}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Recent client list*/}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Recent clients
                </h2>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  View all<span className="sr-only">, clients</span>
                </a>
              </div>
              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
              >
                {clients.map((client) => (
                  <li
                    key={client.id}
                    className="overflow-hidden rounded-xl border border-gray-200"
                  >
                    <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                      <img
                        alt={client.name}
                        src={client.imageUrl}
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                      />
                      <div className="text-sm font-medium leading-6 text-gray-900">
                        {client.name}
                      </div>
                      <Menu as="div" className="relative ml-auto">
                        <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Open options</span>
                          <EllipsisHorizontalIcon
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                            >
                              View
                              <span className="sr-only">, {client.name}</span>
                            </a>
                          </MenuItem>
                          <MenuItem>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                            >
                              Edit
                              <span className="sr-only">, {client.name}</span>
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Last invoice</dt>
                        <dd className="text-gray-700">
                          <time dateTime={client.lastInvoice.dateTime}>
                            {client.lastInvoice.date}
                          </time>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Amount</dt>
                        <dd className="flex items-start gap-x-2">
                          <div className="font-medium text-gray-900">
                            {client.lastInvoice.amount}
                          </div>
                          <div
                            className={classNames(
                              statuses[client.lastInvoice.status],
                              'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                            )}
                          >
                            {client.lastInvoice.status}
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
```
