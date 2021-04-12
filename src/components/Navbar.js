import React from 'react'
import { Fragment, useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function  NavbarSearch(props) {
    const history = useHistory();
    const [busqueda, setBusqueda] = useState('')
    const [clicked, setClicked] = useState(false)

    const handleInputChange = (event) => {
      setBusqueda([event.target.name] = event.target.value)
    }

    const handleClick = (b) => {
    history.push(`/busqueda/${busqueda}`);
    }

    return (
        <div className= "NavbarSearch">
          <div className="d-flex flex-row">
              <div className="p-2">
                <input type="text" placeholder="Busca un personaje" 
                className="form-control mr-sm-2" id="nombre" name="busqueda" 
                onChange={handleInputChange} />
              </div>
              <div className="btn-group p-2">
                <Link onClick={handleClick} className="btn btn-primary">
                  Buscar
                </Link>
              </div>
          </div>
        </div>
    )
  }
  
export default NavbarSearch

