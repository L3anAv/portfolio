import styled from 'styled-components'
import Carga from '../loading/index'
import React, {useState ,useEffect} from 'react'

const ContenedorDeProyectos = styled.div`
    display:flex;
    flex-direction:column;
`

const Cards = styled.div`
    width:55%;
    padding:10px;
    background:#fff;
    margin-top:20px;
    margin-left:20%;
    margin-bottom:10px;
    border:1px solid black;
    grid-row:${props => props.row};
    grid-column:${props => props.column};

    p{
        color: #000;
        margin-left:5%;
        font-size:16px;
        margin-top:8px;
        font-family:MonoSpace;
    }
`

const Demo = styled.a`
    color: #000;
    padding:2px;
    font-size:18px;
    cursor: pointer;
    font-family:MonoSpace;
    border:0.5px solid black;

    span{
        text-decoration: underline;
    }
`

const Link = styled.a`
    color: #0366d6;
    margin-left:5%;
    font-size:22px;
    font-weight:800;
    cursor: pointer;
    font-family:MonoSpace;
    text-decoration: inherit;
`

const Topic = styled.div`
    display:flex;
    font-size:16px;
    font-family:MonoSpace;

    p{
        margin-top:8px;
        font-weight:800;
        margin-bottom:8px;
    }
`

export default function indexProyectos() {

    const [dataProyectos, setDataProyectos] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/L3anAv/repos`,{
          method: "GET",
          headers: {
            'Authorization': `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`
          }
        })
          .then(res => res.json())
          .then(info => setDataProyectos([...info]))
          .then(() => setLoading(false))
      }, []);
    
    if(Loading){
        return <Carga />
    }

    if(!Loading){
        return (
        <ContenedorDeProyectos>
            {dataProyectos.map((item, index) => {
                if(item.description == null) {
                    return;
            }else{
            return(
                <Cards key={index}>
                    <Link href={item.html_url}>{item.name}</Link>
                    {item.homepage != '' ? <p><Demo href={item.homepage}>Demo: <span>{item.homepage}</span></Demo></p> : ''}
                    <p>{item.description}</p>
                    <Topic>{item.topics.map((topic, index) => <p key={index}>{topic}</p>)}</Topic>
                </Cards>
                )
            }})}
    </ContenedorDeProyectos>
        )
    }
}
