# Alerts

```tsx
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="h-5 w-5 text-yellow-400"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Attention needed
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

```tsx
import { XCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            There were 2 errors with your submission
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              <li>Your password must be at least 8 characters</li>
              <li>
                Your password must include at least one pro wrestling finishing
                move
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
```

```tsx
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-green-400"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">
            Order completed
          </h3>
          <div className="mt-2 text-sm text-green-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                View status
              </button>
              <button
                type="button"
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

```tsx
import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-blue-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-blue-400"
          />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">
            A new software update is available. See what’s new in version 2.0.4.
          </p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            <a
              href="#"
              className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
            >
              Details
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
```

```tsx
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="h-5 w-5 text-yellow-400"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            You have no credits left.{' '}
            <a
              href="#"
              className="font-medium text-yellow-700 underline hover:text-yellow-600"
            >
              Upgrade your account to add more credits.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
```

```tsx
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-green-400"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            Successfully uploaded
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
```
