import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'

 
function  CharacterInfo(){

    const {id_episode} = useParams()
    const {id} = useParams()
    const {n_e_c} = useParams()
    const {name_character} = useParams()

    const url = `https://tarea-1-breaking-bad.herokuapp.com/api/characters`

    const [caracteres, setInfoCaracter] = useState([])
    
    useEffect(()=> {
      obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoCaracter(responseJson)
    }

    var aux_7 = []

    for (var i = 0; i< caracteres.length; i++) {
        if (caracteres[i]['name'] == name_character){
            aux_7.push(caracteres[i])
        }
        else{

        }
     }

    console.log(aux_7)
    if(aux_7.length != 0){
        return(
            <div className="CharacterInfo">
                <h1>Información sobre: {name_character}</h1>
                { !caracteres? 'Cargando...' :
    
                    aux_7.map((info_personaje,id_personaje) => {
                        return (
                                <section>
                                    <p>Nombre: {info_personaje['name']}</p>
                                    <p>Sobrenombre: {info_personaje['nickname']}</p>
                                    <p>Ocupación:
                                        {info_personaje['occupation'].map((o,id_o) =>
                                            <li key={id_o}> 
                                                {o}
                                            </li>)}
                                    </p>
                                    <p>Estado en series: {info_personaje['status']}</p>
                                    <p>Serie a la que pertenece {info_personaje['category']}</p>
                                    <p>Actor o actriz que lo representa: {info_personaje['portrayed']}</p>
                                    <p>Temporadas Breaking Bad en las que aparece:
                                        {info_personaje['appearance'].map((a,id_a) =>
                                            <li key={id_a}> 
                                                <div className="btn-group">
                                                    <Link to={`/Breaking+Bad+temporada/${a}`} className="btn btn-danger"> 
                                                        Temporada: {a}
                                                    </Link>
                                                </div>
                                            </li>)}
                                    </p>
                                    <img src={info_personaje['img']}></img>      
                                </section>
                                )
                    })
                }
            </div>
        )
    }

    else{
        return(<h1>No se encuentra información sobre {name_character} en la API :(</h1>)
    }
} 
  
export default CharacterInfo