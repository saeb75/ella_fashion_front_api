import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bannerReducer } from "./bannerReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { sliderReducer } from "./sliderReducer";

export let rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  slider: sliderReducer,
  banner: bannerReducer,
  product: productReducer,
});
