import { Add_To_Cart } from "../Constant";
import { Remove_To_Cart } from "../Constant";

const initialState = {
  cartData: [],
};

export default function cardItems(state = [], action) {
  //console.log(action);
  switch (action.type) {
    
    case Add_To_Cart:
      let check = false;
      state.map((item)=>{
        if(item.cartData.id==action.data.id)
        {
          check=true;
          item.cartData.quantity++;
        }
      })
      if(check)
      {
        return [...state];
      }
      else
      {
      return [...state, { cartData: action.data }];
      }

    case Remove_To_Cart:
      const remainingState = state.filter(
        (item) => item.cartData.id !== action.data
      );
      console.log("remaing check", remainingState);
      return [...remainingState];
    default:
      return state;
  }
}
