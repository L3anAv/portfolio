import React, { useState } from 'react'
import styled from 'styled-components'
import ExtendedMenu from '../../components/extendMenuOptions/index'

const NavBar = styled.nav`
    background:#b5b5b5;
    border-top:2px solid white;
    border-left:2px solid white;
    border-right:2px solid black;
    border-bottom:2px solid black;
`

const UlBar = styled.ul`
    display:flex;
    margin-left:1.5%;
`

const LiBar = styled.li`
    margin:8px;
    font-size:12px;
    padding-top:3px;
    padding-left:8px;
    user-select:none;
    padding-right:8px;
    padding-bottom:3px;
    font-family:MonosSpace;
    border-top:1px solid white;
    border-left:1px solid white;
    border-right:1px solid black;
    border-bottom:1px solid black;

    :active{
        border-bottom:1px solid white;
        border-right:1px solid white;
        border-left: 1px solid black;
        border-top: 1px solid black;
    }
`

export default function index() {

    const [menuExtend, setMenuExtend] = useState(false)

    
    function menuExtendidoGestion(boolean){
        setMenuExtend(boolean)
        //Dar children de contenido de la lista con el id y nombre.
        // y dar top y left por props para cada li
    }

    function handelOpenMenuOption(){ 
        return !menuExtend 
        ? menuExtendidoGestion(true)
        : menuExtendidoGestion(false)
    }

  return (
    <>
    <NavBar>
        <UlBar>
            <LiBar onClick={handelOpenMenuOption}>File</LiBar>
            {menuExtend && <ExtendedMenu menuExtendidoGestion={menuExtendidoGestion}/>}
            <LiBar onClick={handelOpenMenuOption}>Edit</LiBar>
            <LiBar onClick={handelOpenMenuOption}>Help</LiBar>
            <LiBar onClick={handelOpenMenuOption}>CV</LiBar>
        </UlBar>
    </NavBar>
    </>
  )
}
