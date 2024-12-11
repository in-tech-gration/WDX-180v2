import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="flex w-4/5 flex-col gap-10 self-center rounded-xl bg-red-700 p-10">
      <h2 className="text-3xl font-bold">Error</h2>
      <p className="text-xl">Page not found</p>
      <Link
        to="/"
        className="w-fit self-center rounded-md bg-slate-800 p-2 text-center text-white dark:bg-white dark:text-slate-900"
      >
        Go to Home
      </Link>
    </div>
  )
}
