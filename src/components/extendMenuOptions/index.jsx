import React from 'react'
import styled from 'styled-components'
import { nombreIcono } from '../../utils/constantes'
import darChildrenCorrespondiente from '../VentanasContenidos/indexContenidoVentana'
import { useCambioDeEstadoVentana, useSetContenidoVentana } from '../../contexts/ventanaContext'


const Contenedor = styled.div`
  position:absolute;
  top:6.3%;
  left:2%;
  width:8%;
  z-index:1;
  padding:10px;
  background:#b5b5b5;
  border:1px solid black;

  ul li{
    padding:8px;
    user-select:none;
    font-family:MonoSpace;
    border-bottom:1px solid black;
  }

  ul li:hover{
    cursor:pointer;
    background:#818181;
  }
`

export default function extendedMenuOptions({menuExtendidoGestion}) {


  const setComponeneteHijo = useSetContenidoVentana()
  const estadoVentanaCambiar = useCambioDeEstadoVentana()

  function settearContenidoParaVentana(ContenidoDeVentana){
    setComponeneteHijo(darChildrenCorrespondiente(ContenidoDeVentana))
  }

  function darContenidoCorrespodienteaVentana(e){
    const ContenidoDeVentana = e.target
      switch (ContenidoDeVentana.id) {
        case nombreIcono[1]:
          settearContenidoParaVentana(nombreIcono[1])
          break;
        case nombreIcono[2]:
           settearContenidoParaVentana(nombreIcono[2])
           break;
        case nombreIcono[3]:
          settearContenidoParaVentana(nombreIcono[3])
          break;
      }
  }

  function abrirSegunClick(e){
      estadoVentanaCambiar(true)
      menuExtendidoGestion(false)
      darContenidoCorrespodienteaVentana(e)
  }
  

  return (
    <>
    <Contenedor>
      <ul>
        <li onClick={abrirSegunClick} id={nombreIcono[1]}>Imagenes</li>
        <li onClick={abrirSegunClick} id={nombreIcono[2]}>Browser</li>
        <li onClick={abrirSegunClick} id={nombreIcono[3]}>Editor de texto</li>
      </ul>
    </Contenedor>
    </>
  )
}
