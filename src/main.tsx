import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import { BrowserRouter } from 'react-router-dom'

WebApp.ready()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_APP_LINK_PREFIX}>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
