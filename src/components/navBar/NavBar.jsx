import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Bootstrap from 'bootstrap'
import LogoAfa from '../../img/afa.png';



function NavBar() {

  return (

        <div className="divnav ">

                <nav className="navbar navbar-expand-lg " >
                  {/* <div className="container-fluid d-flex flex-row-reverse "> */}
                  <div className="container-fluid   ">
                  <Link to="/"><img src={LogoAfa} alt="Logo AFA" className='LogoAfa'/></Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        
                      <div className="navbar-nav mx-auto">                       
                        <li className="navli"><Link className="nav-link active" to="/category/Facil">FÁCIL</Link></li>
                        <li className="navli"><Link className="nav-link active" to="/category/Dificil">DIFÍCIL</Link></li>
                        <li className="navli"><Link className="nav-link active" to="/category/Fanatico">FANÁTICO</Link></li>  
                      </div>
                    </div>
                  </div>
                </nav>
          </div>
  )
}

export default NavBar;

