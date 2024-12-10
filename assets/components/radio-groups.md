# Radio Groups

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
const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">
        Notifications
      </legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        How do you prefer to receive notifications?
      </p>
      <div className="mt-6 space-y-6">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'email'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor={notificationMethod.id}
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
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
const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">
        Notifications
      </legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        How do you prefer to receive notifications?
      </p>
      <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'email'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor={notificationMethod.id}
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
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
const plans = [
  {
    id: 'small',
    name: 'Small',
    description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
  },
  {
    id: 'medium',
    name: 'Medium',
    description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage',
  },
  {
    id: 'large',
    name: 'Large',
    description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage',
  },
]

export default function Example() {
  return (
    <fieldset aria-label="Plan">
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                defaultChecked={plan.id === 'small'}
                id={plan.id}
                name="plan"
                type="radio"
                aria-describedby={`${plan.id}-description`}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={plan.id} className="font-medium text-gray-900">
                {plan.name}
              </label>
              <p id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
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
const plans = [
  {
    id: 'small',
    name: 'Small',
    description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
  },
  {
    id: 'medium',
    name: 'Medium',
    description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage',
  },
  {
    id: 'large',
    name: 'Large',
    description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage',
  },
]

export default function Example() {
  return (
    <fieldset aria-label="Plan">
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                defaultChecked={plan.id === 'small'}
                id={plan.id}
                name="plan"
                type="radio"
                aria-describedby={`${plan.id}-description`}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={plan.id} className="font-medium text-gray-900">
                {plan.name}
              </label>{' '}
              <span id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
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
const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">
        Select a side
      </legend>
      <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label
                htmlFor={`side-${side.id}`}
                className="select-none font-medium text-gray-900"
              >
                {side.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                defaultChecked={side.id === null}
                id={`side-${side.id}`}
                name="plan"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
```

```tsx
;('use client')

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const options = [
  { name: 'Pink', color: 'text-pink-500' },
  { name: 'Purple', color: 'text-purple-500' },
  { name: 'Blue', color: 'text-blue-500' },
  { name: 'Green', color: 'text-green-500' },
  { name: 'Yellow', color: 'text-yellow-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(options[1])

  return (
    <fieldset>
      <legend className="block text-sm font-semibold leading-6 text-gray-900">
        Choose a label color
      </legend>
      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-6 flex items-center space-x-3"
      >
        {options.map((option) => (
          <Radio
            key={option.name}
            value={option}
            aria-label={option.name}
            className={classNames(
              option.color,
              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1'
            )}
          >
            <span
              aria-hidden="true"
              className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-current"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
```

```tsx
;('use client')

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const mailingLists = [
  {
    id: 1,
    title: 'Newsletter',
    description: 'Last message sent an hour ago',
    users: '621 users',
  },
  {
    id: 2,
    title: 'Existing Customers',
    description: 'Last message sent 2 weeks ago',
    users: '1200 users',
  },
  {
    id: 3,
    title: 'Trial Users',
    description: 'Last message sent 4 days ago',
    users: '2740 users',
  },
]

export default function Example() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  )

  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">
        Select a mailing list
      </legend>
      <RadioGroup
        value={selectedMailingLists}
        onChange={setSelectedMailingLists}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      >
        {mailingLists.map((mailingList) => (
          <Radio
            key={mailingList.id}
            value={mailingList}
            aria-label={mailingList.title}
            aria-description={`${mailingList.description} to ${mailingList.users}`}
            className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-gray-900">
                  {mailingList.title}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-500">
                  {mailingList.description}
                </span>
                <span className="mt-6 text-sm font-medium text-gray-900">
                  {mailingList.users}
                </span>
              </span>
            </span>
            <CheckCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:invisible"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
```

```tsx
;('use client')

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const memoryOptions = [
  { name: '4 GB', inStock: true },
  { name: '8 GB', inStock: true },
  { name: '16 GB', inStock: true },
  { name: '32 GB', inStock: true },
  { name: '64 GB', inStock: true },
  { name: '128 GB', inStock: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mem, setMem] = useState(memoryOptions[2])

  return (
    <fieldset aria-label="Choose a memory option">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium leading-6 text-gray-900">RAM</div>
        <a
          href="#"
          className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
        >
          See performance specs
        </a>
      </div>

      <RadioGroup
        value={mem}
        onChange={setMem}
        className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6"
      >
        {memoryOptions.map((option) => (
          <Radio
            key={option.name}
            value={option}
            disabled={!option.inStock}
            className={classNames(
              option.inStock
                ? 'cursor-pointer focus:outline-none'
                : 'cursor-not-allowed opacity-25',
              'flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset'
            )}
          >
            {option.name}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
```

```tsx
;('use client')

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'Hobby',
    ram: '8GB',
    cpus: '4 CPUs',
    disk: '160 GB SSD disk',
    price: '$40',
  },
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '256 GB SSD disk',
    price: '$80',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
    price: '$160',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
    price: '$240',
  },
]
```

```tsx
export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <fieldset aria-label="Server size">
      <RadioGroup value={selected} onChange={setSelected} className="space-y-4">
        {plans.map((plan) => (
          <Radio
            key={plan.name}
            value={plan}
            aria-label={plan.name}
            aria-description={`${plan.ram}, ${plan.cpus}, ${plan.disk}, ${plan.price} per month`}
            className="group relative block cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600 sm:flex sm:justify-between"
          >
            <span className="flex items-center">
              <span className="flex flex-col text-sm">
                <span className="font-medium text-gray-900">{plan.name}</span>
                <span className="text-gray-500">
                  <span className="block sm:inline">
                    {plan.ram} / {plan.cpus}
                  </span>{' '}
                  <span aria-hidden="true" className="hidden sm:mx-1 sm:inline">
                    &middot;
                  </span>{' '}
                  <span className="block sm:inline">{plan.disk}</span>
                </span>
              </span>
            </span>
            <span className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
              <span className="font-medium text-gray-900">{plan.price}</span>
              <span className="ml-1 text-gray-500 sm:ml-0">/mo</span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
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
;('use client')

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'Startup',
    priceMonthly: '$29',
    priceYearly: '$290',
    limit: 'Up to 5 active job postings',
  },
  {
    name: 'Business',
    priceMonthly: '$99',
    priceYearly: '$990',
    limit: 'Up to 25 active job postings',
  },
  {
    name: 'Enterprise',
    priceMonthly: '$249',
    priceYearly: '$2490',
    limit: 'Unlimited active job postings',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <fieldset aria-label="Pricing plans">
      <RadioGroup
        value={selected}
        onChange={setSelected}
        className="relative -space-y-px rounded-md bg-white"
      >
        {plans.map((plan, planIdx) => (
          <Radio
            key={plan.name}
            value={plan}
            aria-label={plan.name}
            aria-description={`${plan.priceMonthly} per month, ${plan.priceYearly} per year, ${plan.limit}`}
            className={classNames(
              planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
              planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
              'group relative flex cursor-pointer flex-col border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50 md:grid md:grid-cols-3 md:pl-4 md:pr-6'
            )}
          >
            <span className="flex items-center text-sm">
              <span
                aria-hidden="true"
                className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="ml-3 font-medium text-gray-900 group-data-[checked]:text-indigo-900">
                {plan.name}
              </span>
            </span>
            <span className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
              <span className="font-medium text-gray-900 group-data-[checked]:text-indigo-900">
                {plan.priceMonthly} / mo
              </span>{' '}
              <span className="text-gray-500 group-data-[checked]:text-indigo-700">
                ({plan.priceYearly} / yr)
              </span>
            </span>
            <span className="ml-6 pl-1 text-sm text-gray-500 group-data-[checked]:text-indigo-700 md:ml-0 md:pl-0 md:text-right">
              {plan.limit}
            </span>
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
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
;('use client')

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const settings = [
  {
    name: 'Public access',
    description: 'This project would be available to anyone who has the link',
  },
  {
    name: 'Private to Project Members',
    description: 'Only members of this project would be able to access',
  },
  {
    name: 'Private to you',
    description: 'You are the only one able to access this project',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(settings[0])

  return (
    <fieldset aria-label="Privacy setting">
      <RadioGroup
        value={selected}
        onChange={setSelected}
        className="-space-y-px rounded-md bg-white"
      >
        {settings.map((setting, settingIdx) => (
          <Radio
            key={setting.name}
            value={setting}
            aria-label={setting.name}
            aria-description={setting.description}
            className={classNames(
              settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
              settingIdx === settings.length - 1
                ? 'rounded-bl-md rounded-br-md'
                : '',
              'group relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50'
            )}
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span className="ml-3 flex flex-col">
              <span className="block text-sm font-medium text-gray-900 group-data-[checked]:text-indigo-900">
                {setting.name}
              </span>
              <span className="block text-sm text-gray-500 group-data-[checked]:text-indigo-700">
                {setting.description}
              </span>
            </span>
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
```
