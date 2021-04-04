import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bannerReducer } from "./bannerReducer";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { sliderReducer } from "./sliderReducer";
import { overlayReducer } from "./overlayReducer";

export let rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  slider: sliderReducer,
  banner: bannerReducer,
  product: productReducer,
  cart: cartReducer,
  overlay: overlayReducer,
});
