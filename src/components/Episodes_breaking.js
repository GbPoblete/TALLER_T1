import React from 'react'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'

var episodes = new Array()
var unique = new Array()

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

function EpisodesBreaking() {
    const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes/?series=Breaking+Bad'
    const [todos, setTodos] = useState([])
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJson = await response.json()
      setTodos(responseJson)
    }
    
    useEffect(()=> {
      fetchApi()
      for (var i = 0; i< todos.length; i++) {
        episodes.push(todos[i].season)
        unique = episodes.filter(onlyUnique)
        console.log(unique)
     }
    }, [])

    return (
      <div className="EpisodesBreaking">
        Lista temporadas Breaking Bad
        <ul>
          { !todos? 'Cargando...' :
            unique.map((episodes,id) => {
                return <li> Temporada: {episodes} </li>
            })
          }
        </ul>
      </div>
    );
  }

export default EpisodesBreaking



