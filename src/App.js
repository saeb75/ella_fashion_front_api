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
import { useDispatch } from "react-redux";
import { getBanners } from "./Actions/bannerAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, []);
  let location = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/category/:slug" component={CategorySearch} />
            <Route path="/product" component={SingleProduct} />
            <Route path="/register" component={SignUp} />
            <Route path="/active/account/:token" component={ActiveAccount} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
