import {
  GET_BEST_SELLING_PRODUCTS_FAILURE,
  GET_BEST_SELLING_PRODUCTS_REQUEST,
  GET_BEST_SELLING_PRODUCTS_SUCCESS,
  GET_NEW_PRODUCTS_FAILURE,
  GET_NEW_PRODUCTS_REQUEST,
  GET_NEW_PRODUCTS_SUCCESS,
  GET_PRODUCTS_DETAILS_FAILURE,
  GET_PRODUCTS_DETAILS_REQUEST,
  GET_PRODUCTS_DETAILS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_DETAILS_FAILURE,
  GET_SINGLE_PRODUCT_DETAILS_REQUEST,
  GET_SINGLE_PRODUCT_DETAILS_SUCCESS,
} from "../Actions/actionType";

let initialState = {
  loading: false,
  productsByCategories: [],
  productsDetails: [],
  singleProduct: "",
  bestSelling: [],
  newProducts: [],
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
    case GET_SINGLE_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        singleProduct: action.payload,
      };
    case GET_SINGLE_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_BEST_SELLING_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BEST_SELLING_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        bestSelling: action.payload,
      };
    case GET_BEST_SELLING_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_NEW_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_NEW_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        newProducts: action.payload,
      };
    case GET_NEW_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
