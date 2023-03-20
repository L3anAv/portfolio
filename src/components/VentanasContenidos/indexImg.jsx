import styled from 'styled-components'
import React, { useState} from 'react'
import Icono from '../../components/iconsScreen/index'
import {nombresImagenes, darImagenCorrespondiente} from '../../utils/indexImg'

const ContenedorImagenes = styled.div`
    display:flex;
    aling-self:center;
    flex-direction:row;
`

const IconoImgCont = styled(Icono)`
  margin:8px;
`

export default function indexImg() {

    const [nombreDelClikeado, setNombreIconoClikeado] = useState('')

    function decirQueIconoQuienSoy(nombre){
      setNombreIconoClikeado(nombre)
      /*nombreDelIcono(nombreDelClikeado)*/
    }

  return (
    <>
    <ContenedorImagenes>
      {nombresImagenes.map(nombreParaIcono => (
      <IconoImgCont key={nombreParaIcono} src={darImagenCorrespondiente(nombreParaIcono)} decirQuienSoy={decirQueIconoQuienSoy} nombreDelClikeado={nombreDelClikeado} nombreIcono={nombreParaIcono} width={'70px'} height={'40px'}/>
      ))}
    </ContenedorImagenes>
    </>
  ) 
}
