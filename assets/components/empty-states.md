# Empty States

```tsx
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="text-center">
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mx-auto h-12 w-12 text-gray-400"
      >
        <path
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No projects</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new project.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
          New Project
        </button>
      </div>
    </div>
  )
}
```

```tsx
export default function Example() {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="mx-auto h-12 w-12 text-gray-400"
      >
        <path
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="mt-2 block text-sm font-semibold text-gray-900">
        Create a new database
      </span>
    </button>
  )
}
```

```tsx
import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/outline'

const items = [
  {
    title: 'Create a List',
    description: 'Another to-do system you’ll try but eventually give up on.',
    icon: Bars4Icon,
    background: 'bg-pink-500',
  },
  {
    title: 'Create a Calendar',
    description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
    icon: CalendarIcon,
    background: 'bg-yellow-500',
  },
  {
    title: 'Create a Gallery',
    description: 'Great for mood boards and inspiration.',
    icon: PhotoIcon,
    background: 'bg-green-500',
  },
  {
    title: 'Create a Board',
    description: 'Track tasks in different stages of your project.',
    icon: ViewColumnsIcon,
    background: 'bg-blue-500',
  },
  {
    title: 'Create a Spreadsheet',
    description: 'Lots of numbers and things — good for nerds.',
    icon: TableCellsIcon,
    background: 'bg-indigo-500',
  },
  {
    title: 'Create a Timeline',
    description: 'Get a birds-eye-view of your procrastination.',
    icon: ClockIcon,
    background: 'bg-purple-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Projects
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        You haven’t created a project yet. Get started by selecting a template
        or start from an empty project.
      </p>
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
              <div
                className={classNames(
                  item.background,
                  'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                )}
              >
                <item.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  )
}
```

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

```tsx
import { PlusIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Example() {
  return (
    <div className="mx-auto max-w-lg">
      <div>
        <div className="text-center">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-gray-400"
          >
            <path
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">
            Add team members
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            You haven’t added any team members to your project yet. As the owner
            of this project, you can manage team member permissions.
          </p>
        </div>
        <form action="#" className="mt-6 flex">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter an email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send invite
          </button>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">
          Team members previously added to projects
        </h3>
        <ul
          role="list"
          className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
        >
          {people.map((person, personIdx) => (
            <li
              key={personIdx}
              className="flex items-center justify-between space-x-3 py-4"
            >
              <div className="flex min-w-0 flex-1 items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="truncate text-sm font-medium text-gray-500">
                    {person.role}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900"
                >
                  <PlusIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  />
                  Invite <span className="sr-only">{person.name}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
```

```tsx
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  CommandLineIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'

const items = [
  {
    name: 'Marketing Campaign',
    description: 'I think the kids call these memes these days.',
    href: '#',
    iconColor: 'bg-pink-500',
    icon: MegaphoneIcon,
  },
  {
    name: 'Engineering Project',
    description:
      'Something really expensive that will ultimately get cancelled.',
    href: '#',
    iconColor: 'bg-purple-500',
    icon: CommandLineIcon,
  },
  {
    name: 'Event',
    description: 'Like a conference all about you that no one will care about.',
    href: '#',
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="mx-auto max-w-lg">
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Create your first project
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Get started by selecting a template or start from an empty project.
      </p>
      <ul
        role="list"
        className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx}>
            <div className="group relative flex items-start space-x-3 py-4">
              <div className="flex-shrink-0">
                <span
                  className={classNames(
                    item.iconColor,
                    'inline-flex h-10 w-10 items-center justify-center rounded-lg'
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  <a href={item.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </a>
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="flex-shrink-0 self-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex">
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  )
}
```

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

```tsx
import { PlusIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    role: 'Principal Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Example() {
  return (
    <div className="mx-auto max-w-md sm:max-w-3xl">
      <div>
        <div className="text-center">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-gray-400"
          >
            <path
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">
            Add team members
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            You haven’t added any team members to your project yet.
          </p>
        </div>
        <form action="#" className="mt-6 sm:flex sm:items-center">
          <label htmlFor="emails" className="sr-only">
            Email addresses
          </label>
          <div className="grid grid-cols-1 sm:flex-auto">
            <input
              id="emails"
              name="emails"
              type="text"
              placeholder="Enter an email"
              className="peer relative col-start-1 row-start-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <div
              aria-hidden="true"
              className="col-start-1 col-end-3 row-start-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600"
            />
            <div className="col-start-2 row-start-1 flex items-center">
              <span
                aria-hidden="true"
                className="h-4 w-px flex-none bg-gray-200"
              />
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="rounded-md border-0 bg-transparent py-1.5 pl-4 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>Can edit</option>
                <option>Can view</option>
              </select>
            </div>
          </div>
          <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send invite
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">
          Recommended team members
        </h3>
        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {people.map((person, personIdx) => (
            <li key={personIdx}>
              <button
                type="button"
                className="group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="flex min-w-0 flex-1 items-center space-x-3">
                  <span className="block flex-shrink-0">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-gray-900">
                      {person.name}
                    </span>
                    <span className="block truncate text-sm font-medium text-gray-500">
                      {person.role}
                    </span>
                  </span>
                </span>
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <PlusIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
```
