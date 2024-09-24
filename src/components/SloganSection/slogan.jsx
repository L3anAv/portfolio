import styled from "styled-components"
import { useEffect, useState } from "react"
import {nombreIcono} from "../../utils/constantes"
import GifsVetana from "../gifsVentana/gifsVetana"
import GifPiba from "../../assets/images/animated/piba.gif"
import GifHead from "../../assets/images/animated/head.gif"
import decorator from "../../assets/images/decorator-circle.png"
import { useGetTituloVentana } from "../../contexts/ventanaContext"

const Slogan = styled.p`
  position:absolute;
  top:0;
  display: inline;
  color: #fff;
  margin-left:20px;
  letter-spacing:5px;
  display: ${props => props.displaySlogan};
  background-image:
  linear-gradient(to right, #dddddd 2px, transparent 2px),
  linear-gradient(to bottom, #dddddd 2px, transparent 2px);
  background-size: 3.5rem 3.5rem;
  background-position: center center;

  user-select:none;
  font-family:Zimra;
  font-size: clamp(2.1875rem, 1.3773rem + 4.321vw, 6.5625rem);

  text-shadow: -2px 10px 0 #000,
               -3px 9px 0 #000,
               -4px 8px 0 #000,
               -5px 6px 0 #000,
               -6px 5px 0 #000,
               -7px 5px 0 #000,
               -8px 4px 0 #000,
               -9px 3px 0 #000,
               -10px 2px 0 #000,
               -11px 1px 0 #000;

`

const SloganContainer = styled.div`
  position:relative;
  margin:0;
  padding:0;
  grid-row:1;
  grid-column:2;
  height:100vh;
  transform:scale(0.95);
  background-color:none;
  
  p{
    letter-spacing:8px;
  } 

  img{
    position:absolute;
    top:-22px;
    right:-18px;
  }

  @media (max-width:1132px){

    p{
      letter-spacing:3px;
    }

    img{
      display:none;
    }
  }
`

function slogan() {

    const tituloVentana = useGetTituloVentana()

    const [windowSize, setWindowSize] = useState(0)
    const [displayState, setDisplayState] = useState('flex')
    const [ventanaOpen, setVentanaOpen] = useState([false, false])

    const actualizarVentana = (pos, state) => {
      const nuevasVentanas = [...ventanaOpen];
      nuevasVentanas[pos] = state;
      setVentanaOpen(nuevasVentanas);
    }

    const MostrarVentanas = () => {
      const nuevasVentanas = [...ventanaOpen];

      nuevasVentanas[0] = true;

      setTimeout(() => {
        nuevasVentanas[1] = true;
      }, 2000);
      
      setVentanaOpen(nuevasVentanas);
    }

    const actualizarAnchoVentana = () => {
        setWindowSize(window.innerWidth);
    };
    
      useEffect(() => {
        
        actualizarAnchoVentana()
    
        window.addEventListener('resize', actualizarAnchoVentana);

        return () => {
          window.removeEventListener('resize', actualizarAnchoVentana);
        }
    
      }, [])

      useEffect(() => {

        if(tituloVentana === nombreIcono[2]){
          setTimeout(() => {
            MostrarVentanas()
          }, 3000);
          
        }

      }, [tituloVentana])
      

    useEffect(() => {
       if(windowSize > 1130){
            setDisplayState('flex')
       }else{
            setDisplayState('none')
       }
    }, [windowSize])

  return (
    <SloganContainer >
      {ventanaOpen[0] && <GifsVetana id={0} estado={ventanaOpen[0]} cambiarEstadoVentana={actualizarVentana} gif={GifPiba} topPosition={"10px"} leftPosition={"20px"}/> }
      {ventanaOpen[1] && <GifsVetana id={1} estado={ventanaOpen[1]} cambiarEstadoVentana={actualizarVentana} gif={GifHead} topPosition={"-15px"} leftPosition={"350px"}/>}
      <img src={decorator}/>
        <Slogan displaySlogan={displayState}>
          Diseño y Desarollo el sitio web que te ayude a alcanzar tus objetivos de negocio.
        </Slogan>
    </SloganContainer>
  )
}

export default slogan
