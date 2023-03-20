import React from 'react'
import IndexImg from './indexImg'
import Loader from '../loading/index'
import IndexBrowser from './indexBrowser'
import IndexArchivo from './indexArchivo'
import {nombreIcono} from '../../utils/constantes'
import ContenidoVentanaProyectos from './indexProyectos'
import ProyectosLista from '../VentanasContenidos/Proyectos_Secciones/proyectosLista'

export default function darChildrenCorrespondiente(nombre){

    switch (nombre) {
      case nombreIcono[0]:
        return <ContenidoVentanaProyectos/>
      case nombreIcono[1]:
        return <IndexImg />
      case nombreIcono[2]:
        return <IndexBrowser/>
      case nombreIcono[3]:
        return <IndexArchivo />
      case "Frontend":
        return <ProyectosLista ClaveTopic={"javascript"} />
      case "Otros":
        return <ProyectosLista ClaveTopic={"java"} />
    }

    return <Loader />
  }