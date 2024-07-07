import React from 'react'
import { Link as ScrollLink } from "react-scroll";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <div className={`fixed bg-[#F8e0a6]  w-full z-10 h-fit ${ props.open ? "translate-y-24" :"-translate-y-80"} shadow-xl shadow-[#583101] ease-in-out duration-700` }>
      <ul className='top-0'>
       <Link spy={true} smooth={true} offset={-150} duration={1000}  to="/"><li className="hover:bg-[#583101] hover:text-[#F8e0a6] text-[#583101]  text-xl font-[Poppins] p-2">Home</li></Link>
       <ScrollLink spy={true} smooth={true} offset={-150} duration={1000}  to="about"><li className="hover:bg-[#583101] hover:text-[#F8e0a6] text-[#583101]  text-xl font-[Poppins] p-2">About Us</li></ScrollLink>
       <ScrollLink spy={true} smooth={true} offset={-150} duration={1000}  to="services"><li className="hover:bg-[#583101] hover:text-[#F8e0a6] text-[#583101]  text-xl font-[Poppins] p-2">Our Services</li></ScrollLink>
       <ScrollLink spy={true} smooth={true} offset={-120} duration={1000}  to="spaces"><li className="hover:bg-[#583101] hover:text-[#F8e0a6] text-[#583101]  text-xl font-[Poppins] p-2">Our Space</li></ScrollLink>
       <ScrollLink spy={true} smooth={true} offset={-200} duration={1000}  to="contact"><li className="hover:bg-[#583101] hover:text-[#F8e0a6] text-[#583101]  text-xl font-[Poppins] p-2">Contact Us</li></ScrollLink>
     <Link to='/cart'><li className="hover:bg-[#583101] hover:text-[#F8e0a6] text-[#583101] text-xl font-[Poppins] p-2" >Cart</li></Link>
      </ul>
      </div>
    </div>
  )
}
