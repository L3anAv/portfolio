import {useState} from 'react'
import styled from 'styled-components'
import Archivo from './../../assets/iconos/archive.webp'

const Iconic = styled.div`
    
    width:8%;
    display:flex;
    margin-top:40px;
    margin-left:30px;
    margin-right:30px;
    text-align:center;
    flex-direction:column;

    p{
      color:#fff;
      user-select: none;
      background:${props => props.background};
    }
`

const ImgIcono = styled.img`
    width:35px;
    margin-left:20px;
    margin-bottom:12px;
    filter: invert(${props => props.invert});
`

export default function indexArchivo() {

  const [fueClikeado, setFueClikeado] = useState(false)

  const setearProps = () => {
    if(!fueClikeado){
    setFueClikeado(true)
    }else{
      setFueClikeado(false)
    }
  }

  const handleDoubleClick = () => {
     window.open("https://github.com/L3anAv/frontend-utilidades?tab=readme-ov-file#Indice", "_blank")
  }

  return (
    <>
      <Iconic onClick={setearProps} onDoubleClick={handleDoubleClick} background={fueClikeado ? '#1e40bc' : '#010080'}>
        <ImgIcono src={Archivo} invert={fueClikeado ? '20%' : '0%'}/>
        <p>Utilidades-FrontEnd</p>
      </Iconic>
    </>
  )
}
