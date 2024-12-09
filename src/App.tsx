import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col justify-center gap-10 bg-white text-center text-slate-900 dark:bg-slate-800 dark:text-white">
      <h1 className="text-3xl">WDX-180</h1>
      <p className="text-xl text-slate-500 dark:text-slate-400">
        Web Development X
      </p>
      <p className="text-xl text-slate-500 dark:text-slate-400">
        This is Web Development X 180°. An introductory course to the web and
        related technologies such as HTML, CSS and JavaScript, split into 180
        days.
      </p>
      <div>
        <button
          className="rounded-md bg-indigo-500 p-2 shadow-lg"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
