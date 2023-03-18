import styled from 'styled-components'
import {colorPrimario} from '../../utils/theme'
import React, {useState, useEffect} from 'react'
import {nombreIcono} from '../../utils/constantes'
import {useVentanaContext, useCambioDeEstadoVentana, useGetContenidoVentana} from '../../contexts/ventanaContext'

const Ventana = styled.div`
    position:absolute;
    background:#b3d1dd;
    outline:2px solid white;
    top:${props => props.top};
    left:${props => props.left};
    width:${props => props.width};
    height:${props => props.height};
    display:${props => props.display};
    animation:${props => props.animation};
`

const ContenidoVentana = styled.div`
    width:100%;
    height:93%;
    overflow:${props => props.overflow};
`

const BarraMenu = styled.div`
    height:32px;
    display:flex;
    background:${colorPrimario};
    justify-content:space-between;
    border-bottom:2px solid white;
`

const TituloVentana = styled.h2`
    color:#fff;
    font-size:18px;
    margin-left:-6%;
    user-select:none;
    font-family:MonosSpace;
`

const CruzCierre = styled.div`
    width:42px;
    color:#fff;
    font-size:15px;
    padding-top:3px;
    user-select:none;
    text-align:center;
    font-family:MonosSpace;
    border-top:2px solid white;
    background:${colorPrimario};
    border-left:2px solid white;
    border-right:2px solid black;
    border-bottom:2px solid black;

    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }
`

const Img = styled.img`
    transform:scale(0.5);
`

export default function ventanaContenido({titleVentana, ImgParametro}) {
    
    const Contenido = useGetContenidoVentana()
    
    const valorEstadoVentana = useVentanaContext()
    const cambiarEstadoVentana = useCambioDeEstadoVentana()

    const [overflowActive, setOverflow] = useState(true)
    const [animacionCerrar, setAnimacionCerrar] = useState(false)
    const [maximizarVentana, setMaximizarVentana] = useState(false)

    function maximizarLaVentana(){
        return !maximizarVentana
        ? setMaximizarVentana(true)
        : setMaximizarVentana(false)
    }

    function overflowActividad(){
        return titleVentana == nombreIcono[1]
        ? setOverflow(false)
        : setOverflow(true)
    }

    function ejecutarTareasCerrarVentana(){
        setAnimacionCerrar(true)

        setTimeout(() => {
            setAnimacionCerrar(false)
            cambiarEstadoVentana(false)
        }, 100)
    }

    useEffect(() => {
        overflowActividad()
    }, [])
    

    return (
    <Ventana
    top={maximizarVentana ? '0' : '90px'}
    left={maximizarVentana ? '0' : '10%'}
    width={maximizarVentana ? '99.9%' : '75%'}
    height={maximizarVentana ? '99.8%' : '75%'}
    display={valorEstadoVentana ? 'inline-block' : 'none'}
    animation={animacionCerrar ? 'SalidaVentana 0.2s linear' : 'EntradaVentana 0.1s linear'}
    >
        <BarraMenu onDoubleClick={maximizarLaVentana}>
            <Img src={ImgParametro} />
            <TituloVentana>{titleVentana}</TituloVentana>
            <CruzCierre 
            onClick={ejecutarTareasCerrarVentana}
            >X</CruzCierre>
        </BarraMenu>
        <ContenidoVentana
         overflow={overflowActive ? 'auto' : 'hidden'}
        >
            {Contenido}
        </ContenidoVentana>
    </Ventana>
  )
}
