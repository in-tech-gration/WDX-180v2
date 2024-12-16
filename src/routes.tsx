import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Add here more Route elements for future pages */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
