import React, { useRef } from "react";
import Slider from "react-slick";
// import ArrowNext from "./arrow-next.svg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import Banner from "./Banner";

const BannerSliderSlick = () => {
  const data = [
    {
      id: 1,
      img: "assets/icons/icon1.png",
      title: "Worldwide Support",
      para: "Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum  has been the.      ",
    },
    {
      id: 2,
      img: "assets/icons/icon2.png",
      title: "Manufacturing",
      para: "Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum  has been the.      ",
    },
    {
      id: 3,
      img: "assets/icons/icon3.png",
      title: "Quality Assurance",
      para: "Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum  has been the.      ",
    },
  ];
  const Banner = [
    {
      id: 1,
      img: "/assets/images/bannerimg.png",
    },
   
  ];

  const settings = {
    dots: false,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: false,
    prevArrow: <FiArrowLeft size={50} />,
    nextArrow: <FiArrowRight size={50} />,
  };
  return (
    <div className="relative">
  
        {Banner.map((e) => (
          <div id={e.id} className="relative">
            <img src={e.img} className=" w-full" />
           
          </div>
        ))}
   

      <div className=" lg:absolute lg:space-y-6 lg:top-60 left-16">
        <div className="w-[60%]">
          <div className="flex items-center gap-5">
            <div className="h-10 w-[0.15rem] bg-primary"></div>
           
          </div>
          <h1 className="space-y-2 fontfamily textshadow lg:block hidden py-3 w-[94%] lg:text-5xl lg:text-white  font-semibold textshadow capitalize">
            <p> Lorem Ipsum is simply dummy text of the printing.</p>
          </h1>
          <p className="text-xl text-white lg:block hidden ">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="flex gap-3 items-center justify-items-center group bg-primary rounded-full px-6 py-2 cursor-pointer mt-3">
            <BsArrowRight
              size={24}
              className="text-white group-hover:translate-x-2 duration-150"
            />
            <p className="text-white lg:block hidden ">Learn More</p>
          </button>
        </div>

        <div className="pr-16 lg:pt-20">
          <div className="w-100 bg-[#000000c5] rounded-xl py-5  mx-auto lg:block hidden">
            <div className="px-20 ">
              <div className="grid lg:grid-cols-3   py-5  gap-7">
                {data.map((item) => (
                  <>
                    <div className=" flex items-center gap-5 ">
                      <div>
                        <img src={item.img} alt="icon" className="w-20 h-10" />
                      </div>
                      <div>
                        <h1 className="lg:text-white text-lg font-semibold">
                          {" "}
                          {item.title}
                        </h1>
                        <hr className="lg:bg-white my-2" />
                        <p className="lg:text-white text-xs">{item.para}</p>
                        <BsArrowRight
                          size={24}
                          className="lg:text-white cursor-pointer hover:translate-x-2 duration-150 mt-2"
                        />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute text-red-500 -top-10 right-7 flex items-center h-full gap-8 pr-12 flex-col justify-center"
        style={{ textAlign: "center" }}
      >
      
      </div>
    </div>
  );
};

export default BannerSliderSlick;
