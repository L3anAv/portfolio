import styled from 'styled-components'
import React, { useState } from 'react'
import { OpcionesDeMenu, OpcionesSubMenu } from  '../../utils/constantes'
import { useCambioDeEstadoVentana, useSetContenidoVentana } from '../../contexts/ventanaContext'
import darChildrenCorrespondiente from '../../components/VentanasContenidos/indexContenidoVentana'

const NavBar = styled.nav`
    color:#fff;
    background:#2d23f1;
`

const UlIncio = styled.ul`
    display:flex;
    margin-left:1.5%;
`
const UlOptions = styled.ul`
    position:absolute;
    left:2%;
    top:45px;
    z-index:1;
    border:2px solid white;
`

const UlOptionsSub = styled(UlOptions)`
    position:absolute;
    left:11%;
    top:45px;
`

const LiOptions = styled.li`
    font-size:12px;
    padding-top:18px;
    padding-left:15px;
    background:#2d23f1;
    padding-right:15px;
    padding-bottom:10px;
    font-family:MonosSpace;

    :hover{
        cursor:pointer;
        background:#332ded;
    }
`

const LiInicio = styled.li`
    margin:8px;
    font-size:12px;
    padding-top:3px;
    padding-left:8px;
    user-select:none;
    padding-right:8px;
    padding-bottom:3px;
    font-family:MonosSpace;
    border:2px solid white;

    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }
`

export default function index() {

    const [menuExtend, setMenuExtend] = useState(false)
    const [MenuOptions, setMenuOptions] = useState(false)
    const [SubMenuOption, setSubMenuOption] = useState([])

    const setComponeneteHijo = useSetContenidoVentana()
    const estadoVentanaCambiar = useCambioDeEstadoVentana()

    function menuExtendidoGestion(boolean){ 
        setMenuExtend(boolean)
}

    function handelOpenMenuOption(){ 
        return !menuExtend
        ? menuExtendidoGestion(true)
        : menuExtendidoGestion(false)
    }

    function handelOpenOptionsOption(){ 
        return !MenuOptions
        ? setMenuOptions(true)
        : setMenuOptions(false)
    }

    function setearContenidoParaSubMenu(e){
        const ContenidoDeVentana = e.target.id
        setSubMenuOption(OpcionesSubMenu[ContenidoDeVentana])
      }
      
      function handleClickMenuInicio(){
        handelOpenMenuOption()
        handelOpenOptionsOption()
      }

      function handleMouseEnterMenu(e){
          setMenuOptions(true)
          setearContenidoParaSubMenu(e)
      }

      function CerrarMenu(){
        setMenuExtend(false)
        setMenuOptions(false)
      }

return (
    <>
    <NavBar>
        <UlIncio onMouseLeave={CerrarMenu}>
            <LiInicio onClick={handleClickMenuInicio}>
                Inicio
            </LiInicio>
            {menuExtend &&
            <UlOptions>
            {OpcionesDeMenu.map(item => (
                <LiOptions id={item} onMouseEnter={handleMouseEnterMenu}>{item}</LiOptions>
            ))}
            </UlOptions>}
            {MenuOptions &&
            <UlOptionsSub>
                {SubMenuOption.map(item => (
                        <LiOptions id={item}>{item}</LiOptions>
                ))}
            </UlOptionsSub>
            }
        </UlIncio>
    </NavBar>
    </>
)
}
