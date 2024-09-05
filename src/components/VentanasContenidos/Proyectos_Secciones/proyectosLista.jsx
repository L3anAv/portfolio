import React from 'react'
import styled from 'styled-components'
import Carga from '../../loading/index'
import {colorVentana} from '../../../utils/theme'
import Arrow from '../../../assets/iconos/arrow.webp'
import {nombreIcono} from '../../../utils/constantes'
import useDataGithub from '../../../Hooks/useDataGithub'
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
        color: #454545;
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
    padding:2px;
    color: #4242f1;
    font-size:18px;
    cursor: pointer;
    font-family:MonoSpace;

    span{
        text-decoration: underline;
        overflow-wrap: break-word;

        &:hover{
            background:#ff630f;
        }
    }

    

    @media(max-width:1132px){
        border:none;
        font-size:15px;
     }
`

const Link = styled.a`
    margin-left:5%;
    font-size:22px;
    color: #4242f1;
    font-weight:800;
    cursor: pointer;
    user-select: none;
    font-family:MonoSpace;
    text-decoration: inherit;

    &:hover{
       background:#ff630f;
    }
`

const Topic = styled.div`
    display:flex;
    font-size:16px;
    flex-wrap: wrap;
    font-family:MonoSpace;

    p{
        margin-top:8px;
        font-weight:800;
        color:#05188d;
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
        <NavegacionBrowser><a onClick={volverAtras}><img src={Arrow}/></a></NavegacionBrowser>
       {dataProyectos.map(item =>{
            if(item.topics.includes(ClaveTopic) && item.topics.length > 0){
                return (
                    <Cards key={item.id}>
                        <Link href={item.html_url}>{item.name}</Link>
                            {item.homepage != '' ? <p><Demo href={item.homepage} target="_blank">{item.topics.includes("web") ? `Web:` : 'Demo:'} <span>{item.homepage}</span></Demo></p> : ''}
                            <p>{item.description}</p>
                            <Topic>{item.topics.map((topic, index) => <p key={index}>{topic}</p>)}</Topic>
                    </Cards>
                )
            }
        })}
        </Contenedor>
    )
}}
