import Desktop from './Desktop'
import styled from 'styled-components'
import React, { useState } from 'react'
import Inicio from './core_components/index/index'

const Contenedor = styled.div`
    width:100vw;
    height:100vh;
    display:grid;
    background: rgb(167,211,151);
    grid-template-columns: 1fr 1fr;
    background: linear-gradient(180deg, rgba(167,211,151,1) 0%, rgba(85,88,67,1) 100%); 
`

const Slogan = styled.p`
  display: flex;
  grid-row:1;
  grid-column:2;
  color:#555843;
  font-size:85px;
  user-select:none;
  text-align:left;
  align-items: center;
  justify-content: center;
  font-family:Quattrocento;
  animation:OpacidadEntrada 1s;
`

export default function App() {

  const [mostrarInicio, seMostrarInicio] = useState(true)

  function consultarSiExisteToken() {

    if (localStorage.getItem("TOKENB") === "NOINICIO") {
      seMostrarInicio(false);
    }
  
  }
 
  return (
    <>
      <Contenedor>
          {mostrarInicio ? <Inicio consultarSiExiste={consultarSiExisteToken} /> : <Desktop />}
        <Slogan>Diseño y Desarollo el sitio web que te ayude a alcanzar tus objetivos de negocio.</Slogan>
      </Contenedor>

  </>
  )

}