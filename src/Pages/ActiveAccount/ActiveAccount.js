import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import EllaModal from "../../component/Modal/EllaModal";
import { activeAccount } from "./../../Actions/authAction";

const ActiveAccount = () => {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let { token } = useParams();
  useEffect(() => {
    dispatch(activeAccount(token));
  }, []);
  const handModalClose = () => {
    setShow(false);
    history.push("/");
  };
  return (
    <div>
      <EllaModal
        show={show}
        title="active account"
        handModalClose={handModalClose}
      >
        <div>
          <p>{auth.loading ? "loading..." : auth.msg}</p>
          <div className="flex-center mt-5">
            <button onClick={handModalClose}>ok</button>
          </div>
        </div>
      </EllaModal>
    </div>
  );
};

export default ActiveAccount;
