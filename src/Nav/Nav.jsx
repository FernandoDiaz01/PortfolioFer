import React from "react";
import "./nav.css";
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <>
      <div className="main-container-nav">
          <nav className="list-main">
            <ul className="main-list">
              <li className="list-center">
                <Link
                
                  className="list-center"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Inicio
                </Link>
              </li>
              <li className="list-center">
                <Link
                  className="list-center"
                  activeClass="active"
                  to="/about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Sobre Mi
                </Link>
              </li>
              <li className="list-center">
                <Link
                  className="list-center"
                  to="/skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Herramientas
                </Link>
              </li>
            </ul>
          </nav>
        
      </div>
    </>
  );
};
