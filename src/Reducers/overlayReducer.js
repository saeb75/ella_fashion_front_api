import {
  CLOSE_OVERLAY,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  OPEN_OVERLAY,
} from "../Actions/actionType";

let initialState = {
  open: false,
};
export const overlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_OVERLAY:
      return {
        ...state,
        open: true,
      };
    case CLOSE_OVERLAY:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
