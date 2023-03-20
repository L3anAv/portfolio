import React, {useEffect, useState} from 'react'

export default function useDataGithub() {

    const [Loading, setLoading] = useState(true)
    const [dataProyectos, setDataProyectos] = useState([])

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
    
    return [dataProyectos, Loading]
}
