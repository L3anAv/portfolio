import React, {useState} from 'react'
import Ventana from './components/Ventana/index'
import MenuBar from './core_components/menuBar/index'
import darIconoCorrespondiente  from './utils/darIcono'
import IconsDesktopBar from './core_components/iconsDesktop/index'
import {useVentanaContext, useSetContenidoVentana} from './contexts/ventanaContext'
import darChildrenCorrespondiente from './components/VentanasContenidos/indexContenidoVentana';

export default function App() {

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
      <IconsDesktopBar nombreDelIcono={nombreDelIcono}/>
      {/*estadoVentana && <Ventana ImgParametro={darIconoCorrespondiente(nombreNombreIconoActivo)} children={darChildrenCorrespondiente(nombreNombreIconoActivo)} titleVentana={nombreNombreIconoActivo}/>*/}
      {estadoVentana && <Ventana ImgParametro={darIconoCorrespondiente(nombreNombreIconoActivo)} titleVentana={nombreNombreIconoActivo}/>}
    </>
  )
}