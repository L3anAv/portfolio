import styled from "styled-components";

export const Contenedor = styled.div`
    width:40%;
    position:relative;
    top:${props => props.topPosition};
    left:${props => props.leftPosition};
    z-index:2;
    grid-row:1;
    grid-column:1;
    animation:OpacidadEntrada 0.3s;

`
export const ImagenFondo = styled.div`
    width:100%;
    height:300px;
    background-position: center;
     background-size:110% auto;
    background-image: url(${props => props.imagen});
`
