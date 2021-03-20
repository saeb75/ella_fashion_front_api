import { ApiFunc } from "../Axios/Axios";
import {
  GET_BANNERS_FAILURE,
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
} from "./actionType";

export const getBanners = () => (dispatch) => {
  dispatch({ type: GET_BANNERS_REQUEST });
  ApiFunc()
    .get("banner/get")
    .then((res) => dispatch({ type: GET_BANNERS_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_BANNERS_FAILURE }));
};
