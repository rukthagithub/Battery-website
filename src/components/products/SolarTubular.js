import { useInView } from "framer-motion";
import React, { useRef } from "react";
import HeadingOnly from "../common/HeadingOnly";

const SolarTubular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const data = [
    {
      id: 1,
      title: "Longer Backup",
      img: "/assets/icons/pro1.png",
    },
    {
      id: 2,
      title: "High Conductive Material",
      img: "/assets/icons/pro2.png",
    },
    {
      id: 3,
      title: "Less Evaporation",
      img: "/assets/icons/pro3.png",
    },
    {
      id: 4,
      title: "Low Internal Resistance",
      img: "/assets/icons/pro4.png",
    },
    {
      id: 5,
      title: "Leak Proof WLI",
      img: "/assets/icons/pro5.png",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-7 container-ats py-12">
        <div className="col-span-4 space-y-4 pt-8">
          <HeadingOnly title="SOLAR TUBULAR BATTERIES" />
          <p className="text-justify">
            Solar Tubular Batteries manufactured by Kamtech Solar Power Products
            Pvt. Ltd are low maintenance batteries with thick positive tubular
            plates which are known for its excellent characteristic of power
            back up for longer duration. They are designed with a bigger
            electrolyte reserve volume which ensures less topping up required
            during service life which is as less as once in a year.
          </p>
          <div className="p-4 space-y-4">
            {data.map((e, obj) => (
              <div className="flex items-center gap-4"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
              >
                <img
                  src={e.img}
                  className="p-3 w-12 h-12 bg-primary rounded-full"
                />
                <h2 className="font-semibold">{e.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 relative">
          <div className="w-96 right-0 h-[90%] border-2  lg:block hidden   border-primary rounded absolute top-0 -z-10"></div>
          <img
            src="/assets/images/solar.png"
            className="w-96 pt-8 absolute right-10"
          />
          <div className="w-72 left-6  h-36 border-2 border-primary lg:block hidden rounded absolute bottom-0 -z-10"></div>
        </div>
      </div>
    </>
  );
};

export default SolarTubular;
