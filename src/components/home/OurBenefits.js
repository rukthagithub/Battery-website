import React from "react";
import Heading from "../common/Heading";
import { TbWorldUpload } from "react-icons/tb";
import { BsArrowRight, BsPatchCheckFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery, TbPackgeExport } from "react-icons/tb";
import { GiFactory } from "react-icons/gi";

const OurBenefits = () => {
  return (
    <>
      <div className="container-ats space-y-12 pt-20">
        <Heading
          title="OUR BENEFITS"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s"
        />

        <section>
          <div class="grid lg:grid-cols-6  grid-cols-1">
            <div class="relative group col-span-2 row-span-2 bg-secondary w-fit">
              <div className="z-10 absolute text-white bottom-0 px-6 space-y-2 py-4">
                <h2 className="text-semibold text-xl drop-shadow-2xl">
                  Lorem Ipsum is simply dummy text
                </h2>
                <p className="text-sm pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button className="flex gap-3 items-center justify-items-center group outline outline-primary rounded-full px-6 py-1 cursor-pointer">
                  <BsArrowRight
                    size={24}
                    className="text-white group-hover:translate-x-2 duration-150"
                  />
                  <p className="text-white text-sm font-semibold">Contact Us</p>
                </button>
              </div>
              <img
                src="/assets/images/benifits.png"
                className="relative w-96 h-80"
              />
            </div>
            <div class="group col-span-2 bg-secondary hover:bg-black flex justify-center items-center gap-2 duration-500">
              <TbWorldUpload className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold">
                WORLDWIDE SUPPORT
              </h2>
            </div>
            <div className="group bg-third flex flex-col justify-center items-center hover:bg-primary duration-500 space-y-2">
              <BsPatchCheckFill className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold text-center">
                QUALITY
                <br />
                ASSURANCE
              </h2>
            </div>
            <div class="group  bg-[#D9D9D9] hover:bg-black flex flex-col justify-center items-center gap-2 duration-500">
              <MdOutlineSupportAgent className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold">
                SUPPORT 24/7
              </h2>
            </div>
            <div class="group  bg-[#D9D9D9] hover:bg-black flex flex-col justify-center items-center gap-2 duration-500">
              <TbTruckDelivery className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold">
                TIMELY DELIVERY
              </h2>
            </div>
            <div className="group bg-third flex flex-col justify-center items-center hover:bg-primary duration-500">
              <TbPackgeExport className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold text-center">
                BEST PACKAGING
              </h2>
            </div>
            <div class="group  bg-[#D9D9D9] hover:bg-black flex flex-col justify-center items-center gap-2 duration-500">
              <TbWorldUpload className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold">
                WORLDWIDE <br />
                SUPPORT
              </h2>
            </div>
            <div className="group bg-third flex flex-col justify-center items-center hover:bg-primary duration-500">
              <GiFactory className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold text-center">
                MANUFACTURING
              </h2>
            </div>
            <div className="group col-span-2 bg-gray-100 flex justify-center items-center gap-2 py-6 hover:bg-black">
              <MdOutlineSupportAgent className="w-16 h-16 group-hover:text-white group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white">SUPPORT 24/7</h2>
            </div>
            <div className="group bg-third flex flex-col justify-center items-center hover:bg-primary duration-500 py-6">
              <GiFactory className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold text-center">
                MANUFACTURING
              </h2>
            </div>
            <div class="group  bg-[#D9D9D9] hover:bg-black flex flex-col justify-center items-center gap-2 duration-500 py-6">
              <TbTruckDelivery className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold">
                TIMELY DELIVERY
              </h2>
            </div>
            <div className="group bg-third flex flex-col justify-center items-center hover:bg-primary duration-500 py-6">
              <TbPackgeExport className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold text-center">
                BEST PACKAGING
              </h2>
            </div>
            <div class="group  bg-[#D9D9D9] hover:bg-black flex flex-col justify-center items-center gap-2 duration-500 py-6">
              <BsPatchCheckFill className="w-16 h-16 group-hover:text-white text-gray-700 group-hover:scale-105 duration-300" />
              <h2 className="group-hover:text-white font-semibold text-center">
                QUALITY <br />
                ASSURANCE
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurBenefits;
