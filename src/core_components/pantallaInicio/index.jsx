import React from 'react'
import styled from 'styled-components'

/*  `*/

const Container = styled.div`
    display:grid;
    justify-content:center;
    aling-item:center;

    h1{
        margin-top:70%;
        color:#fff;
    }
`

export default function Index({IrAlDesktop}) {
    return (
        <>
        <Container>
            <h1 onClick={IrAlDesktop}>Iniciar Sesion</h1>
        </Container>
        </>
    )
}
