import { useState } from "react"
import styled from "styled-components"

const Iconic = styled.div`
    
    width:8%;
    display:flex;
    margin-top:40px;
    margin-left:30px;
    margin-right:30px;
    text-align:center;
    flex-direction:column;
    position:relative;

    p{
      width:100%;
      color:#fff;
      user-select: none;
      background:${props => props.background};
    }
`

const ImgIconoVentana = styled.img`
    width:${props => props.width};
    height:${props => props.height};
    object-fit:cover;
    margin-bottom:8px;
    margin-left:${props => props.marginLeft};
    filter: invert(${props => props.invert});
`

const IconoVentana = ({handleDoubleClick, imgIcono, nombreIcono, FuiClikeado, darNombre, widthImg, marginLeftImg}) => {

  const handleOnClick = () => {
    darNombre(nombreIcono)
  }
  
  return (
    <>
    <Iconic onClick={handleOnClick} onDoubleClick={handleDoubleClick} background={FuiClikeado ? '#1e40bc' : '#010080'}>
      <ImgIconoVentana height={(widthImg === undefined) ? '45px' : 'auto'} width={(widthImg === undefined) ? '80px' : widthImg} marginLeft={marginLeftImg} src={imgIcono} invert={FuiClikeado ? '20%' : '0%'}/>
      <p>{nombreIcono}</p>
    </Iconic>
    </>
  )
}

export default IconoVentana
