import React, {useState} from 'react'
import { nombreIcono } from '../../utils/constantes'
import Icono from '../../components/iconsScreen/index'
import darIconoCorrespondiente from '../../utils/darIcono'

function index({nombreDelIcono}) {

  
  const [nombreDelClikeado, setNombreIconoClikeado] = useState('')

  function decirQueIconoQuienSoy(nombre){
    setNombreIconoClikeado(nombre)
    nombreDelIcono(nombreDelClikeado)
  }

  return (
    <>
      <Icono src={darIconoCorrespondiente(nombreIcono[0])} decirQuienSoy={decirQueIconoQuienSoy} nombreDelClikeado={nombreDelClikeado} nombreIcono={nombreIcono[0]} width={'60px'} height={'auto'}/>
      <Icono src={darIconoCorrespondiente(nombreIcono[1])}  decirQuienSoy={decirQueIconoQuienSoy}nombreDelClikeado={nombreDelClikeado} nombreIcono={nombreIcono[1]} width={'60px'} height={'auto'}/>
      <Icono src={darIconoCorrespondiente(nombreIcono[2])}  decirQuienSoy={decirQueIconoQuienSoy} nombreDelClikeado={nombreDelClikeado} nombreIcono={nombreIcono[2]} width={'55px'} height={'auto'}/>
      <Icono src={darIconoCorrespondiente(nombreIcono[3])}  decirQuienSoy={decirQueIconoQuienSoy} nombreDelClikeado={nombreDelClikeado} nombreIcono={nombreIcono[3]} width={'52px'} height={'60px'}/>
    </>
  )
}

export default index