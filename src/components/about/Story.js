import React from "react";
import Heading from "../common/Heading";

const Story = () => {
  const data = [
    {
      id: 1,
      img: "/assets/icons/story.png",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    },
    {
      id: 1,
      img: "/assets/icons/story.png",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    },
    {
      id: 1,
      img: "/assets/icons/story.png",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    },
    {
      id: 1,
      img: "/assets/icons/story.png",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    },
  ];
  return (
    <>
      <div className="">
        <div className="px-6">
        <Heading
          title="OUR STORY"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        </div>
        <div className="container-ats lg:grid grid-cols-2 gap-16 py-20 ">
          {data.map((e, obj) => (
            <div className="grid grid-cols-6 group hover:-translate-y-4 duration-500 hover:drop-shadow-xl">
              <div className="col-span-2 bg-black group-hover:bg-primary flex justify-center items-center rounded">
                <img src={e.img} />
              </div>
              <div className="space-y-4 py-4 px-6 bg-[#F1F1F1] col-span-4 rounded">
                <h2 className="font-semibold">{e.title}</h2>
                <p className="text-sm">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Story;
