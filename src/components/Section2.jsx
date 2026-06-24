import React from 'react'
import Button from './Button'
import Gridimg1 from '../assets/Gridimg1.png'
import Gridimg2 from '../assets/Gridimg2.png'
import Gridimg3 from '../assets/Gridimg3.png'
import Gridimg4 from '../assets/Gridimg4.png'




const Section2 = () => {
  return (
    <div className='section2'>
      <Button text="Recent Work" />
      <div className="work-showcase">
        <div id="w-1">
          <div className='img-div'>
            <img src={Gridimg1} alt="" />
          </div>
          <h1>Galaxia Branding</h1>
        </div>
        <div id="w-2">
          <div className='img-div'>
            <img src={Gridimg2} />
          </div>
          <h1>John Mayer NYC</h1>
        </div>
        <div id="w-3">
          <div className='img-div'>
            <img src={Gridimg3} alt="" />
          </div>
          <h1>Nayzak Patterns</h1>
        </div>
        <div id="w-4">
          <div className='img-div'>
            <img src={Gridimg4} alt="" />
          </div>
          <h1>Crave Chips</h1>
        </div>
      </div>
    </div>
  )
}

export default Section2