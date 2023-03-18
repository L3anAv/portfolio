import {nombreIcono} from './constantes'
import ImgIcons from '../assets/iconos/img.png'
import ArchiveIcon from '../assets/iconos/archive.png'
import BrowserIcon from '../assets/iconos/browser.png'
import ProjectIcons from '../assets/iconos/folder.png'

export default function darIconoCorrespondiente(nombre){
    switch (nombre) {
      case nombreIcono[0]:
        return `${ProjectIcons}`
      case nombreIcono[1]:
        return `${ImgIcons}`
      case nombreIcono[2]:
        return `${BrowserIcon}`
      case nombreIcono[3]:
        return `${ArchiveIcon}`
    }
}