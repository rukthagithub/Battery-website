import React from "react";
import Heading from "../common/Heading";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ImCross } from "react-icons/im";

const OurGallery = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const card = [
    {
      id: 1,
      icon: "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/services/maintenance-and-repair/batteries/maintenance-batteries-1.jpg.ximg.l_6_m.smart.jpg",
    },

    {
      id: 2,
      icon: "https://www.sailmagazine.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzI0NDc4NDI2OTQ4ODgz/01-lead-nsterling-procombi-s-2.jpg",
      stretch: "v-stretch",
    },
    {
      id: 3,
      icon: "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/services/ownership/recycle-your-old-car-battery/battery_recycling_3000x2166_03.jpg.ximg.l_6_m.smart.jpg",
      stretch: "h-stretch",
    },
    {
      id: 4,
      icon: "https://www.boatingworld.com/wp-content/uploads/2015/06/BW-01-2015-DIY-02.jpg",
    },
    {
      id: 5,
      icon: "https://www.researchgate.net/profile/Mh_Arslan/publication/327321448/figure/fig1/AS:665542897721345@1535689200926/Installed-battery-bank-and-islanded-inverters.png",
    },
    {
      id: 6,
      icon: "https://blog.directauto.com/wp-content/uploads/2015/02/DG_car-battery.jpg",
      stretch: "v-stretch",
    },
    {
      id: 7,
      icon: "https://battlebornbatteries.com/wp-content/uploads/2021/04/Lukeman-Battleborn-Install-Warren-Michigan-1024x768.jpg",
      stretch: "big-stretch",
    },
    {
      id: 8,
      icon: "https://d3f7dpm96o8eu9.cloudfront.net/media/wysiwyg/emanuel-01.jpg",
    },
    {
      id: 9,
      icon: "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/services/maintenance-and-repair/batteries/maintenance-batteries-1.jpg.ximg.l_6_m.smart.jpg",
    },
    {
      id: 10,
      icon: "https://www.boatingworld.com/wp-content/uploads/2015/06/BW-01-2015-DIY-02.jpg",
    },
  ];

  return (
    <div className="  pt-28 pb-12">
      <div className="container-ats">
        <Heading
          title="Our Gallery"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s"
        />

        <div className=" pt-10">
          <div className="gallery pt-10">
            {card.map((item) => (
              <>
                <div className={`${item.stretch} group overflow-hidden`}>
                  <img
                    src={item.icon}
                    alt=""
                    className="group-hover:scale-105 group-hover:grayscale-0 grayscale duration-500"
                    onClick={() => {
                      setModalImage(item.icon);
                      setIsOpen(true);
                    }}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => {
              setModalImage("");
              setIsOpen(false);
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-70" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden mt-20 h-[550px]   rounded  bg-white  text-left align-middle shadow-xl transition-all">
                    <div className="py-4 flex justify-end items-end">
                      <button
                        type="button"
                        className="inline-flex justify-end  rounded-md border border-transparent bg-white px-2 py-1 text-sm font-medium text-primary focus:outline-none "
                        onClick={() => {
                          setModalImage("");
                          setIsOpen(false);
                        }}
                      >
                        <ImCross className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <img src={modalImage} alt="" className=" w-full " />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default OurGallery;
