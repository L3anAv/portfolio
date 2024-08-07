import AdcWebMaqueta from '../assets/images/webadc.webp'
import SpaFlixnet from "../assets/images/spaFlixnet.webp"
import PortafolioV1 from '../assets/images/PortafolioV1.webp'
import PortafolioV2 from '../assets/images/PortafolioV2.webp'
import AsciiDoc from '../assets/images/asciidocgenerator.webp'
import FlixNetV2Mob from '../assets/images/MobileFlixnetV2.webp'
import FlixNetV2Web from '../assets/images/WebFlixnetV2.webp'
import MaquetaArq from '../assets/images/MaquetaEstudioArq.webp'

const Imagenes = [ AdcWebMaqueta, PortafolioV1, PortafolioV2, MaquetaArq, AsciiDoc, SpaFlixnet, FlixNetV2Mob, FlixNetV2Web]
const nombresImagenes = ["ADC-Maqueta.webp", "Portafolio-V1.jpg", "Portafolio-V2.jpge", "Maqueta-Estudio.jpg", "AsciiDoc.png", "Spa-Flixnet.png", "Flixnet-Mobile.jpg", "FlixNet-Web-V2.jpg"]

function darImagenCorrespondiente(opcion){
    return Imagenes[darIndexSegunNombreDeImagen(opcion)]
}

function darIndexSegunNombreDeImagen(nombre){
    return nombresImagenes.indexOf(nombre)
}

export {nombresImagenes, darImagenCorrespondiente, darIndexSegunNombreDeImagen}