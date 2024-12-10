# Dividers

```tsx
export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-gray-500">Continue</span>
      </div>
    </div>
  )
}
```

```tsx
export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-base font-semibold leading-6 text-gray-900">
          Projects
        </span>
      </div>
    </div>
  )
}
```

```tsx
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PlusIcon
            aria-hidden="true"
            className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
          />
          Button text
        </button>
      </div>
    </div>
  )
}
```

```tsx
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex items-center justify-between">
        <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">
          Projects
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PlusIcon
            aria-hidden="true"
            className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
          />
          <span>Button text</span>
        </button>
      </div>
    </div>
  )
}
```

```tsx
import {
  ChatBubbleBottomCenterTextIcon,
  PaperClipIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Attachment</span>
            <PaperClipIcon aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Annotate</span>
            <ChatBubbleBottomCenterTextIcon
              aria-hidden="true"
              className="h-5 w-5"
            />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </span>
      </div>
    </div>
  )
}
```
