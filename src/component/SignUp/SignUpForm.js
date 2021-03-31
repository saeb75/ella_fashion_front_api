import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import EllaModal from "../Modal/EllaModal";
import ErrorMessage from "../../helper/ErrorMassage";
import { registerUser } from "../../Actions/authAction";
import { useEffect } from "react";
import { OFF_MODAL } from "../../Actions/actionType";

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { register, handleSubmit, errors, watch } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  const handModalClose = () => {
    setShow(false);
    history.push("/");
    dispatch({ type: OFF_MODAL });
  };
  useEffect(() => {
    setShow(false);
  }, []);
  useEffect(() => {
    if (auth.sentActiveMsg) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [auth.sentActiveMsg]);
  return (
    <Container className="sign_up_form py-5">
      <div className="sign_up_form_header pb-3 pt-1">
        <div className="sign_up_form_header_links">
          <NavLink to="/">home</NavLink> / <p>Create an Account</p>
        </div>
        <p className="sign_up_form_header_title">CREATE AN ACCOUNT</p>
      </div>
      <hr />
      <div className="sign_up_form_section">
        <p className="sign_up_form_section_title py-3">
          Sign up for a free account at Ella Boutique.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            ref={register({ required: true })}
            disabled={auth.loading}
          />
          {ErrorMessage({ error: errors.firstName })}
          <label>last name</label>
          <input
            type="text"
            name="lastName"
            ref={register({ required: true })}
            disabled={auth.loading}
          />
          {ErrorMessage({ error: errors.lastName })}
          <label> email</label>
          <input
            type="text"
            name="email"
            ref={register({ required: true })}
            disabled={auth.loading}
          />
          {ErrorMessage({ error: errors.email })}
          <label>password</label>
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
            disabled={auth.loading}
          />
          {ErrorMessage({ error: errors.password })}
          <button type="submit">
            {auth.loading ? "loading..." : "create an account"}
          </button>
          <div className="sign_up_form_register">
            <p>
              I have an account. <NavLink to="/login">login</NavLink>
            </p>
          </div>
        </form>
        <EllaModal
          size="sm"
          show={show}
          title="active account"
          handModalClose={handModalClose}
        >
          <p>{auth.msg}</p>
          <div className="flex-center mt-5">
            <button onClick={handModalClose}>Ok</button>
          </div>
        </EllaModal>
      </div>
    </Container>
  );
};

export default SignUpForm;
