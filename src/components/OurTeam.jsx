import React from 'react'
import Button from './Button'
import Teammate1 from '../assets/Teammate1.png'
import Teammate2 from '../assets/Teammate2.png'
import Teammate3 from '../assets/Teammate3.png'
import Teammate4 from '../assets/Teammate4.png'
import Teammate5 from '../assets/Teammate5.png'
import Teammate6 from '../assets/Teammate6.png'
import Widebutton from './Widebutton'

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

            <div className="team-mate-details">
                <img src={Teammate2} />
                <div className="team-details">
                    <h4>Jocely Schleifer</h4>
                <p>Managing Director</p>
                </div>
            </div>

            <div className="team-mate-details">
                <img src={Teammate3} />
                <div className="team-details">
                    <h4>Jocely Schleifer</h4>
                <p>Managing Director</p>
                </div>
            </div>
            <div className="team-mate-details">
                <img src={Teammate4} />
                <div className="team-details">
                    <h4>Jocely Schleifer</h4>
                <p>Managing Director</p>
                </div>
            </div>

            <div className="team-mate-details">
                <img src={Teammate5} />
                <div className="team-details">
                    <h4>Jocely Schleifer</h4>
                <p>Managing Director</p>
                </div>
            </div>

            <div className="team-mate-details">
                <img src={Teammate6} />
                <div className="team-details">
                    <h4>Jocely Schleifer</h4>
                <p>Managing Director</p>
                </div>
            </div>

            
        </div>
        <Widebutton text="See all members" />
    </div>
  )
}

export default OurTeam