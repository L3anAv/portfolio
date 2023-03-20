import Loader from '../loading/index'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import obtenerIndex from '../../utils/obtenerIndex'
import Reload from '../../assets/iconos/reload.png'

const Contenedor = styled.div`
    display:flex;
`

const Img = styled.img`
    height:20px;
    margin-top:10px;
    margin-left:8px;

    :hover{
        cursor:pointer;
    }
`

const NavegacionBrowser = styled.div`
    width:90%;
    height:30px;
    display:flex;
    margin-top:5px;
    margin-left:2%;
    background:#fff;
    margin-bottom:5px;
    border:1px solid black;

    p{
        padding:8px;
        margin-left:5%;
        cursor:pointer;
        font-weight:800;
        font-family:MonoSpace;

        :hover{
            text-decoration:underline;
        }
    }
`

export default function indexBrowser() {

    const [loading, setLoading] = useState(true)
    const [IDVideo, setIDVideo] = useState('ID8EUmz2KcU')
    const [reloadContent, setreloadContent] = useState(false)

    let opcionesVideo = ['ID8EUmz2KcU', 'ZclzN7R_mmE','ALznpaBWUTo','xgG9wZPnf6k','86vaOUEjWzM','h7MYJghRWt0','g_-jc_wFTC8','ybGOT4d2Hs8', 'gYWUJzQ1g-Y', 'XxZhBTK3bDM','LW5kh1rpfYs']

    const BrowserLink = `https://www.youtube.com/watch?v=${IDVideo}`
    const LinkPrincipal = `https://www.youtube.com/embed/${IDVideo}?autoplay=1&mute=0`

    function darleValorID(){
        const index = obtenerIndex(opcionesVideo.length)
        setIDVideo(opcionesVideo[index])
    }

    function cargarContenido(){
        setTimeout(() => {
            darleValorID()
            setLoading(false)
            setreloadContent(true)
          }, 500)
    }

    useEffect(() => {
        cargarContenido()
    }, [])
    
    function reaload(){
        setreloadContent(false)

        setTimeout(() => {
            cargarContenido()
        }, 300)
    }

    function AbrirLink(){
        window.open(BrowserLink, '_blank');
    }

  if(loading) return <Loader />
  
  if(!loading) return (
    <> 
        <Contenedor>
        <Img onClick={reaload} src={Reload}/>
        <NavegacionBrowser><p onClick={AbrirLink}>{BrowserLink}</p></NavegacionBrowser>
        </Contenedor>
        {reloadContent ? <iframe width="100%" height="90%" src={LinkPrincipal}/> : <Loader />}
    </>
  )
}
