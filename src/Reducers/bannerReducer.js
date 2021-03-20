import {
  GET_BANNERS_FAILURE,
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
} from "../Actions/actionType";

let initialState = {
  loading: "",
  collection: "",
  bigBanner: "",
  bestCategory: "",
  singleFourthBanner: "",
  homeFourthBanner: "",
};
export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BANNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        bestCategory: action.payload.bestCategory,
        bigBanner: action.payload.bigBanner,
        collection: action.payload.collection,
        homeFourthBanner: action.payload.homeFourthBanner,
        singleFourthBanner: action.payload.singleFourthBanner,
      };
    case GET_BANNERS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
