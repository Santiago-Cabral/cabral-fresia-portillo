import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Formulario() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar en el local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    // Puedes agregar más campos aquí si es necesario
  };
  return (
    <>
     
        <div id="form-ui" className="container">
          <div className="row">
            <div className="col-6 left-img">
              {/* 290x290 */}
              <div id="signup-img" className="img">
                {/* img here */}
                <img src="./DeportResLogo.png" width="90px" alt="logo" />
                {/* over img text */}
                <div id="over-img-text"></div>
              </div>
              {/* .img */}
            </div>
            {/* .col */}

            <div className="col-6 right-form">
              <div id="signup-form" className="signup-form">
                <form >
                  <input 
                  type="text" 
                  name="username" 
                  value={username} 
                  onChange={handleInputChange}/>
                  <br />
                  <input
                   type="password" 
                   name="user-password"
                  
                  onChange={handleInputChange}/>
                  <br />
                  <input className="button" type="submit" value="Sign In"  />
                  <input className="button" type="submit" value="Sign Up" />
                </form>
                <div className="form-bot">
                  <Link href="#">Forgot Password?</Link>
                </div>

                <br />
                <img id="circle-coulds-img" />
              </div>
              {/* .sigup-form */}
            </div>
            {/* .col */}
          </div>
          {/* .row align-container-center */}
        </div>
     
    </>
  );
}

export default Formulario;


