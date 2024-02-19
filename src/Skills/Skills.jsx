import "./skills.css";
import frontEndImg from "../assets/frontend.png";
import backEndImg from "../assets/backend.png";
import herramientasImg from "../assets/herramientas.png";
import softSkillImg from "../assets/softskills.png";

const SkillSection = ( {imgSrc, altText, skills} ) => (
  <div className="frontend">
    <img className="img-skills" src={imgSrc} alt={altText} />
    <div className="text-skills">
      <p>{skills}</p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <>
      <div className="title-container-skills">
        <h1 className="title-skills">Skills</h1>
      </div>

      <div className="main-container-skills">
        <div className="skills-container">
          <div className="front-back">
            <SkillSection
              imgSrc={frontEndImg}
              altText="Imagent-FrontEnd"
              skills="HTML, CSS, JAVASCRIPT, REACT, REDUX"
            />

            <SkillSection
              imgSrc={backEndImg}
              altText="Imagen-Backend"
              skills="SEQUELIZE, POSTGRES, MYSQL, EXPRESS"
            />
          </div>

          <div className="herramientas-skills">
            <SkillSection
              imgSrc={herramientasImg}
              altText="Imagen-Herramientas"
              skills="GITHUB, SLACK, POSTMAN"
            />

            <SkillSection
              imgSrc={softSkillImg}
              altText="Imagen-SoftSkills"
              skills="TRABAJO EN EQUIPO, COMUNICACIÓN, ADAPTABILIDAD, CREATIVIDAD"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

/*

export const Skills = () => {
  return (
    <>
    <div className="title-container-skills">

    <h1 className="title-skills">Skills</h1>
    </div>
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
 */
/* import "./skills.css";
import frontEndImg from "../assets/frontend.png";
import backEndImg from "../assets/backend.png";
import herramientasImg from "../assets/herramientas.png";
import softSkillImg from "../assets/softskills.png"; */