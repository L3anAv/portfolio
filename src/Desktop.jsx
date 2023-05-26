import React, {useState, useMemo} from 'react'
import PantallaInicio from './core_components/pantallaInicio/index'
import DesktopPantalla from './core_components/desktopPantalla/index'

export default function Desktop() {

  const [mostrarBloqueo, setmostrarBloqueo] = useState(true)

  function IrAlDesktop(){
    setearToken()
    setmostrarBloqueo(false)
  }

  function consultarSiExisteToken(){
    if(localStorage.getItem("TOKEN") == "NOINICIO"){
      setmostrarBloqueo(false)
    }
  }

  function setearToken(){
    localStorage.setItem('TOKEN', 'NOINICIO');
  }

  useMemo(() => 
  consultarSiExisteToken(), 
  [mostrarBloqueo])

  if(!mostrarBloqueo){
    return(
      <DesktopPantalla />
    )
  }else{
    return(
         <PantallaInicio IrAlDesktop={IrAlDesktop}/>
    )}
}