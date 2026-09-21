import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

