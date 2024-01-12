import Desktop from './Desktop'
import styled from 'styled-components'
import React, { useState, useEffect, useRef } from 'react'
import Inicio from './core_components/index/index'

const Contenedor = styled.div`
    width:100vw;
    height:100vh;
    display:grid;
    background: rgb(167,211,151);
    grid-template-columns: 1fr 1fr;

    background: ${props =>
      props.mostrarInicio
        ? 'linear-gradient(180deg, rgba(167,211,151,1) 0%, rgba(85,88,67,1) 100%)'
        : 'linear-gradient(142deg, rgba(85,88,67,1) 0%, rgba(245,238,200,1) 100%)'};
    transition:background 1s;

    @media (max-width:840px){
      grid-template-row: 1fr;
      grid-template-columns: 1fr;
    }
`

const Slogan = styled.p`
  display: ${props => props.displaySlogan};
  grid-row:1;
  grid-column:2;
  color: ${props =>
    props.mostrarInicio
      ? '#555843'
      : '#fff'};
  text-align:left;
  user-select:none;
  transition:color 1s;
  align-items: center;
  justify-content: center;
  font-family:Quattrocento;
  animation:OpacidadEntrada 1s;
  font-size: clamp(3.75rem, 3.287rem + 2.4691vw, 6.25rem);

  @media (max-width:840px){
    grid-column:1;
  }
`

const Boton = styled.button`
  width:30%;
  height:30%;
  color:white;
  grid-column:1;
  background:none;
  margin-left:95px;
  border-radius:25px;
  border:1px solid white;
  animation:IngresoBoton 1.5s;
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
    };

  }, [])

  useEffect(() => {

    if(windowSize >= 840){
      setnoResponsive(true)
      setDisplaySlogan('flex')
    }else{
      setnoResponsive(false)
    }

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
        <Slogan mostrarInicio={mostrarInicio} displaySlogan={displaySlogan}>Diseño y Desarollo el sitio web que te ayude a alcanzar tus objetivos de negocio.</Slogan>
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