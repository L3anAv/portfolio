import "../../crt.css"
import React from 'react'
import MenuBar from '../menuBar/index'
import styled from 'styled-components'
import IconsDesktopBar from '../iconsDesktop/index'
import Ventana from '../../components/Ventana/index'
import darIconoCorrespondiente  from '../../utils/darIcono'
import CloudWallpaper from "../../assets/images/background.webp"
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'
import {useVentanaContext,useCambioDeEstadoVentana, useSetContenidoVentana, useSetTituloVentana, useGetTituloVentana} from '../../contexts/ventanaContext'
import { useEffect } from "react"

const Contenedor = styled.div`
  width:100%;
  display: grid;
  overflow:hidden;
  background:#548cc4;
  grid-template-rows: 1fr 47px;

  background-image:url(${CloudWallpaper});
  background-size: cover;

  @media (max-width:600px){
    grid-template-rows:47px 1fr;
  }
`

export default function index({consultarSiExiste}) {

  const setTituloVentana = useSetTituloVentana()
  const TituloDeLaVentana = useGetTituloVentana()
  const estadoVentanaActual = useVentanaContext()
  const estadoVentana = useCambioDeEstadoVentana()
  const contenidoParaVentana = useSetContenidoVentana()

  function AbrirVentanaCorrespondiente(){
    estadoVentana(true)
    setTituloVentana("Sobre Mi")
    contenidoParaVentana(darChildrenCorrespondiente("Sobre Mi"))
  }

  useEffect(() => {
    AbrirVentanaCorrespondiente()
  }, [])
  

  function nombreDelIcono(nombre){
    setTituloVentana(nombre)
    const Componente = darChildrenCorrespondiente(nombre)
    contenidoParaVentana(Componente)
  }

  return (
    <>
      <Contenedor className="crt">
        <MenuBar consultarSiExiste={consultarSiExiste}/>
        <IconsDesktopBar nombreDelIcono={nombreDelIcono}/>
      </Contenedor>
      {estadoVentanaActual && <Ventana ImgParametro={darIconoCorrespondiente(TituloDeLaVentana)}/>}
    </>
  )

}
