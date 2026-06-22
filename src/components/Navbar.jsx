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
      <h1>Project</h1>
      <h1>About</h1>
      <h1>Team</h1>
      <h1>Contact</h1>
    </div>
    <div className="div3">Div3</div>
    <div className="div4">Div4</div>
    <div className="div5">Div5</div>
   </div>
  )
}

export default Navbar