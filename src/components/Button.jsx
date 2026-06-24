import React from 'react'
import icon from '../assets/ourservicesIcon.svg'
const Button = (props) => {
  return (
    <div className='button-class'>
           <button><img src={icon}/> <span>{props.text}</span> </button>
    </div>
  )
}

export default Button