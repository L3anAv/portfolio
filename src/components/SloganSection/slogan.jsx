import { useEffect, useState } from "react"
import styled from "styled-components"

const Slogan = styled.p`
  
  color: #fff;
  margin-left:20px;
  letter-spacing:2px;
  display: ${props => props.displaySlogan};
  
  text-shadow:
  2px 0 #0033db, -2px 0 #0033db, 0 2px #0033db, 0 -2px #0033db,
  1px 1px #0033db, -1px -1px #0033db, 1px -1px #0033db, -1px 1px #0033db;

  background-image:
  linear-gradient(to right, #dddddd 2px, transparent 2px),
  linear-gradient(to bottom, #dddddd 2px, transparent 2px);
  background-size: 3.5rem 3.5rem;
  background-position: center center;

  user-select:none;
  font-family:Zimra;
  font-size: clamp(2.1875rem, 1.3773rem + 4.321vw, 6.5625rem);

  text-shadow:${props => props.mostrarInicio
  ? `none`
  : ` 0 0 7px #0762bc,
    0 0 10px #0762bc,
    0 0 21px #0762bc,
    0 0 42px #0762bc,
    0 0 82px #0762bc,
    0 0 92px #0762bc,
    0 0 102px #0762bc,
    0 0 151px #0762bc;`}

  @media (max-width:1132px){
    
    grid-row:1;
    grid-column:1;
    text-shadow:none;
    margin-left:5px;

    background-image:none;
    background-size: none;
    background-position: none;
  }

`

const SloganContainer = styled.div`
  
  margin:0;
  padding:0;
  grid-row:1;
  display:flex;
  grid-column:2;
  height:100vh;
  position:relative;
  align-items:center;
  transform:scale(0.9);
  flex-direction:column;
  justify-content: center;
  background-color:none;
  
  p{
    letter-spacing:8px;
  }

  img{
    z-index:-1;
    position:absolute;
    top:0;
    margin:0;
    right:20px;
    transform: scaleX(-1);
    animation:OpacidadEntrada 1.2s;
  }

  @media (max-width:1132px){

    p{
      letter-spacing:3px;
    }

    img{
      display:none;
    }
  }
`

const Boton = styled.button`
  position:absolute;
  width:60%;
  height:8%;
  grid-row:1;
  bottom:50px;
  color:black;
  margin-left:30px;
  outline:1px solid black;
  border-top:2px solid white;
  border-left:2px solid white;
  border-right:2px solid #c1c1c1;
  border-bottom:2px solid #c1c1c1;
  font-size: clamp(0.875rem, 0.713rem + 0.8642vw, 1.75rem);

  
  :active{
    border-top:2px solid #c1c1c1;
    border-left:2px solid #c1c1c1; 
    border-right:2px solid white;
    border-bottom:2px solid white;
  }
  

  :hover{
    cursor: url("/src/assets/cursor/pointer-old.png"), default;
  }
`

function slogan() {

    const [windowSize, setWindowSize] = useState(0)
    const [displayState, setDisplayState] = useState('flex')

    const actualizarAnchoVentana = () => {
        setWindowSize(window.innerWidth);
      };
    
      useEffect(() => {
        
        actualizarAnchoVentana()
    
        window.addEventListener('resize', actualizarAnchoVentana);
    
        return () => {
          window.removeEventListener('resize', actualizarAnchoVentana);
        }
    
      }, [])

    useEffect(() => {
       if(windowSize > 1130){
            setDisplayState('flex')
       }else{
            setDisplayState('none')
       }
    }, [windowSize])

  return (
    <>
    <SloganContainer >
        <Slogan displaySlogan={displayState}>
          Diseño y Desarollo el sitio web que te ayude a alcanzar tus objetivos de negocio.
        </Slogan>
    </SloganContainer>
    </>
  )
}

export default slogan
