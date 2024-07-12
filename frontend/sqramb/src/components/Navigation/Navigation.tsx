import React from 'react'
import "./navigation.scss"
import iconProject from "../../assets/images/navIcons/iconProject.png"
import iconNewProject from "../../assets/images/navIcons/iconNewProject.png"
import iconMessage from "../../assets/images/navIcons/iconMessage.png"
import iconHome from "../../assets/images/navIcons/iconHome.png"
import iconDots from "../../assets/images/navIcons/iconDots.png"

type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className='nav-container'>
         
        <img className='nav-icons' src={iconProject} alt="iconProject" />
        <img className='nav-icons' src={iconNewProject} alt="iconNewProject" />
        <img className='nav-icons' src={iconMessage} alt="iconMessage" />
        <img className='nav-icons sizePlus' src={iconHome} alt="iconHome" />
        <p className='iconDots'>...</p>
        <p className='iconLogout'>log<span>out</span></p> 
  
      
        {/* <img className='iconDots' src={iconDots} alt="iconDots" /> */}
       
    </div>
  )
}

export default Navigation