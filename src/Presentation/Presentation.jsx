import React from 'react'
import './presentation.css'


export const Presentation = () => {

  const redirectLinkedin = () => {
    window.open('https://www.linkedin.com/in/fernando-d%C3%ADaz-9a49a7201/', '_blank');
  }

  const redirectGitHub = () => {
    window.open('https://github.com/FernandoDiaz01?tab=repositories', '_blank');
  }


  return (
    <>
    <div className="main-container">
    <div className="presentation"> 
        <h1 className='h1'>Fernando Diaz</h1>
        <h3 className='h3'>Desarrollador Front End</h3>
    </div> 
 


     <div className="btn-container">
        <button className='btn'><i class="fa-solid fa-file fa-xl"></i><br/> Cv </button>
        <button className='btn' onClick={() => redirectLinkedin()}> <i class="fa-brands fa-linkedin fa-xl"></i><br/>Linkedin</button>
        <button className='btn' onClick={()=> redirectGitHub()}><i class="fa-brands fa-github fa-xl"></i><br/>GitHub</button>
    </div>
    </div>
   
    
</>
  )
}

