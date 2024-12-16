import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="page-home">
      <h1 className="text-3xl">WDX-180</h1>
      <p className="text-xl text-slate-500 dark:text-slate-400">
        Web Development X
      </p>
      <Link
        to="/about"
        className="button-primary"
      >
        About
      </Link>
    </div>
  )
}
