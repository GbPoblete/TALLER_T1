import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'
 


function  SeasonInfoCall(){
    
    const {id} = useParams()

    const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes/?series=Better+Call+Saul'
    
    const [infoseason_call, setInfoseasonCall] = useState([])
    
    useEffect(()=> {
      obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoseasonCall(responseJson)
      }

    var aux_2 = []
    for (var i = 0; i< infoseason_call.length; i++) {
        if (infoseason_call[i]['season'] == id){
          aux_2.push(infoseason_call[i])
        }
        else{
          
        }
     }

    return(
        <div className="InfoSeasonCall">
        <h1>Serie Better Call Saul</h1>
        <h2>Información temporada: {id}</h2>
        <ul>
            { !aux_2? 'Cargando...' :
                aux_2.map((info,id_info) => {
                    return (
                            <li key={id_info}>
                                    <div className="btn-group">
                                        <Link to={`/Better+Call+Saul+temporada/${id}/${info['episode']}/${info['episode_id']}`} className="btn btn-primary">  
                                            Episodio {info['episode']}: "{info['title']}" 
                                        </Link>
                                    </div>
                            </li>)
            })
          }
        </ul>
      </div>
    )
} 
  
export default SeasonInfoCall
