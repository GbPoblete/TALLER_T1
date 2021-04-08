import React from 'react'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'

var episodes_call = new Array()
var unique_call = new Array()

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

function EpisodesCall() {
    const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes/?series=Better+Call+Saul'
    const [datos, setTodos] = useState([])
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJson = await response.json()
      setTodos(responseJson)
    }
    
    useEffect(()=> {
      fetchApi()
      for (var i = 0; i< datos.length; i++) {
        episodes_call.push(datos[i].season)
        unique_call = episodes_call.filter(onlyUnique)
        console.log(unique_call)
     }
    }, [])
  
    return (
      <div className="EpisodesCall">
        Lista temporadas Better Call Saul
        <ul>
          { !datos? 'Cargando...' :
            unique_call.map((episodes_c,id) => {
                return <li> Temporada: {episodes_c} </li>
            })
          }
        </ul>
      </div>
    );
  }

export default EpisodesCall