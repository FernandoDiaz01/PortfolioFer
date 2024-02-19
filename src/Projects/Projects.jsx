import './Projects.css'
import frontEndImg from "../assets/frontend.png";


const ProjectsSection = ({imgProject,altText, descriptionProject}) => {
  return (
    <div className="project-section-container">
      
      <img className='img-project' src={imgProject} alt={altText} />
      <div className="container-description-project">
      <p className='description-project' >{descriptionProject} </p>
      </div>
    <div className="container-buttons-projects">
      <button className='btn-projects'>GitHub</button>
      <button className='btn-projects'>Deploy</button>
    </div>
    </div>
  )
}


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
