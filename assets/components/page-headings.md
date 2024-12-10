# Page Headings

```tsx
export default function Example() {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        >
          Edit
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Publish
        </button>
      </div>
    </div>
  )
}
```

```tsx
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div>
        <nav aria-label="Back" className="sm:hidden">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200"
          >
            <ChevronLeftIcon
              aria-hidden="true"
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            Back
          </a>
        </nav>
        <nav aria-label="Breadcrumb" className="hidden sm:flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-400 hover:text-gray-200"
                >
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-500"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"
                >
                  Engineering
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-500"
                />
                <a
                  href="#"
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"
                >
                  Back End Developer
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Back End Developer
          </h2>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}
```

```tsx
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <BriefcaseIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <MapPinIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CurrencyDollarIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            $120k – $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CalendarIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Edit
          </button>
        </span>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            <LinkIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            View
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Publish
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
            More
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 ml-1.5 h-5 w-5"
            />
          </MenuButton>
          <MenuItems
            transition
            className="absolute left-0 z-10 -ml-1 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
              >
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
              >
                View
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}
```

```tsx
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

export default function Example() {
  return (
    <div>
      <div>
        <img
          alt=""
          src={profile.backgroundImage}
          className="h-32 w-full object-cover lg:h-48"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              alt=""
              src={profile.avatar}
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {profile.name}
              </h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <EnvelopeIcon
                  aria-hidden="true"
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                />
                <span>Message</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PhoneIcon
                  aria-hidden="true"
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {profile.name}
          </h1>
        </div>
      </div>
    </div>
  )
}
```

```tsx
export default function Example() {
  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-5">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              className="h-16 w-16 rounded-full"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full shadow-inner"
            />
          </div>
        </div>
        {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
        <div className="pt-1.5">
          <h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
          <p className="text-sm font-medium text-gray-500">
            Applied for{' '}
            <a href="#" className="text-gray-900">
              Front End Developer
            </a>{' '}
            on <time dateTime="2020-08-25">August 25, 2020</time>
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Disqualify
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Advance to offer
        </button>
      </div>
    </div>
  )
}
```

```tsx
const user = {
  name: 'Rebecca Nicholas',
  role: 'Product Designer',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <h2 id="profile-overview-title" className="sr-only">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img
                alt=""
                src={user.imageUrl}
                className="mx-auto h-20 w-20 rounded-full"
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">Welcome back,</p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {user.name}
              </p>
              <p className="text-sm font-medium text-gray-600">{user.role}</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View profile
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-5 text-center text-sm font-medium"
          >
            <span className="text-gray-900">{stat.value}</span>{' '}
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

```tsx
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-300 hover:text-white"
                >
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-500"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Engineering
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mt-2 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <BriefcaseIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <MapPinIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CurrencyDollarIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            $120k – $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CalendarIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
            />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Edit
          </button>
        </span>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            <LinkIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            View
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Publish
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
            More
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 ml-1.5 h-5 w-5"
            />
          </MenuButton>
          <MenuItems
            transition
            className="absolute left-0 z-10 -ml-1 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
              >
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
              >
                View
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}
```

```tsx
import { PlusSmallIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Cashflow
        </h1>
        <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
          <a href="#" className="text-indigo-600">
            Last 7 days
          </a>
          <a href="#" className="text-gray-700">
            Last 30 days
          </a>
          <a href="#" className="text-gray-700">
            All-time
          </a>
        </div>
        <a
          href="#"
          className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusSmallIcon aria-hidden="true" className="-ml-1.5 h-5 w-5" />
          New invoice
        </a>
      </div>
    </div>
  )
}
```
