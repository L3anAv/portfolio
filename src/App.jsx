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
`

const Slogan = styled.p`
  display: flex;
  grid-row:1;
  grid-column:2;
  color: ${props =>
    props.mostrarInicio
      ? '#555843'
      : '#fff'};
  font-size:85px;
  user-select:none;
  text-align:left;
  align-items: center;
  justify-content: center;
  font-family:Quattrocento;
  transition:color 1s;
  animation:OpacidadEntrada 1s;
`

export default function App() {

  const [mostrarInicio, seMostrarInicio] = useState(true)
  
  useEffect(() => {
    consultarSiExisteToken()
  }, [mostrarInicio])
  
  function consultarSiExisteToken() {

    if (localStorage.getItem("TOKENB") === "NOINICIO") {
      seMostrarInicio(false);
    }else if (localStorage.getItem("TOKENB") === "SIINICIO"){
      seMostrarInicio(true);
    }
  }
 
  return (
    <>
      <Contenedor mostrarInicio={mostrarInicio}>
          {mostrarInicio ? <Inicio consultarSiExiste={consultarSiExisteToken} /> : <Desktop consultarSiExiste={consultarSiExisteToken}/>}
        <Slogan mostrarInicio={mostrarInicio}>Diseño y Desarollo el sitio web que te ayude a alcanzar tus objetivos de negocio.</Slogan>
      </Contenedor>
  </>
  )

}