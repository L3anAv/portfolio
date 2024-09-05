import { useEffect, useState } from "react"
import styled from "styled-components"

const Slogan = styled.p`
  
  color: #fff;
  margin-left:20px;
  letter-spacing:5px;
  display: ${props => props.displaySlogan};

  background-image:
  linear-gradient(to right, #dddddd 2px, transparent 2px),
  linear-gradient(to bottom, #dddddd 2px, transparent 2px);
  background-size: 3.5rem 3.5rem;
  background-position: center center;

  user-select:none;
  font-family:Zimra;
  font-size: clamp(2.1875rem, 1.3773rem + 4.321vw, 6.5625rem);

  text-shadow: -2px 10px 0 #000,
               -3px 9px 0 #000,
               -4px 8px 0 #000,
               -5px 6px 0 #000,
               -6px 5px 0 #000,
               -7px 5px 0 #000,
               -8px 4px 0 #000,
               -9px 3px 0 #000,
               -10px 2px 0 #000,
               -11px 1px 0 #000;

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
  transform:scale(0.95);
  flex-direction:column;
  justify-content: center;
  background-color:none;
  
  p{
    letter-spacing:8px;
  }

  @media (max-width:1132px){

    p{
      letter-spacing:3px;
    }

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
