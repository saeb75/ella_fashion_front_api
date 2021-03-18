import React, { useState } from "react";
import { Container } from "react-bootstrap";
import profile from "../../../assents/profile/1.jpg";
import { MdRateReview } from "react-icons/md";
const CustumerReview = () => {
  const [addReview, setAddReview] = useState(false);
  return (
    <Container fluid>
      <hr />
      <div className="custumer_review my-3 py-3">
        <p className="custumer_review_title">Customer Reviews</p>
        <div className="my-5 custumer_review_container">
          <div className="custumer_review_body">
            <div className="avatar">
              <img src={profile} />
            </div>
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div>
        </div>

        <button
          className="custumer_review_button"
          onClick={() => setAddReview(!addReview)}
        >
          <span>
            <MdRateReview />
          </span>
          write a review
        </button>
        {addReview && <AddReview />}
      </div>
      <hr />
    </Container>
  );
};

export default CustumerReview;

const AddReview = () => {
  return (
    <div className="add_review my-5">
      <label>Name</label>
      <input type="text" placeholder="Enter Your Name" />
      <label>Email</label>
      <input type="text" placeholder="Enter Your Email" />
      <label>review title</label>
      <input type="text" placeholder="Give Your Review Title" />

      <label>body of review</label>
      <textarea placeholder="Right Your Review Here" />
      <button>submit Review</button>
    </div>
  );
};
