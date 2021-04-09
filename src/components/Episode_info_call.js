import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'

 
function  EpisodeInfoCall(){
    
    const {id_episode} = useParams()
    const {id} = useParams()
    const {n_e_c} = useParams()


    const url = `https://tarea-1-breaking-bad.herokuapp.com/api/episodes/?series=Better+Call+Saul`
    
    const [infoepisode_call, setInfoepisodeCall] = useState([])
    
    useEffect(()=> {
      obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoepisodeCall(responseJson)
      }

    var aux_5 = []
    var aux_6 = []

    for (var i = 0; i< infoepisode_call.length; i++) {
        if (infoepisode_call[i]['season'] == id){
            aux_5.push(infoepisode_call[i])
        }
        else{

        }
     }

     for (var i = 0; i< aux_5.length; i++) {
        if (aux_5[i].episode_id == id_episode){
            aux_6.push(aux_5[i])
        }
        else{

        }
     }

    return(
        <div className="InfoEpisodeCall">
            <h1>Serie: Better Call Saul</h1>
            <h1>Temporada: {id}</h1>
            <h1>Información episodio: {n_e_c}</h1>
            { !infoepisode_call? 'Cargando...' :
                aux_6.map((info_episode,id_info_episode) => {
                    return (
                            <section>
                                <p>Episodio {n_e_c}</p>
                                <p>Nombre: {info_episode['title']}</p>
                                <p>Fecha al aire: {info_episode['air_date']} </p>
                                <p>Personajes:
                                    {info_episode['characters'].map((c,id_c) =>
                                        <li key={id_c}> 
                                            <div className="btn-group">
                                                <Link to={`/Better+Call+Saul+temporada/${id}/${n_e_c}/${id_episode}/${c}`} className="btn btn-warning"> 
                                                    {c}
                                                </Link>
                                            </div>
                                        </li>)}
                                </p>
                            </section>      
                            )
                })
            }
      </div>
    )
} 
  
export default EpisodeInfoCall
