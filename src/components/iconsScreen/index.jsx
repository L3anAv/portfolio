import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useCambioDeEstadoVentana } from "../../contexts/ventanaContext"

const ContenedorIcono = styled.div`
  width:65px;
  height:98px;
  margin:10px;
  padding:10px;
  display:flex;
  aling-content:center;
  flex-direction:column;
`

const SobreImg = styled.div`
  top:0px;
  margin-left:10%;
  background:${props => props.background};
  border-radius:${props => props.borderRadius};
`

const Img = styled.img`
  user-select: none;
  width:${props => props.width};
  height:${props => props.height};
  padding:${props => props.padding};
  margin-left:${props => props.marginLeft};
  filter:grayscale(${props => props.grayscale});
`

const NombreIcono = styled.h3`
  width:130%;
  color:#fff;
  border:1.5px;
  font-size:11px;
  margin-top:7px;
  user-select: none;
  text-align: center;
  letter-spacing: 0.6px;
  font-family:MonosSpace;
  color:${props => props.color};
  background:${props => props.background};
`

export default function iconos({src, nombreIcono, width, height, decirQuienSoy, nombreDelClikeado}) {

  const cambiarEstadoVentana = useCambioDeEstadoVentana()
  const [clickSobreIcono, setclickSobreIcono] = useState(false)

  function fuiClikeado(){
      return nombreDelClikeado == nombreIcono
      ? setclickSobreIcono(true)
      : setclickSobreIcono(false)
  }

  useEffect(() => {
    fuiClikeado()
  }, [nombreDelClikeado])
  
  // Encargado de ejecutar las tareas del componente
  function ejecutarTareas(){
    decirQuienSoy(nombreIcono)
  }

  return (
    
    <ContenedorIcono
    onClick={ejecutarTareas}
    onDoubleClick={() => cambiarEstadoVentana(true)}
    >
      <SobreImg
      width={width}
      height={height}>
      <Img
      src={src}
      width={width}
      height={height}
      grayscale={clickSobreIcono ? '70%' : '0%'}
      padding={nombreIcono == "Browser" ? '1px' : ''}
      marginLeft={nombreIcono == "Browser" ? '6px': nombreIcono == "Archivo.txt" ? '7px;' : '5px'}/>
      </SobreImg>
      <NombreIcono 
      color={clickSobreIcono ? '#fff' : '#000'}
      background={clickSobreIcono ? '#2986cc' : '#fff'}>
        {nombreIcono}
      </NombreIcono>
    </ContenedorIcono>
  )
}
