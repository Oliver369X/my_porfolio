import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar /> {/* es la barra de navegacion  */}
          <Hero /> {/* es el inicio y tambien la pc 3D */}
        </div>
        <About />  {/* es la parte de sobre my */}
        <Tech />  {/* son los iconos de las tecnologias */}
        <Works /> {/* es la parte de mis proyecto */} 
        <div className="relative z-0">
          <Contact /> {/* el formilario de contacto y el globo */}
          <StarsCanvas /> {/* es el fondo de la parte de contacto */}
        </div>
      </div>
      
    </BrowserRouter>
  );
};

export default App;
