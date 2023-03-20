import Cholet from '../assets/images/cholet.jpg'
import StarWars from '../assets/images/starWars.jpg'
import Curuchet from '../assets/images/casa_curutchet.jpg'

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