import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Courses from '../components/sections/Courses'
import Partners from '../components/sections/Partners'
import Reviews from '../components/sections/Reviews'
import ContactUs from '../components/sections/ContactUs'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Courses />
      <Partners />
      <Reviews />
      <ContactUs />
    </>
  )
}

export default LandingPage
