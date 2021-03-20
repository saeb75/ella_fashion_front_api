import {
  GET_PRODUCTS_DETAILS_FAILURE,
  GET_PRODUCTS_DETAILS_REQUEST,
  GET_PRODUCTS_DETAILS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../Actions/actionType";

let initialState = {
  loading: false,
  productsByCategories: [],
  productsDetails: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productsByCategories: action.payload,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_PRODUCTS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productsDetails: action.payload,
      };
    case GET_PRODUCTS_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
