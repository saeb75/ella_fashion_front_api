import { ApiFunc } from "../Axios/Axios";
import {
  ACTIVE_USER_ACCOUNT_FAILURE,
  ACTIVE_USER_ACCOUNT_REUQEST,
  ACTIVE_USER_ACCOUNT_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./actionType";

export let registerUser = (data) => (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  ApiFunc()
    .post("user/register", data)
    .then((res) => dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: USER_REGISTER_FAILURE, payload: err }));
};

export let activeAccount = (token) => (dispatch) => {
  dispatch({ type: ACTIVE_USER_ACCOUNT_REUQEST });
  ApiFunc()
    .post("user/activate", { token })
    .then((res) =>
      dispatch({ type: ACTIVE_USER_ACCOUNT_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ACTIVE_USER_ACCOUNT_FAILURE, payload: err })
    );
};
