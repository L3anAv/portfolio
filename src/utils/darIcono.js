import ImgIcons from '../assets/iconos/img.png'
import ArchiveIcon from '../assets/iconos/archive.png'
import BrowserIcon from '../assets/iconos/browser.png'
import ProjectIcons from '../assets/iconos/folder.png'

export default function darIconoCorrespondiente(nombre){
    switch (nombre) {
      case 'Proyectos':
        return `${ProjectIcons}`
      case 'Image.jpg':
        return `${ImgIcons}`
      case 'Browser':
        return `${BrowserIcon}`
      case 'Archivo.txt':
        return `${ArchiveIcon}`
    }
}