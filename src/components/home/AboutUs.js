import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useInView } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  const data = [
    {
      id: 1,
      img: "assets/icons/icon4.png",
      title: "OUR MISSION",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 2,
      img: "assets/icons/icon5.png",
      title: "OUR VISION",
      para: "Lorem Ipsum is simply dummy text of the  printing and typesetting industry.   ",
    },
    {
      id: 3,
      img: "assets/icons/icon6.png",
      title: "OUR VALUES",
      para: "Lorem Ipsum is simply dummy text of the  printing and typesetting industry.",
    },
  ];

  return (
    <div className="bg-[#F1F1F1]">
      <div className="container-ats">
        <div className="grid lg:grid-cols-10 grid-cols-1 items-center justify-items-center gap-10 py-20 ">
          <div className="lg:col-span-4 space-y-4">
            <h2 className="flex flex-col gap-[0.1rem]">
              <span className="text-3xl font-semibold  tracking-wider text-primary ">
                ABOUT US
              </span>
              <h2
                className="h-[2.5px] w-24 bg-primary"
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              ></h2>
              <br />
              <span className="text-2xl  text-black font-semibold leading-snug">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
              <br />
              <span className="text-base  text-black text-justify leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </h2>
            <button className="flex gap-3  justify-items-center group bg-primary rounded-full px-6 py-2 cursor-pointer">
              <BsArrowRight
                size={24}
                className="text-white group-hover:translate-x-2 duration-150"
              />
              <p className="text-white ">Know More</p>
            </button>
          </div>
          <div className="lg:col-span-3 ">
            <div className="relative">
              <div className="  h-24 w-24 p-3   bg-primary shadow-md absolute lg:-left-10  bottom-0 bg-red-500">
                <p className="text-2xl text-white font-bold text-center ">10+</p>
                <p className="text-white text-[10px] text-center">
                  Years of Experience
                </p>
              </div>
              <img src="/assets/images/aboutimg.png" alt="" className=" " />
            </div>
          </div>
          <div className="lg:col-span-3">
            {data.map((item) => (
              <>
                <div className="flex  items-center justify-center gap-4 py-4">
                  <div className="bg-primary rounded-full p-3 bg-red-500">
                    <img src={item.img} alt=" image" />
                  </div>
                  <div>
                    <p className="text-black text-xl font-semibold tracking-wider">
                      {item.title}
                    </p>
                    <p className="text-black text-sm py-2">{item.para}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
