import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'

 
function  CharacterInfo(){

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
        return(<h1>No se encuentra información sobre {name_character} en la API :(</h1>)
    }
} 
  
export default CharacterInfo