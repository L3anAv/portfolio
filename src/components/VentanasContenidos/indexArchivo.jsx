import {useState} from 'react'
import styled from 'styled-components'
import Archivo from './../../assets/iconos/archive.png'
import { colorIconoBackground, colorIconoSelectBack } from '../../utils/theme'

const Iconic = styled.div`
    
    width:8%;
    display:flex;
    margin-top:40px;
    margin-left:30px;
    margin-right:30px;
    flex-direction:column;

    p{
      color:#fff;
      padding:3px;
      background:#010080;
    }
`

const ImgIcono = styled.img`
    width:60px;
    margin-left:10px;
    margin-bottom:12px;
    filter: invert(${props => props.invert});
`

export default function indexArchivo() {

  const [fueClikeado, setFueClikeado] = useState(false)

  return (
    <>
      <Iconic onClick={() => {setFueClikeado(true), console.log('Fui clikeado')}}>
      <a href="https://www.github.com/l3anav" target='_blanck'> 
      <ImgIcono src={Archivo} invert={fueClikeado ? '20%' : '0%'}/>
      <p>Recursos.exe</p>
      </a>
      </Iconic>
    </>
  )
}
