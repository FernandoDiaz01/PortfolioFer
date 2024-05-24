import "./skills.css";
import skillsInfo from "./skillsData";
import { useTranslation } from "react-i18next";

const Skills = () => {

  const { t } = useTranslation(['universal']);
  return (
    <>
      <div id="skills">
        <div className="title-container-skills">
        <h2 className="title-skills">{t("skills.title")}</h2>
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
