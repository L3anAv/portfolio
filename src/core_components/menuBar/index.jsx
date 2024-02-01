import styled from 'styled-components'
import {colorBarraMenu,} from '../../utils/theme'
import React, { useState, useEffect } from 'react'
import {useCambioDeEstadoVentana, useSetContenidoVentana, useSetTituloVentana} from '../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'

const NavBar = styled.nav`
    width:100%;
    color:#000;
    grid-row:2;
    height:40px;
    display:flex;
    font-weight: bold;
    border:3px solid white;
    background:${colorBarraMenu};
    justify-content:space-between;

    @media (max-width:600px){
        grid-row:1;
    }

    @media (max-width:400px){
        width:85%;
    }
`

const UlIncio = styled.ul`
    width:60%;
    display:flex;
    position:relative;

    span{
        padding-top:0;
        margin-left:10px;
        margin-right:10px;
        border-right:2px solid white;
    }

    li:nth-child(2){
        width:25%;
        padding-left:9%;
    }

    @media(max-width:820px){
        margin-left:0;
    }

`

const LiInicio = styled.li`
    
    margin:5px;
    font-size:12px;
    padding-top:2px;
    padding-left:8px;
    user-select:none;
    padding-right:8px;
    padding-bottom:3px;
    font-family:MonosSpace;
    border-top:2px solid white;
    border-left:2px solid white;
    border-right:2px solid #808080;
    border-bottom:2px solid #808080;

    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }

    @media(max-width:820px){
        font-size:10px;
        margin:6px;
    }

`

const Hora = styled.p`
    font-size:13px;
    margin-top:3px;
    margin-bottom:3px;
    padding:8px;
    font-family:MonosSpace;
    border-left:2px solid white;

    @media(max-width:820px){
        margin-left:0;
    }
`

export default function index({consultarSiExiste}) {

    const setTituloVentana = useSetTituloVentana()
    const estadoVentana = useCambioDeEstadoVentana()
    const contenidoVentana = useSetContenidoVentana()

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
        estadoVentana(true)
        setTituloVentana("Sobre Mi")
        contenidoVentana(darChildrenCorrespondiente("Sobre Mi"))
    }

    function ApagarDesktop(){
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
                <LiInicio onClick={AbrirVentanaCorrespondiente}>Sobre Mi</LiInicio>
            </UlIncio>
            <Hora>
                {hora}
            </Hora>
        </NavBar>
    </>
)
}
