import React from 'react'
import { data } from "../HotelData";

export default function RoomSpec2(props) {

  const Id = props.id

  const hotel=data.filter((e)=>(e.id==Id))[0]

    return (
      <div
      className={`absolute flex  bg-[#583101] top-[2738px] lg:top-[2279px] xm:top-[2922px]  xs:top-[3728px] md:top-[1946px] ${
        props.slider ? "translate-x-0 xs:translate-x-40" : "translate-x-full"
      }  ease-in-out duration-300 h-fit right-0 z-10`}
    >
      <div className="p-8 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-[#F8e0a6] font-[Poppins]  border-l-8 border-[#F8e0a6] pl-2">
            {hotel.name}
          </h1>
          <img src={hotel.img} className="w-[361px] md:w-56 lg:w-60 rounded-xl" />
          <div className="flex flex-col gap-4">
           <div className="flex items-center">
              <img src="cup.png" className="h-5 pr-3" />
              <h1 className="text-base text-[#F8e0a6] font-[Poppins] ">
                    {hotel.breakfast}
              </h1>
            </div>
           <div className="flex">
              <img src="sleeping.png" className="h-5 pr-3" />
              <h1 className="text-base text-[#F8e0a6] font-[Poppins] ">
                {hotel.bed}
              </h1>
            </div>
           <div className="flex">
              <img src="guest.png" className="h-5 pr-3" />
              <h1 className="text-base xs:text-sm text-[#F8e0a6] font-[Poppins] w-auto lg:w-96 ">
                Max guests : 1 adults. The T&C for the child check-in policy
                will
           
                depend on the hotel.
              </h1>
            </div>
            <div className="flex xs:flex-col xs:gap-7 gap-36 lg:gap-20">
             <div className="flex">
                <img src="expand.png" className="h-5 pr-3" />
                <h1 className="text-base text-[#F8e0a6] font-[Poppins] ">
                  Room size:28.0 m²
                </h1>
              </div>
             <div className="flex">
                <img src="buildings.png" className="h-5 pr-3" />
                <h1 className="text-base text-[#F8e0a6] font-[Poppins] ">
                  City view
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex  bg-black border-2 border-solid border-white lg:w-96 md:w-64">
              <h1 className="text-4xl lg:text-2x md:text-xl  text-[white] p-3 font-[Playfair]">
               {hotel.price}
              </h1>
              <h1 className="text-sm flex text-[white]  items-end pb-4 font-[Poppins] justify-end">
                per night
              </h1>
             <div className=" gap-2 flex  border-2 border-white xs:ml-4 h-fit md:ml-5 p-2 m-auto ml-96 lg:ml-28 rounded-md hover:cursor-pointer">
                <li className="font-[Poppins] text-base xs:text-sm font-semibold  text-white list-none ">
                  ADD
                </li>
                <img src="cart.png" className="h-6 xs:h-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
    }
