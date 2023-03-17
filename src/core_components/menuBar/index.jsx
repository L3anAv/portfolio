import styled from 'styled-components'
import React, { useState } from 'react'
import { nombreIcono } from '../../utils/nombresIconos'
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
    const [OpcionesParaMenuExtended, setOpcionesParaExtendedMenu] = useState({})

    const NombresBotones = ["File", "Edit", "Help", "CV"]
    const OpcionesMenuExtendedFile = [nombreIcono[1], nombreIcono[2], nombreIcono[3]]
    
    function menuExtendidoGestion(boolean){ 
        setMenuExtend(boolean) 
}

    function darContenidoParaExtendedMenu(opcion){
        switch (opcion) {
            case NombresBotones[0]:
                setOpcionesParaExtendedMenu({"opcionesMenu": ["Imagen", "Browser", "Notas"], "id": OpcionesMenuExtendedFile, "left":"2%"})
                break;
            case NombresBotones[1]:
                setOpcionesParaExtendedMenu({"opcionesMenu": [""], "id": [""], "left":"6.8%"})
                break;
            case NombresBotones[2]:
                setOpcionesParaExtendedMenu({"opcionesMenu": ["Sobre mi"], "id": ["SobreMi"], "left":"11.2%"})
                break;
        }
    }

    function handelOpenMenuOption(){ 
        return !menuExtend
        ? menuExtendidoGestion(true)
        : menuExtendidoGestion(false)
    }

function handleLiBar(e){
        const opcionClikeada = e.target.id 
        darContenidoParaExtendedMenu(opcionClikeada)
        handelOpenMenuOption()
    }   

return (
    <>
    <NavBar>
        <UlBar>
            {NombresBotones.map(nombre => (
                nombre != "CV"
                ? <LiBar onClick={handleLiBar} id={nombre}>{nombre}</LiBar> 
                : <LiBar id={nombre}>{nombre}</LiBar>
            ))}
            {menuExtend && <ExtendedMenu menuExtendidoGestion={menuExtendidoGestion} OpcionesExtendedMenu={OpcionesParaMenuExtended} />}
        </UlBar>
    </NavBar>
    </>
)
}
