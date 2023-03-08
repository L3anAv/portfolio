import React from 'react'
import styled from 'styled-components'

const Contenedor = styled.div`
    display:grid;
    margin-top:15%;
    margin-left:-5%;
    place-items:center;
`

export default function loader() {
  return (
    <Contenedor>
      <span className='loader'></span>
    </Contenedor>
  )
}
