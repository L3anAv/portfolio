import "./index.css"
import Desktop from './Desktop'
import styled from 'styled-components'
import { useState, useEffect} from 'react'
import obtenerIndex from "./utils/obtenerIndex"
import Inicio  from './core_components/index/index'
import Bilboard from "./components/Bilboard/bilboard"
import Slogan from "./components/SloganSection/slogan"
import Yahoo from "./assets/images/yahoopage.gif"
import Pentium from "./assets/images/pentium.gif"
import Hotmail from "./assets/images/hotmail.gif"
import GoldenLinux from "./assets/images/goldenLinux.gif"
import InternetExplorer from "./assets/images/internetexplorer.gif"
import {useCambioDeEstadoVentana, useVentanaContext} from './contexts/ventanaContext'

const Contenedor = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    background: rgb(167,211,151);
    grid-template-row:1fr 1fr;
    grid-template-columns: 1fr 1fr;
    
    a{
      unset:all
    }

    background: ${props =>
      props.mostrarInicio
        ? '#dddddd'
        : '#0728dd'};
    
    @media (max-width:1132px){
      grid-template-row: 1fr 1fr 1fr;
      grid-template-columns: 1fr;
    }
`

const ContenedorPubli = styled.div`
    grid-row:1;
    grid-column:2;
    cursor:url(src/assets/cursor/pointer-old.png), pointer;

     @media (max-width:1132px){
        grid-row:2;
        grid-column:1;
        margin-bottom:140px;
    }
`

const ContenedorPubli2 = styled(ContenedorPubli)`
    grid-row:2;

    @media (max-width:1132px){
      display:none;
    }
`

const Publi = styled.img`
    
    margin-top:30px;
    margin-left:100px;
    
     @media (max-width:1132px){
      margin-top:0;
      margin-left:3%;
      margin-right:2%;
      width:95%;
    }
`

const Publi2 = styled(Publi)`
      
      grid-row:2;
      margin-top:0;
      margin-bottom:20px;
`

export default function App() {

  const imagenesNombres = [
    {"src": InternetExplorer,
      "href": "https://www.microsoft.com/es-AR/download/internet-explorer.aspx",
    },
    {"src": Yahoo,
      "href": "https://espanol.yahoo.com/",
    },
    {"src": Hotmail,
      "href": "https://www.hotmail.com/"
    },
    {"src": Pentium,
      "href": "https://www.intel.la/",
    },
    {
      "src": GoldenLinux,
      "href": "https://goldendoglinux.org/"
    }
  ]

  const estadoVentana = useVentanaContext()
  const cambiarEstadoVentana = useCambioDeEstadoVentana()
  const [mostrarInicio, setMostrarInicio] = useState(true)
  const [imagenActual, setImagenActual] = useState(InternetExplorer)
  const [imagenActual2, setImagenActual2] = useState(InternetExplorer)

  function obtenerImagenAleatoria(){
    const index = obtenerIndex(imagenesNombres.length)
    return imagenesNombres[index]
  }

  useEffect(() => {

    const handleKeyDown = (event) => {
      const keyValue = event.key;

      if(keyValue === "Escape" && !estadoVentana){
        cambiarEstadoVentana(false)
      }
    };

    setImagenActual(obtenerImagenAleatoria())
    setImagenActual2(obtenerImagenAleatoria())

    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, []);

  useEffect(() => {
    consultarSiExisteToken()
  }, [mostrarInicio])

  function consultarSiExisteToken() {

    if (localStorage.getItem("TOKENB") === "NOINICIO") {
      setMostrarInicio(false);
    }else if (localStorage.getItem("TOKENB") === "SIINICIO"){
      setMostrarInicio(true);
    }
  }

  return (
    <>
      <Contenedor mostrarInicio={mostrarInicio}>
      
      {
          mostrarInicio ? 
          <>
          <Inicio consultarSiExiste={consultarSiExisteToken} />
          <ContenedorPubli><a href={imagenActual.href} target="_blanck"><Publi src={imagenActual.src} /></a></ContenedorPubli>
          <Bilboard />
          </>
          : 
          <>
          <Desktop consultarSiExiste={consultarSiExisteToken}/>
          <Slogan/>
          </>
      }
      
      </Contenedor>
  </>
  )

}