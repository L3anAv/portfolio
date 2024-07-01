import React from 'react'
import Loader from "../components/loading/index"
import {darImagenCorrespondiente} from './indexImg'
import VisorImagen from '../components/VentanasContenidos/visorImagen'

function darChildrenVisorImagen(nombre){
  return <VisorImagen imagen={darImagenCorrespondiente(nombre)} />
}

export {darChildrenVisorImagen}