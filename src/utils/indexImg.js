import Cholet from '../assets/images/cholet.webp'
import StarWars from '../assets/images/starWars.webp'
import Curuchet from '../assets/images/casa_curutchet.webp'

const Imagenes = [Cholet, StarWars, Curuchet]
const nombresImagenes = ["Cholet", "StarWars", "Curuchet"]

function darImagenCorrespondiente(opcion){
    switch (opcion) {
        case nombresImagenes[0]:
            return Imagenes[0]
            break;
        case nombresImagenes[1]:
            return Imagenes[1]
            break;
        case nombresImagenes[2]:
            return Imagenes[2]
            break;
    }
}

export {nombresImagenes, darImagenCorrespondiente}