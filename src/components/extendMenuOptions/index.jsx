import React from 'react'
import styled from 'styled-components'
import { nombreIcono } from '../../utils/nombresIconos'
import darChildrenCorrespondiente from '../VentanasContenidos/indexContenidoVentana'
import { useCambioDeEstadoVentana, useSetContenidoVentana } from '../../contexts/ventanaContext'

const Contenedor = styled.div`
  position:absolute;
  top:6.3%;
  width:8%;
  z-index:1;
  padding:10px;
  background:#b5b5b5;
  border:1px solid black;
  left:${props => props.left};

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

  /*

  TODO: Refactorizar componente para hacerlo generico.
  
  [x] Ajustar la funcion de delvolver componente correspondiente segun nombre.
  [ ] Usar la funcion de dar children correspondiente para la ventana y ahi poner todas las opciones.
  
  */

export default function extendedMenuOptions({menuExtendidoGestion, OpcionesExtendedMenu}) {

  const setComponeneteHijo = useSetContenidoVentana()
  const estadoVentanaCambiar = useCambioDeEstadoVentana()

  function darContenidoCorrespodienteaVentana(e){
    const ContenidoDeVentana = e.target.id
    setComponeneteHijo(darChildrenCorrespondiente(ContenidoDeVentana))
  }

  function manejadorOnClick(e){
      estadoVentanaCambiar(true)
      menuExtendidoGestion(false)
      darContenidoCorrespodienteaVentana(e)
  }

  return (
    <>
    <Contenedor left={OpcionesExtendedMenu.left}>
      <ul>
        {OpcionesExtendedMenu.opcionesMenu.map(opcion => (
          <li onClick={manejadorOnClick} id={opcion}>{opcion}</li>
        ))}
      </ul>
    </Contenedor>
    </>
  )
}
