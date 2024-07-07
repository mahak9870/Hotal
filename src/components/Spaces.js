import React from "react";
import { Element } from "react-scroll";

export default function Spaces() {
  return (
   
    <div className="flex flex-col mt-60 2xl:mt-40 xs:mt-28  md:ml-0 xxs:ml-0 " id="spaces">
      <div className="flex flex-col justify-center xs:ml-0 4xl:ml-24 2xl:ml-20 ml-36 3xl:ml-40 lg:ml-11 xxs:ml-0 gap-5">
        <div className="flex flex-row items-center xs:justify-center gap-3 xxs:m-auto">
          <h1 className="font-[Playfair] 3xl:text-2xl 4xl:text-4xl text-5xl  text-[#583101] ">
            OUR SPACES
          </h1>
          <img src="design.png" className="items-center 3xl:w-32 3xl:h-6 xs:hidden" />
        </div>
        <div className="xxs:m-auto gap-4 flex xs:justify-center xs:items-center flex-col xm:items-center ">
          <h1 className="font-[Playfair] text-6xl 4xl:text-5xl 3xl:text-3xl text-[#121619] xxs:text-3xl xm:text-2xl">
            Check Our Hotel Gallery
          </h1>
          <p className="3xl:w-[950px] font-[Poppins] lg:text-sm lg:w-[650px] text-2xl 5xl:w-[1531px] w-[1915px] 4xl:w-[1404px] 3xl:text-base text-[#121619] md:w-[600px] sm:w-[593px] xs:w-80 xxs:w-80 xm:text-xs xm:w-72 xm:m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, risus
            dictum sed sit. Suspendisse congue est pellentesque nec. Sed
            tincidunt aliquam morbi diam faucibus sodales. Auctor lacus, sed
            amet velit leo, felis eget in proin. Arcu enim, est dictum venenatis
            convallis tortor. Malesuada vestibulum a sed libero sapien, tellus.
          </p>
        </div>
      </div>

      <div className="flex flex-col 3xl:ml-40 4xl:ml-24 2xl:ml-20 xs:ml-1 lg:ml-11 ml-36 mt-8 xs:mt-4">
        <ul className="flex flex-row gap-[74px] 4xl:gap-14 2xl:gap-10 lg:gap-6 md:gap-4 mb-3 sm:hidden">
          <li className="font-[Poppins] 3xl:text-lg 4xl:text-2xl text-3xl  md:text-xs lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Dining & Resturant
          </li>
          <li className="font-[Poppins] 3xl:text-lg 4xl:text-2xl text-3xl  md:text-xs lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Parking Space 
          </li> 
          <li className="font-[Poppins] 3xl:text-lg 4xl:text-2xl text-3xl  md:text-xs lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Spa 
          </li> 
          <li className="font-[Poppins] 3xl:text-lg 4xl:text-2xl  text-3xl md:text-xs lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Resort & Pool 
          </li> 
          <li className="font-[Poppins] 3xl:text-lg 4xl:text-2xl text-3xl  md:text-xs lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Casino 
          </li> 
          <li className="font-[Poppins] 3xl:text-lg 4xl:text-2xl text-3xl  md:text-xs lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Bedrooms 
          </li> 
          <li className="font-[Poppins] 3xl:text-lg 4xl:text-2xl text-3xl  md:text-xs lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Event Spaces
          </li>
        </ul>
        <a className=" hidden sm:flex bg-[#583101] p-2 mr-auto rounded-md xxs:ml-5 xm:ml-3">
          <img src="down-arrow.png" className="h-4" />
        </a>
        <div className="flex flex-row xs:-ml-1 xxs:justify-center">
          <img
            src="image 125.png"
            className="3xl:h-[540px] 5xl:h-[658px] 2xl:h-[432px]  4xl:h-[627px] h-[950px] lg:h-[309px] md:h-72 sm:h-[274px] xs:h-44 xxs:h-36 xm:h-32 p-1"
          />
          <img
            src="image 124.png"
            className="3xl:h-[540px] 5xl:h-[658px] 2xl:h-[432px]  4xl:h-[627px] h-[950px] lg:h-[309px] md:h-72 sm:h-[274px] xs:h-44 xxs:h-36 xm:h-32 p-1"
          />
          <img
            src="image 123.png"
            className="3xl:h-[540px] 5xl:h-[658px] 2xl:h-[432px]  4xl:h-[627px] h-[950px] lg:h-[309px] md:h-72 sm:h-[274px] xs:h-44 xxs:h-36 xm:h-32 p-1"
          />
        </div>
      </div>
    </div>
    
  );
}
