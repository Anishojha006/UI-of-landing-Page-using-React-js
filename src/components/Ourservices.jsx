import React from 'react'
import icon from '../assets/ourservicesIcon.svg'

const Ourservices = () => {
  return (
    <div className='ourservices'>
     <button><img src={icon}/> <span>Our Services</span> </button>

     <div className="services-grid">
      <div className="service-1"></div>
      <div className="service-2"></div>
      <div className="service-3"></div>
      <div className="service-4"></div>
      <div className="service-5"></div>
     </div>
    </div>
  )
}

export default Ourservices