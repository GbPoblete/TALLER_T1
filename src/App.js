import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'

function App() {
  const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    setTodos(responseJson)
  }
  
  useEffect(()=> {
    fetchApi()
  }, [])

  return (
    <div className="App">
      Gigi API la más cool del universo
      <ul>
        { !todos ? 'Cargando...' : 
          todos.map((todos,id) => {
            return <li> {todos.title} </li>
          })
        }
      </ul>
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
