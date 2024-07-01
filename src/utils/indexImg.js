import Cholet from '../assets/images/cholet.webp'
import StarWars from '../assets/images/starWars.webp'
import AdcWebMaqueta from '../assets/images/webadc.webp'
import SpaFlixnet from "../assets/images/spaFlixnet.webp"
import Curuchet from '../assets/images/casa_curutchet.webp'
import PortafolioV1 from '../assets/images/PortafolioV1.webp'
import PortafolioV2 from '../assets/images/PortafolioV2.webp'
import AsciiDoc from '../assets/images/asciidocgenerator.webp'
import FlixNetV2Mob from '../assets/images/MobileFlixnetV2.webp'
import FlixNetV2Web from '../assets/images/WebFlixnetV2.webp'
import MaquetaArq from '../assets/images/MaquetaEstudioArq.webp'

const Imagenes = [Cholet, StarWars, Curuchet, AdcWebMaqueta, PortafolioV1, PortafolioV2, MaquetaArq, AsciiDoc, SpaFlixnet, FlixNetV2Mob, FlixNetV2Web]
const nombresImagenes = ["Cholet", "StarWars", "Curuchet", "AdcWebMaqueta", "PortafolioV1", "PortafolioV2", "MaquetaArq", "AsciiDoc", "SpaFlixnet", "FlixNetMobile", "FlixNetV2"]

function darImagenCorrespondiente(opcion){
    return Imagenes[darIndexSegunNombreDeImagen(opcion)]
}

function darIndexSegunNombreDeImagen(nombre){
    return nombresImagenes.indexOf(nombre)
}

export {nombresImagenes, darImagenCorrespondiente, darIndexSegunNombreDeImagen}