# Action Panels

```tsx
export default function Example() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Manage subscription
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            voluptatibus corrupti atque repudiandae nam.
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Change plan
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
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Continuous Integration
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            totam at reprehenderit maxime aut beatae ad.
          </p>
        </div>
        <div className="mt-3 text-sm leading-6">
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Learn more about our CI features
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
```

```tsx
export default function Example() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Manage subscription
        </h3>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae voluptatibus corrupti atque repudiandae nam.
            </p>
          </div>
          <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Change plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
```

```tsx
;('use client')

import { useState } from 'react'
import { Description, Field, Label, Switch } from '@headlessui/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <Field className="px-4 py-5 sm:p-6">
        <Label
          as="h3"
          passive
          className="text-base font-semibold leading-6 text-gray-900"
        >
          Renew subscription automatically
        </Label>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm text-gray-500">
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              totam non cumque deserunt officiis ex maiores nostrum.
            </Description>
          </div>
          <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
            >
              <span
                aria-hidden="true"
                className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
              />
            </Switch>
          </div>
        </div>
      </Field>
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
export default function Example() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Update your email
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Change the email address you want associated with your account.</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
```

```tsx
export default function Example() {
  return (
    <div className="bg-gray-50 sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Need more bandwidth?
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus praesentium tenetur pariatur.
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Contact sales
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
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Payment method
        </h3>
        <div className="mt-5">
          <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
            <h4 className="sr-only">Visa</h4>
            <div className="sm:flex sm:items-start">
              <svg
                viewBox="0 0 36 24"
                aria-hidden="true"
                className="h-8 w-auto sm:h-6 sm:flex-shrink-0"
              >
                <rect rx={4} fill="#224DBA" width={36} height={24} />
                <path
                  d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                  fill="#fff"
                />
              </svg>
              <div className="mt-3 sm:ml-4 sm:mt-0">
                <div className="text-sm font-medium text-gray-900">
                  Ending with 4242
                </div>
                <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                  <div>Expires 12/20</div>
                  <span aria-hidden="true" className="hidden sm:mx-2 sm:inline">
                    &middot;
                  </span>
                  <div className="mt-1 sm:mt-0">
                    Last updated on 22 Aug 2017
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```
