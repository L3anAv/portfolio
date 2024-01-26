import Desktop from './Desktop'
import styled from 'styled-components'
import React, { useState, useEffect} from 'react'
import Inicio from './core_components/index/index'

const Contenedor = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    background: rgb(167,211,151);
    grid-template-columns: 1fr 1fr;
    background: ${props =>
      props.mostrarInicio
        ? 'linear-gradient(180deg, rgba(167,211,151,1) 0%, rgba(85,88,67,1) 100%)'
        : 'linear-gradient(149deg, rgba(86,78,104,1) 0%, rgba(45,38,61,1) 100%)'};
    transition:background 1s;
    @media (max-width:1132px){
      grid-template-row: 1fr 1fr;
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
  padding:10px;
  text-align:left;
  user-select:none;
  transition:color 1s;
  align-items: center;
  justify-content: center;
  font-family:Quattrocento;
  animation:OpacidadEntrada 1s;
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
`

const Boton = styled.button`
  width:80%;
  height:30%;
  grid-row:2;
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