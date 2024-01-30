import "./index.css"
import Desktop from './Desktop'
import styled from 'styled-components'
import React, { useState, useEffect} from 'react'
import Inicio from './core_components/index/index'
import {useCambioDeEstadoVentana, useVentanaContext} from './contexts/ventanaContext'

const Contenedor = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    background: rgb(167,211,151);
    grid-template-columns: 1fr 1fr;
    background: ${props =>
      props.mostrarInicio
        ? '#dddddd'
        : '#0728dd'};
    transition:background 1s;

    @media (max-width:1132px){
      grid-template-row: 1fr 1fr;
      grid-template-columns: 1fr;
    }
`

const SloganContainer = styled.div`
  margin:0;
  padding:0;
  grid-row:1;
  display:flex;
  grid-column:2;
  height: 100vh;
  position:relative;
  align-items:center;
  transform:scale(0.9);
  flex-direction:column;
  justify-content: center;
  background-color:${props => props.bakgroundSlogan};

  p{
    letter-spacing:8px;
  }

  img{
    z-index:-1;
    position:absolute;
    top:0;
    margin:0;
    right:20px;
    transform: scaleX(-1);
    animation:OpacidadEntrada 1.2s;
  }

  @media (max-width:1132px){
    img{
      display:none;
    }
  }
`

const Slogan = styled.p`
  
  color: #fff;
  margin-left:20px;
  letter-spacing:2px;
  display: ${props => props.displaySlogan};
  
  text-shadow:
    2px 0 #0033db, -2px 0 #0033db, 0 2px #0033db, 0 -2px #0033db,
    1px 1px #0033db, -1px -1px #0033db, 1px -1px #0033db, -1px 1px #0033db;
  
  background-image:
  linear-gradient(to right, #dddddd 2px, transparent 2px),
  linear-gradient(to bottom, #dddddd 2px, transparent 2px);
  background-size: 3.5rem 3.5rem;
  background-position: center center;

  user-select:none;
  font-family:Zimra;
  font-size: clamp(3.4375rem, 2.8588rem + 3.0864vw, 6.5625rem);

  text-shadow:${props => props.mostrarInicio 
  ? `none`
  : ` 0 0 7px #0762bc,
    0 0 10px #0762bc,
    0 0 21px #0762bc,
    0 0 42px #0762bc,
    0 0 82px #0762bc,
    0 0 92px #0762bc,
    0 0 102px #0762bc,
    0 0 151px #0762bc;`}

  @media (max-width:1132px){
    grid-row:1;
    grid-column:1;
    text-shadow:none;
  }

  @media (max-height:600px){
    opacity:50%;
  }
`

const Boton = styled.button`
  position:absolute;
  width:60%;
  bottom:50px;
  height:8%;
  grid-row:1;
  color:white;
  margin-left:30px;
  background:none;
  border-radius:25px;
  border:1px solid white;
  font-size: clamp(0.875rem, 0.713rem + 0.8642vw, 1.75rem);

  :hover{
    cursor: url("/src/assets/cursor/pointer-old.png"), default;
  }
`

export default function App() {

  const [windowSize, setWindowSize] = useState(0)
  const [noResponsive, setnoResponsive] = useState(true)
  const [mostrarInicio, setMostrarInicio] = useState(true)
  const [displaySlogan, setDisplaySlogan] = useState('flex')

  const estadoVentana = useVentanaContext()
  const cambiarEstadoVentana = useCambioDeEstadoVentana()

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyValue = event.key;

      if(keyValue === "Escape" && !estadoVentana){
        cambiarEstadoVentana(false)
      }
    };

    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, []);
  

  const actualizarAnchoVentana = () => {
    setWindowSize(window.innerWidth);
  };

  function OcultarSlogan(){
    setnoResponsive(true)
    setDisplaySlogan('none')
  }

  useEffect(() => {
    
    actualizarAnchoVentana()

    window.addEventListener('resize', actualizarAnchoVentana);

    return () => {
      window.removeEventListener('resize', actualizarAnchoVentana);
    }

  }, [])

  useEffect(() => {

    if(windowSize >= 1132){
      setnoResponsive(true)
    }else{
      setnoResponsive(false)
    }

    setDisplaySlogan('flex')
  }, [windowSize])
  

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
        <SloganContainer bakgroundSlogan={mostrarInicio ? '#bafb11' : 'none'}>
        {mostrarInicio ? '' : <img src={"src/assets/images/sun.gif"}/>}
        <Slogan mostrarInicio={mostrarInicio} displaySlogan={displaySlogan}>
          Diseño y Desarollo el sitio web que te ayude a alcanzar tus objetivos de negocio.
        </Slogan>
        </SloganContainer>
       {
        !noResponsive ?  <Boton onClick={OcultarSlogan}>➜</Boton>
        : ''
       }
      {
       noResponsive ?
          mostrarInicio ? <Inicio consultarSiExiste={consultarSiExisteToken} /> : <Desktop consultarSiExiste={consultarSiExisteToken}/>
        : ''
      }
      </Contenedor>
  </>
  )

}