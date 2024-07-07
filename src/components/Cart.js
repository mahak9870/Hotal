import { useSelector } from 'react-redux';
import { removeToCart } from '../Services/Actions/Actions'
import { useDispatch } from 'react-redux';


export default function Cart() {
  const cartData = useSelector((state) => state.cardItems)
  const dispatch = useDispatch()


  const amount = cartData.length && cartData.map(e => e.cartData.price * e.cartData.quantity).reduce((prev, next) => { return (prev + next) })


  return (
    <div className="bg-[#F8e0a6] mt-52 lg:mt-36 md:mt-32 3xl:mt-28 ">
      <h1 className="flex items-center justify-center text-[#583101] text-7xl 3xl:text-4xl sm:text-2xl font-[Playfair]">CART</h1>
      {cartData.length == 0 ? <h1 className="flex text-9xl sm:text-3xl 3xl:text-7xl sm:text-4x my-64 xs:my-44 2xl:mb-28 2xl:mt-40 3xl:my-44 justify-center text-[#ebc08c] ">
        Empty Cart
      </h1> : (
        <div>

          {cartData.map((element, index) => {
            return (
              <div className='p-1'>
                <div className="flex items-center justify-start border-2 bg-[#583101] border-[#583101] " key={index} >
                  <img src={element.cartData.image} className="w-28 md:w-24 p-4 sm:p-2" />
                  <h1 className="p-4 text-xl font-[Playfail] md:text-base xs:text-xs text-[#F8e0a6] ">{element.cartData.name}</h1>
                  <p className="md:hidden pt-6 text-base font-[Playfail] md:text-base text-[#F8e0a6]">({element.cartData.type})</p>
                  <p className="pt-6 text-xl flex ml-16 md:ml-2 font-[Playfail] md:text-base xs:text-xs text-[#F8e0a6]">{element.cartData.quantity} * Rooms</p>
                  <h1 className="p-4 text-3xl font-[Playfail] md:text-2xl sm:text-xl ml-auto xs:text-base xs:mr-0 mr-11 md:mr-7 sm:mr-3 text-white">₹ {element.cartData.price * element.cartData.quantity}</h1>
                  <img src="garbage.png" className='h-8 md:h-6 sm:h-4 mr-5' onClick={() => { dispatch(removeToCart(element.cartData.id)) }} />
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div id="bottom">
        <div className="border-2 w-full items-center flex border-solid border-black  p-4 bg-[#583101]">
          <div className='flex xs:flex-col'>
          <h1 className="text-6xl 3xl:text-5xl 2xl:text-4xl md:text-3xl sm:text-2xl font-[Playfair] font-semibold p-5 text-[#F8e0a6]">₹ {amount}</h1>
          <h1 className="text-3xl 3xl:text-2xl mt-9 2xl:text-3xl xxs:text-base xs:mt-0 xs:text-lg sm:text-xl md:text-2xl text-[#F8e0a6] font-[Poppins]">Total Payable Amount</h1>
          </div>
          <a className="bg-[#F8e0a6] flex items-center p-3 h-fit rounded-md ml-auto xs:mr-2 mr-6">
            <h1 className="text-3xl 3xl:text-xl font-[Playfair] xxs:text-sm sm:text-base md:text-base xs:text-sm 2xl:text-lg  text-[#583101]">Proceed To PAY</h1>
          </a>
        </div>
      </div>
      
    </div>
  );
}
