import React from 'react'
import Button from './Button'
import Teammate1 from '../assets/Teammate1.png'

const OurTeam = () => {
  return (
    <div className='Our-Team'>
        <Button text="Our Team"/>
        <div className="team-memebers">
            <div className="text">
                We are passionate about creating visually stunning and functional solutions that communicate effectively.
            </div>
            <div className="team-mate-details">
                <img src={Teammate1} />
                <div className="team-details">
                    <h4>Jocely Schleifer</h4>
                <p>Managing Director</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam