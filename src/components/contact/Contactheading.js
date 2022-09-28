import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Aboutbg from "../../img/aboutbg.png";

const Contactheading = () => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "assets/icons/icon1.png",
  //     title: "Worldwide Support",
  //     para: "Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum  has been the.      ",
  //   },
  //   {
  //     id: 2,
  //     img: "assets/icons/icon2.png",
  //     title: "Manufacturing",
  //     para: "Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum  has been the.      ",
  //   },
  //   {
  //     id: 3,
  //     img: "assets/icons/icon3.png",
  //     title: "Quality Assurance",
  //     para: "Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum  has been the.      ",
  //   },
  // ];

  return (
    <div
      className=" w-full h-screen bg-bottom bg-cover rounded-sm "
     style={{backgroundImage:`url('/assets/images/aboutbg.png')`}}
    >
      <div className="absolute space-y-6 left-16 top-64">
        <div className="w-[60%]">
          <div className="flex items-center gap-5">
            <div className="h-10 w-[0.15rem] bg-primary"></div>
            <p className="text-sm text-primary drop-shadow-xl font-semibold tracking-widest">
              About Us
            </p>
          </div>
          <h1 className="space-y-2 fontfamily textshadow text-3xl py-3 w-[94%] lg:text-5xl text-white  font-semibold textshadow capitalize">
            <p> Lorem Ipsum is simply dummy text of the printing.</p>
          </h1>
          <p className="text-xl text-white">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="flex gap-3 items-center justify-items-center group bg-primary rounded-full px-6 py-2 cursor-pointer mt-3">
            <BsArrowRight
              size={24}
              className="text-white group-hover:translate-x-2 duration-150"
            />
            <p className="text-white ">Learn More</p>
          </button>
        </div>

        {/* <div className="pr-16 pt-20">
          <div className="w-100 bg-[#000000c5] rounded-xl py-5  mx-auto ">
            <div className="px-20 ">
              <div className="grid grid-cols-3 py-5  gap-7">
                {data.map((item) => (
                  <>
                    <div className=" flex items-center gap-5">
                      <div>
                        <img src={item.img} alt="icon" className="w-24 h-8" />
                      </div>
                      <div>
                        <h1 className="text-white text-lg font-semibold">
                          {" "}
                          {item.title}
                        </h1>
                        <hr className="bg-white my-2" />
                        <p className="text-white text-xs">{item.para}</p>
                        <BsArrowRight
                          size={24}
                          className="text-white cursor-pointer hover:translate-x-2 duration-150 mt-2"
                        />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contactheading;
