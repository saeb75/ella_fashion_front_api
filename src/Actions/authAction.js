import { ApiFunc } from "../Axios/Axios";
import {
  ACTIVE_USER_ACCOUNT_FAILURE,
  ACTIVE_USER_ACCOUNT_REUQEST,
  ACTIVE_USER_ACCOUNT_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./actionType";
var jwt = require("jsonwebtoken");
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

export const loginUser = (data) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  ApiFunc()
    .post("user/login", data)
    .then((res) => {
      let user = jwt.decode(res.data.token);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { token: res.data.token, user: user.user },
      });
    })
    .catch((err) => console.log(err.response));
};

export const loginControl = () => (dispatch) => {
  let token = localStorage.getItem("token");
  if (token) {
    let user = jwt.decode(token);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { token: token, user: user.user },
    });
  }
};
export const SignOutUser = () => (dispatch) => {
  localStorage.removeItem("token");
};
