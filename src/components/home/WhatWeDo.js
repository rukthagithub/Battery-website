import { useInView } from "framer-motion";
import React,{useRef} from "react";
import { BsArrowRight } from "react-icons/bs";


const WhatWeDo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref);
  
  const data = [
    {
      id: 1,
      image: "/assets/images/we1.png",
    },
    {
      id: 2,
      image: "/assets/images/we2.png",
    },
    {
      id: 3,
      image: "/assets/images/we3.png",
    },
    {
      id: 4,
      image: "/assets/images/we4.png",
    },
    {
      id: 5,
      image: "/assets/images/we5.png",
    },
    {
      id: 6,
      image: "/assets/images/we6.png",
    },
    {
      id: 7,
      image: "/assets/images/we7.png",
    },
    {
      id: 8,
      image: "/assets/images/we8.png",
    },
    {
      id: 9,
      image: "/assets/images/we9.png",
    },
    {
      id: 10,
      image: "/assets/images/we10.png",
    },
    {
      id: 11,
      image: "/assets/images/we11.png",
    },
    {
      id: 12,
      image: "/assets/images/we12.png",
      css: "bg-primary text-white",
    },
  ];
  return (
    <div className="bg-secondary py-16">
      <div className="container-ats grid lg:grid-cols-12 items-center justify-between   bg-white rounded-md drop-shadow-2xl shadow-xl">
        <div className="col-span-3">
          <img
            src="/assets/images/Group 413.png"
            className="h-[395px] drop-shadow-2xl w-full ml-[40px] lg:ml-[0px] lg:mb-0 mb-12 md:ml-[160px]"
          />
        </div>
        <div className="col-span-5 ">
          <div className="space-y-4 px-12">
            <h2 className="text-2xl font-bold tracking-widest">
              <span className="decoration-primary">WHAT</span> WE DO ?
              <h2 className="w-24 h-[2px] bg-primary mt-2" 
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              ></h2>
            </h2>
            
            <p className="font-semibold tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="tracking-wide text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <p>
              <button className="flex gap-3 items-center justify-items-center group bg-primary rounded-full px-6 py-2 cursor-pointer mt-3">
                <BsArrowRight
                  size={24}
                  className="text-white group-hover:translate-x-2 duration-150 "
                />
                <p className="text-white ">Know More</p>
              </button>
            </p>
          </div>
        </div>
        <div className="col-span-4 ml-[40px] lg:ml-[0px] md:ml-[160px]">
          <div class="grid grid-rows-4  grid-flow-col">
            {data.map((obj, e) => (
              <div
                key={e}
                className={`${obj.css} border flex flex-col justify-center items-center py-2.5 -space-y-4`}
              >
                <img src={obj.image} className={`p-4 w-16`} />
                <p className="text-sm">Lorem Ipsum</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
