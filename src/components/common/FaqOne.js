import React from "react";
import {BsFillPlusCircleFill,BsFillMinusCircleFill} from "react-icons/bs";
import {AiFillMinusCircle} from "react-icons/ai";

const FaqOne = ({title,des}) => {
  return (
    <>
      <button className="w-96  text-left group focus:outline-none space-y-2 p-1 ">
        <div className="flex w-96  justify-between items-center rounded-sm text-black border-1 border-white px-4 py-2 hover:bg-black hover:text-white font-semibold text-lg">
          
          <div className="">
            <BsFillPlusCircleFill className="h-5 w-5 group-focus:hidden"/>
            <AiFillMinusCircle className="h-5 w-5 group-focus:flex hidden text-primary "/>
          </div>
          {title}
        </div>

        <div className="hidden p-4  group-focus:block bg-gray-100 drop-shadow-2zl">
          <p className="text-sm ">
            {des}
          </p>
        </div>
      </button>
    </>
  );
};

export default FaqOne;
