import { Container } from "react-bootstrap";
import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./styles/styles.scss";
import { GlobalStyle, theme } from "./Global";
import Home from "./Pages/Home/Home";
import CategorySearch from "./Pages/CategorySearch/CategorySearch";
import { AnimatePresence } from "framer-motion";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import { useEffect } from "react";
import SignUp from "./Pages/SignUp/SignUp";
import ActiveAccount from "./Pages/ActiveAccount/ActiveAccount";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "./Actions/bannerAction";
import SignIn from "./Pages/SignIn/SignIn";
import { loginControl } from "./Actions/authAction";
import Cart from "./Pages/Cart/Cart";
import { getCartItems, updatedCart } from "./Actions/cartAction";
import { getCategories } from "./Actions/categoryAction";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getBanners());
  }, []);
  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(loginControl());
    }
    dispatch(updatedCart());
    dispatch(getCartItems());
  }, [auth.authenticated]);
  let location = useLocation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/category/:slug" component={CategorySearch} />
            <Route path="/product/:slug" component={SingleProduct} />
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route path="/active/account/:token" component={ActiveAccount} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
