import React from 'react'
import Faq from '../components/about/Faq'
import Mission from '../components/about/Mission'
import OurLeader from '../components/about/OurLeader'
import Story from '../components/about/Story'
import WhatSolution from '../components/about/WhatSolution'
import ContactFooter from '../components/common/ContactFooter'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Banner from '../components/home/Banner'

const About = () => {
  return (
    <>
    <Navbar/>
    <Banner
        img="/assets/images/aboutbg.png"
        pageTitle="GET IN TOUCH WITH US"
        title="Lorem Ipsum is simply dummy text of the printing."
      /> 
    <WhatSolution/>
    <Mission/>
    <Story/>
    <OurLeader/>
    <Faq/>
    <ContactFooter/>
    <Footer/>
    
    </>
  )
}

export default About