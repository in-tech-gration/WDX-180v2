import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import Templates from "./Templates.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Just here for testing the Tailwind UI Templates: */}
    {/* <Templates /> */}
    <App />
  </StrictMode>
)
