import React from "react";
import ContactFooter from "../components/common/ContactFooter";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { BsArrowRight } from "react-icons/bs";
import Banner from "../components/home/Banner";

const BlogDetail = () => {
  return (
    <div>
      <Navbar />

      <Banner
        img="/assets/images/aboutbg.png"
        pageTitle="About Us"
        title="Lorem Ipsum is simply dummy text of the printing."
      />

      <div className="lg:px-32  px-5">
        <div className=" pt-12 relative">
          <img src="assets/images/blog-detail.png" className="w-full  h-full" />

          <div className="absolute lg:bottom-16 bottom-10 px-12">
            <div className="flex gap-5">
              <img src="assets/images/star.svg" />

              <p className="text-white">Top Story</p>
              <p className="text-white">|</p>
              <p className="text-white">4 min read</p>
            </div>

            <h4 className="text-white pt-3 lg:text-3xl font-bold  lg:w-[55%] w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h4>

            <div className="flex gap-4">
              <div className="flex gap-2 pt-3 items-center justify-center">
                <img src="assets/images/eye.svg" />
                <p className="text-white text-sm font-semibold">123k Views</p>
                <p className="text-white">|</p>
              </div>

              <div className="flex gap-2 pt-3 items-center justify-center">
                <img src="assets/images/heart-icon.svg" />
                <p className="text-white text-sm font-semibold">10k Likes</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-semibold pt-4">
          By : Vanshika Khanna | 7th july 2022
        </h3>
        <p className="text-justify py-5 leading-loose">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p className="text-justify py-5 leading-loose">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div className="lg:px-32 px-5 pb-20 pt-5">
        <div className="lg:grid grid-cols-2 gap-10">
          <div>
            <img src="assets/images/blog-image1.png" />
            <h6 className="font-semibold pt-4">
              By : Vanshika Khanna | 7th july 2022
            </h6>
          </div>
          <div className="lg:pt-0 pt-8">
            <img src="assets/images/blog-image2.png" />
            <h6 className="font-semibold pt-4">
              By : Vanshika Khanna | 7th july 2022
            </h6>
          </div>
        </div>
      </div>

      <ContactFooter />
      <Footer />
    </div>
  );
};

export default BlogDetail;
