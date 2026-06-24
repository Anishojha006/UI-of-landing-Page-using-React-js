import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Ourservices from './components/Ourservices'
import Section2 from './components/Section2'
import OurTeam from './components/OurTeam'

const App = () => {
  return (
    <div className='PaentNav'>
      <Navbar/>
      <Section/>
      <Ourservices/>
      <Section2/>
      <OurTeam/>
    </div>
  )
}

export default App