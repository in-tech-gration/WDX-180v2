# Dropdowns

```tsx
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <PencilSquareIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              />
              Edit
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <DocumentDuplicateIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              />
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <ArchiveBoxIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              />
              Archive
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <ArrowRightCircleIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              />
              Move
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <UserPlusIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              />
              Share
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <HeartIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              />
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <TrashIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              />
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
```
