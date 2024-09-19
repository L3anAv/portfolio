import "./bilboard.css"
import styled from "styled-components"
import { useState, useEffect, useRef } from "react";
import errorSound from "../../assets/audio/error.ogg"
import { BarraMenu, CruzCierre, TituloVentana } from "../Ventana"

const Contenedor = styled.div`
  grid-column: 2;
  grid-row: 1;
  width:95.3%;
  height:370px;
  margin-top: 18%;
  position: relative;
`;

const Cruz = styled(CruzCierre)`
  height: 80%;
  color:${props => props.colorCruz};
  margin-left:70%;

  :active{
    border-bottom:${props => props.activado ? "2px solid #1c1c1c" : "2px solid white"};
    border-right:${props => props.activado ? "2px solid #1c1c1c" : "2px solid white"};
    border-left: ${props => props.activado ? "2px solid white" : "2px solid black"};
    border-top: ${props => props.activado ? "2px solid white" : "2px solid black"};
  }
`;

const TituloParaVentanita = styled(TituloVentana)`
  font-size:12px;
  margin-top:8px;
  margin-left:10px;
`

const ErrorVentana = styled.div`
  position:absolute;
  top:0;
  z-index:3;
  width:300px;
  height:150px;
  display:flex;
  margin-top:15%;
  margin-left:25%;
  background:#aaaaaa;
  flex-direction:column;

  span{ 
    display:flex;

    svg{
      margin-left:10px;
      margin-right:5px;
    }

    color:#1c1c1c;
    margin-top:25px;
    margin-bottom:10px;
    text-align:center;
    font-family:IBMRegular;
  }
`
const CruzError = styled(CruzCierre)`
  color:#7c7c7c;

  :active{
    border-bottom: 2px solid #1c1c1c;
    border-right: 2px solid #1c1c1c;
    border-left: 2px solid white;
    border-top: 2px solid white;
  }
`

const BotonError = styled.button`
  position:absolute;
  top:80%;
  right:10px;
  width:20%;
  background:#d4d4d4;

  outline:1px solid black;
  border-top:2px solid white;
  border-left:2px solid white;
  border-right:2px solid #c1c1c1;
  border-bottom:2px solid #c1c1c1;
  cursor:url(src/assets/cursor/cursor-old.png), pointer;

  :active{
    border-top:2px solid #c1c1c1;
    border-left:2px solid #c1c1c1; 
    border-right:2px solid white;
    border-bottom:2px solid white;
  }
`

const bilboard = () => {

  const refLis = useRef(null)
  const errorAudio = new Audio(errorSound)
  const [ActivarError, setActivarError] = useState(false)
  const [AbrirVentanaError, SetAbrirVentanaError] = useState(false)

  const handleVentanaError = () => {
    setTimeout(() => {
      errorAudio.play()
      SetAbrirVentanaError(true)
    }, 500);
  }

  useEffect(() => {
  
    const cantidadDeLi = refLis.current.children.length

    if(ActivarError){
      handleVentanaError()
    }else{
      SetAbrirVentanaError(false)
    }

    for (let i = 0; i < cantidadDeLi; i++) {
      const elementoActual = refLis.current.children[i].children[0];
    
      if (elementoActual && ActivarError) {
        
        elementoActual.style.animation = "none"
        elementoActual.style.zIndex = "2"
        elementoActual.style.filter = "grayscale(0.5)"
      }else if(elementoActual && !ActivarError){
        elementoActual.style.filter = "none"
        elementoActual.style.zIndex = "1"
        elementoActual.style.animation = "rotate 25s linear"
      }
    }
  
  }, [ActivarError])
  
  
  return (
    <Contenedor>
      {AbrirVentanaError &&  <ErrorVentana><BarraMenu><TituloParaVentanita>Mensaje del Sistema</TituloParaVentanita><CruzError>X</CruzError></BarraMenu><span><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>close_circle_fill</title><g id="close_circle_fill" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#FF6252FF' d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9.879 8.464a1 1 0 0 0-1.498 1.32l.084.095 2.12 2.12-2.12 2.122a1 1 0 0 0 1.32 1.498l.094-.083L12 13.414l2.121 2.122a1 1 0 0 0 1.498-1.32l-.083-.095L13.414 12l2.122-2.121a1 1 0 0 0-1.32-1.498l-.095.083L12 10.586z'/></g></svg>Error al cerrar el proceso.</span><BotonError onClick={() => setTimeout(() => {setActivarError(false)},1000)}>Reiniciar</BotonError></ErrorVentana>}
      <BarraMenu><TituloParaVentanita>Preview Proyectos</TituloParaVentanita><Cruz activado={ActivarError} colorCruz={ActivarError ? "#7c7c7c" : "#000"} onClick={() => setActivarError(true)}>X</Cruz></BarraMenu>
		    <div id="billboard-outer">
          <ol id="billboard" ref={refLis}>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
            <li><div></div><div></div><div></div></li>
        </ol>
    </div>
    </Contenedor>
  )
}

export default bilboard
