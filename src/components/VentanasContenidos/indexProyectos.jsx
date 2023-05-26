import React, {useState} from 'react'
import styled from 'styled-components'
import Icono from '../../components/iconsScreen/index'
import darIconoCorrespondiente from '../../utils/darIcono'
import {useSetContenidoVentana} from '../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'

const ContenedorDeProyectos = styled.div`
    display:flex;
    margin-left:45px;

    div{
        margin-left:10px;
        margin-right:10px;
    }
`

export default function indexProyectos() {

    const contenidoParaVentana = useSetContenidoVentana()
    const [nombreDelClikeado, setNombreIconoClikeado] = useState('')

    function decirQueIconoQuienSoy(nombre){
      setNombreIconoClikeado(nombre)
      const Contenido = darChildrenCorrespondiente(nombre)
      contenidoParaVentana(Contenido)
    }

    return (
        <ContenedorDeProyectos>
            <Icono src={darIconoCorrespondiente("Proyectos")}  decirQuienSoy={decirQueIconoQuienSoy} nombreDelClikeado={nombreDelClikeado} nombreIcono={"Frontend"} width={'60px'} height={'auto'}/>
            <Icono src={darIconoCorrespondiente("Proyectos")} decirQuienSoy={decirQueIconoQuienSoy} nombreDelClikeado={nombreDelClikeado} nombreIcono={"Otros"} width={'60px'} height={'auto'}/>
        </ContenedorDeProyectos>
    )
}

