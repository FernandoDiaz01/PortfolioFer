import './Projects.css'
import  todoapp  from "../assets/todoapp.png";
import  rickandmorty  from "../assets/rickandmorty.png";
import { ProjectsSection } from './ProjectsSection';
import { useTranslation } from "react-i18next";
export const Projects = () => {

  const { t } = useTranslation(['universal']);

  return (
    <div className="projects-container" id='projects'>
        <div className="title-projects-container">
        <h1 className='title-projects'>{t("projects.title")}</h1>
        </div>
        <div className="section-projects">
        <ProjectsSection 
    
        imgProject={rickandmorty}
        alt="Proyecto sobre alarmas"
        descriptionProject={t("projects.description1")}
        urlDeploy='https://to-do-list-app-finished.vercel.app/'
        urlGithub='https://github.com/FernandoDiaz01'
        />
      
        <ProjectsSection 
        imgProject={todoapp} 
        alt="Proyecto sobre alarmas"
        descriptionProject={t("projects.description2")}
        urlDeploy={"https://to-do-list-app-finished.vercel.app/"}
        urlGithub={"https://github.com/FernandoDiaz01/To-Do-List-App"}
        
        />
        <ProjectsSection 
        imgProject={todoapp}
        alt="Proyecto sobre alarmas"
        descriptionProject={t("projects.description3")}
        urlDeploy='https://to-do-list-app-finished.vercel.app/'
        urlGithub='https://github.com/FernandoDiaz01'
        />
        </div>
        
    </div>
  )
}
