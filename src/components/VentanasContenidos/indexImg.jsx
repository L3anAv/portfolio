import React, { useState} from 'react'
import styled from 'styled-components'
import Icono from '../../components/iconsScreen/index'
import {nombresImagenes, darImagenCorrespondiente} from '../../utils/indexImg'

const ContenedorImagenes = styled.div`
    display:flex;
    aling-self:center;
    flex-direction:row;

    @media (max-width:700px){
      flex-direction:column;
    }
`

const IconoImgCont = styled(Icono)`
  margin:12px;
`

export default function indexImg() {

    const [nombreDelClikeado, setNombreIconoClikeado] = useState('')
    
    function decirQueIconoQuienSoy(nombre){
      setNombreIconoClikeado(nombre)
    }

  return (
    <>
    <ContenedorImagenes>
      {nombresImagenes.map(nombreParaIcono => ( 
      <IconoImgCont key={nombreParaIcono} src={darImagenCorrespondiente(nombreParaIcono)} decirQuienSoy={decirQueIconoQuienSoy} nombreDelClikeado={nombreDelClikeado} nombreIcono={`${nombreParaIcono}.png`} width={'70px'} height={'50px'}/>
      ))}
    </ContenedorImagenes>
    </>
  ) 
}
