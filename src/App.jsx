import React, {useState} from 'react'
import DesktopPantalla from './core_components/desktopPantalla/index'
import PantallaInicio from './core_components/pantallaInicio/index'

export default function App() {

  const [mostrarDesktop, setMostrarDesktop] = useState(false)

  function IrAlDesktop(){
    setMostrarDesktop(true)
  }

  return (
    <>
      {!mostrarDesktop && <PantallaInicio IrAlDesktop={IrAlDesktop}/>}
      {mostrarDesktop && <DesktopPantalla />}
    </>
)
}