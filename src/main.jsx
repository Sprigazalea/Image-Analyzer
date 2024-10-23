import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SideContent from './SideContent.jsx'
import MainContent from './MainContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='display-div'>
      <SideContent />
      <MainContent />
    </div>
  </StrictMode>,
)
