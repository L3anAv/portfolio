const audiosRutas = {
    "boot": "src/assets/audio/boot.ogg",
    "click": "src/assets/audio/click.ogg",
    "entrada": "src/assets/audio/entrada.ogg",
    "salida": "src/assets/audio/salida.ogg",
    "error": "src/assets/audio/error.ogg"
}

export const darAudio = (nombre) => {
    const rutaAudio = audiosRutas[nombre]
    const audio = new Audio(rutaAudio)

    return audio
}