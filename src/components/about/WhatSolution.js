import React from "react";
import HeadingOnly from "../common/HeadingOnly";

const WhatSolution = () => {
  const data = [
    {
      id: 1,
      img: "/assets/icons/sol1.png",
      title:"Competitive Pricing",
      des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 2,
        img: "/assets/icons/sol2.png",
        title:"Customer At Center",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 3,
        img: "/assets/icons/sol3.png",
        title:"Professional Team",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 4,
        img: "/assets/icons/sol4.png",
        title:"24/7 Support Service",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
  ];
  return (
    <div className=" bg-[#F1F1F1]">
      <div className="container-ats grid lg:grid-cols-2 gap-8 items-center py-24 ">
        <div className="space-y-4">
          <HeadingOnly title="WHAT SOLUTION WILL YOU FIND FROM US ?" />
          <p className="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make atype specimen book.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          {data.map((gf, xgf) => (
            <div className="flex justify-center items-center gap-4" key={xgf}>
              <img src={gf.img} className="w-12 h-12" />
              <div className="space-y-2">
                <h2 className="text-lg font-bold">{gf.title}</h2>
                <p className="text-sm">
                  {gf.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatSolution;
