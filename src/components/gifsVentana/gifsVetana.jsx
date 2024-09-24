import React, {useState} from 'react'
import styled from 'styled-components'
import { BarraMenu, CruzCierre } from '../Ventana'
import {Contenedor, ImagenFondo} from "../gifsVentana/gifsVetana.styled"

const BarraMenuCruz = styled(BarraMenu)`
  position:relative;
  display:${props => props.ventanaOpen};
    
    div{
        position:absolute;
        height:25px;
        right:0;
    }
`

const GifsVetana = ({id, estado, gif, topPosition, leftPosition, cambiarEstadoVentana}) => {

  return (
    <Contenedor  topPosition={topPosition} leftPosition={leftPosition}>
        <BarraMenuCruz><CruzCierre onClick={() => cambiarEstadoVentana(id, !estado)}>X</CruzCierre></BarraMenuCruz>
        <ImagenFondo imagen={gif}/>
    </Contenedor>   
  )
}


export default GifsVetana