import styled from "styled-components"

const Iconic = styled.div`
    
    
    display:flex;
    margin-top:40px;
    margin-left:20px;
    margin-right:20px;
    text-align:center;
    position:relative;
    flex-direction:column;

    p{
      width:100%;
      color:#fff;
      user-select: none;
      background:${props => props.background};
    }
`

const ImgIconoVentana = styled.img`
    width:${props => props.width};
    height:${props => props.height};
    object-fit:cover;
    margin-bottom:8px;
    margin-left:32px;
    margin-right:30px;
    margin-left:${props => props.marginLeft};
    filter: invert(${props => props.invert});
`

const IconoVentana = ({handleDoubleClick, imgIcono, nombreIcono, FuiClikeado, darNombre, widthImg, marginLeftImg}) => {

  const handleOnClick = () => {
    darNombre(nombreIcono)
  }
  
  return (
    <>
    <Iconic onClick={handleOnClick} onDoubleClick={handleDoubleClick} background={FuiClikeado ? '#1e40bc' : '#010080'}>
      <ImgIconoVentana height={(widthImg === undefined) ? '45px' : 'auto'} width={(widthImg === undefined) ? '80px' : widthImg} marginLeft={marginLeftImg} src={imgIcono} invert={FuiClikeado ? '20%' : '0%'}/>
      <p>{nombreIcono}</p>
    </Iconic>
    </>
  )
}

export default IconoVentana
