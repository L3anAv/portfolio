import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import Triangulo from '../../assets/images/punta.webp'

const SeccionUno = styled.div`
  display: flex;
  flex-direction: column;

  div{
    z-index:2;
  }
`

const ReContenedor = styled.div`

  display:flex;
  margin-top:15%;
  margin-left:45px;

  div{
    display:flex;
    margin-top:25px;
    margin-right:30px;
    flex-direction:column;
    animation:OpacidadEntrada 1s;
  }
  
  svg{
      opacity:60%;
      cursor:pointer;
      margin-top:12px;
      margin-bottom:12px;
  }

  }

  @media(max-width:1132px){

    div{
      margin-bottom:-60px;
    }
    svg{
      width:28px;
      height:28px;
    }
  }
`

const Nombre = styled.h1`

  width:410px;
  color:#fff;
  margin-top:5px;
  background:#000;
  margin-left:10px;
  padding-left:15px;
  letter-spacing:2px;
  font-family:Quattrocento;
  font-size: clamp(1.25rem, 0.9606rem + 1.5432vw, 2.8125rem);

  ::selection{
    color: #fff;
    background: #383a29;
  }

  @media(max-width:1132px){
    width:60%;
    margin-left:30px;
  }
`

const SubTitulo = styled.div`

  display:flex;
  margin-left:65px;
  flex-direction:row;
  letter-spacing: 1px;

  svg{
    transform:scale(0.8);  
  }

  h2{
    color:#000;
    margin-top:2px;
    margin-left:15px;
    font-family:Zimra;
    font-size: clamp(0.8125rem, 0.7315rem + 0.4321vw, 1.25rem);

    ::selection{
      color: #fff;
      background: #555843;
    }

  }

  @media(max-width:1132px){
    margin-left:30px;
  }
`

const Hola = styled.span`

  color:#fff;
  padding:10px;
  margin-left:20px;
  font-family:Zimra;
  background:#0033db;
  
  ::selection{
    color: #000;
    background: #fff;
  }

`

const Saludo = styled.p`

  font-size: clamp(2.0625rem, 1.287rem + 4.1358vw, 6.25rem);
  
  span:nth-child(3){
    color:#000;
    background:#feff00;
    font-family:DaysOne;
    outline:5px solid black;
  }

  ::selection{
    color:#fff;
    background:#422e15;
  }

  @media(max-width:1132px){
    margin-top:15px;
  }

`

const ManoEmoji = styled.span`
  margin: 0 5px;
  display: inline-block;
  transform: rotate(15deg);
  animation: girarMano 0.6s 1.3s 4 linear;
`;

const Boton = styled.button`
  width:50%;
  padding:10px;
  color:#000;
  font-family:Zimra;
  margin-top:20px;
  margin-left:42px;
  background:#d4d4d4;
  outline:1px solid black;
  border-top:2px solid white;
  border-left:2px solid white;
  border-right:2px solid #c1c1c1;
  border-bottom:2px solid #c1c1c1;
  cursor:url(src/assets/cursor/pointer-old.png), pointer;
  font-size: clamp(0.875rem, 0.6319rem + 1.2963vw, 2.1875rem);

  :active{
  border-top:2px solid #c1c1c1;
  border-left:2px solid #c1c1c1; 
  border-right:2px solid white;
  border-bottom:2px solid white;
  }

  @media(max-width:1132px){
    width:40%;
    margin-top:15px;
    margin-left:42px;    
  }
`

const BotonRedes = styled(Boton)`
  width:25%;
  padding:5px;
  color:#4242f1;
  background:none;
  border:none;
  outline:none;
  font-family:default;
  text-decoration:underline;
  margin-bottom:20px;
  font-size: clamp(1.25rem, 1.1343rem + 0.6173vw, 1.875rem);

  a{
    cursor:url(src/assets/cursor/pointer-old.png), pointer;
  }

  :active{
    border:none;
  }

  @media(max-width:1132px){
    margin-left:30px;
  }
`

const LetraCambiante = styled.span`

  color:#000;
  font-family: DaysOne;
  font-size: clamp(2.0625rem, 1.287rem + 4.1358vw, 6.25rem);

  ::selection {
    color: #fff;
    background: #422e15;
  }
`;

  const Footer = styled.footer`
  
  position:absolute;
  bottom:0;
  z-index:1;
  width:45%;
  display:flex;
  background:none;
  overflow:hidden;
  background:#6d6d6d;
  flex-direction:column;

    p{
      color:#fff;
      font-size:15px;
      margin-bottom:5px;
      text-align:center;
      font-family:Quattrocento;
    }
    
    @media(max-width:1132px){
      grid-row:3;
      width:100%;
    }
`
const ContenedorBotones = styled.div`
  
  display:flex;
  flex-direction:row;

  @media(max-width:1132px){
    flex-direction:column;
  }
`

const ContenedorImagenes = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  background:#dddddd;
`

const ImagenRepetida = styled.img`
  width: 45px;
  height: 35px;
  margin-bottom:-5px;
`

function inicio({consultarSiExiste}) {

  const cantidadRepeticiones = 14;
  const [letraBienvenida, setLetraBienvenida] = useState('o');


  var fechaActual = new Date();
  var año = fechaActual.getFullYear();
  var añoComoString = año.toString();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLetraBienvenida((prevLetra) => (prevLetra === 'o' ? 'a' : 'o'));
    }, 2200);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  function cambioADesktop(){
    setearToken()
    consultarSiExiste()
  }

  function setearToken(){
    localStorage.setItem('TOKENB', 'NOINICIO');
  }

  return (
        <SeccionUno>
          <div>
          <Nombre>//:Leandro Avila</Nombre>
          <SubTitulo>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#666c13"><path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#000" ></path><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#000" stroke="#000"></path></svg><h2> Buenos Aires, Argentina 🇦🇷</h2>
          </SubTitulo>
            
          <ReContenedor>
              <Saludo><Hola>Hola <ManoEmoji>🖐🏽</ManoEmoji><ManoEmoji>🖐🏽</ManoEmoji></Hola><br />
              <span>Bienvenid<LetraCambiante>{letraBienvenida}</LetraCambiante>///</span>
              </Saludo>
          </ReContenedor>

          <Boton onClick={cambioADesktop}>Conóceme más  ↗</Boton>
          </div>
          
          <Footer>
            
            <ContenedorImagenes>
              {[...Array(cantidadRepeticiones)].map((_, index) => (
              <ImagenRepetida key={`imagen-${index}`} src={Triangulo}  alt="Imagen repetida" />
              ))}
            </ContenedorImagenes>

            <ContenedorBotones>
            <BotonRedes ><a href="mailto:leandroav.dev@gmail.com">[EMail]</a></BotonRedes>
              <BotonRedes><a href="https://www.linkedin.com/in/l3anav/">[Linkedin]</a></BotonRedes>
              <BotonRedes><a href="https://github.com/l3anav">[GitHub]</a></BotonRedes>
            </ContenedorBotones>
              <p>1996-{añoComoString}</p>
          </Footer>
        </SeccionUno>
  )
}
export default inicio