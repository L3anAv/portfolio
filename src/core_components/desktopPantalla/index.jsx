import React, {useState} from 'react'
import MenuBar from '../menuBar/index'
import styled from 'styled-components'
import IconsDesktopBar from '../iconsDesktop/index'
import Ventana from '../../components/Ventana/index'
import darIconoCorrespondiente  from '../../utils/darIcono'
import {useVentanaContext, useSetContenidoVentana, useSetTituloVentana, useGetTituloVentana} from '../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'

const Contenedor = styled.div`
  margin:20px;
  padding:10px;
  display: grid;
  overflow:hidden;
  border-radius:25px;
  grid-template-rows: 1fr 1fr;
  background: rgb(245,238,200);
  animation:BackgroundAnimation 1s infinte;
  background: linear-gradient(163deg, rgba(245,238,200,1) 0%, rgba(167,211,151,1) 100%); 
`

const Main = styled.div`
  display:flex;
`

const Tierra = styled.img`
  animation:OpacidadEntrada 1.5s;
  transform:translate(180px, 0px);
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
      <Contenedor>
        <MenuBar consultarSiExiste={consultarSiExiste}/>
        <Main>
          <IconsDesktopBar nombreDelIcono={nombreDelIcono}/>
          <Tierra src="src/assets/images/output-onlinegiftools-2.gif" />
        </Main>
        {estadoVentana && <Ventana ImgParametro={darIconoCorrespondiente(TituloDeLaVentana)}/>}
      </Contenedor>
    </>
  )

}
