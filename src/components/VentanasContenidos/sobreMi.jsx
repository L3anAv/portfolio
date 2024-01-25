import React from 'react'
import styled from 'styled-components'
import PerfilFoto from '../../assets/images/sho.jpg'
const Contenedor = styled.div`
  display:flex;
  flex-direction:column;

  p{
    margin-top:10px;
    margin-left:35px;
    margin-right:35px;
    margin-bottom:20px;
    font-family:Didact;
    text-aling:justify;
    font-size: clamp(0.875rem, 0.7477rem + 0.679vw, 1.5625rem);
  }

`

const ContenedorCentral = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:35px;

    div{
      text-align:center;
    }

    @media(max-width:1132px){
      flex-direction:column;

      div{
        margin-bottom:-10px;
      }
    }
`

const Textos = styled.div`
  margin-top:120px;
  margin-left:30px;
  flex-direction:column;

  @media(max-width:1132px){
    margin-top:20px;
    text-align:justify;
  }
`

const H1 = styled.h1`
  font-family:DaysOne;
  text-align: center;
  font-size: clamp(1.5625rem, 1.4468rem + 0.6173vw, 2.1875rem);
`

const Subtitulo = styled.p`
  font-size:22;
  font-family:Didact;
  text-align: center
`

const Img = styled.img`
   width:20%;
   height:10%;
   margin-top:40px;
   border-radius:50%;

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
    <ContenedorCentral>
        <Img src={PerfilFoto}/>
        <Textos>
        <H1>Matias Leandro Avila</H1>
        <Subtitulo>Desarollador Frontend | Desarollador Java</Subtitulo>
        <div>
            <a href="https://www.linkedin.com/in/l3anav/"><svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>linkedin_fill</title><g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Brand' transform='translate(-336.000000, -48.000000)'><g id='linkedin_fill' transform='translate(336.000000, 48.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M18,3 C19.6569,3 21,4.34315 21,6 L21,18 C21,19.6569 19.6569,21 18,21 L6,21 C4.34315,21 3,19.6569 3,18 L3,6 C3,4.34315 4.34315,3 6,3 L18,3 Z M8,10 C7.44772,10 7,10.4477 7,11 L7,16 C7,16.5523 7.44772,17 8,17 C8.55228,17 9,16.5523 9,16 L9,11 C9,10.4477 8.55228,10 8,10 Z M11,9 C10.4477,9 10,9.44772 10,10 L10,16 C10,16.5523 10.4477,17 11,17 C11.5523,17 12,16.5523 12,16 L12,12.3398 C12.3049,11.9955 12.8207,11.5921 13.3933,11.3472 C13.7261,11.2048 14.2268,11.1479 14.5751,11.2574 C14.7274,11.3053 14.8143,11.3726 14.868,11.4451 C14.9201,11.5157 15,11.6707 15,12 L15,16 C15,16.5522 15.4477,17 16,17 C16.5523,17 17,16.5522 17,16 L17,12 C17,11.3292 16.8298,10.7342 16.4758,10.2556 C16.1232,9.77907 15.6476,9.4981 15.1749,9.34949 C14.2732,9.06594 13.2739,9.22295 12.6067,9.50837 C12.395,9.59892 12.1863,9.70435 11.9841,9.82128 C11.8998,9.35427 11.4913,9 11,9 Z M8,7 C7.44772,7 7,7.44772 7,8 C7,8.55228 7.44772,9 8,9 C8.55228,9 9,8.55228 9,8 C9,7.44772 8.55228,7 8,7 Z' id='形状' fill='#000000FF'></path></g></g></g></svg></a>
            <a href="mailto:leandroav.dev@gmail.com"><svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>mail_fill</title><g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Contact' transform='translate(-144.000000, -48.000000)' fill-rule='nonzero'><g id='mail_fill' transform='translate(144.000000, 48.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M2.06773,5.48201 L10.9435,14.3578 C11.4926875,14.9069875 12.3617969,14.9413117 12.9508922,14.4607727 L13.0648,14.3578 L21.934,5.48861 C21.9627333,5.59743667 21.9824889,5.70988556 21.9924667,5.82513296 L22,6 L22,18 C22,19.0543909 21.18415,19.9181678 20.1492661,19.9945144 L20,20 L4,20 C2.94563773,20 2.08183483,19.18415 2.00548573,18.1492661 L2,18 L2,6 C2,5.88057333 2.01046667,5.76359111 2.03053481,5.64992148 L2.06773,5.48201 Z M20,4 C20.1210667,4 20.2396,4.01075111 20.3547111,4.03135259 L20.5247,4.06953 L12.0042,12.59 L3.48191,4.06776 C3.59207,4.03829333 3.70597667,4.018 3.82276481,4.00774519 L4,4 L20,4 Z' id='形状' fill='#000000FF'></path></g></g></g></svg></a>
            <a href="https://github.com/l3anav"><svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>github_fill</title><g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Logo' transform='translate(-144.000000, -144.000000)' fill-rule='nonzero'><g id='github_fill' transform='translate(144.000000, 144.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M7.0236,2.31058 C7.64222,2.52096 8.40745,2.85626 9.14865,3.35611 C10.0469,3.12454 11.0061,3 12.0001,3 C12.993,3 13.9513,3.12429 14.8488,3.35541 C15.5898,2.85581 16.3549,2.52068 16.9733,2.31041 C17.6702,2.07347 18.6635,1.68873 19.2532,2.34204 C19.6536,2.78558 19.7529,3.52998 19.8243,4.09751 C19.9041,4.7317 19.9227,5.55836 19.7128,6.37797 C20.5157,7.41477 21.0001,8.65244 21.0001,10 C21.0001,12.0422 19.894,13.8148 18.2569,15.0426 C17.5034,15.6077 16.6274,16.0673 15.6667,16.3988 C15.8811,16.8891 16.0001,17.4307 16.0001,18 L16.0001,21 C16.0001,21.5523 15.5523,22 15.0001,22 L9.00005,22 C8.44777,22 8.00005,21.5523 8.00005,21 L8.00005,20.0087 C7.04473,20.1257 6.24413,20.0222 5.5626,19.7331 C4.85081,19.4311 4.35469,18.9627 3.98181,18.5152 C3.62811,18.0908 3.2425,17.1349 2.6838,16.9487 C2.15986,16.774 1.8767,16.2077 2.05134,15.6838 C2.22599,15.1598 2.79231,14.8767 3.31625,15.0513 C3.98203,15.2732 4.41554,15.7534 4.71319,16.1386 C5.19225,16.7585 5.58364,17.5695 6.3437,17.8919 C6.65626,18.0245 7.11546,18.1125 7.8323,18.0137 L8.0001,17.9802 C8.00283,17.4181 8.12149,16.8834 8.33341,16.3988 C7.37273,16.0673 6.49666,15.6077 5.7432,15.0426 C4.10606,13.8148 3.00005,12.0422 3.00005,10 C3.00005,8.65402 3.48329,7.41765 4.28448,6.38159 C4.07379,5.56134 4.09217,4.73379 4.17192,4.09897 C4.17352,4.08622 4.17512,4.07342 4.17673,4.06057 C4.24961,3.47909 4.33549,2.79383 4.74307,2.34215 C5.33266,1.6888 6.32676,2.07361 7.0236,2.31058 Z' id='路径' fill='#000000FF'></path></g></g></g></svg></a>
        </div>
        </Textos>
    </ContenedorCentral>
    <p>✨ ¡Hola! 👋🏽👋🏽 Soy Matias Avila, un estudiante de sistemas apasionado por el desarrollo frontend, actualmente me encuentro en la búsqueda de oportunidades laborales en el área. Mi enfoque principal ha sido en el uso de Java, lenguaje que he utilizado durante toda mi trayectoria académica en la universidad.</p>
    <p>💻 He adquirido mientras, conocimientos en HTML, CSS, JS y posteriormente en React JS. Me siento cómodo trabajando con estas herramientas y he utilizado mis habilidades para crear proyectos web dinámicos. Los cuales puedes ver en la carpeta de Proyectos.</p>
    <p>🚀 Soy una persona curiosa y apasionada por la resolución de problemas. Cuando me enfrento a un desafío, no me gusta quedarme sin respuestas. Me impulsa el deseo de adquirir nuevos conocimientos y habilidades para superar obstáculos y mejorar continuamente.</p>
    <p>✉ No dudes en contactarme si deseas saber más sobre mi experiencia o si estás interesado en discutir oportunidades de colaboración. Estoy emocionado por las posibilidades que el mundo del desarrollo tiene para ofrecerme.</p>
    </Contenedor>
  )
}

export default sobreMi