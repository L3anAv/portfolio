import styled from 'styled-components'
import {colorVentana, colorContraste} from '../../utils/theme'
import React, {useState, useEffect} from 'react'

const PantallaCarga = styled.div`
    width:100vw;
    height:100vh;
    color:#ffffff;
    background:#000000;

    p{
        text-aling:;
    }
`

const Container = styled.div`
    display:grid;
    grid-column-template:1fr 50% 1fr;
`

const ContainerInicio = styled.div`
    display:flex;
    flex-direction:column;
    grid-column:2/3;
`

const BotonIniciarSs = styled.button`
    weigth:800;
    height:50px;
    width:210px;
    padding:10px;
    font-size:18px;
    margin-top:20px;
    transition:all 1s;
    border-radius:10px;
    font-family:DaysOne;
    color:${colorContraste};
    background:${colorVentana};

    :hover{
        cursor:pointer;
        color:${colorVentana};
        background:${colorContraste};
    }
`

const FotoPerfil = styled.img`
    width:200px;
    margin-top:20%;
    margin-bottom:30px;
    border-radius:100px;

    :hover{
        transform:scale(1.2);
        transition:transform 1s;
    }
`

export default function pantallaInicio({IrAlDesktop}) {
    
    
    const [lines, setLines] = useState([]);
    const [mostrarInicio,setMostrarInicio] = useState(false)
    
    const [fecha, setFecha] = useState('');

    function obtenerFecha(){
        const fechaActual = new Date();
        const mes = fechaActual.toLocaleString('default', { month: 'long' });
        const anio = fechaActual.getFullYear();
        const hora = fechaActual.toLocaleTimeString();

        const fechaActualObtenida = `${mes} ${anio} - ${hora}`;
        console.log(fechaActualObtenida)
        setFecha(fechaActualObtenida)
    }
    
    useEffect(() => {
        obtenerFecha();
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
        }, 220);
        return () => clearInterval(interval);
  }, [fecha]);

  if(mostrarInicio){
    return(
        <Container>
            <ContainerInicio>
                <FotoPerfil src="src/assets/images/sho.jpg" />
                <BotonIniciarSs onClick={IrAlDesktop}>Iniciar Sesion</BotonIniciarSs>
            </ContainerInicio>
        </Container>
    )
  }else{
    return (
        <>
        <PantallaCarga>
        {lines.map((line, index) => (
        <div key={index} className="line">{line}</div>
        ))}
      </PantallaCarga>
        </>
    )
  } 
}
