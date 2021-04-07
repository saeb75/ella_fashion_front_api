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
  GET_BEST_SELLING_PRODUCTS_REQUEST,
  GET_BEST_SELLING_PRODUCTS_SUCCESS,
  GET_BEST_SELLING_PRODUCTS_FAILURE,
  GET_NEW_PRODUCTS_REQUEST,
  GET_NEW_PRODUCTS_SUCCESS,
  GET_NEW_PRODUCTS_FAILURE,
} from "./actionType";

export const getProducts = (slug, color, size, price, brand, sort, order) => (
  dispatch
) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  ApiFunc()
    .post("product/by/categories", {
      slug,
      color,
      size,
      price,
      brand,
      sort,
      order,
    })
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
export const getBestSellingProducts = (sort, order) => (dispatch) => {
  dispatch({ type: GET_BEST_SELLING_PRODUCTS_REQUEST });
  ApiFunc()
    .get(`product/sort/get?sort=${sort}&order=${order}`)
    .then((res) =>
      dispatch({
        type: GET_BEST_SELLING_PRODUCTS_SUCCESS,
        payload: res.data.products,
      })
    )
    .catch((err) => dispatch({ type: GET_BEST_SELLING_PRODUCTS_FAILURE }));
};

export const getNewProducts = (sort, order) => (dispatch) => {
  dispatch({ type: GET_NEW_PRODUCTS_REQUEST });
  ApiFunc()
    .get(`product/sort/get`)
    .then((res) =>
      dispatch({
        type: GET_NEW_PRODUCTS_SUCCESS,
        payload: res.data.products,
      })
    )
    .catch((err) => dispatch({ type: GET_NEW_PRODUCTS_FAILURE }));
};
