import React from 'react'
import styled from 'styled-components'
import Carga from '../../loading/index'
import {colorVentana} from '../../../utils/theme'
import useDataGithub from '../../../Hooks/useDataGithub'
import {nombreIcono} from '../../../utils/constantes'
import {useSetContenidoVentana} from '../../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../../components/VentanasContenidos/indexContenidoVentana'

const Contenedor = styled.div`
    display:flex;
    flex-direction:column;
`

const Cards = styled.div`
    width:55%;
    padding:10px;
    background:#fff;
    margin-top:20px;
    margin-left:20%;
    margin-bottom:10px;
    border:1px solid black;
    grid-row:${props => props.row};
    grid-column:${props => props.column};

    p{
        color: #000;
        margin-left:5%;
        font-size:15px;
        margin-top:8px;
        font-family:MonoSpace;
    }

    @media(max-width:1132px){
        width:80%;
        margin-left:5%;
     }
`

const Demo = styled.a`
    color: #000;
    padding:2px;
    font-size:18px;
    cursor: pointer;
    font-family:MonoSpace;
    border:0.5px solid black;

    span{
        text-decoration: underline;
    }

    @media(max-width:1132px){
        border:none;
        color: #555843;
        font-size:13px;
        font-weight:900;
     }
`

const Link = styled.a`
    margin-left:5%;
    font-size:22px;
    font-weight:800;
    cursor: pointer;
    user-select: none;
    font-family:MonoSpace;
    color: ${colorVentana};
    text-decoration: inherit;
`

const Topic = styled.div`
    display:flex;
    font-size:16px;
    font-family:MonoSpace;

    p{
        margin-top:8px;
        font-weight:800;
        margin-bottom:8px;
    }

    @media(max-width:1132px){
       flex-direction:column;
    }
`

const NavegacionBrowser = styled.div`
    width:10%;
    display:flex;
    margin-top:5px;
    margin-left:2%;
    user-select:none;

    a{
        cursor:pointer;
        margin-left:20px;
        color:${colorVentana};
    }
`

export default function proyectosLista({ClaveTopic}) {

    const [dataProyectos, Loading] = useDataGithub()
    const contenidoParaVentana = useSetContenidoVentana()

    function volverAtras(){
        contenidoParaVentana(darChildrenCorrespondiente(nombreIcono[0]))
    }

    if(Loading){
        return ( <Carga />)
    }

    if(!Loading){
    return(
        <Contenedor>
        <NavegacionBrowser><a onClick={volverAtras}><img src="src/assets/iconos/arrow.png"/></a></NavegacionBrowser>
       {dataProyectos.map(item =>{
            if(item.topics.includes(ClaveTopic) && item.topics.length > 0){
                return (
                    <Cards key={item.id}>
                        <Link href={item.html_url}>{item.name}</Link>
                            {item.homepage != '' ? <p><Demo href={item.homepage}>Demo: <span>{item.homepage}</span></Demo></p> : ''}
                            <p>{item.description}</p>
                            <Topic>{item.topics.map((topic, index) => <p key={index}>{topic}</p>)}</Topic>
                    </Cards>
                )
            }
        })}
        </Contenedor>
    )
}}
