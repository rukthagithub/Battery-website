import React from "react";
import FaqOne from "../common/FaqOne";
import HeadingOnly from "../common/HeadingOnly";

const Faq = () => {
  return (
    <>
      <div className="bg-[#F1F1F1] py-12">
        <div className="container-ats grid lg:grid-cols-5">
          <div className="col-span-2 space-y-8">
            <HeadingOnly title="FREQUENTLY ASKED QUESTIONS" />
            <div>
              <FaqOne
                title="Lorem Ipsum is simply dummy text ?"
                des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <FaqOne
                title="Lorem Ipsum is simply dummy text ?"
                des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <FaqOne
                title="Lorem Ipsum is simply dummy text ?"
                des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <FaqOne
                title="Lorem Ipsum is simply dummy text ?"
                des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <FaqOne
                title="Lorem Ipsum is simply dummy text ?"
                des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="p-4 relative">
              <div className="flex justify-center items-center px-24 pt-28 pb-20">
                <div className="bg-[#959595] w-96 h-72 animate-bounce-medium rounded-md"></div>
              </div>
              <img
                src="/assets/images/faqOne.png"
                className="absolute w-96 h-96 top-0 left-10"
              />
              <img
                src="/assets/images/faqTwo.png"
                className="absolute w-72 bottom-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
