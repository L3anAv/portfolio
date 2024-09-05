import React, {useState} from 'react'
import styled from 'styled-components'
import {colorContraste} from '../../utils/theme'
import {useVentanaContext, useCambioDeEstadoVentana, useGetContenidoVentana, useGetTituloVentana} from '../../contexts/ventanaContext'

const Ventana = styled.div`
    overflow:hidden;
    position:absolute;
    z-index:1;
    outline:3px solid #c9ccc7;
    top:${props => props.top};
    left:${props => props.left};
    background:${colorContraste};
    width:${props => props.width};
    height:${props => props.height};
    display:${props => props.display};
    animation:${props => props.animation};
`

const ContenidoVentana = styled.div`
    width:100%;
    height: 88%;
    overflow:${props => props.overflow};
`

export const BarraMenu = styled.div`
    height:32px;
    display:flex;
    justify-content:space-between;
    border-bottom:4px solid black;
    background: linear-gradient(142deg, rgba(5,9,132,1) 0%, rgba(8,125,205,1) 100%);
`

export const TituloVentana = styled.h2`
    color:#fff;
    font-size:18px;
    margin-top:3px;
    margin-left:-6%;
    user-select:none;
    font-family:IBMRegular;
`

export const CruzCierre = styled.div`
    width:42px;
    color:#000;
    font-size:15px;
    padding-top:3px;
    user-select:none;
    text-align:center;
    background:#bdbdbd;
    font-family:MonosSpace;
    border-top:2px solid white;
    border-left:2px solid white;
    border-right:2px solid #1c1c1c;
    border-bottom:2px solid #1c1c1c;

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

const BarraInferior = styled.div`
  height: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 99.3%;
  background: #c9ccc7;
  display: flex;
  
  border-top:2px solid #808080;
  border-left:4px solid white;
  border-right:4px solid white;
  border-bottom:4px solid #808080;

`

export default function ventanaContenido({ImgParametro}) {
    
    const Contenido = useGetContenidoVentana()
    const TituloParaVentana = useGetTituloVentana()

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

    function ejecutarTareasCerrarVentana(){
        setAnimacionCerrar(true)

        setTimeout(() => {
            setAnimacionCerrar(false)
            cambiarEstadoVentana(false)
        }, 100)
    }

    return (
    <Ventana
    top={maximizarVentana ? '0' : '55px'}
    left={maximizarVentana ? '0' : '12%'}
    width={maximizarVentana ? '99.9%' : '75%'}
    height={maximizarVentana ? '99.8%' : '75%'}
    display={valorEstadoVentana ? 'inline-block' : 'none'}
    animation={animacionCerrar ? 'SalidaVentana 0.2s linear' : 'EntradaVentana 0.1s linear'}
    >
        <BarraMenu onDoubleClick={maximizarLaVentana}>
            <Img src={ImgParametro} />
            <TituloVentana>{TituloParaVentana}</TituloVentana>
            <CruzCierre 
            onClick={ejecutarTareasCerrarVentana}
            >{TituloParaVentana === "Sobre Mi" ? '-' : 'X'}</CruzCierre>
        </BarraMenu>
        <ContenidoVentana
         overflow={overflowActive ? 'auto' : 'hidden'}
        >
         {Contenido}
        </ContenidoVentana>
        <BarraInferior/>
    </Ventana>
  )
}
