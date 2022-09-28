import React from "react";
import Heading from "../common/Heading";
import { FaHome, FaSolarPanel } from "react-icons/fa";
import { GiSolarPower } from "react-icons/gi";

const Application = () => {
  const data = [
    {
      id: 1,
      img: <FaHome className="w-12 h-12 text-primary group-hover:text-white" />,
      title: "Solar Systems for Home",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      img: <GiSolarPower className="w-16 h-16 text-primary group-hover:text-white" />,
      title: "Solar Systems for Shops & Office",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      img: <FaSolarPanel className="w-12 h-12 text-primary group-hover:text-white" />,
      title: "Solar Systems for Small Industries",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div className="px-4 bg-secondary space-y-16 py-12">
      <Heading
        title="OUR APPLICATION"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s"
      />
      <div className="max-w-4xl mx-auto lg:flex gap-4">
        {data.map((e, obj) => (
          <div className="group rounded space-y-4 bg-white hover:bg-black hover:-translate-y-4 duration-500 p-8 shadow-md hover:shadow-xl">
            {e.img}
            <h2 className="group-hover:text-white font-semibold">{e.title}</h2>
            <p className="group-hover:text-white text-sm">{e.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
