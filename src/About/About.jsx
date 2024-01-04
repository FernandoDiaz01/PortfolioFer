import React from 'react'
import img from '../assets/FotoPortfolio.png'
import './about.css'




export const About = () => {
  return (
    <>
      <div className="title" id='about'>
    <h6>Sobre mi</h6>
    </div>
    <div className="about-container">
    <div className="container-img">
    <img src={img} alt="imgportfolio" />
    </div>
  
    
      <div className="text"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe cumque consequuntur fugiat quidem illum harum? Eaque ducimus aspernatur doloribus quaerat repellendus doloremque deserunt consectetur non, modi quam odio quidem.
      Possimus optio in soluta incidunt, dolore molestias suscipit harum eius repellendus consequatur inventore hic neque dignissimos repellat est tenetur quos recusandae explicabo itaque quaerat alias ad. Itaque nemo assumenda et.
      Possimus sint corporis optio nisi accusantium veniam hic consequatur! Eveniet impedit accusantium facilis vero dolorum, sint exercitationem adipisci tenetur deleniti dolores iure minima, quo labore repudiandae iste, sit harum? Nisi.
      Temporibus, eveniet a eius quia possimus cupiditate excepturi voluptatibus minima natus officia laboriosam numquam! Deserunt accusantium repudiandae possimus vel repellendus magnam eius pariatur. Velit, eveniet minus. Quo possimus porro architecto?
      Quo dicta deleniti, tenetur pariatur ad nulla illo sapiente exercitationem quibusdam, officia modi eum ipsa ratione eligendi mollitia esse porro labore nihil natus unde accusantium, minus deserunt illum sed! Laboriosam!
        </p>
        </div>
        </div>
   
      </>
    
  )
}
