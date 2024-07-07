import React from "react";

export default function Offers() {
  return (
    <div className="flex flex-row md:flex-col mt-40  justify-between  md:justify-center md:items-center xs:mt-[1274px] xxs:mt-[1063px] xm:mt-[816px]">
      <div>
        <img src="offer.png" className="3xl:h-[507px] xl:h-96 3xl:ml-44 2xl:h-[419px] xl:ml-12 2xl:ml-32 h-[762px] 5xl:h-[700px] ml-44 4xl:ml-24 lg:h-[424px] md:hidden" />
      </div>
      <div className="flex flex-col justify-center mr-20 xl:mr-3 3xl:mr-32 gap-5 2xl:gap-4 md:items-center ">
        <div className="flex flex-row md:justify-center xs:m-auto">
          <h1 className="font-[Playfair] 3xl:text-2xl 2xl:text-xl text-7xl 5xl:text-5xl text-[#583101] lg:text-xl md:text-4xl xs:text-xl xxs:text-lg">
            FEATURED OFFER
          </h1>
          <img src="design.png" className="3x:pr-4 w-60 4xl:w-40 xl:w-24 4xl:h-auto h-16 md:hidden" />
        </div>
        <h1 className="font-[Playfair] 5xl:text-5xl 3xl:text-4xl 2xl:text-3xl text-6xl text-[#121619] lg:text-3xl md:text-5xl xs:text-2xl xxs:text-3xl">
          Economy Luxe Room
        </h1>
        <img src="offer.png" className=" hidden  md:flex w-96  xxs:w-80 xs:w-80 xm:w-72" />
        <p className="3xl:w-[479px] 2xl:w-[500px] xl:w-[400px] w-[748px]  text-xl font-[Poppins] 4xl:w-[582px] 3xl:text-sm text-[#121619] md:w-[635px] sm:w-[519px] xs:text-xs xs:w-80 xxs:w-[315px] xm:w-64">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, risus
          dictum sed sit. Suspendisse congue est pellentesque nec. Sed tincidunt
          aliquam morbi diam faucibus sodales. Auctor lacus, sed amet velit leo,
          felis eget in proin. Arcu enim, est dictum venenatis convallis tortor.
          Malesuada vestibulum a sed libero sapien, tellus.
        </p>
        <div className="flex flex-row gap-5 lg:gap-[10.25px] xm:flex-col">
          <div className="flex flex-col w-64 xs:w-44 xs:p-3  p-4 gap-4">
            <div className="flex flex-row items-end gap-3 ">
              <h1 className="font-[Playfair] text-6xl lg:text-5xl xs:text-3xl 2xl:text-5xl  text-[#000000] xm:text-5xl">25%</h1>
              <h1 className="font-[Playfair] text-2xl lg:text-xl  text-[#000000] xs:text-sm xxs:text-base xm:text-xl">
                DISCOUNT
              </h1>
            </div>
            <h1 className="font-[Poppins] text-xl 2xl:text-lg text-[#121619] lg:text-sm xxs:text-xs xm:text-xs">
              STAY 6 MONTHS OR MORE
            </h1>
          </div>
          <img src="line.png" className="h-44 2xl:h-32 lg:h-32 xm:hidden" />
          <div className="flex flex-col  w-64 xs:w-40 xm:w-44 p-3 lg:p-2 gap-4">
            <div className="flex flex-row items-end gap-3">
              <h1 className="font-[Playfair] text-6xl text-[#000000] lg:text-5xl 2xl:text-5xl xs:text-3xl xm:text-5xl">10%</h1>
              <h1 className="font-[Playfair] text-2xl xs:text-sm text-[#000000] lg:text-xl xxs:text-base  xm:text-xl">
                DISCOUNT
              </h1>
            </div>
            <h1 className="font-[Poppins] text-xl text-[#121619] 2xl:text-lg lg:text-sm xxs:text-xs xm:text-xs">
              STAY 2 MONTHS OR MORE
            </h1>
          </div>
          
        </div>
        <div>
        <a className="flex flex-row justify-center items-center px-14 xl:px-5 py-1 bg-[#583101] hover:cursor-pointer hover:bg-[#724918]">
            <h1 className=" font-[Poppins] 3xl:text-base xl:text-sm 5xl:text-2xl text-4xl text-[#F8e0a6] font-normal ">
              Book Now
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
