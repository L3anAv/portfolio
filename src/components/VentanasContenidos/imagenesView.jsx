import styled from 'styled-components'
import {useEffect, useState} from 'react'
import IconoVentana from '../iconoVentana/iconoVentana'
import {nombresImagenes, darImagenCorrespondiente} from '../../utils/indexImg'
import {darChildrenVisorImagen} from "../../utils/darChildrenVisorImagen"
import {useSetTituloVentana, useCambioDeEstadoVentana, useSetContenidoVentana} from "../../contexts/ventanaContext"

const ContenedorImagenes = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;

    @media (max-width:700px){
      flex-direction:column;
    }
`

const IconoVentanaImagenes = styled(IconoVentana)`
    justify-content: center;
    align-items: flex-end;
`

function ImagenesView() {
  
  const setTituloVentana = useSetTituloVentana()
  const setEstadoVentana = useCambioDeEstadoVentana()
  const setContenidoVentana = useSetContenidoVentana()

  const [nombreDelClikeado, setNombreDelClikeado] = useState('')

  useEffect(() => {
    setTituloVentana("Imagenes")
  }, [])
  

  function handleDoubleClickImagen(){
    
    setEstadoVentana(true)
    setTituloVentana(nombreDelClikeado)

    const Componente = darChildrenVisorImagen(nombreDelClikeado)
    setContenidoVentana(Componente)
  }

  function darNombre(nombre){
    setNombreDelClikeado(nombre)
  }

  return (
    <>
    <ContenedorImagenes>
      {nombresImagenes.map((nombreParaIcono) => (
        <IconoVentanaImagenes handleDoubleClick={handleDoubleClickImagen} FuiClikeado={nombreParaIcono === nombreDelClikeado} darNombre={darNombre} nombreIcono={nombreParaIcono} imgIcono={darImagenCorrespondiente(nombreParaIcono)}/>
      ))}
    </ContenedorImagenes>
    </>
  )
}

export {ImagenesView}