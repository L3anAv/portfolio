import "../../crt.css"
import styled from 'styled-components'
import {colorVentana} from '../../utils/theme'
import React, {useState, useEffect} from 'react'
import FotoPerf from '../../assets/images/sho.webp'

const PantallaCarga = styled.div`
    padding:10px;
    grid-row:1;
    color:#ffffff;
    background:#000000;
`

const Container = styled.div`
    padding:10px;
    display:grid;
    background:#5f97e4;
    grid-column-template:1fr 50% 1fr;
`

const ContainerInicio = styled.div`
    display:flex;
    grid-column:2/3;
    flex-direction:column;
    animation:OpacidadEntrada 1s;
`

const BotonIniciarSs = styled.button`
    width:210px;
    height:50px;

    font-family:MonosSpace;
    border-top:3px solid white;
    border-left:4px solid white;
    border-right:5px solid #808080;
    border-bottom:3px solid #808080;

    padding:10px;
    font-size:15px;
    margin-top:20px;

    color:#000;

    cursor: url("/src/assets/cursor/cursor-old.png"), default;
    
    background:${colorVentana};

    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }
`

const FotoPerfil = styled.img`
    width:200px;
    margin-top:20%;
    margin-bottom:30px;
`

export default function pantallaInicio({IrAlDesktop}) {
    
    const bootAudio = new Audio("src/assets/audio/boot.ogg")

    const [lines, setLines] = useState([]);
    const [mostrarInicio,setMostrarInicio] = useState(false)
    const [fecha, setFecha] = useState('');

    function obtenerFecha(){
        const fechaActual = new Date();
        const mes = fechaActual.toLocaleString('default', { month: 'long' });
        const anio = fechaActual.getFullYear();
        const hora = fechaActual.toLocaleTimeString();

        const fechaActualObtenida = `${mes} ${anio} - ${hora}`;
        setFecha(fechaActualObtenida)
    }
    
    useEffect(() => {
        obtenerFecha();
        bootAudio.play()
      }, []);

    useEffect(() => {
        const bootText = [
            'BIOS: Version 2.4.1',
            'Initializing the operating system...',
            'Loading hardware drivers...',
            'Disk driver: OK',
            'Network driver: OK',
            'Graphics driver: OK',
            'Audio driver: OK',
            'Detecting connected devices...',
            'Hard disk: SATA hard disk found, 500GB',
            'Network: Ethernet connection active',
            'Monitor: Detected screen resolution: 1920x1080',
            'Checking system integrity...',
            'Starting system file verification: OK',
            'Checking boot records: OK',
            'Loading system configuration...',
            'Network configuration: Assigned IP address: 192.168.1.100',
            'Regional settings: Language set: Spanish (Latin America)',
            'Date and time configuration: Current date:' + ' ' + fecha,
            'Starting the operating system...',
            'Welcome to XYZ Operating System',
            'Version: 3.2.1',
            'Please wait while system components are loaded...',
            'Loading graphical user interface...',
            'Control panel: OK',
            'File explorer: OK',
            'Default applications: OK',
            'Ready! The operating system has been successfully loaded.',
        ];

        let currentIndex = 0;
        const interval = setInterval(() => {
        
        setLines(prevLines => [...prevLines, bootText[currentIndex]]);
        currentIndex++;
        
        if (currentIndex === bootText.length) {
            setMostrarInicio(true)
            clearInterval(interval);
        }
        }, 470);
        
        return () => clearInterval(interval);
  }, [fecha]);

  if(mostrarInicio){
    return(
        <Container className="crt">
            <ContainerInicio>
                <FotoPerfil src={FotoPerf} />
                <BotonIniciarSs onClick={IrAlDesktop}>Iniciar Sesion</BotonIniciarSs>
            </ContainerInicio>
        </Container>
    )
  }else{
    return (
        <>
        <PantallaCarga className="crt">
        {
        lines.map((line, index) => (
          <div key={index} className="line">{line}</div>
        ))
        }
      </PantallaCarga>
        </>
    )
  } 
}
