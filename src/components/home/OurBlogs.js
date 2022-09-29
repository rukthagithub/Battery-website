import { useInView } from "framer-motion";
import React,{useRef} from "react";
import { BsArrowRight } from "react-icons/bs";


const OurBlogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <>
      <div className="bg-secondary ">
        <div className="container-ats py-16 grid lg:grid-cols-12 grid-cols-1 gap-8  ">
          <div class="bg-white shadow-md border col-span-5 border-gray-200 rounded overflow-hidden group lg:ml-0 ml-[40px]">
            <a href="#">
              <img
                class="rounded-t-lg group-hover:scale-105 duration-300"
                src="/assets/images/blogOne.png"
                alt=""
              />
            </a>
            <div class="p-5 space-y-4  ">
              <a href="#">
                <h5 class="text-gray-900 font-bold text-xl tracking-tight mb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5>
                
              </a>
              <p className="h-[2px] bg-primary w-100"></p>
              <p class="font-normal text-gray-700 mb-3 text-sm leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div>
                <a
                  class="italic tracking-widest focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                  href="#"
                >
                  ( dd/mm/yyyy )
                </a>
              </div>
              <div>
                <a
                  class="italic focus:ring-4 text-primary float-right focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  inline-flex items-center"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-7 space-y-4">
            <h2 className="text-4xl font-semibold uppercase tracking-widest ">
              <span className="">
                Our
              </span>{" "}
              Blog
              <h2 className="w-24 h-[2px] bg-primary mt-2" 
               ref={ref}
               style={{
                 transform: isInView ? "none" : "translateX(200px)",
                 opacity: isInView ? 1 : 0,
                 transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
               }}
              ></h2>
            </h2>
            
            <p className="text-sm font-semibold tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="flex gap-4">
            <div class="bg-white shadow-md border border-gray-200 rounded group overflow-hidden">
                <a href="#">
                  <img
                    class="rounded-t-lg w-full group-hover:scale-105 duration-300"
                    src="/assets/images/blogTwo.png"
                    alt=""
                  />
                </a>
                <div class="p-4">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-sm tracking-tight mb-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h5>
                  </a>

                  <div>
                    <a
                      class="italic tracking-widest focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      href="#"
                    >
                      ( dd/mm/yyyy )
                    </a>
                  </div>
                  <div>
                    <a
                      class="italic focus:ring-4 text-primary float-right focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  inline-flex items-center"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="bg-white shadow-md border border-gray-200 rounded group overflow-hidden">
                <a href="#">
                  <img
                    class="rounded-t-lg w-full group-hover:scale-105 duration-300"
                    src="/assets/images/blogTwo.png"
                    alt=""
                  />
                </a>
                <div class="p-4">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-sm tracking-tight mb-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h5>
                  </a>

                  <div>
                    <a
                      class="italic tracking-widest focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      href="#"
                    >
                      ( dd/mm/yyyy )
                    </a>
                  </div>
                  <div>
                    <a
                      class="italic focus:ring-4 text-primary float-right focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  inline-flex items-center"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <button className="flex gap-3 items-center justify-items-center group bg-primary rounded-full px-6 py-2 cursor-pointer">
                <BsArrowRight
                  size={24}
                  className="text-white group-hover:translate-x-2 duration-150"
                />
                <p className="text-white ">Know More</p>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlogs;
