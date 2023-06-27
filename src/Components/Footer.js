import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';
function Footer() {
  return (
    <> 
     <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
        <Link to='/'>
            <img src='./DeportResLogo.png' width='90px' alt='logo'/>
        </Link>
            <h6>Sobre Nosotros</h6>
            <p className="text-justify">Nuestro footer de resultados de deportes <i>DeportRes</i> te ofrece una forma rápida y sencilla de mantenerte actualizado con los últimos resultados y eventos deportivos. Con información en tiempo real de una amplia variedad de deportes, desde fútbol hasta baloncesto, tenis, béisbol y mucho más, nunca te perderás un momento emocionante. Explora los marcadores en vivo, los puntajes finales, las tablas de posiciones y los próximos partidos para seguir de cerca a tus equipos favoritos. Además, con estadísticas detalladas y análisis en profundidad, podrás obtener una visión completa del rendimiento de los equipos y los jugadores. Nuestro footer de resultados de deportes es tu compañero confiable para mantenerte al tanto de toda la acción deportiva".</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>deportes</h6>
            <ul className="footer-links">
              <li><Link href="">Futbol</Link></li>
              <li><Link href="">Fixture</Link></li>
              <li><Link href="">Baseball</Link></li>
              <li><Link href="">Baseball</Link></li>
              <li><Link href="">Formula 1</Link></li>
              
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6> Links</h6>
            <ul className="footer-links">
              <li><Link href="">About Us</Link></li>
              <li><Link href="">Contact Us</Link></li>
              <li><Link href="">Contribute</Link></li>
              <li><Link href="">Privacy Policy</Link></li>
            </ul>
          </div>
        <hr/>
     
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
            
         <Link href="#">DeportRes</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="/"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="twitter" to="/"><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="linkedin" to="/"><i className="fa fa-linkedin"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>

</footer> 
 </>
    
  );
};

export default Footer