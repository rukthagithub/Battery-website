import React from "react";
import ContactFooter from "../components/common/ContactFooter";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import { BannerSlider } from "../components/home/BannerSlider";
import BannerSliderSlick from "../components/home/BannerSliderSlick";
import OurBenefits from "../components/home/OurBenefits";
import OurBlogs from "../components/home/OurBlogs";
import OurGallery from "../components/home/OurGallery";
import OurPresence from "../components/home/OurPresence";
import OurProducts from "../components/home/OurProducts";
import Testimonials from "../components/home/Testimonials";
import TestimonialsTwo from "../components/home/TestimonialTwo";
import Video from "../components/home/Video";
import WhatWeDo from "../components/home/WhatWeDo";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      {/* <BannerSlider/> */}
      <BannerSliderSlick/>
      <AboutUs />
      <OurProducts />
      <Video />
      <WhatWeDo />
      <OurBenefits />
      <OurPresence />
      <OurGallery />
      <OurBlogs />
      <Testimonials />
      {/* <TestimonialsTwo/> */}
      <ContactFooter />
      <Footer />
    </>
  );
};

export default Home;
