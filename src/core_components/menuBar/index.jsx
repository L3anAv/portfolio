import styled from 'styled-components'
import {colorBarraMenu,} from '../../utils/theme'
import React, { useState, useEffect } from 'react'
import BrowserIcon from '../../assets/iconos/browser.webp'
import CierreSistemaSound from "../../assets/audio/salida.ogg"
import {useCambioDeEstadoVentana, useSetContenidoVentana, useSetTituloVentana, useVentanaContext, useGetTituloVentana} from '../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'

const NavBar = styled.nav`
    width:100%;
    color:#000;
    grid-row:2;
    height:42px;
    display:flex;
    font-weight: bold;
    border:3px solid white;
    background:${colorBarraMenu};
    justify-content:space-between;

    @media (max-width:600px){
        grid-row:1;
    }

    @media (max-width:400px){
        width:100%;
    }
`

const UlIncio = styled.ul`
    width:60%;
    display:flex;
    position:relative;

    span{
        padding-top:-3px;
        margin-left:10px;
        margin-right:10px;
        border-right:2px solid white;
    }

    li:nth-child(2){
        width:25%;
        padding-left:9%;
    }

    @media(max-width:820px){
        width:90%;
        margin-left:0;
    }

`

const LiInicio = styled.li`
    
    margin:5px;
    display: flex;
    font-size:12px;
    padding-top:5px;
    padding-left:5px;
    user-select:none;
    padding-right:5px;
    padding-bottom:3px;
    font-family:MonosSpace;
    
    border-top:2px solid white;
    border-left:2px solid white;
    border-right:2px solid #808080;
    border-bottom:2px solid #808080;

     img{
        width:16px;
        height:16px;
        display: block;
        margin-left:-30%;
        margin-right:8px;
    }
        
    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }

    @media(max-width:820px){
        margin:6px;
        font-size:10px;
    }

`

const LiInicioSobreMi = styled(LiInicio)`
    border-bottom: ${props => props.ventanaactiva ? '2px solid white' : '2px solid #808080'};
    border-right: ${props => props.ventanaactiva ? '2px solid white' : '2px solid #808080'};
    border-left: ${props => props.ventanaactiva ? '2px solid black' : '2px solid white'};
    border-top: ${props => props.ventanaactiva ? '2px solid black' : '2px solid white'};
`

const Hora = styled.p`
    font-size:13px;
    margin-top:3px;
    margin-bottom:3px;
    padding:8px;
    font-family:MonosSpace;
    border-left:2px solid white;

    @media(max-width:820px){
        padding:2px;
        font-size:12px;
        margin-left:0;
    }
`

export default function index({consultarSiExiste}) {

    const SonidoCierreSistema = new Audio(CierreSistemaSound)

    const estadoVentanaActual = useVentanaContext()
    const setTituloVentana = useSetTituloVentana()
    const estadoVentana = useCambioDeEstadoVentana()
    const contenidoVentana = useSetContenidoVentana()
    const TituloVentanaActual = useGetTituloVentana()
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
        clearInterval(intervalId);
        };
    }, []);
    

    function AbrirVentanaCorrespondiente(){
        if(estadoVentanaActual === false){
            estadoVentana(true)
            setTituloVentana("Sobre Mi")
            contenidoVentana(darChildrenCorrespondiente("Sobre Mi"))
        }else{
            estadoVentana(false)
        }
        
    }

    function ApagarDesktop(){
        SonidoCierreSistema.play()
        setearToken()
        consultarSiExiste()
    }

    function setearToken(){
        localStorage.setItem('TOKENB', 'SIINICIO');
    }

    return (
    <>
        <NavBar>
            <UlIncio>
                <span><LiInicio onClick={ApagarDesktop}>Inicio</LiInicio></span>
                <LiInicioSobreMi ventanaactiva={estadoVentanaActual && TituloVentanaActual == "Sobre Mi"} onClick={AbrirVentanaCorrespondiente}><img src={BrowserIcon}/>Sobre Mi</LiInicioSobreMi>
            </UlIncio>
            <Hora>
                {hora}
            </Hora>
        </NavBar>
    </>
)
}
