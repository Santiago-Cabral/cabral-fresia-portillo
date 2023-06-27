import React from 'react'
import { Link, Outlet} from 'react-router-dom'
const Navbar = () => {
  return ( 
    <div>
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">         
        <div className="container-fluid"> 
        <Link to='/'>
            <img src='./DeportResLogo.png' width='90px' alt='logo'/>
        </Link>
     
            <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                </li>        
                 <li className="nav-item">
                <Link className="nav-link" to='/Tablas'>Futbol</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/Fixture'>Partidos</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link " to='/Basketball'>Basketball</Link>        
                 </li>
                 <li className="nav-item">
                <Link className="nav-link " to='/Basketball-Fixture'>Baseball</Link>        
                 </li>
          </ul>
        </div>
      </div>
       </nav>
          <Outlet/>
     </div>
      
  )
}

export default Navbar