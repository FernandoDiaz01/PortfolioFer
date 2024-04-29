import './Projects.css'
import frontEndImg from "../assets/frontend.png";
import { ProjectsSection } from './ProjectsSection';
import { redirectSocialMedia } from '../linkSocialMedia';






export const Projects = () => {



  return (
    <div className="projects-container">
        <div className="title-projects-container">
        <h1 className='title-projects'>Individual Projects</h1>
        </div>
        <div className="section-projects">
        <ProjectsSection 
        imgProject={frontEndImg}
        alt="Proyecto sobre alarmas"
        descriptionProject="Esta hecho con alarmas comunitarias"
        urlDeploy='https://to-do-list-app-t5vg.vercel.app/'
        urlGithub='https://github.com/FernandoDiaz01'
        />
      
        <ProjectsSection 
        imgProject={frontEndImg}
        alt="Proyecto sobre alarmas"
        descriptionProject="Esta hecho con alarmas comunitarias"
        
        />
        <ProjectsSection 
        imgProject={frontEndImg}
        alt="Proyecto sobre alarmas"
        descriptionProject="Esta hecho con alarmas comunitarias"
        
        />
        </div>
        
    </div>
  )
}
