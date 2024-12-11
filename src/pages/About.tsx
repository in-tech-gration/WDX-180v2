import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <h2 className="text-2xl">About</h2>
      <p className="text-xl text-slate-500 dark:text-slate-400">
        This is Web Development X 180°. An introductory course to the web and
        related technologies such as HTML, CSS and JavaScript, split into 180
        days.
      </p>
      <p className="text-lg text-slate-500 dark:text-slate-400">
        If you are just starting and want to know more about what Web
        Development is and how it fits within the Internet start by{' '}
        <Link to="https://www.youtube.com/watch?v=JtNmSHnirfY" target="_blank">
          watching this introductory video
        </Link>
        . After watching the video, you’ll be able to understand what this
        course is all about. You can also follow up, by watching this{' '}
        <Link to="https://www.youtube.com/watch?v=Y_wKi7-RBOg" target="_blank">
          Q&A session
        </Link>
        accompanying the video above.
      </p>
    </>
  )
}
