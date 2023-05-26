import React from 'react'
import styled from 'styled-components'

const Contenedor = styled.div`
    display:flex;
    justify-content:center;
`

function sobreMi() {
  return (
    <Contenedor>
        <h1>Matias Leandro Avila</h1>
        <h3>Desarollador Frontend</h3>
    </Contenedor>
  )
}

export default sobreMi