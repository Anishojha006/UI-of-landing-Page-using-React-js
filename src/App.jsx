import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Ourservices from './components/Ourservices'
import Section2 from './components/Section2'

const App = () => {
  return (
    <div className='PaentNav'>
      <Navbar/>
      <Section/>
      <Ourservices/>
      <Section2/>
    </div>
  )
}

export default App