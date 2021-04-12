import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'


function  SearchCharacter() {


    const [info, setInfo] = useState([])
    const [search_state, setSearchState] = useState('')
    const {search} = useParams()
    
    useEffect(()=> {
        

        const url = `https://tarea-1-breaking-bad.herokuapp.com/api/characters/?name=${search.replace(" ", "+")}`
      obtenerDatos(url)
      setSearchState(search)
      console.log("entré")
    }, [])

    const obtenerDatos = async (url) => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfo(responseJson)
      }

    return (
      <div className="SearchInfo">
        <h1>Resultados de la búsqueda: {search_state}</h1>
        { !info? 'Cargando...' :
                info.map((i,numero) => {
                    return (
                         <section>
                            <li key={numero}> 
                                <div className="btn-group">
                                    <Link to={`${search_state}/${i.name}`} className="btn btn-info"> 
                                        {i.name}
                                    </Link>
                                </div>
                            </li>
                        </section>      
                    )
                })
        }
      </div>
    );
  }
  
export default SearchCharacter