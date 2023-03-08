import React from 'react'
import IndexImg from './indexImg'
import Loader from '../loading/index'
import IndexBrowser from './indexBrowser'
import IndexArchivo from './indexArchivo'
import ContenidoVentanaProyectos from './indexProyectos'

export default function darChildrenCorrespondiente(nombre){

    switch (nombre) {
      case 'Proyectos':
        return <ContenidoVentanaProyectos/>
      case 'Browser':
        return <IndexBrowser/>
      case 'Image':
        return <IndexImg />
      case 'Archivo.txt':
        return <IndexArchivo />
    }

    return <Loader />
  }