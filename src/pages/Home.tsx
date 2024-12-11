import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">WDX-180</h1>
      <p className="text-xl text-slate-500 dark:text-slate-400">
        Web Development X
      </p>
      <Link
        to="/about"
        className="w-fit self-center rounded-md bg-slate-800 p-2 text-center text-white dark:bg-white dark:text-slate-900"
      >
        About
      </Link>
    </>
  )
}
