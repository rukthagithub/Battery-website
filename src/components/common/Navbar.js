import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "header bg-black  z-50 spacingYtext rajez spacingYlogo"
          : "header  bg-transparent  bg-opacity-80 rajez"
      }
    >
      <nav className="navbar ">
        <Link to="/" className="logo">
          <img
            src="/assets/images/mainlogo.png"
            alt="logo"
            className="cursor-pointer"
          />
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="lg:flex hidden nav-item text-sm uppercase font-semibold nav-desk  text-white hover:text-primary group relative cursor-pointer">
            <Link to="/" onClick={closeMenu}>
              HOME
            </Link>
          </li>

          <li className="hidden md:flex nav-desk  group relative nav-item text-sm font-semibold uppercase hover:text-primary  group dropdown  px-4 text-white cursor-pointer tracking-wide">
            <Link to="/about" onClick={closeMenu}>
              ABOUT US
            </Link>
          </li>

          <li className="nav-item text-sm uppercase  nav-desk   text-white font-semibold hover:text-primary">
            <Link to="/products" onClick={closeMenu}>
              PRODUCTS
            </Link>
          </li>

          {/* <li className="nav-item text-sm uppercase  nav-desk   text-white font-semibold hover:text-primary">
            <Link to="#" onClick={closeMenu}>
            CAREERS
            </Link>
          </li> */}
          <li className="nav-item text-sm uppercase  nav-desk   text-white font-semibold hover:text-primary">
            <Link to="/blog" onClick={closeMenu}>
              BLOGS
            </Link>
          </li>
          <li className="nav-item text-sm uppercase  nav-desk   text-white font-semibold hover:text-primary ">
            <Link to="#" onClick={closeMenu}>
              Catalogue
            </Link>
          </li>
          <li className="nav-item text-sm uppercase  nav-desk   text-white font-semibold hover:text-primary ">
            <Link to="#" onClick={closeMenu}>
            Contact Us
            </Link>
          </li>
        </ul>
        <div className=" md:block hidden group">
          {/* <div className=" px-8 py-2 text-sm uppercase  border-2 border-[#EC2028]  font-semibold  rounded-md  group-hover:bg-primary">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="link-color  text-white group-hover:text-white "
            >
              Contact Us
            </Link>
          </div> */}
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
      </nav>
      <hr
        className={color ? "bg-black text-black" : "bg-white  w-[93%] mx-auto"}
      />
    </div>
  );
};

export default Navbar;
