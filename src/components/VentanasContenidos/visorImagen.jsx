import React, { useEffect } from "react"
import IndexImg from "./indexImg"
import styled from "styled-components"
import Arrow from '../../assets/iconos/arrow.webp'
import {useSetContenidoVentana, useSetTituloVentana} from "../../contexts/ventanaContext"

const VisorImagenes = styled.div`
    width:100%;
    position:relative;

    img{
      z-index:2;
      width:100%;
      object-fit: scale-down;
    }
    
`

const ArrowImg = styled.img`
    display:flex;
    position:absolute;
    z-index:1;
    top:25px;
    left:5px;
    margin-top:5px;
    margin-left:2%;
    user-select:none;
    cursor:url(src/assets/cursor/pointer-old.png), pointer;
`

const visorImagen = ({imagen}) => {

  const contenidoParaVentana = useSetContenidoVentana()
  const setTituloVentana = useSetTituloVentana()

  function volverAtras(){
    contenidoParaVentana(<IndexImg />)
  }

  return (
    <>
    <ArrowImg src={Arrow} onClick={volverAtras}/>
    <VisorImagenes>
        <img src={imagen}/>
    </VisorImagenes>
    </>
  )
}

export default visorImagen