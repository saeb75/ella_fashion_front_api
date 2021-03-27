import { ApiFunc } from "../Axios/Axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_DETAILS_REQUEST,
  GET_PRODUCTS_DETAILS_SUCCESS,
  GET_PRODUCTS_DETAILS_FAILURE,
  GET_SINGLE_PRODUCT_DETAILS_REQUEST,
  GET_SINGLE_PRODUCT_DETAILS_SUCCESS,
  GET_SINGLE_PRODUCT_DETAILS_FAILURE,
} from "./actionType";

export const getProducts = (slug, color, size, price, brand) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  ApiFunc()
    .post("product/by/categories", { slug, color, size, price, brand })
    .then((res) =>
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data.products })
    )
    .catch((err) => dispatch({ type: GET_PRODUCTS_FAILURE }));
};

export const getProducDetails = (slug) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_DETAILS_REQUEST });
  ApiFunc()
    .post("product/by/categories", { slug })
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS_DETAILS_SUCCESS,
        payload: res.data.products,
      })
    )
    .catch((err) => dispatch({ type: GET_PRODUCTS_DETAILS_FAILURE }));
};
export const getSingleProduct = (slug) => (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCT_DETAILS_REQUEST });
  ApiFunc()
    .post("product/single", { slug })
    .then((res) =>
      dispatch({
        type: GET_SINGLE_PRODUCT_DETAILS_SUCCESS,
        payload: res.data.product,
      })
    )
    .catch((err) => dispatch({ type: GET_SINGLE_PRODUCT_DETAILS_FAILURE }));
};
