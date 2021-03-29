import axios from "axios";
/* import { SIGNOUT_SUCCESS } from "../Action/actionType"; */
/* import { store } from "../store/store"; */

export const ApiFunc = () => {
  let token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: "https://saeb-mern-ecommerce-server.herokuapp.com/api/",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  /* instance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if (auth.token) {
      req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
  });
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      const status = error.response ? error.response.status : 500;
      if (status && status === 500) {
        localStorage.clear();
        store.dispatch({ type: SIGNOUT_SUCCESS });
      }
      return Promise.reject(error);
    }
  ); */
  return instance;
};
