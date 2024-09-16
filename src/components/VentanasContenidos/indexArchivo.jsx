import { useState } from 'react'
import styled from 'styled-components'
import Archivo from './../../assets/iconos/archive.webp'
import IconoVentana from '../iconoVentana/iconoVentana'


const Contenedor = styled.div`
  
  margin-left:8px;

  p{
    width:10%;
    color:#fff;
    margin-top:2px;
    margin-left:12px;
    background:#010080;
  }
`

export default function indexArchivo() {
  const nombreArchivo = "Utilidades Frontend"
  const [nombreDelClikeado, setNombreDelClikeado] = useState('')

  function darNombre(nombre){
    setNombreDelClikeado(nombre)
  }

  const handleDoubleClick = () => {
     window.open("https://gist.github.com/L3anAv/2c4595f73886c1f6606be7a3a3cd87f2", "_blank")
  }

  return (
    <Contenedor>
      <IconoVentana darNombre={darNombre} FuiClikeado={nombreArchivo === nombreDelClikeado} nombreIcono={nombreArchivo} imgIcono={Archivo} widthImg={"45px"} marginLeftImg={"38px"} handleDoubleClick={handleDoubleClick}/>
    </Contenedor>
  )
}
