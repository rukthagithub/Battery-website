import React from "react";
import Heading from "../common/Heading";
import HeadingOnly from "../common/HeadingOnly";

const Mission = () => {
  const data = [
    {
      id: 1,
      img: "/assets/icons/m1.png",
      title: "OUR MISSION",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      img: "/assets/icons/m2.png",
      title: "OUR VISION",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      img: "/assets/icons/m3.png",
      title: "OUR VALUES",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className="py-16">
    <div className="px-6">
    <Heading title="Mission, Vision & Values"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make atype specimen book."
      />
    </div>
    <div className="container-ats py-12">
      {/* <div className="space-y-4">
        <HeadingOnly title="Mission, Vision & Values" />
        <p className="max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make atype specimen book.
        </p>
      </div> */}
      

      <div className="grid lg:grid-cols-3">
        {data.map((e, obj) => (
          <div className="flex gap-4" key={obj}>
            <img src={e.img} className="w-20 h-20" />
            <div className="space-y-2">
              <h2 className="underline underline-offset-8 decoration-primary font-bold">
                {e.title}
              </h2>
              <p className="text-sm pr-20">{e.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Mission;
