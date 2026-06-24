import React from 'react'
import rightUpArrow from '../assets/arrow-up-right.png'

const Widebutton = (props) => {
  return (
    <div className='wide-button'>
        <button>{props.text} <img src={rightUpArrow}/> </button>
    </div>
  )
}

export default Widebutton