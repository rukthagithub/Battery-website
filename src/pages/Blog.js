import React, { useRef } from "react";
import ContactFooter from "../components/common/ContactFooter";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Contactheading from "../components/contact/Contactheading";
import Banner from "../components/home/Banner";
import { useInView } from "framer-motion";
import Heading from "../components/common/Heading";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <div>
      <Navbar />
      <Banner
        img="/assets/images/blog-banner.png"
        pageTitle="GET IN TOUCH WITH US"
        title="Lorem Ipsum is simply dummy text of the printing."
      />

      {/* latest blogs */}
      <div className="container-ats py-10 ">
        <div>
          <Heading
            title="Latest Blogs"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text of the printing and typesetting."
          />
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 pt-8 lg:gap-3 lg:px-0 px-5 ">
          <div className="lg:col-span-5 relative">
            <img
              src="assets/images/latest-blog-1.png"
              className="w-full  h-full rounded"
            />

            <div className="absolute lg:bottom-4 bottom-10 px-8">
              <div className="flex gap-5">
                <img src="assets/images/star.svg" />

                <p className="text-white">Top Story</p>
                <p className="text-white">|</p>
                <p className="text-white">4 min read</p>
              </div>

              <h4 className="text-white pt-3 lg:text-lg font-bold   w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </h4>

              <div className="flex gap-4">
                <div className="flex gap-2 pt-3 items-center justify-center">
                  <img src="assets/images/eye.svg" />
                  <p className="text-white text-sm font-semibold">123k Views</p>
                  <p className="text-white">|</p>
                </div>

                <div className="flex gap-2 pt-3 items-center justify-center">
                  <img src="assets/images/heart-icon.svg" />
                  <p className="text-white text-sm font-semibold">10k Likes</p>
                </div>
              </div>

              <p className="text-sm text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </p>

              <p className="text-primary text-right text-sm">Read More+</p>
            </div>
          </div>

          <div className="col-span-7">
            <div className="lg:flex gap-3">
              <div className="relative lg:pt-0 pt-3">
                <img
                  src="assets/images/latest-blog-02.png"
                  className="w-full  h-full rounded"
                />

                <div className="absolute lg:bottom-4 bottom-10 px-8">
                  <div className="flex gap-5">
                    <img src="assets/images/star.svg" />

                    <p className="text-white">Top Story</p>
                    <p className="text-white">|</p>
                    <p className="text-white">4 min read</p>
                  </div>

                  <h4 className="text-white pt-3 lg:text-lg font-bold   w-full">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </h4>

                  <div className="flex gap-4">
                    <div className="flex gap-2 pt-3 items-center justify-center">
                      <img src="assets/images/eye.svg" />
                      <p className="text-white text-sm font-semibold">
                        123k Views
                      </p>
                      <p className="text-white">|</p>
                    </div>

                    <div className="flex gap-2 pt-3 items-center justify-center">
                      <img src="assets/images/heart-icon.svg" />
                      <p className="text-white text-sm font-semibold">
                        10k Likes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:pt-0 pt-3">
                <img
                  src="assets/images/latest-blog-03.png"
                  className="w-full  h-full rounded"
                />

                <div className="absolute lg:bottom-4 bottom-10 px-8">
                  <div className="flex gap-5">
                    <img src="assets/images/star.svg" />

                    <p className="text-white">Top Story</p>
                    <p className="text-white">|</p>
                    <p className="text-white">4 min read</p>
                  </div>

                  <h4 className="text-white pt-3 lg:text-lg font-bold   w-full">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </h4>

                  <div className="flex gap-4">
                    <div className="flex gap-2 pt-3 items-center justify-center">
                      <img src="assets/images/eye.svg" />
                      <p className="text-white text-sm font-semibold">
                        123k Views
                      </p>
                      <p className="text-white">|</p>
                    </div>

                    <div className="flex gap-2 pt-3 items-center justify-center">
                      <img src="assets/images/heart-icon.svg" />
                      <p className="text-white text-sm font-semibold">
                        10k Likes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex gap-3 pt-2">
              <div className="relative ">
                <img
                  src="assets/images/latest-blog-05.png"
                  className="w-full  h-full rounded"
                />

                <div className="absolute lg:bottom-4 bottom-10 px-8">
                  <div className="flex gap-5">
                    <img src="assets/images/star.svg" />

                    <p className="text-white">Top Story</p>
                    <p className="text-white">|</p>
                    <p className="text-white">4 min read</p>
                  </div>

                  <h4 className="text-white pt-3 lg:text-lg font-bold   w-full">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </h4>

                  <div className="flex gap-4">
                    <div className="flex gap-2 pt-3 items-center justify-center">
                      <img src="assets/images/eye.svg" />
                      <p className="text-white text-sm font-semibold">
                        123k Views
                      </p>
                      <p className="text-white">|</p>
                    </div>

                    <div className="flex gap-2 pt-3 items-center justify-center">
                      <img src="assets/images/heart-icon.svg" />
                      <p className="text-white text-sm font-semibold">
                        10k Likes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:pt-0 pt-3">
                <img
                  src="assets/images/latest-blog-04.png"
                  className="w-full  h-full rounded"
                />

                <div className="absolute lg:bottom-4 bottom-10 px-8">
                  <div className="flex gap-3">
                    <img src="assets/images/star.svg" />

                    <p className="text-white">Top Story</p>
                    <p className="text-white">|</p>
                    <p className="text-white">4 min read</p>
                  </div>

                  <h4 className="text-white pt-3 lg:text-lg font-bold   w-full">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </h4>

                  <div className="flex gap-4">
                    <div className="flex gap-2 pt-3 items-center justify-center">
                      <img src="assets/images/eye.svg" />
                      <p className="text-white text-sm font-semibold">
                        123k Views
                      </p>
                      <p className="text-white">|</p>
                    </div>

                    <div className="flex gap-2 pt-3 items-center justify-center">
                      <img src="assets/images/heart-icon.svg" />
                      <p className="text-white text-sm font-semibold">
                        10k Likes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-[#000] container-ats mt-8 "></div>

      {/* top blogs */}
      <div className="container-ats">
        <div className="py-10">
          <Heading
            title="Our Top Blogs"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum is simply dummy text of the printing and typesetting."
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 container-ats gap-4 lg:px-0 px-5">
        <div className="rounded-md pb-4 shadow-box">
          <div className="flex">
            <p className="text-8xl  font-semibold text-[#BFBFBF] pl-1">01</p>
            <img
              src="assets/images/blog-1.png"
              className=" h-[90%] w-[80%] pt-10"
            />
          </div>

          <div className="">
            <h4 className=" pt-6 lg:text-lg font-bold  px-6 w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h4>

            <div className="flex gap-4 pt-2 pb-3">
              <div className="flex gap-2 pt-3 items-center justify-center">
                <img src="assets/images/eye.svg" />
                <p className="text-sm font-semibold">123k Views</p>
                <p className="">|</p>
              </div>

              <div className="flex gap-2 pt-3 items-center justify-center">
                <img src="assets/images/heart-icon.svg" />
                <p className=" text-sm font-semibold">10k Likes</p>
              </div>
            </div>

            <p className="text-justify px-6 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <p className="text-primary text-sm px-6 font-semibold py-3">
              Read More+
            </p>
          </div>
        </div>

        <div className="rounded-md pb-4 shadow-box">
          <div className="flex gap-2">
            <p className="text-8xl font-semibold text-[#BFBFBF] pl-1">02</p>
            <img
              src="assets/images/blog-2.png"
              className=" h-[90%] w-[80%] pt-10"
            />
          </div>

          <div className="">
            <h4 className=" pt-6 lg:text-lg font-bold  px-6 w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h4>

            <div className="flex gap-4 pt-2 pb-3">
              <div className="flex gap-2 pt-3 items-center justify-center">
                <img src="assets/images/eye.svg" />
                <p className="text-sm font-semibold">123k Views</p>
                <p className="">|</p>
              </div>

              <div className="flex gap-2 pt-3 items-center justify-center">
                <img src="assets/images/heart-icon.svg" />
                <p className=" text-sm font-semibold">10k Likes</p>
              </div>
            </div>

            <p className="text-justify px-6 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <p className="text-primary text-sm px-6 font-semibold py-3">
              Read More+
            </p>
          </div>
        </div>

        <div className="rounded-md pb-4 shadow-box">
          <div className="flex">
            <p className="text-8xl  font-semibold text-[#BFBFBF] pl-1">03</p>
            <img
              src="assets/images/blog-3.png"
              className=" h-[90%] w-full pt-10"
            />
          </div>

          <div className="">
            <h4 className=" pt-6 lg:text-lg font-bold  px-6 w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h4>

            <div className="flex gap-4 pt-2 pb-3">
              <div className="flex gap-2 pt-3 items-center justify-center">
                <img src="assets/images/eye.svg" />
                <p className="text-sm font-semibold">123k Views</p>
                <p className="">|</p>
              </div>

              <div className="flex gap-2 pt-3 items-center justify-center">
                <img src="assets/images/heart-icon.svg" />
                <p className=" text-sm font-semibold">10k Likes</p>
              </div>
            </div>

            <p className="text-justify px-6 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <p className="text-primary text-sm px-6 font-semibold py-3">
              Read More+
            </p>
          </div>
        </div>
      </div>
      <div className="px-16 pt-3 pb-16">
        <p className="text-primary text-right font-semibold">View More+</p>
      </div>

      <ContactFooter />
      <Footer />
    </div>
  );
};

export default Blog;
