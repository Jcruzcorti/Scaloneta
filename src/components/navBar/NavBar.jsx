import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'



function NavBar() {

  return (

        <div className="divnav">
                <nav className="navbar navbar-expand-lg navbar-dark " >
                  <div className="container-fluid d-flex flex-row-reverse ">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                      <div className="navbar-nav">                       
                        <li className="navli"><NavLink className="nav-link active" to="/category/fácil">FÁCIL</NavLink></li>
                        <li className="navli"><NavLink className="nav-link active" to="/category/difícil">DIFÍCIL</NavLink></li>
                        <li className="navli"><NavLink className="nav-link active" to="/category/fanático">FANÁTICO</NavLink></li>
                        
                      </div>
                    </div>
                  </div>
                </nav>
          </div>
  )
}

export default NavBar;