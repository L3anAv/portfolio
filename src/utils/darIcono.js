import {nombreIcono} from './constantes'
import ImgIcons from '../assets/iconos/img.webp'
import ArchiveIcon from '../assets/iconos/archive.webp'
import BrowserIcon from '../assets/iconos/browser.webp'
import ProjectIcons from '../assets/iconos/folder.webp'

export default function darIconoCorrespondiente(nombre){
    switch (nombre) {
      case nombreIcono[0]:
        return `${ProjectIcons}`
      case nombreIcono[1]:
        return `${ImgIcons}`
      case nombreIcono[2]:
        return `${BrowserIcon}`
      case nombreIcono[3]:
        return `${ProjectIcons}`
      case "Sobre Mi":
        return `${BrowserIcon}`
    }
}