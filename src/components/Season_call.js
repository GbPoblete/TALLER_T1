import React, { useEffect, useState }  from 'react'
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

function SeasonCall() {
    const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes/?series=Better+Call+Saul'
    const [datos, setTodos] = useState([])
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setTodos(responseJson)
    }
    
    useEffect(()=> {
        fetchApi()
    }, [])

    var episodes_call = []
    var unique_call = []
    
    for (var i = 0; i< datos.length; i++) {
        episodes_call.push(datos[i].season)
        unique_call = episodes_call.filter(onlyUnique)
    }

    return (
        <div className="SeasonCall">
          <h1>Lista temporadas Better Call Saul</h1>
          <ul>
              { !datos? 'Cargando...' :
                  unique_call.map((episodes_c,id) => {
                      return (
                              <li key={id}>
                                    <div className="btn-group">
                                        <Link to={`/Better+Call+Saul+temporada/${episodes_c}`} className="btn btn-info">  
                                            Temporada: {episodes_c} 
                                        </Link>
                                    </div>
                              </li>)
              })
            }
          </ul>
        </div>
      );
  }

export default SeasonCall