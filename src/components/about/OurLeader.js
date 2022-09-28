import React from "react";
import HeadingOnly from "../common/HeadingOnly";

const OurLeader = () => {
  return (
    <div className="container-ats pb-12">
      <div className="grid lg:grid-cols-5 items-center gap-2">
        <div className="col-span-2 space-y-4">
          <HeadingOnly title="OUR LEADERS" />
          <h2 className="text-xl font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <p className="tracking-wider text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="col-span-3 flex gap-8 justify-end">
          <div className="relative">
            <img
              src="/assets/images/leaderOne.png"
              className="grayscale-0 hover:grayscale w-72 h-96"
            />
            <div className="absolute bottom-0 text-white px-4 bg-black bg-opacity-50 w-full py-4">
              <h2 className="font-semibold tracking-wider">Vikram Sharma</h2>
              <p className="italic">( Founder & CEO )</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/images/leaderTwo.png"
              className="grayscale-0 hover:grayscale w-72 h-96"
            />
            <div className="absolute bottom-0 text-white px-4 bg-black bg-opacity-50 w-full py-4">
              <h2 className="font-semibold tracking-wider">Manvi Srivastav</h2>
              <p className="italic">( Co-Founder )</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeader;
