import { Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  return (
    <>
      <nav className="list-main">
        <ul className="main-list">
          <li className="list-center">
            <Link className="list-center" to="/home">
              Inicio
            </Link>
          </li>
          <li className="list-center">
            <Link className="list-center" to="/section1">
              Sobre Mi
            </Link>
          </li>
          <li className="list-center">
            <Link className="list-center" to="/skills">
              Herramientas
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
