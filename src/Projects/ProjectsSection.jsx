import { redirectSocialMedia } from "../linkSocialMedia"

export const ProjectsSection = ({imgProject, altText, descriptionProject,urlDeploy, urlGithub }) => {

  const handleClick = (url)=>{
    redirectSocialMedia(url)
  }
  
    return (
      <div className="project-section-container">
        <img className='img-project' src={imgProject} alt={altText} />
        <div className="container-description-project">
        <p className='description-project' >{descriptionProject} </p>
        </div>
      <div className="container-buttons-projects">
        <button onClick={()=>handleClick(urlGithub)}  className='btn-projects'>GitHub</button>
        <button onClick={()=>handleClick(urlDeploy)} className='btn-projects'>Deploy</button>
      </div>
      </div>
    )
  }