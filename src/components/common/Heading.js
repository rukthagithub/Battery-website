import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Heading = ({ title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });
  return (
    <>
      <div className="grid  lg:grid-cols-5 px-10">
        <div className="col-span-2">
          <h2 className="text-4xl tracking-wider font-semibold uppercase text-[#0D0D0D]">
            {title}
          </h2>
          <div
            className="w-24 h-[3px]  bg-primary mt-3"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          ></div>
        </div>

        <div className=" col-span-3 leading-relaxed text-black text-justify text-base   w-[90%] lg:py-0 py-4 ">
          {description}
        </div>
      </div>
    </>
  );
};

export default Heading;
