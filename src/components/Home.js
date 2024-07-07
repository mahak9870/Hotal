import React, { useState } from "react";
import { Element } from "react-scroll";

export default function Home() {
  return (
  
    <div className="flex justify-center items-center mt-24" id="home">
       
      <img src="home.png" className="w-full" />
      <div className="flex flex-col absolute gap-24 lg:gap-16 md:gap-14 sm:gap-9 xs:gap-4 xm:gap-4">
        <h1 className="font-[Playfair] text-3xl sm:text-2xl xs:text-xl xxs:text-base xm:text-xs text-[#F8e0a6] text-center">
          GET LUXURY AND COMFORT
        </h1>
        <h2 className="font-[Playfair] text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl xxs:text-lg xm:text-sm text-[#F8e0a6] max-w-5xl text-center">
          Welcome To The Place Where Luxury Meets Affordability
        </h2>
        <a className="text-center justify-center px-6 py-4 sm:py-3 xs:py-2 xxs:px-1 border-solid border-[#F8e0a6] border-[2px] w-44 m-auto h-15 sm:w-32 sm:h-10 xs:w-22 xs:h-9 xxs:w-[92px] hover:bg-[#F8e0a6] hover:cursor-pointer hover:text-[#583101] ">
          <h1 className="font-[Poppins] text-lg sm:text-xs xxs:text-[10px] text-[#F8e0a6]  hover:text-[#583101]">
            Explore Now
          </h1>
        </a>
      </div>
   
    </div>
   
  );
}
