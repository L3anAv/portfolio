import React, {useState, useMemo} from 'react'
import clickSound from "./assets/audio/click.ogg"
import InicioSound from "./assets/audio/entrada.ogg"
import PantallaInicio from './core_components/pantallaInicio/index'
import DesktopPantalla from './core_components/desktopPantalla/index'

export default function Desktop(props) {

  const click = new Audio(clickSound)
  const SonidoInicioSistema = new Audio(InicioSound)
  const [mostrarBloqueo, setmostrarBloqueo] = useState(true)
  
  function IrAlDesktop(){
    click.play()
    setearToken()
    setmostrarBloqueo(false)
    SonidoInicioSistema.play()
  }

  function consultarSiExisteToken(){
    if(localStorage.getItem("TOKENA") == "NOINICIO"){
      setmostrarBloqueo(false)
    }
  }

  function setearToken(){
    localStorage.setItem('TOKENA', 'NOINICIO');
  }

  useMemo(() => 
  consultarSiExisteToken(), 
  [mostrarBloqueo])

  return (
    <>
      {mostrarBloqueo ? <PantallaInicio IrAlDesktop={IrAlDesktop}/> : <DesktopPantalla consultarSiExiste={props.consultarSiExiste}/>}
    </>
  )
}