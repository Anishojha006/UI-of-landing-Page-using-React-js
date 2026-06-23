import React from 'react'
import img from '../assets/bgimage.png'
import krate from '../assets/logoipsum-217 1.svg'
import massui from '../assets/logoipsum-217 2.svg'
import altall from '../assets/altall.svg'
import kalo from '../assets/kalo.svg'
import kinua from '../assets/kinua.svg'
import tano from '../assets/tano.svg'

const Section = () => {
  return (
    <div className='section'>
      <h1>Krate digital and motion studio</h1>
      <div className="imgGrid">
        <div id="div1"></div>
        <div id="div2"></div>
        <div id="div3"></div>
        <div id="div4"></div>
        <div id="div5"></div>
        <div id="div6"></div>
        <div id="div7"></div>
        <div id="div8"></div>
        <div id="div9"></div>
        <div id="div10"></div>
      </div>

      <div className="text-container">
        <p>We are passionate about creating visually stunning and functional solutions that communicate effectively. I have a keen eye for detail and a deep understanding of design principles, which I use to deliver projects that exceed my clients' expectations.</p>
        <div className="customer-logo">
          <div>
            <img src={krate} />
            <img src={massui} />
            <img src={altall}/>
          </div>
          <div>
            <img src={kalo} />
     <img src={kinua} />
            <img src={tano}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section