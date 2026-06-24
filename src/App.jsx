import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Ourservices from './components/Ourservices'
import Section2 from './components/Section2'
import OurTeam from './components/OurTeam'
import Section3 from './components/Section3'

const App = () => {
  return (
    <div className='PaentNav'>
      <Navbar/>
      <Section/>
      <Ourservices/>
      <Section2/>
      <OurTeam/>
      <Section3/>
      <Navbar/>
    </div>
  )
}

export default App