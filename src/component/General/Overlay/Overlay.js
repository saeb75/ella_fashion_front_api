import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_OVERLAY } from "../../../Actions/actionType";

const Overlay = () => {
  const dispatch = useDispatch();
  const overlay = useSelector((state) => state.overlay);
  const handleCloseOverlay = () => {
    dispatch({ type: CLOSE_OVERLAY });
  };
  return (
    <div
      className={`overlay ${overlay.open && "active"}`}
      onClick={handleCloseOverlay}
    ></div>
  );
};

export default Overlay;
