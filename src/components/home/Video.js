import { useInView } from "framer-motion";
import React from "react";
import { useEffect, useRef } from "react";
import Heading from "../common/Heading";
const Video = () => {
  const vidRef = React.useRef();
  const [mute, setMute] = React.useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    vidRef.current.play();
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };
    vidRef.current.play();
    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          vidRef.current?.play();
        } else {
          vidRef.current?.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(vidRef.current);
  });
  return (
    <div className="main-banner ">
      <div className="grid  grid-cols-5 px-10 container-ats pb-12">
        <div className="col-span-2">
          <h2 className="text-4xl tracking-wider font-semibold uppercase text-[#0D0D0D]">
          OUR MANUFACTURING FACILITIES
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

        
      </div>
      
      <header className="relative flex items-center md:h-screen overflow-hidden">
        <div className=" mx-auto">
          <video
            className=" h-auto w-full  md:h-full mx-auto md:w-[100%] md:object-cover object-contain rounded-[70px]"
            // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            src="/assets/video/mainvideo.mp4"
            ref={vidRef}
            loop
            playsInline
            autoPlay
            muted={mute}
            onClick={() => setMute(false)}
            preload="auto"
          ></video>
          <div className="absolute right-[5%] md:top-16 top-[30%] flex justify-center text-white p-2 bg-primary shadow rounded-full">
            {mute ? (
              <svg
                onClick={() => setMute(false)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer hover:scale-105 duration-700  rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  clipRule="evenodd"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setMute(true)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 cursor-pointer hover:scale-105 duration-700 bg-primary rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </div>

          {/* <div className=" absolute space-y-6 top-[10%]  left-16">
            <div className="">
              <h1 className="space-y-2 fontfamily textshadow  tracking-wider text-4xl py-3  text-white  font-semibold textshadow capitalize">
                <p> OUR MANUFACTURING FACILITIES</p>
              </h1>
              <p className="text-xl text-white w-[60%]">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default Video;
