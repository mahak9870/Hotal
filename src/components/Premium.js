import React, { useState } from "react";
import RoomSpec2 from "./RoomSpec2";
import RoomSpec2Container from '../Containers/RoomSpec2Container'

export default function Premium() {
  
  const [slider , setSlider] = useState(false)
  const [hotelId , setHotelId] = useState(undefined)
 

  const slideronclick = (e) =>{
    setHotelId(e.currentTarget.title)
     setSlider(!slider)
  }

  return (
    <div className=" h-fit mt-36  xs:mt-[1252px] xxs:mt-[1000px] xm:mt-[763px]">
      <div className="flex flex-col m-9 gap-5">
        <div className="flex flex-row xs:flex-col xs:gap-3 xs:items-center">
          <h1 className="font-[Playfair] text-4xl md:text-3xl xs:text-2xl xm:text-lg  text-[#583101] font-medium">
            The best rooms just for you !
          </h1>
         <div
            className=" flex ml-auto xs:ml-0 xs:m-auto bg-[#583101] mr-8 xs:mr-0 rounded-lg items-center hover:cursor-pointer hover:bg-[#724918]"           
          >
            <h1 className="font-[Playfair] text-4xl md:text-2xl xs:text-2xl text-[#F8e0a6] p-3 xs:m-auto xm:text-xl">
              Premium Rooms
            </h1>
            <img src="down-arrow.png" className="h-8 pr-3" />
         </div>
        </div>
      </div>

      {slider && 
      <div>
       <RoomSpec2Container id={hotelId} slider={slider} />
      </div>
}
        <div className="flex flex-row flex-wrap  w-[911px] md:w-[751px] xs:w-[407px] xxs:w-[358px] xm:w-[303px] h-[616px] md:h-[500px] m-auto">
         <div  title={6} className="hover:cursor-pointer" onClick={slideronclick}>
            <img
              src="room5.png"
              className="h-[415px] md:h-[340px] xs:h-[570px]  xxs:h-[499px] p-1 xm:h-[423px]"
            />
           <div className="absolute ml-1 -mt-[411px] bg-white md:-mt-[336px] xs:-mt-[566px] xxs:mt-[-495px] xm:mt-[-419px]">
              <h1 className="font-[Poppins] text-base p-2 text-[#583101]">
              ₹ 10,000/night
              </h1>
           </div>
            <h1 className="absolute ml-5 -mt-11 font-[Playfair] text-base text-white">
              Couple Simple Room
            </h1>
         </div>
         <div title={7} className="hover:cursor-pointer" onClick={slideronclick}>
            <img
              src="room4.png"
              className="h-[415px] md:h-[340px] xs:h-[279px] xxs:h-[246px] p-1 xm:h-[208px]"
            />
           <div className="absolute ml-1 -mt-[411px] bg-white md:-mt-[336px] xs:mt-[-275px]  xxs:mt-[-242px] xm:mt-[-204px]">
              <h1 className="font-[Poppins] text-base p-2 text-[#583101]">
              ₹ 7000/night
              </h1>
           </div>
            <h1 className="absolute ml-5 -mt-11 font-[Playfair] text-base text-white">
              Luxe Room
            </h1>
         </div>
         <div title={8} className="hover:cursor-pointer" onClick={slideronclick}>
            <img
              src="room3.png"
              className="h-[197px] md:h-[162px] p-1 xs:h-[266px] xxs:h-[235px] xm:h-[199px]"
            />
           <div className="absolute ml-1 -mt-[193px] bg-white md:-mt-[158px] xs:mt-[-262px]  xxs:mt-[-231px] xm:mt-[-196px]">
              <h1 className="font-[Poppins] text-xs font-semibold p-2 text-[#583101]">
              ₹ 5000/night
              </h1>
           </div>
            <h1 className="absolute ml-5 -mt-11 font-[Playfair] text-base text-white">
              Single Room
            </h1>
         </div>
         <div title={9} className="hover:cursor-pointer" onClick={slideronclick}>
            <img
              src="room2.png"
              className="h-[197px] md:h-[162px] p-1 xs:h-[266px]  xxs:h-[221px] xm:h-[188px]"
            />
           <div className="absolute ml-1 -mt-[193px] bg-white md:-mt-[158px] xs:mt-[-262px]  xxs:mt-[-217px] xm:mt-[-184px]">
              <h1 className="font-[Poppins] text-xs font-semibold p-2 text-[#583101]">
              ₹ 5000/night
              </h1>
           </div>
            <h1 className="absolute ml-5 -mt-11 font-[Playfair] text-base text-white">
              Master Room
            </h1>
         </div>
         <div title={10} className="hover:cursor-pointer" onClick={slideronclick}>
            <img
              src="room1.png"
              className="h-[197px] md:h-[162px] p-1 xs:h-[276px]  xxs:h-[243px] xm:h-[207px]"
            />
           <div className="absolute ml-1 -mt-[193px] bg-white md:-mt-[158px] xs:mt-[-272px]  xxs:mt-[-239px] xm:mt-[-204px]">
              <h1 className="font-[Poppins] text-xs font-semibold p-2 text-[#583101]">
              ₹ 8000/night
              </h1>
           </div>
            <h1 className="absolute ml-5 -mt-11 font-[Playfair] text-base text-white">
              Family Luxe
            </h1>
         </div>
        </div>
    
      ;
      
    </div>
  );
}
