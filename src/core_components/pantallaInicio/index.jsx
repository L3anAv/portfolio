import React from 'react'
import styled from 'styled-components'
import {colorPrimario} from '../../utils/theme'

const Container = styled.div`
    display:grid;
    grid-column-template:1fr 50% 1fr;
`

const ContainerInicio = styled.div`
    display:flex;
    flex-direction:column;
    grid-column:2/3;
`

const BotonIniciarSs = styled.button`
    color:#fff;
    weigth:800;
    height:50px;
    width:210px;
    padding:10px;
    font-size:18px;
    border-radius:10px;
    font-family:MonoSpace;
    background:${colorPrimario};
    transition:all 1s;

    :hover{
        color:#000;
        background:#b3d1dd;
    }
`

const FotoPerfil = styled.img`
    width:200px;
    margin-top:20%;
    margin-bottom:30px;
    border-radius:100px;
`

export default function Index({IrAlDesktop}) {
    return (
        <>
        <Container>
            <ContainerInicio>
                <FotoPerfil src="src/assets/images/sho.jpg" />
                <BotonIniciarSs onClick={IrAlDesktop}>Iniciar Sesion</BotonIniciarSs>
            </ContainerInicio>
        </Container>
        </>
    )
}
