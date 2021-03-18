import { motion } from "framer-motion";
import React from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { ToScale } from "../animations/animations";
const EllaModal = ({ children, size, title, show, handModalClose }) => {
  return (
    <Modal show={show} size={size}>
      <div className="ella_modal">
        <div className="ella_modal_header">
          <p>{title}</p>
          <p>
            <AiOutlineClose onClick={handModalClose} />
          </p>
        </div>
        <div className="ella_modal_body">{children}</div>
      </div>
    </Modal>
  );
};

export default EllaModal;
