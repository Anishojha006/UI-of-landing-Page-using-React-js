import React from 'react'
import serviceimg1 from '../assets/serviceimg1.png'
import serviceimg2 from '../assets/serviceimg2.png'
import serviceimg3 from '../assets/serviceimg3.png'
import serviceimg4 from '../assets/serviceimg4.png'
import serviceimg5 from '../assets/serviceimg5.png'
import plusIcon from '../assets/plus-sign.png'
import Button from './Button'

const Ourservices = () => {
  return (
    <div className='ourservices'>
      <Button text="Our Services"/>

     <div className="services-row">
      <div className="service-1">
        <div className="semi-circle"><img src={serviceimg1} />     <h1>Web & Mobile Design</h1></div>
       <img src={plusIcon} alt="" />
     
      </div>
      <div className="service-1">
        <div className="semi-circle"><img src={serviceimg2} />     <h1>Brand Identity</h1></div>
       <img src={plusIcon} alt="" />
     
      </div>
      <div className="service-1">
        <div className="semi-circle"><img src={serviceimg3} /><h1>App Development</h1></div>
       <img src={plusIcon} alt="" />
     
      </div>
      <div className="service-1">
        <div className="semi-circle"><img src={serviceimg5} /><h1>Consultancy</h1></div>
       <img src={plusIcon} alt="" />
     
      </div>
      <div className="service-1">
        <div className="semi-circle"><img src={serviceimg5} /> <h1>Packaging</h1></div>
       <img src={plusIcon} alt="" />
     
      </div>
      
      
     </div>
    </div>
  )
}

export default Ourservices