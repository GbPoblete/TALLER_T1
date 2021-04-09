import React from 'react'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

function  SeasonBreaking() {
    const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes/?series=Breaking+Bad'
    const [todos, setTodos] = useState([])
    
    useEffect(()=> {
      fetchApi()
    }, [])

    var episodes = []
    var unique = []
    
    for (var i = 0; i< todos.length; i++) {
        episodes.push(todos[i].season)
        unique = episodes.filter(onlyUnique)
     }

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setTodos(responseJson)
      }

    return (
      <div className="SeasonBreaking">
        <h1>Lista temporadas Breaking Bad</h1>
        <ul>
            { !todos? 'Cargando...' :
                unique.map((episodes,id) => {
                    return (
                            <li key={id}>
                                    <div className="btn-group">
                                        <Link to={`/Breaking+Bad+temporada/${episodes}`} className="btn btn-success">  
                                            Temporada: {episodes} 
                                        </Link>
                                    </div>
                            </li>)
            })
          }
        </ul>
      </div>
    );
  }
  
export default SeasonBreaking



