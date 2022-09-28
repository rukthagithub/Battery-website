import React from 'react'
import ContactFooter from '../components/common/ContactFooter'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Banner from '../components/home/Banner'
import Application from '../components/products/Application'
import Dimension from '../components/products/Dimension'
import Model from '../components/products/Model'
import SolarTubular from '../components/products/SolarTubular'

const Products = () => {
  return (
    <>
    <Navbar/>
    <Banner
        img="/assets/images/bannerThree.png"
        pageTitle="GET IN TOUCH WITH US"
        title="Lorem Ipsum is simply dummy text of the printing."
      />
    <SolarTubular/>
    <Application/>
    <Model/>
    <Dimension/>
    <ContactFooter/>
    <Footer/>
    </>
  )
}

export default Products