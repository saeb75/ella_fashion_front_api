import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { categoryReducer } from "./categoryReducer";
import { sliderReducer } from "./sliderReducer";

export let rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  slider: sliderReducer,
});
