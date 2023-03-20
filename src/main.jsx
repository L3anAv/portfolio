import './index.css'
import App from './App'
import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import ContextVentanaProvider from './contexts/ventanaContext'

/* TODO
  [x] Renombrar cosas de utils con nombres mas especificos.
  [x] Reestructurar componente ventana flotante.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ContextVentanaProvider>
        <App />
    </ContextVentanaProvider>
  </React.StrictMode>
)

