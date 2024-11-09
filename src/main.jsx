import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/styles/index.css'
import SideContent from './SideContent.jsx'
import MainContent from './MainContent.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className='display-div'>
        <SideContent />
        <MainContent />
        <Test />
        </div>
    </StrictMode>,
)
