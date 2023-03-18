import React, {useState} from 'react'
import MenuBar from '../menuBar/index'
import IconsDesktopBar from '../iconsDesktop/index'
import Ventana from '../../components/Ventana/index'
import darIconoCorrespondiente  from '../../utils/darIcono'
import {useVentanaContext, useSetContenidoVentana} from '../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana';

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
      <IconsDesktopBar nombreDelIcono={nombreDelIcono}/>
      {estadoVentana && <Ventana ImgParametro={darIconoCorrespondiente(nombreNombreIconoActivo)} titleVentana={nombreNombreIconoActivo}/>}
    </>
  )

}
