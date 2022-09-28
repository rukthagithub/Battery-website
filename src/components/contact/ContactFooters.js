import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const ContactFooters = () => {


    return (
        <>
            <footer
                className="footerclass"
                // style={{ backgroundImage: "url('/assets/images/banner3.png')" }}
                style={{
                    backgroundImage:
                        "url('/assets/images/footerimg.png')",
                }}
            >
                <div className="flex justify-center items-center gap-4 w-full">
                    <div className="inline-block text-primary p-3 rounded-full cursor-pointer bg-white z-10 hover:scale-105 hover:text-black duration-500">
                        <ImFacebook />
                    </div>
                    <div className="inline-block text-primary p-3 rounded-full cursor-pointer  bg-white  z-10 hover:scale-105 hover:text-black duration-500">
                        <BsInstagram />
                    </div>
                    <div className="inline-block text-primary p-3 rounded-full cursor-pointer  bg-white  z-10 hover:scale-105 hover:text-black duration-500">
                        <BsTwitter />
                    </div>
                    <div className="inline-block text-primary p-3 rounded-full cursor-pointer  bg-white  z-10 hover:scale-105 hover:text-black duration-500">
                        <BsYoutube />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 w-full pt-5">

                    <div className="flex  justify-center items-center gap-4">

                        <div className="text-sm text-white text-semibold textshadow  hover:scale-105 duration-500 z-10 cursor-pointer ">
                           Terms of use |{" "}
                        </div>
                        <div className="text-sm text-white text-semibold  textshadow hover:scale-105 duration-500 z-10 cursor-pointer ">
                           Privacy Policy |{" "}
                        </div>

                        <div className="text-sm text-white  text-semibold  textshadow hover:scale-105 duration-500 z-10 cursor-pointer ">
                            <Link to="#">   Sitemap |{" "} </Link>
                        </div>

                        <div className="text-sm text-white text-semibold  textshadow hover:scale-105 duration-500 z-10 cursor-pointer ">
                            <Link to="#">  Careers </Link>

                        </div>

                    </div>

                    <footer className="  bg-[#EA1D2480] text-center w-full text-sm  py-5 lg:mt-10 ">
                       <span className="text-white drop-shadow-2xl"> Copyright © 2022 All Rights Reserved -ATS Solar Battery Pvt. Ltd. </span> 
                    </footer>

                </div>
            </footer>


        </>
    );
};

export default ContactFooters;
