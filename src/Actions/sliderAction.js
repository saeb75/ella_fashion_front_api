import { ApiFunc } from "../Axios/Axios";
import {
  GET_SLIDER_FAILURE,
  GET_SLIDER_REQUEST,
  GET_SLIDER_SUCCESS,
} from "./actionType";

export const getMainSlider = () => (dispatch) => {
  dispatch({ type: GET_SLIDER_REQUEST });
  ApiFunc()
    .get("slider/get")
    .then((res) => dispatch({ type: GET_SLIDER_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_SLIDER_FAILURE }));
};
