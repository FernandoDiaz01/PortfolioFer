import "./skills.css";
import skillsInfo from "./skillsData";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <div className="title-container-skills">
        <h2 className="title-skills">Habilidades</h2>
        </div>
        <div className="skill-cards">
          {skillsInfo.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="images-skills-container">
                <img
                  className="img-skills"
                  src={skill.image}
                  alt={skill.name}
                />
              </div>
              <div className="container-name-skills">
              <h3 className="skill-name">{skill.name}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
