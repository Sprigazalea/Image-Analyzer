import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SideContent from './SideContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SideContent />
  </StrictMode>,
)
