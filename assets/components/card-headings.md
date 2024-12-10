# Card Headings

```tsx
export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Job Postings
      </h3>
    </div>
  )
}
```

```tsx
export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Job Postings
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  )
}
```

```tsx
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-12 w-12 rounded-full"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Tom Cook
              </h3>
              <p className="text-sm text-gray-500">
                <a href="#">@tom_cook</a>
              </p>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-4 flex flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PhoneIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            />
            <span>Phone</span>
          </button>
          <button
            type="button"
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <EnvelopeIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  )
}
```

```tsx
export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Job Postings
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit quam
            corrupti consectetur.
          </p>
        </div>
        <div className="ml-4 mt-4 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  )
}
```

```tsx
export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Job Postings
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti
        consectetur.
      </p>
    </div>
  )
}
```

```tsx
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CodeBracketIcon,
  EllipsisVerticalIcon,
  FlagIcon,
  StarIcon,
} from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="bg-white px-4 py-5 sm:px-6">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">
            <a href="#" className="hover:underline">
              Chelsea Hagon
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
              December 9 at 11:43 AM
            </a>
          </p>
        </div>
        <div className="flex flex-shrink-0 self-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <StarIcon
                      aria-hidden="true"
                      className="mr-3 h-5 w-5 text-gray-400"
                    />
                    <span>Add to favorites</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <CodeBracketIcon
                      aria-hidden="true"
                      className="mr-3 h-5 w-5 text-gray-400"
                    />
                    <span>Embed</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <FlagIcon
                      aria-hidden="true"
                      className="mr-3 h-5 w-5 text-gray-400"
                    />
                    <span>Report content</span>
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}
```
