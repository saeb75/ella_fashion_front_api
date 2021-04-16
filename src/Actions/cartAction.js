import { ApiFunc } from "../Axios/Axios";
import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_CART_ITEMS_FAILURE,
  GET_CART_ITEMS_REQUEST,
  GET_CART_ITEMS_SUCCESS,
} from "./actionType";
import { store } from "../store/store";
export const addToCart = (product, size, color, newQty = 1) => (dispatch) => {
  let {
    cart: { cartItems },
    auth,
  } = store.getState();
  let cartItemsId = product._id + "&" + size + "&" + color._id;
  let qty = cartItems[cartItemsId]
    ? parseInt(cartItems[cartItemsId].qty + newQty)
    : 1;

  cartItems[cartItemsId] = {
    ...product,
    size,
    color,
    qty,
    productId: product._id,
  };
  if (auth.authenticated) {
    let payload = {
      cartItems: [
        { product: product._id, quantity: qty, size, color: color._id },
      ],
    };
    ApiFunc()
      .post("cart/add", payload)
      .then()
      .catch((err) => dispatch({ type: ADD_TO_CART_FAILURE }));
  } else {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  dispatch({ type: ADD_TO_CART_SUCCESS, payload: cartItems });
};

export const getCartItems = (req, res) => (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_REQUEST });
  const { auth } = store.getState();
  if (auth.authenticated) {
    ApiFunc()
      .get("cart/get")
      .then((res) =>
        dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: GET_CART_ITEMS_FAILURE }));
  }
};

export const updatedCart = (req, res) => (dispatch) => {
  const { auth } = store.getState();
  let cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
  if (auth.authenticated) {
    localStorage.removeItem("cart");
    if (cartItems) {
      let payload = {
        cartItems: Object.keys(cartItems).map((key, index) => {
          return {
            product: cartItems[key]._id,
            quantity: cartItems[key].qty,
            size: cartItems[key].size,
            color: cartItems[key].color._id,
          };
        }),
      };

      if (Object.keys(cartItems).length > 0) {
        ApiFunc()
          .post("cart/add", payload)
          .then(dispatch(getCartItems()))
          .catch((err) => dispatch({ type: ADD_TO_CART_FAILURE }));
      } else {
        getCartItems();
      }
    }
  } else {
    if (cartItems) {
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: cartItems });
    }
  }
};

export const removeFromCart = (color, size, id) => (dispatch) => {
  const { auth } = store.getState();
  if (auth.authenticated) {
    ApiFunc()
      .post("/cart/remove", { color, size, id })
      .then((res) => dispatch(getCartItems()))
      .catch((err) => console.log(err));
  } else {
    let cart = JSON.parse(localStorage.getItem("cart"));

    let updatedCart = delete cart[`${id + "&" + size + "&" + color._id}`];

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: cart });
  }
};
