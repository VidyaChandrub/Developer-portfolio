import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'

const Projects = () => {
  return (
    <div>
      
    <Navbar/>
    <HeroImg2 heading="PROJECTS." text="Some of my most recent projects."/>
    <PricingCard />
    <Footer />
    </div>
  )
}

export default Projects