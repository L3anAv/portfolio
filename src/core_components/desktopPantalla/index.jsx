import "../../crt.css"
import React from 'react'
import MenuBar from '../menuBar/index'
import styled from 'styled-components'
import IconsDesktopBar from '../iconsDesktop/index'
import Ventana from '../../components/Ventana/index'
import darIconoCorrespondiente  from '../../utils/darIcono'
import TierraGIF from '../../assets/images/output-onlinegiftools-2.gif'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'
import {useVentanaContext, useSetContenidoVentana, useSetTituloVentana, useGetTituloVentana} from '../../contexts/ventanaContext'

const Contenedor = styled.div`
  width:100%;
  display: grid;
  overflow:hidden;
  background:#008080;
  grid-template-rows: 1fr 47px;
  animation:BackgroundAnimation 1s infinte;
`

const Main = styled.div`
  grid-row:1;
  display:flex;
`

const Tierra = styled.img`

  object-fit: scale-down;
  animation:OpacidadEntrada 1.5s;
  transform:translate(120px, 0px);

  @media(max-width:820px){
    transform:translateX(120px);
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
          <Tierra src={TierraGIF} />
        </Main>
        {estadoVentana && <Ventana ImgParametro={darIconoCorrespondiente(TituloDeLaVentana)}/>}
      </Contenedor>
    </>
  )

}
