import React from 'react'
import ContactFooter from '../components/common/ContactFooter';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Contactbanner from "../components/contact/Contactbanner";
// import ContactFooters from '../components/contact/ContactFooters';
import Contactheading from '../components/contact/Contactheading';
import Banner from '../components/home/Banner';

const Contact = () => {
  return (
    <div>
        <Navbar/>
        
        <Banner img="/assets/images/aboutbg.png" pageTitle="Get in touch us" title="Lorem Ipsum is simply dummy text of the printing." des="Solar Tubular Batteries manufactured by Kamtech Solar power Producer PVT. LTD" />
         <Contactbanner/> 
       {/* <ContactFooters/> */}
       <Footer/>
    
    </div>
  )
}

      
    

export default Contact;
