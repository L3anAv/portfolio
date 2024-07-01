import {nombreIcono} from './constantes'
import {nombresImagenes} from "./indexImg"
import ImgIcons from '../assets/iconos/img.webp'
import ArchiveIcon from '../assets/iconos/archive.webp'
import BrowserIcon from '../assets/iconos/browser.webp'
import ProjectIcons from '../assets/iconos/folder.webp'

export default function darIconoCorrespondiente(nombre){

    const darIconoImg = nombresImagenes.find(nombreImagen => nombreImagen === nombre)

    if(darIconoImg){
      return `${ImgIcons}`
    }

    switch (nombre) {
      case nombreIcono[0]:
      case nombreIcono[1]:
        return `${ProjectIcons}`
      case nombreIcono[2]:
      case "Sobre Mi":
        return `${BrowserIcon}`
      case nombreIcono[3]:
        return `${ProjectIcons}`
    }
}