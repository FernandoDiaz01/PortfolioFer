import { redirectSocialMedia } from "../linkSocialMedia"

export const ProjectsSection = ({imgProject, altText, descriptionProject, redirectSocialMedia}) => {

    return (
      <div className="project-section-container">
        <img className='img-project' src={imgProject} alt={altText} />
        <div className="container-description-project">
        <p className='description-project' >{descriptionProject} </p>
        </div>
      <div className="container-buttons-projects">
        <button onClick={()=> redirectSocialMedia()}  className='btn-projects'>GitHub</button>
        <button onClick={()=>redirectSocialMedia()} className='btn-projects'>Deploy</button>
      </div>
      </div>
    )
  }