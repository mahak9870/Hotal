import React from 'react'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'
import Standard from '../components/Standard'
import Offers from '../components/Offers'
import Spaces from '../components/Spaces'
import ContactUS from '../components/ContactUS'

function HomePage() {
  return (
    <div>
       <Home />
        <AboutUs />
        <Standard/>
        <Offers />
        <Spaces />
        <ContactUS />
    </div>
  )
}

export default HomePage
