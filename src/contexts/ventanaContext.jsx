import React, { createContext, useContext, useState } from "react";

const setContenidoVentana = createContext()
const ObtenerContenidoParaVentana = createContext()

const VentanaStateContext = createContext()
const CambioDeEstadoVentanaContext = createContext()

const setTituloVentana = createContext()
const getTituloVentana = createContext()

export function useVentanaContext(){
    return useContext(VentanaStateContext)
}

export function useEstaDesplegadaVentana(){
    return useContext(getEstadoVentana)
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

export function useSetTituloVentana(){
    return useContext(setTituloVentana)
}

export function useGetTituloVentana(){
    return useContext(getTituloVentana)
}

export function contextVentanaProvider(props){

    const [tituloVentana, settitutloVentana] = useState('')
    const [componenteParaVentana, setComponenteParaVentana] = useState()
    const [ventanaEstaDesplegada, setventanaEstaDesplegada] = useState(false)

    function cambioDeEstadoVentana(booleano){
        setventanaEstaDesplegada(booleano)
    }

    function setContenidoParaVentana(Componente){
        setComponenteParaVentana(Componente)
    }

    function setTituloParaVentana(Titulo){
        settitutloVentana(Titulo)
    }

    return (
        <VentanaStateContext.Provider value={ventanaEstaDesplegada}>
            <CambioDeEstadoVentanaContext.Provider value={cambioDeEstadoVentana}>
                <setContenidoVentana.Provider value={setContenidoParaVentana}>
                    <ObtenerContenidoParaVentana.Provider value={componenteParaVentana}>
                            <setTituloVentana.Provider value={setTituloParaVentana}>
                                <getTituloVentana.Provider value={tituloVentana}>
                                    {props.children}
                                </getTituloVentana.Provider>
                        </setTituloVentana.Provider>
                    </ObtenerContenidoParaVentana.Provider>
                </setContenidoVentana.Provider>
            </CambioDeEstadoVentanaContext.Provider>
        </VentanaStateContext.Provider>
    )
}

export default contextVentanaProvider