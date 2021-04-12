import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'

 
function  CharacterInfo(){

    const {name_character} = useParams()
    console.log("NAME", name_character)
    const url = `https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=${name_character.replace(" ", "+")}`

    const [caracteres, setInfoCaracter] = useState([])
    
    useEffect(()=> {
      obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson[0])
        setInfoCaracter(responseJson[0])
    }

    var aux_7 = [caracteres]


    try{
        console.log("CAR",caracteres)
        return(
            <div className="CharacterInfo">
                <h1>Información sobre: {name_character}</h1>
                { !caracteres? 'Cargando...' :
    
                    
                        
                                <div class="container">
                                    <div class="d-flex flex-row">
                                        <div class="col-sm">
                                        <p><strong>Nombre:</strong> {caracteres['name']}</p>
                                        <p><strong>Sobrenombre:</strong> {caracteres['nickname']}</p>
                                        <p><strong>Ocupación:</strong>
                                            {caracteres['occupation'].map((o,id_o) =>
                                                <li key={id_o}> 
                                                    {o}
                                                </li>)}
                                        </p>
                                        <p><strong>Estado en series:</strong> {caracteres['status']}</p>
                                        <p><strong>Serie a la que pertenece:</strong> {caracteres['category']}</p>
                                        <p><strong>Actor o actriz que lo representa:</strong> {caracteres['portrayed']}</p>
                                        <p><strong>Temporadas Breaking Bad en las que aparece:</strong>
                                            {caracteres['appearance'].map((a,id_a) =>
                                                <li key={id_a}> 
                                                    <div className="btn-group">
                                                        <Link to={`/Breaking+Bad+temporada/${a}`} className="btn btn-danger"> 
                                                            Temporada: {a}
                                                        </Link>
                                                    </div>
                                                </li>)}
                                        </p>
                                        <p><strong>Temporadas Better Call Saul en las que aparece:</strong>
                                            {caracteres['better_call_saul_appearance'].map((a,id_a) =>
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
                                            <img src={caracteres['img']} class="w-75 p-3" ></img> 
                                        </div> 
                                    </div>   
                                </div>
                                
                    
                }
            </div>
        )
    }

    catch{
        return(<div></div>)
    }
} 
  
export default CharacterInfo