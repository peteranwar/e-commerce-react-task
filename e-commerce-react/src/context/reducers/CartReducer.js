import {ADD_TO_CART , GET_CART , REMOVE_ITEM , INCREMENT_ITEM , DECREMENT_ITEM} from "../types/types"

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
      
    case GET_CART:
      return{
        ...state,
        cartItems: [...state.cartItems, ...action.payload]
      } 
      case REMOVE_ITEM: {
        const result = state.cartItems.filter(
          (item) => item.id !== action.payload)
        return {
          ...state,
          cartItems: result
        };
       }
       case INCREMENT_ITEM: {    
        return {
          ...state,
          cartItems: action.payload 
        };
       }
       case DECREMENT_ITEM: {    
        return {
          ...state,
          cartItems: action.payload  
        };
       }
     
    default:
      return state 
  }
}