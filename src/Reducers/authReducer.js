import {
  ACTIVE_USER_ACCOUNT_FAILURE,
  ACTIVE_USER_ACCOUNT_REUQEST,
  ACTIVE_USER_ACCOUNT_SUCCESS,
  OFF_MODAL,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Actions/actionType";

let initialState = {
  firstName: "",
  loading: false,
  msg: "",
  sentActiveMsg: false,
  accountAtivated: false,
  user: "",
  token: "",
  authenticated: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: "we sent activate code to your email",
        sentActiveMsg: true,
      };

    case USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        msg: "register is failed,please try again",
        sentActiveMsg: true,
      };
    case OFF_MODAL:
      return {
        ...state,
        loading: false,
        msg: "",
        sentActiveMsg: false,
      };
    case ACTIVE_USER_ACCOUNT_REUQEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIVE_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: "your account is active",
        accountAtivated: true,
      };
    case ACTIVE_USER_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        msg: "activate account is failure,please try again later",
        accountAtivated: false,
      };
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: { ...action.payload.user },
        token: action.payload.token,
        authenticated: true,
      };
    case USER_LOGIN_FAILURE:
      return { ...state, loading: false, authenticated: false };
    default:
      return state;
  }
};
