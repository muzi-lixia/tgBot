import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'

WebApp.ready()
try {
    if (WebApp.initDataUnsafe) {
        WebApp.expand()
    }
} catch (error) {
    console.log(error)
}
setTimeout(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
    )
}, 3000)
