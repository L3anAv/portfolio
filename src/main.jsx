import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import ContextVentanaProvider from './contexts/ventanaContext'

/* TODO
  [x] Renombrar cosas de utils con nombres mas especificos.
  [x] Reestructurar componente ventana flotante.
*/

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ContextVentanaProvider>
      <Router>
          <App />
      </Router>
    </ContextVentanaProvider>
  </React.StrictMode>
)

