import { BrowserRouter } from 'react-router'
import AppRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>HEADER</nav>
        <AppRoutes />
        <nav>FOOTER</nav>
      </div>
    </BrowserRouter>
  )
}

export default App
