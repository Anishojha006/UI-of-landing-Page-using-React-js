import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Ourservices from './components/Ourservices'
import Section2 from './components/Section2'
import OurTeam from './components/OurTeam'
import Section3 from './components/Section3'


const App = () => {
  return (
    <div className='PaentNav' >
      <Navbar img={"src/assets/Hamburger.svg"} calender={"src/assets/GetinTouch.svg"} calenderText="Get in Touch" union="src/assets/Union.svg" unionText="Services" />
      <Section />
      <Ourservices />
      <Section2 />
      <OurTeam />
      <Section3 />
     <Navbar
  text="Compser"
  email="hello@Compser.io"
  calenderText="© 2088 Nayzak Design"
  img1={"src/assets/img1.png"}
  img2={"src/assets/img2.png"}
  img3={"src/assets/img3.png"}
  img4={"src/assets/img4.png"}
/>
    </div>
  )
}

export default App