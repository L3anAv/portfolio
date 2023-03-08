import React, { createContext, useContext, useState } from "react";


const setContenidoVentana = createContext()
const ObtenerContenidoParaVentana = createContext()

const VentanaStateContext = createContext()
const CambioDeEstadoVentanaContext = createContext()

export function useVentanaContext(){
    return useContext(VentanaStateContext)
}

export function useCambioDeEstadoVentana(){
    return useContext(CambioDeEstadoVentanaContext)
}

export function useSetContenidoVentana(){
    return useContext(setContenidoVentana)
}

export function useGetContenidoVentana(){
    return useContext(ObtenerContenidoParaVentana)
}

export function contextVentanaProvider(props){

    const [componenteParaVentana, setComponenteParaVentana] = useState()
    const [ventanaEstaDesplegada, setventanaEstaDesplegada] = useState(false)

    function cambioDeEstadoVentana(booleano){
        setventanaEstaDesplegada(booleano)
    }

    function setContenidoParaVentana(Componente){
        setComponenteParaVentana(Componente)
    }

    return (
        <VentanaStateContext.Provider value={ventanaEstaDesplegada}>
            <CambioDeEstadoVentanaContext.Provider value={cambioDeEstadoVentana}>
                <setContenidoVentana.Provider value={setContenidoParaVentana}>
                    <ObtenerContenidoParaVentana.Provider value={componenteParaVentana}>
                        {props.children}
                    </ObtenerContenidoParaVentana.Provider>
                </setContenidoVentana.Provider>
            </CambioDeEstadoVentanaContext.Provider>
        </VentanaStateContext.Provider>
    )
}

export default contextVentanaProvider