import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import AppInca from './AppInca.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppInca />
  </StrictMode>,
)
