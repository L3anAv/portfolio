import React from 'react'
import Desktop from './Desktop'
import styled from 'styled-components'
import Inicio from './core_components/index/index'

const Contenedor = styled.main`
    width:100vw;
    height:100vh;
    display:grid;
    background: rgb(167,211,151);
    grid-template-columns: 1fr 1fr;
    background: linear-gradient(180deg, rgba(167,211,151,1) 0%, rgba(85,88,67,1) 100%); 
`

const Slogan = styled.p`
  display: flex;
  color:#F5EEC8;
  font-size:80px;
  user-select:none;
  text-align:right;
  align-items: center;
  justify-content: center;
  font-family:Quattrocento;
  animation:OpacidadEntrada 0.5s ease;
`

export default function App() {
  return (
    <>
        <Contenedor>
        <Inicio />
        <Slogan>Diseño y Desarrollo el sitio web que te ayude a alcanzar tus objetivos de negocio en línea.</Slogan>
        </Contenedor>
        {/* <Desktop /> */}
  </>
  )

}