import "./skills.css";
/* import frontEndImg from "../assets/frontend.png";
import backEndImg from "../assets/backend.png";
import herramientasImg from "../assets/herramientas.png";
import softSkillImg from "../assets/softskills.png"; */
import skillsData from "./skillsData";


/* const SkillSection = ( {imgSrc, altText, skills} ) => (
  <div className="frontend">
    <img className="img-skills" src={imgSrc} alt={altText} />
    <div className="text-skills">
      <p>{skills}</p>
    </div>
  </div>
); */

const Skills = () => {
  return (
    <>
      {/* <div className="title-container-skills">
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
      </div> */}
      <div>
      <h2>Habilidades</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>
            <img src={skill.image} alt={skill.name}  />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Skills;

