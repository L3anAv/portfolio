import { darAudio } from './utils/darAudio'
import React, {useState, useMemo} from 'react'
import PantallaInicio from './core_components/pantallaInicio/index'
import DesktopPantalla from './core_components/desktopPantalla/index'

export default function Desktop(props) {

  const [mostrarBloqueo, setmostrarBloqueo] = useState(true)
  const SonidoInicioSistema = darAudio("entrada")
  const click = darAudio("click")
  
  function IrAlDesktop(){
    click.play()
    SonidoInicioSistema.play()
    setearToken()
    setmostrarBloqueo(false)
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