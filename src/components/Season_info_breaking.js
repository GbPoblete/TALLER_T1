import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'


 
function  SeasonInfoBreaking(){
    
    const {id} = useParams()

    const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes/?series=Breaking+Bad'
    
    const [infoseason_breaking, setInfoseasonBreaking] = useState([])
    
    useEffect(()=> {
      obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoseasonBreaking(responseJson)
      }
    
    var aux_1 = []
    for (var i = 0; i< (infoseason_breaking.length)-1; i++) {
        if (infoseason_breaking[i]['season'] == id){
            aux_1.push(infoseason_breaking[i])
        }
        else{
        }

    }

    return(
        <div className="InfoSeasonBreaking">
        <h1>Serie: Breaking Bad</h1>
        <h1>Información temporada: {id}</h1>
        <ul>
            { !aux_1? 'Cargando...' :
                aux_1.map((info,id_info) => {
                    return (
                            <li key={id_info}>
                                    <div className="btn-group">
                                        <Link to={`/Breaking+Bad+temporada/${id}/${info['episode']}/${info['episode_id']}`} className="btn btn-primary">  
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
  
export default SeasonInfoBreaking


