import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import obtenerIndex from '../../utils/obtenerIndex'
import {StarWars, CuruchetCasa, Cholet} from '../../utils/indexImg'

const Img = styled.img`
    width:100%;
`

export default function indexImg() {

    const Imagenes = [StarWars, CuruchetCasa, Cholet]
    const [ImagenSelec, setImgSelect] = useState()

    useEffect(() => {
        const Index = obtenerIndex(Imagenes.length)
        setImgSelect(Imagenes[Index])
    }, [])
    

  return (
    <>
        <Img src={ImagenSelec}/>
    </>
  ) 
}
