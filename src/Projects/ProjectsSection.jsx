import { redirectSocialMedia } from "../linkSocialMedia";

export const ProjectsSection = ({
  imgProject,
  altText,
  descriptionProject,
  urlDeploy,
  urlGithub,

}) => {
  const handleClick = (url) => {
    redirectSocialMedia(url);
  };

  return (
    <div className="project-section-container">
      <div className="container-img-projects">
        <img className="img-project" src={imgProject} alt={altText} />
      </div>
      <div className="container-description-project">
        <p className="description-project">{descriptionProject} </p>
      </div>
      <div className="container-buttons-projects">
        <button onClick={() => handleClick(urlGithub)} className="btn-projects">
          <img
            className="img-projects"
            src="./src/Skills/imagesSkills/github.svg"
            alt="GitHub"
          />
        </button>

        <button onClick={() => handleClick(urlDeploy)} className="btn-projects">
          <img
            className="img-projects"
            src="./src/Skills/imagesSkills/deploy.svg"
            alt="Deploy"
          />
        </button>
      </div>
    </div>
  );
};
