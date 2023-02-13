import React from "react";

import NavbarHor from "../components/NavbarHor";
import NavbarLat from "../components/NavbarLat";
import { Link } from "react-router-dom";

/**
 * React page's error 
 * @returns Element for error message
*/
const Home = () => {

  return (
    <div>
      <NavbarHor />
      <div className="main">
        <NavbarLat />
        <div className="wrap-error">
         
        <div className="error-and-message404">
          <span className="error-404">404</span>
          <span className="message-404">
            Oups! La page que vous demandez n'existe pas.
          </span>
        </div>
        <Link to={`/user/12`}>
          <span className="home-404">Retourner sur le tableau de bord de Karl</span>
        </Link>
        <Link to={`/user/18`}>
          <span className="home-404">Retourner sur le tableau de bord de Cecilia</span>
        </Link>
   
        </div>
      </div>
    </div>
  );
};

export default Home;
