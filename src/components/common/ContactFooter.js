import React,{useRef} from "react";
import { GoDeviceMobile } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { useInView } from "framer-motion";


const ContactFooter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref);
  
  return (
    <div className="bg-black relative">
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
      <div className="grid lg:grid-cols-2  grid-cols-1   justify-between container-default py-20 items-center">
        <div className="flex flex-col space-y-3 z-10">
          <h3 className="text-2xl text-white">
            Contact us to know more
          </h3>
          <div className="h-1 w-36 bg-primary "
             ref={ref}
             style={{
               transform: isInView ? "none" : "translateX(200px)",
               opacity: isInView ? 1 : 0,
               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
             }}
          ></div>
          <p className="text-white text-sm leading-relaxed text-justify w-[80%] py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <p className="flex justify-start item-center gap-4 pb-6 text-sm">
            <span>
              <GoDeviceMobile color="#fff" size={25} />
            </span>
            <span className="text-white">+91-9876543219, +91-9876543219</span>
          </p>
          <p className="flex justify-start item-center gap-4 pb-6 text-sm">
            <span>
              <FiMail color="#fff" size={25} />
            </span>
            <span className="text-white">info@bizzeonline.com</span>
          </p>
          <p className="flex justify-start item-center gap-4 pb-6 text-sm">
            <span>
              <MdLocationPin color="#fff" size={25} />
            </span>
            <span className="text-white">
              359, Sector 28, Gurugram, Haryana
            </span>
          </p>
        </div>

        <div className="w-full md:flex md:justify-end z-10">
          <div className="w-[80%] rounded-xl border border-[#ffffff6a]  bg-[#ffffff14] p-8 flex flex-col space-y-5 justify-center items-center ">
            <input
              type="text"
              className="input-glassmorphic "
              placeholder="Enter Your Name"
            />
            <input
              type="text"
              className="input-glassmorphic"
              placeholder="Enter Email Address"
            />
            <input
              type="text"
              className="input-glassmorphic"
              placeholder="Enter Phone Number"
            />
            <textarea
              className="input-glassmorphic text-area"
              rows={5}
              placeholder="Enter Your Message"
            ></textarea>
            <button className="uppercase px-28 py-3  text-white bg-primary button-animate rounded-xl text-sm">
              Submit Your Query
            </button>
          </div>
        </div>
      </div>
      </div>


    </div>
  );
};

export default ContactFooter;
