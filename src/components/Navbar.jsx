import React from 'react'
import img from '../assets/Branding.svg'
import hamburger from '../assets/hamburger.svg'
import union from '../assets/Union.svg'
import getintouch from '../assets/GetinTouch.svg'

const Navbar = () => {
  return (
   <div className='navbar'>
    <div className="div1">
      <img src={img} alt="" />
    </div>
    <div className="div2">
      <h5>Project</h5>
      <h5>About</h5>
      <h5>Team</h5>
      <h5>Contact</h5>
    </div>
    <div className="div3">
      <img src={hamburger} alt="" />
    </div>
    <div className="div4">
      <p> <img src={union} />  Services </p>
    </div>
    <div className="div5">
      <p><img src={getintouch}/> Get in touch </p>
    </div>
   </div>
  )
}

export default Navbar