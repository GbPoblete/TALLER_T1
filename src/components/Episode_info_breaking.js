import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'

 
function  EpisodeInfoBreaking(){
    
    const {id_episode} = useParams()
    const {id} = useParams()
    const {n_e_b} = useParams()

    console.log(id_episode)
    console.log(id)
    console.log(n_e_b)

    const url = `https://tarea-1-breaking-bad.herokuapp.com/api/episodes/?series=Breaking+Bad`
    
    const [infoepisode_breaking, setInfoepisodeBreaking] = useState([])
    
    useEffect(()=> {
      obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoepisodeBreaking(responseJson)
      }

    var aux_3 = []
    var aux_4 = []

    for (var i = 0; i< infoepisode_breaking.length; i++) {
        if (infoepisode_breaking[i]['season'] == id){
            aux_3.push(infoepisode_breaking[i])
        }
        else{

        }
     }

     for (var i = 0; i< aux_3.length; i++) {
        if (aux_3[i].episode_id == id_episode){
            aux_4.push(aux_3[i])
        }
        else{

        }
     }

    return(
        <div className="InfoEpisodeBreaking">
            <h1>Serie: Breaking Bad</h1>
            <h1>Temporada: {id}</h1>
            <h1>Información episodio: {n_e_b}</h1>
            { !infoepisode_breaking? 'Cargando...' :
                aux_4.map((info_episode,id_info_episode) => {
                    return (
                            <section>
                                <p>Episodio {n_e_b}</p>
                                <p>Nombre: {info_episode['title']}</p>
                                <p>Fecha al aire: {info_episode['air_date']} </p>
                                <p>Personajes:
                                    {info_episode['characters'].map((c,id_c) =>
                                        <li key={id_c}> 
                                            <div className="btn-group">
                                                <Link to={`/Breaking+Bad+temporada/${id}/${n_e_b}/${id_episode}/${c}`} className="btn btn-warning"> 
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
  
export default EpisodeInfoBreaking
