import {
  GET_SLIDER_FAILURE,
  GET_SLIDER_REQUEST,
  GET_SLIDER_SUCCESS,
} from "../Actions/actionType";

let initialState = {
  loading: false,
  mainSlider: "",
};
export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SLIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        mainSlider: action.payload,
      };
    case GET_SLIDER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
