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
  const nombreArchivo = ""
  const [nombreDelClikeado, setNombreDelClikeado] = useState('')

  function darNombre(nombre){
    setNombreDelClikeado(nombre)
  }

  const handleDoubleClick = () => {
     window.open("https://github.com/L3anAv/frontend-utilidades?tab=readme-ov-file#Indice", "_blank")
  }

  return (
    <Contenedor>
      <IconoVentana darNombre={darNombre} FuiClikeado={nombreArchivo === nombreDelClikeado} nombreIcono={nombreArchivo} imgIcono={Archivo} widthImg={"35px"} marginLeftImg={"20px"} handleDoubleClick={handleDoubleClick}/>
      <p>Utilidades Varias</p>
    </Contenedor>
  )
}
