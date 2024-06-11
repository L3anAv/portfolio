import "../../crt.css"
import React from 'react'
import MenuBar from '../menuBar/index'
import styled from 'styled-components'
import IconsDesktopBar from '../iconsDesktop/index'
import Ventana from '../../components/Ventana/index'
import darIconoCorrespondiente  from '../../utils/darIcono'
import CloudWallpaper from '../../assets/images/wallpaper.png'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'
import {useVentanaContext, useSetContenidoVentana, useSetTituloVentana, useGetTituloVentana} from '../../contexts/ventanaContext'

const Contenedor = styled.div`
  width:100%;
  display: grid;
  overflow:hidden;
  grid-template-rows: 1fr 47px;
  background:#548cc4;

  @media (max-width:600px){
    grid-template-rows:47px 1fr;
  }
`

const Main = styled.div`
  grid-row:1;
  display:flex;

  @media (max-width:600px){
    grid-row:2;
  }
`

export default function index({consultarSiExiste}) {

  const estadoVentana = useVentanaContext()
  const setTituloVentana = useSetTituloVentana()
  const TituloDeLaVentana = useGetTituloVentana()

  const contenidoParaVentana = useSetContenidoVentana()

  function nombreDelIcono(nombre){
    setTituloVentana(nombre)
    const Componente = darChildrenCorrespondiente(nombre)
    contenidoParaVentana(Componente)
  }

  return (
    <>
      <Contenedor className="crt">
        <MenuBar consultarSiExiste={consultarSiExiste}/>
        <Main>
          <IconsDesktopBar nombreDelIcono={nombreDelIcono}/>
        </Main>
        {estadoVentana && <Ventana ImgParametro={darIconoCorrespondiente(TituloDeLaVentana)}/>}
      </Contenedor>
    </>
  )

}
