import React from 'react'
// import {useAuth0} from "@auth0/auth0-react";
// import Formulario from '../Formulario';

function Inicio() {
  // const {loginWithRedirect} = useAuth0()
  return (
    <div >
        <div>
          <h1 className="text-center" style={{'font-family':'Batuphat'}}>Bienvenido a la pagina de DeportRes !!!</h1>
            <hr></hr>
            <p className="text-justify text-muted" ><i> Una página web de resultados de deportes (fútbol, baloncesto y Baseball):

La página web de resultados de deportes es un portal dedicado a proporcionar información actualizada y detallada sobre los resultados de partidos de fútbol, baloncesto y Baseball. Es el lugar ideal para que los aficionados de estos deportes se mantengan al tanto de los marcadores, estadísticas y noticias relacionadas.</i></p>
              
            
            {/* <Formulario/>
            <br></br>
            <button onClick={() => loginWithRedirect()}>Registrase</button>
            <button onClick={() => loginWithRedirect()}>Iniciar Sesion</button> */}
        </div>

    </div>
  )
}

export default Inicio
