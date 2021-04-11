import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'

 
function  CharacterInfoDos(){

    const {name_character_dos} = useParams()

    const url = `https://tarea-1-breaking-bad.herokuapp.com/api/characters`

    const [caracteresDos, setInfoCaracterDos] = useState([])
    
    useEffect(()=> {
      obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoCaracterDos(responseJson)
    }

    var aux_12 = []

    for (var i = 0; i< caracteresDos.length; i++) {
        if (caracteresDos[i]['name'] == name_character_dos){
            aux_12.push(caracteresDos[i])
        }
        else{

        }
     }

     console.log(name_character_dos)


    if(aux_12.length != 0){
        return(
            <div className="CharacterInfoDos">
                <h1>Información sobre: {name_character_dos}</h1>
                { !caracteresDos? 'Cargando...' :
    
                    aux_12.map((info_personaje,id_personaje) => {
                        return (
                                <div class="container">
                                    <div class="d-flex flex-row">
                                        <div class="col-sm">
                                        <p><strong>Nombre:</strong> {info_personaje['name']}</p>
                                        <p><strong>Sobrenombre:</strong> {info_personaje['nickname']}</p>
                                        <p><strong>Ocupación:</strong>
                                            {info_personaje['occupation'].map((o,id_o) =>
                                                <li key={id_o}> 
                                                    {o}
                                                </li>)}
                                        </p>
                                        <p><strong>Estado en series:</strong> {info_personaje['status']}</p>
                                        <p><strong>Serie a la que pertenece:</strong> {info_personaje['category']}</p>
                                        <p><strong>Actor o actriz que lo representa:</strong> {info_personaje['portrayed']}</p>
                                        <p><strong>Temporadas Breaking Bad en las que aparece:</strong>
                                            {info_personaje['appearance'].map((a,id_a) =>
                                                <li key={id_a}> 
                                                    <div className="btn-group">
                                                        <Link to={`/Breaking+Bad+temporada/${a}`} className="btn btn-danger"> 
                                                            Temporada: {a}
                                                        </Link>
                                                    </div>
                                                </li>)}
                                        </p>
                                        <p><strong>Temporadas Better Call Saul en las que aparece:</strong>
                                            {info_personaje['better_call_saul_appearance'].map((a,id_a) =>
                                                <li key={id_a}> 
                                                    <div className="btn-group">
                                                        <Link to={`/Better+Call+Saul+temporada/${a}`} className="btn btn-danger"> 
                                                            Temporada: {a}
                                                        </Link>
                                                    </div>
                                                </li>)}
                                        </p>
                                        </div>
                                        <div class="col-sm">
                                            <img src={info_personaje['img']} class="w-75 p-3" ></img> 
                                        </div> 
                                    </div>   
                                </div>
                                )
                    })
                }
            </div>
        )
    }

    else{
        return(<h1>No se encuentra información sobre {name_character_dos} en la API :(</h1>)
    }
} 
  
export default CharacterInfoDos