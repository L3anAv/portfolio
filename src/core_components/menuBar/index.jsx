import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {colorVentana} from '../../utils/theme'
import React, { useState, useEffect } from 'react'
import {useCambioDeEstadoVentana, useSetContenidoVentana, useSetTituloVentana} from '../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'

const NavBar = styled.nav`
    color:#fff;
    height:43px;
    display:flex;
    margin-top:20px;
    padding-top:3px;
    padding-bottom:3px;
    border:3px solid white;
    background:${colorVentana};
    justify-content:space-between;

    @media(max-width:820px){
        width:83%;
    }
`

const UlIncio = styled.ul`
    display:flex;
    margin-left:10px;
    position:relative;

    @media(max-width:820px){
        margin-left:0;
    }

`

const LiInicio = styled.li`
    margin:8px;
    font-size:12px;
    padding-top:3px;
    padding-left:8px;
    user-select:none;
    padding-right:8px;
    padding-bottom:3px;
    font-family:MonosSpace;
    border:2px solid white;

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
    font-size:12px;
    margin-top:12px;
    margin-left:30px;
    margin-right:30px;
    font-family:MonosSpace;

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
                <LiInicio onClick={ApagarDesktop}>Suspender</LiInicio>
                <LiInicio onClick={AbrirVentanaCorrespondiente}>Sobre Mi</LiInicio>
                <LiInicio>CV</LiInicio>
            </UlIncio>
            <Hora>
                {hora}
            </Hora>
        </NavBar>
    </>
)
}
