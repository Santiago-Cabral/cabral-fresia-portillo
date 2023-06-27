import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './Components/navegacion/Navbar';
import Inicio  from './Components/Paginacion/Inicio';
import Tablas from './Components/Paginacion/Tablas';
import Fixture  from './Components/Paginacion/Fixture';
import BasketballFixture from './Components/Paginacion/BasketballFixture';
import  Basketball  from './Components/Paginacion/Basketball';
import Footer from './Components/Footer';
import Titulo from './Components/Titulo';
import Formulario from './Components/Formulario';
import Carrousel from './Components/Carrousel';


function App() {
  return (
    <div className="App">
  
      
       
          <header>
           <nav>
        <Navbar />
         <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/tablas" element={<Tablas/>} />
          <Route path="/fixture" element={<Fixture/>} />
          <Route path="/basketball" element={<Basketball/>} />
          <Route path="/basketball-fixture" element={<BasketballFixture/>} />
          </Routes>
          </nav>
          </header>
          <section>
          
          <Formulario/>
          <br></br>

          </section>
          <aside>
              <Carrousel/>
          </aside>
          <footer>
            <Footer/>
          </footer>
      

    </div>
  );
}
 
export default App