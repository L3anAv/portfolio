import React from 'react'
import styled from 'styled-components'
import PerfilFoto from '../../assets/images/sho.webp'

const Contenedor = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
`

const ContenedorNav = styled.div`
  position:sticky;
  top: 0;
  background:#fff;
`

const NavegacionBrowser = styled.div`
    width:90%;
    height:30px;
    display:flex;
    margin-top:5px;
    margin-left:4%;
    margin-bottom:5px;
    border:1px solid black;

    p{
        padding:8px;
        margin-left:5%;
        cursor:pointer;
        font-weight:800;
        font-family:MonoSpace;

        :hover{
            text-decoration:underline;
        }
    }


    @media(max-width:1132px){
        font-size:12px;
        height:auto;
     }
`

const BarraAboutMe = styled.div`
  
color:#fff;
  height:35px;
  font-family:Linkedin;
  background: linear-gradient(0deg, rgba(44,44,44,1) 0%, rgba(74,74,74,1) 100%);

  p{
    font-size:20px;
    margin-top:5px;
    margin-left:10px;
  }

  span{
    padding:3px;
    border-radius:3px;
    background:#007bb6;
  }
`

const BarraProfile = styled.div`
  color:#fff;
  height:25px;
  display:flex;
  flex-direction:row;
  background: linear-gradient(0deg, rgba(59,59,59,1) 0%, rgba(17,17,17,1) 100%);

  p:nth-child(2){
    color:#fff;
  }

  p{
    color:#5f97e4;
    margin-top:3px;
    margin-left:15px;
  }
`

const SobreMi = styled.div`
  
div{
    heigth:10px;
    font-family:Zimra;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:10px;
    background:#a6bedd;
    margin-left:20px;
    margin-right:20px;
    color:#5f97e4;
  }

`

const Texto = styled.p`
  margin-top:10px;
  margin-left:35px;
  margin-right:35px;
  margin-bottom:20px;
  font-family:Zimra;
  text-aling:justify;
  font-size: clamp(0.875rem, 0.7477rem + 0.679vw, 1.5625rem);
`

const ContenedorSuperior = styled.div`
    
    display:flex;
    margin-bottom:35px;
    flex-direction:row;

    @media(max-width:1132px){
      flex-direction:column;

      div{
        margin-bottom:-10px;
      }
    }
`

const ContenedorSeccionInformacion = styled.div`
    flex-direction:column;

    button{
      color:#fff;
      padding:8px;
      cursor: url("/src/assets/cursor/pointer-old.png"), default;
      margin-top:20px;
      margin-left:30px;
      border-radius:5px;
      border:2px solid #4c7396;
      background: linear-gradient(0deg, rgba(24,58,89,1) 0%, rgba(76,115,150,1) 100%);
    }
`

const CajaInfoAdicional = styled.div`
  
  width:100%;
  padding:20px;
  margin-top:30px;
  margin-left:25px;
  border:2px solid black;
  
  h3{
    color:#183a59;
    margin-bottom:3px;
    font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);
  }

  p{
    font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);

    span{
      color:#6b84aa;
      padding-right:10px;
      font-size: clamp(0.875rem, 0.8287rem + 0.2469vw, 1.125rem);
    }
  }

  @media(max-width:1132px){
    width:78%;
    margin-left:12px;
  }
`

const ContenedorSeccionFoto = styled.div`
    
  flex-direction:column;
  justify-content:left;
  margin-left:20px;
  margin-top:30px;

  div{
    
    ul{
      margin-left:8px;
      li{
          color:#6b84aa;
          font-size:18px;
          padding-top:3px;
          padding-left:10px;
          padding-bottom:3px;
          border-bottom:1px solid #a8a8a8;
      }
    }
  }

  @media(max-width:1132px){

    div{
      width:80%;
    }
  }
`

const Textos = styled.div`
  
  margin-top:60px;
  flex-direction:column;

  @media(max-width:1132px){
    margin-top:20px;
  }
`

const H1 = styled.h1`
  margin-left:20px;
  font-family:Zimra;
  font-weight: 600;
  ffont-size: clamp(0.875rem, 0.5741rem + 1.6049vw, 2.5rem);

  @media(max-width:1132px){
    margin-top:40px;
  }

`

const Subtitulo = styled.p`
  margin-left:20px;
  font-family:Zimra;
  font-weight: normal;
  overflow-wrap: break-word;
  font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);
`

const Img = styled.img`

    width:100%;
    max-width:200px;

   @media(max-width:1132px){
     display:block;
     margin:auto;
     margin-top:20px;
     width:50%;
     height:30%;
   }

`

function sobreMi() {
  return (
    <Contenedor>
      
    <ContenedorNav>
    <NavegacionBrowser><p>https://sobremi.com/@LeandroAvila</p></NavegacionBrowser>
    </ContenedorNav>

    <BarraAboutMe >
      <p>Sobre <span>MI</span></p>
    </BarraAboutMe>
    
    <BarraProfile>
      <p>Inicio</p>
      <p>Perfil</p>
      <p>Contactos</p>
    </BarraProfile>

    <ContenedorSuperior>
        <ContenedorSeccionFoto>
        <Img src={PerfilFoto}/>
        <div>
          <ul>
            <li><a href="https://www.linkedin.com/in/l3anav/">Ir a Linkedin</a></li>
            <li><a href="https://github.com/l3anav">Ir a GitHub</a></li>
            <li><a href="mailto:leandroav.dev@gmail.com">Enviar un Correo</a></li>
          </ul>
        </div>
        </ContenedorSeccionFoto>

        <ContenedorSeccionInformacion>

        <Textos>
          <H1>Matias Leandro Avila</H1>
          <Subtitulo>Desarrollador Frontend</Subtitulo>
        </Textos>

      <CajaInfoAdicional>
        <h3>Educación</h3>

        <p><span>Cursando</span> Técnico universitario en Informática</p>
        <p><span>Institución</span> Universidad Nacional General Sarmiento</p>
      </CajaInfoAdicional>

      <a href="https://drive.google.com/uc?export=download&id=1d09Mp9Rjrza2lmkLs5x8DpEMVZZ1vrpS"><button>Curriculum Vitae</button></a>
    </ContenedorSeccionInformacion>
    
    </ContenedorSuperior>
    
    <SobreMi>
    <div>Sobre Mi</div>
    <Texto>✨ ¡Hola! 👋🏽👋🏽 Soy Matias Avila, un estudiante de sistemas apasionado por el desarrollo frontend, actualmente me encuentro en la búsqueda de oportunidades laborales en el área. Mi enfoque principal ha sido en el uso de Java, lenguaje que he utilizado durante toda mi trayectoria académica en la universidad.</Texto>
    <Texto>💻 He adquirido mientras, conocimientos en HTML, CSS, JS y posteriormente en React JS. Me siento cómodo trabajando con estas herramientas y he utilizado mis habilidades para crear proyectos web dinámicos. Los cuales puedes ver en la carpeta de Proyectos.</Texto>
    <Texto>🚀 Soy una persona curiosa y apasionada por la resolución de problemas. Cuando me enfrento a un desafío, no me gusta quedarme sin respuestas. Me impulsa el deseo de adquirir nuevos conocimientos y habilidades para superar obstáculos y mejorar continuamente.</Texto>
    <Texto>✉ No dudes en contactarme si deseas saber más sobre mi experiencia o si estás interesado en discutir oportunidades de colaboración. Estoy emocionado por las posibilidades que el mundo del desarrollo tiene para ofrecerme.</Texto>
    </SobreMi>
    </Contenedor>
  )
}

export default sobreMi