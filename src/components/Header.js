import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, NavLink } from 'react-router-dom';

import Navbar from "./Navbar";

export default function Header(props) {

  const [nav, setNav] = useState(false);
  const [navButton, setNavButton] = useState(0);
  const [navAppear, setNavAppear] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const Inactive = "flex bg-[#F8e0a6] w-full z-10 mr-14  justify-between fixed top-0 ";
  const active =
    "flex bg-[#F8e0a6] w-full z-10 fixed shadow-xl mr-14  justify-between top-0 shadow-[#583101]";
  const activeButton =
    "mr-10 2xl:mr-6  hover:cursor-pointer bg-[#583101] text-[#F8e0a6] rounded-xl";
  const InactiveButton = "mr-10  2xl:mr-6  hover:cursor-pointer text-[#583101]";

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const navonclick = () => {
    setNavAppear(!navAppear)
  }


  return (
    <div>
      <div className={nav ? active : Inactive}>
        <NavLink to="/">
          <img
            src="logo.png"
            className="3xl:w-16 5xl:w-36 4xl:w-32 lg:w-20 w-36 h-auto m-4 ml-20 2xl:ml-10 md:w-16 md:ml-6 xm:w-14"
          />
        </NavLink>
        <ul className="flex items-center md:hidden">
          <Link
            to="/"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className={navButton == 1 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(1);
            }}
          >
            <li className="font-[Poppins] 3xl:text-base 5xl:text-3xl  4xl:text-2xl  lg:text-sm text-4xl font-normal  p-2">Home</li>
          </Link>

          <ScrollLink
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
            className={navButton == 2 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(2);
            }}
          >
            <li className="font-[Poppins] 3xl:text-base 5xl:text-3xl  4xl:text-2xl  lg:text-sm text-4xl font-normal    p-2">
              About Us
            </li>
          </ScrollLink>
          <ScrollLink
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
            className={navButton == 3 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(3);
            }}
          >
            <li className="font-[Poppins] 3xl:text-base 5xl:text-3xl  4xl:text-2xl  lg:text-sm text-4xl font-normal  p-2">
              Our Services
            </li>
          </ScrollLink>
          <ScrollLink
            to="spaces"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
            className={navButton == 4 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(4);
            }}
          >
            <li className="font-[Poppins] 3xl:text-base 5xl:text-3xl  4xl:text-2xl  lg:text-sm text-4xl font-normal p-2">
              Our Space
            </li>
          </ScrollLink>
          <ScrollLink
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            className={navButton == 5 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(5);
            }}
          >
            <li className="font-[Poppins] 3xl:text-base 5xl:text-3xl  4xl:text-2xl  lg:text-sm text-4xl font-normal p-2">
              Contact Us
            </li>
          </ScrollLink>


          <div className="mr-10 gap-2 flex lg:mr-6 items-center  bg-[#583101] p-3 rounded-md hover:cursor-pointer" >
            <div className=" ml-[175px] mb-[135px] 5xl:mb-28 5xl:ml-32 4xl:mb-24 4xl:ml-28 3xl:mb-20 3xl:ml-16  absolute flex">
              <h1 className="bg-white px-2 absolute 3xl:text-base 5xl:text-3xl  4xl:text-2xl  lg:text-sm text-2xl font-bold rounded-3xl">{props.cartData.length}</h1>
            </div>
            <Link to="/cart" className="font-[Poppins] 3xl:text-base 5xl:text-3xl  4xl:text-2xl  lg:text-sm text-4xl font-normal text-white ">CART</Link>
            <img src="cart.png" className="3xl:h-6 5xl:h-14 4xl:h-10 h-16" />
          </div>

        </ul>

        <div className="hidden md:flex items-center ml-auto pr-6 justify-end" onClick={navonclick}>
          <img src="more.png" className="h-8" />
        </div>

      </div>
      <div className="hidden md:flex">
        <Navbar open={navAppear} click={props.clickon} />
      </div>
    </div>
  );
}
