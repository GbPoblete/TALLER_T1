import React from 'react'
import { Fragment, useState } from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function  NavbarSearch() {

    const [busqueda, setBusqueda] = useState('')

    const handleInputChange = (event) => {
      setBusqueda([event.target.name] = event.target.value)
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
                <BrowserRouter>
                  <Link to={`/busqueda/${busqueda}`} className="btn btn-primary">
                    Buscar
                  </Link>
                </BrowserRouter>   
              </div>
              
          </div>
        </div>
    )
  }
  
export default NavbarSearch

