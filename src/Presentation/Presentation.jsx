import { redirectSocialMedia } from "../linkSocialMedia";
import "./presentation.css";


export const Presentation = () => {
  return (
    <>
      <div className="main-container">
        <div className="presentation">
          <h1 className="h1">Fernando Diaz</h1>
          <h3 className="h3">Desarrollador Full Stack</h3>
          
        </div>

        <div className="btn-container">
          <ul>
          <li className="item">
        <a href="https://drive.google.com/file/d/1VDMmTnjVvJaIy-b81UMxX5MBnmPv4OcX/view?usp=sharing" target="_blank" rel="noreferrer"  title="Curriculum Vitae">
          <i className="fa-solid fa-file icon"></i>
        </a>
      </li>
          <li className="item">
        <a href="https://github.com/FernandoDiaz01?tab=repositories" target="_blank" rel="noreferrer"title="Github">
          <i className="fa-brands fa-github icon"></i>
        </a>
      </li>
          <li className="item">
        <a href="https://www.linkedin.com/in/fernando-d%C3%ADaz-9a49a7201/" target="_blank"  rel="noreferrer" title="Linkedln">
          <i className="fa-brands fa-linkedin icon"></i>
        </a>
      </li>
          </ul>
        </div>
      </div>
    </>
  );
};
