import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_CART_ITEMS_SUCCESS,
} from "../Actions/actionType";

let initialState = {
  cartItems: {},
  loading: false,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };
    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
