import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col justify-center gap-10 bg-white text-center text-slate-900 dark:bg-slate-800 dark:text-white">
        <nav>HEADER</nav>
        <AppRoutes />
        <nav>FOOTER</nav>
      </div>
    </BrowserRouter>
  )
}

export default App
