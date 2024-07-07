import React from "react";

export default function ContactUS() {
  return (
      <div className="bg-[#583101] flex flex-row xs:flex-col xs:gap-10 xs:items-center pt-8 pb-8 mt-20" id="contact">
        <div className=" flex flex-col ml-16 xs:ml-0 sm:ml-4 gap-5 items-center ">
          <div>
            <img src="logo2.png" className="h-24" />
          </div>
          <div className="flex flex-row gap-5">
            <img src="facebook.png" className="h-8" />
            <img src="instagram.png" className="h-8" />
            <img src="twitter.png" className="h-8" />
          </div>
          <h1 className="font-[Playfair] italic text-xl text-[#F8e0a6]">
            prashantrajput6315@gmail.com
          </h1>
        </div>

        <div className="flex items-center mr-44 md:mr-12 ml-auto xs:m-auto gap-20 sm:gap-11">

          <ul className="flex flex-col gap-3">
            <li className="font-[Poppins] text-xl text-[#F8e0a6]">LEARN MORE</li>
            <li className="font-[Poppins] text-sm text-[#F8e0a6]">Success Stories</li>
            <li className="font-[Poppins] text-sm text-[#F8e0a6]">Why Us..?</li>
            <li className="font-[Poppins] text-sm text-[#F8e0a6]">How it Works</li>
            <li className="font-[Poppins] text-sm text-[#F8e0a6]">FAQs</li>
          </ul>


          <ul className="flex flex-col gap-3">
            <li className="font-[Poppins] text-xl text-[#F8e0a6]">RESOURCES</li>
            <li className="font-[Poppins] text-sm text-[#F8e0a6]">Help center</li>
            <li className="font-[Poppins] text-sm text-[#F8e0a6]">Blog</li>
            <li className="font-[Poppins] text-sm text-[#F8e0a6]">Carrer</li>
            <li className="font-[Poppins] text-sm text-[#F8e0a6]">About Us</li>
          </ul>

        </div>
      </div>
  
  );
}
