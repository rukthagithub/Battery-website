import React, { useRef } from "react";
import { GoDeviceMobile } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { BiMobile } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { useInView } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BiTime } from "react-icons/bi";


const Contactbanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="bg-white relative">
      <div className="container-ats">
        <img
          src="/assets/images/grid.png"
          alt=""
          className="absolute -left-10 bottom-20 "
        />

        <img
          src="/assets/images/ellipse.png"
          alt=""
          className="absolute right-0 bottom-0 "
        />
        <div className="grid lg:grid-cols-2  grid-cols-1    justify-between container-default pt-[40px]   relative items-center ">
          <div className="flex flex-col space-y-3 z-10 ">
            <h3 className="text-3xl text-black font-bold ">Contact Us</h3>
            <div
              className="h-1 w-36 bg-primary"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            ></div>
            <p className="text-black text-sm leading-relaxed text-justify w-[80%] py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <div className="contactdetail flex gap-[100px]">
          

              <div className="flex flex-col ">
                <p className="font-bold pl-4">Contact No.</p>
                <p className="pl-4 pt-2">+91 595637112</p>
              </div>

           
              <div className="flex flex-col">
                <p className="font-bold pl-4">Email ID</p>
                <p className="pl-4 pt-2">Export@KamtechBatteries.com</p>
              </div>
            </div>

            <div className="contactdetail flex pt-8">
            
              <div className="flex flex-col">
                <p className="font-bold pl-4">Address</p>
                <p className="pl-4 pt-2 w-[230px]">
                  Kamtech Solar Power Products Pvt. Ltd Roorkee
                  Uttarakhand.INDIA
                </p>
              </div>

              {/* <BiTime
                color="bg-green-500"
                size={25}
                className="w-12 h-12 rounded-full bg-[#Ec2028] text-white pt-2 pb-2"
              /> */}
              <div className="flex flex-col">
                <p className="font-bold pl-4">Open House</p>
                <p className="pl-4 pt-2">Monday - Friday</p>
                <p className="pl-4 pt-2">9:00AM - 05:00PM</p>
              </div>
            </div>
          </div>

          <div className="w-full md:flex md:justify-end z-10  relative -bottom-[30px]">
            <div className="w-[80%] rounded-xl border border-[#ffffff6a]  bg-black p-8 flex flex-col space-y-5 justify-center items-center ">
              <input
                type="text"
                className="input-glassmorphics"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                className="input-glassmorphics "
                placeholder="Enter Email Address"
              />
              <input
                type="text"
                className="input-glassmorphics "
                placeholder="Enter Phone Number"
              />
              <textarea
                className="input-glassmorphics text-area"
                rows={5}
                placeholder="Enter Your Message"
              ></textarea>
              <button className="uppercase  sm:px-28 sm:py-3  text-white bg-primary button-animate rounded-xl text-sm">
                Submit Your Query
              </button>
            </div>
          </div>
        </div>

        <div className="container-full mb-[90px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54804423.795019045!2d4.022724849999994!3d33.03022085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b42b217bcb1%3A0x2c3145ce5e87e2c5!2sKam%20Tech%20Solar%20Power%20Products%20Private%20Limited!5e0!3m2!1sen!2sin!4v1662110579205!5m2!1sen!2sin"
            width={1200}
            height={450}
            style={{border:0}}
            className="  rounded-2xl" 
  
           
          />
        </div>
      </div>

      {/* <p className="flex justify-start item-center gap-4 pb-6 text-sm">
            <span>
              <GoDeviceMobile color="#fff" size={25} />
            </span>
            <span className="text-black">+91-9876543219, +91-9876543219</span>
          </p>
          <p className="flex justify-start item-center gap-4 pb-6 text-sm">
            <span>
              <FiMail color="#fff" size={25} />
            </span>
            <span className="text-black">info@bizzeonline.com</span>
          </p>
          <p className="flex justify-start item-center gap-4 pb-6 text-sm">
            <span>
              <MdLocationPin color="#fff" size={25} />
            </span>
            <span className="text-black">
              359, Sector 28, Gurugram, Haryana
            </span>
            </p> */}
    </div>
  );
};

export default Contactbanner;
