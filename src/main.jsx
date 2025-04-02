import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Defis from './components/Defis'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Defis/>
    
  </StrictMode>,
)
