
import './presentation.css'


export const Presentation = () => {

const redirectSocialMedia = (url) =>{
  window.open(url,'_blank');
}

  return (
    <>
    <div className="main-container">
    <div className="presentation"> 
        <h1 className='h1'>Fernando Diaz</h1>
        <h3 className='h3'>Desarrollador Front End</h3>
    </div> 
 


     <div className="btn-container">
        <button className='btn'><i className="fa-solid fa-file fa-xl"></i><br/> Cv </button>
        <button className='btn' onClick={() => redirectSocialMedia('https://www.linkedin.com/in/fernando-d%C3%ADaz-9a49a7201/')}> <i className="fa-brands fa-linkedin fa-xl"></i><br/>Linkedin</button>
        <button className='btn' onClick={()=> redirectSocialMedia('https://github.com/FernandoDiaz01?tab=repositories')}><i className="fa-brands fa-github fa-xl"></i><br/>GitHub</button>
    </div>
    </div>
   
    
</>
  )
}

