import React, {useState} from 'react'
import MenuBar from '../menuBar/index'
import styled from 'styled-components'
import IconsDesktopBar from '../iconsDesktop/index'
import Ventana from '../../components/Ventana/index'
import darIconoCorrespondiente  from '../../utils/darIcono'
import {useVentanaContext, useSetContenidoVentana} from '../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'

const Main = styled.div`
  display:flex;
  position:relative;
  flex-direction:row;
`

const Tierra = styled.img`
  margin-left:510px;
  transform: scale(1.3);
`

export default function index() {

  const estadoVentana = useVentanaContext();
  const contenidoParaVentana = useSetContenidoVentana()
  const [nombreNombreIconoActivo, setNombreIconoActivo] = useState('')

  function nombreDelIcono(nombre){
    setNombreIconoActivo(nombre)
    const Componente = darChildrenCorrespondiente(nombre)
    contenidoParaVentana(Componente)
  }

  return (
    <>
      <MenuBar />
      <Main>
      <IconsDesktopBar nombreDelIcono={nombreDelIcono}/>
      <Tierra src="src/assets/images/output-onlinegiftools.gif" />
      </Main>
      {estadoVentana && <Ventana ImgParametro={darIconoCorrespondiente(nombreNombreIconoActivo)} titleVentana={nombreNombreIconoActivo}/>}
    </>
  )

}
