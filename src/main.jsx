import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextVentanaProvider from './contexts/ventanaContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextVentanaProvider>
        <App />
    </ContextVentanaProvider>
  </React.StrictMode>
)
