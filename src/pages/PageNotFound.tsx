import { Link } from 'react-router'

export default function PageNotFound() {
  return (
    <div className="flex w-4/5 flex-col gap-10 self-center rounded-xl bg-red-700 p-10">
      <h2 className="text-3xl font-bold">Error</h2>
      <p className="text-xl">Page not found</p>
      <Link to="/" className="button-primary">
        Go to Home
      </Link>
    </div>
  )
}
