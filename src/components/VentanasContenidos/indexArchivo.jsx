import { useState } from 'react'
import Archivo from './../../assets/iconos/archive.webp'
import IconoVentana from '../iconoVentana/iconoVentana'

export default function indexArchivo() {
  const nombreArchivo = "Utilidades FrontEnd"
  const [nombreDelClikeado, setNombreDelClikeado] = useState('')

  function darNombre(nombre){
    setNombreDelClikeado(nombre)
  }

  const handleDoubleClick = () => {
     window.open("https://github.com/L3anAv/frontend-utilidades?tab=readme-ov-file#Indice", "_blank")
  }

  return (
    <>
      <IconoVentana darNombre={darNombre} FuiClikeado={nombreArchivo === nombreDelClikeado} nombreIcono={nombreArchivo} imgIcono={Archivo} widthImg={"35px"} marginLeftImg={"20px"} handleDoubleClick={handleDoubleClick}/>
    </>
  )
}
