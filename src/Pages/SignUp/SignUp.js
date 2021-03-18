import React from "react";
import Footer from "../../component/Home/Footer/Footer";
import Header from "../../component/Home/Header/Header";
import Menu from "../../component/Home/Menu/Menu";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import SignUpForm from "../../component/SignUp/SignUpForm";

const SignUp = () => {
  return (
    <div>
      <Header />
      <Menu />
      <SignUpForm />
      <NewsSignup />
      <Footer />
    </div>
  );
};

export default SignUp;
