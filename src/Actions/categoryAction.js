import { bindActionCreators } from "redux";
import { ApiFunc } from "../Axios/Axios";
import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "./actionType";
export const getCategories = () => (dispatch) => {
  dispatch({ type: GET_CATEGORIES_REQUEST });
  ApiFunc()
    .get("category/get")
    .then((res) =>
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: res.data.allCategories,
      })
    )
    .catch((err) => dispatch({ type: GET_CATEGORIES_FAILURE }));
};
