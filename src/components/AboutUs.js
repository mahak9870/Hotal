import React from "react";

export default function () {
  return (
   
    <div
      className="flex flex-row xs:flex-col xs:items-center justify-between  mt-16 "
      id="about"
    >
      <div className="flex flex-col justify-center xs:items-center ml-48 xl:ml-32 lg:ml-20 md:ml-9 xs:ml-2 gap-5 lg:gap-1 md:gap-1">
        <div className="flex flex-row items-center gap-3 xs:items-center">
          <h1 className="font-[Playfair] 3xl:text-2xl 4xl:text-6xl sm:text-lg text-8xl lg:text-xl text-[#583101] xs:text-4xl xm:text-3xl ">
            About US
          </h1>
          <img src="design.png" className="items-center 3xl:w-32 4xl:w-40 md:w-20 md:h-6 sm:w-12 sm:h-4 w-56 3xl:h-6 4xl:h-8 h-12 xs:hidden" />
        </div>
        <h1 className="font-[Playfair] 3xl:text-4xl text-7xl 4xl:text-6xl md:text-2xl sm:text-xl lg:text-[26px] text-[#121619] xm:text-xl">
          At SaasAro Luxury Hotels
        </h1>
        <p className="3xl:w-96 w-[650px] font-[Poppins] 3xl:text-sm text-2xl 4xl:text-xl lg:text-xs lg:w-72 xs:w- text-[#121619] xxs:w-72 xxs:text-[10px] xm:w-72 ">
          After putting 1000 applications through a number of filters, we give
          the candidate "Prashant Rajput" a chance. He looks to be quite skilled,
          but we won't know for sure until we see his project, on which he is
          currently working. We hope he won't disappoint the recruiters in this
          sample task. and he will undoubtedly be hired.
        </p>
        <a className=" flex justify-center items-center  py-4 w-64 4xl:w-40 md:w-20 md:py-2 mt-3  bg-[#583101]  rounded-md xs:mt-[350px] xxs:mt-72">
          <h1 className="font-[Poppins] 3xl:text-sm 4xl:text-2xl md:text-xs text-4xl text-[#F8e0a6]">Read More</h1>
        </a>
      </div>

      <div className="flex flex-row  3xl:mr-36 lg:mr-14 mr-20 xs:justify-center items-center xxs:mt-48 xs:absolute xs:mt-56">
        <img
          src="image1.png"
          className="h-auto w-[550px] 5xl:w-[450px] 3xl:w-72 xl:w-60 lg:w-52 md:w-44 xxs:w-36 flex xs:ml-28 items-center "
        />
        <img
          src="image.png"
          className="flex h-auto absolute 3xl:mt-56 mt-48 3xl:-ml-32 -ml-48 w-[482px] xl:w-52 5xl:w-96 3xl:w-60 lg:w-48 lg:mt-40 lg:-ml-28 xl:mt-40 xl:-ml-24 md:mt-32 md:-ml-12 md:w-36 xxs:w-32 xxs:mt-24 xm:w-32 xm:-ml-20"
        />
      </div>
    </div>
    
  );
}
