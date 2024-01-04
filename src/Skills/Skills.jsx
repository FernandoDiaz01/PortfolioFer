import React from "react";
import "./skills.css";
import frontEndImg from "../assets/frontend.png";
import backEndImg from "../assets/backend.png";
import herramientasImg from "../assets/herramientas.png";
import softSkillImg from "../assets/softskills.png";

export const Skills = () => {
  return (
    <>
    <div className="main-container-skills">
      <div className="skills-container">
        <div className="front-back">
        <div className="frontend">
          <img
            className="img-skills"
            src={frontEndImg}
            alt="Imagent-FrontEnd"
          />
          <div className="text-skills">
          <p >HTML, CSS, JAVASCRIPT, REACT, REDUX</p>
          </div>
        </div>
        <div className="backend">
          <img className="img-skills" src={backEndImg} alt="Imagen-Backend" />
          <div className="text-skills"> <p >SEQUELIZE, POSTGRES, MYSQL, EXPRESS</p>
          </div>
          
        </div>
        </div>
        <div className="herramientas-skills">
        <div className="herramientas">
          <img
            className="img-skills"
            src={herramientasImg}
            alt="Imagen-Herramientas"
          />
          <div className="text-skills"> <p >GITHUB, SLACK, POSTMAN</p>
          </div>
         
        </div>
        <div className="soft-skill">
          <img
            className="img-skills"
            src={softSkillImg}
            alt="Imagen-SoftSkills"
          />
          <div className="text-skills"><p >TRABAJO EN EQUIPO, COMUNICACIÓN, ADAPTABILIDAD, CREATIVIDAD</p>
          </div>
          
        </div>
        </div>
      </div>
      </div>
    </>
  );
};
