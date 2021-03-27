import React from "react";
import Footer from "../../component/Home/Footer/Footer";
import Header from "../../component/Home/Header/Header";
import Menu from "../../component/Home/Menu/Menu";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import SignInForm from "../../component/SignIn/SignInForm";

const SignIn = () => {
  return (
    <div>
      <Header />
      <Menu />
      <SignInForm />
      <NewsSignup />
      <Footer />
    </div>
  );
};

export default SignIn;
