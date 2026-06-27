import React from 'react'
import img from '../assets/Branding.svg'
import union from '../assets/Union.svg'
import getintouch from '../assets/GetinTouch.svg'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className="div1">
        <img src={img} alt="" />
        <span>{props.text}</span>
      </div>
      <div className="div2">
        <h5>Project</h5>
        <h5>About</h5>
        <h5>Team</h5>
        <h5>Contact</h5>
      </div>
      <div className="div3">
        <img src={props.img} />
        <h2>{props.email}</h2>
      </div>
      <div className="div4">
        <p> <img src={props.union} />  {props.unionText} </p>
      <div className='contact-Pages'>
          <img src={props.img1} />
        <img src={props.img2} />
        <img src={props.img3} />
         <img src={props.img4} />
      </div>
      </div>
      <div className="div5">
        <p><img src={props.calender} /> {props.calenderText}</p>

      </div>
    </div>
  )
}

export default Navbar