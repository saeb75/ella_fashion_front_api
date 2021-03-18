import React from "react";
import { Container, Form } from "react-bootstrap";
import { GrSplit, GrSplits } from "react-icons/gr";
import { GoSettings } from "react-icons/go";

const SortBy = ({ setOpen }) => {
  return (
    <Container className="category_sort_by">
      <div className="category_sort_by_title">
        <div>
          <span>home</span> / <span>New In</span>
        </div>
      </div>

      <div className="category_sort_by_container py-3">
        <div className="grid_view">
          <p>view as </p>
          <div className="grid_icons">
            <GrSplit />
            <GrSplits />
          </div>
        </div>

        <div>
          <div className="category_sort_by_select">
            <div className="pageItems">
              <p>items per page </p>
              <Form.Control as="select" size="sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </div>
            <div>
              <p>sort by </p>
              <Form.Control as="select" size="sm">
                <option>shoes</option>
                <option>blues</option>
                <option>t-shirt</option> <option>Large select</option>{" "}
              </Form.Control>
            </div>
          </div>
        </div>
        <div className="filterToggle" onClick={() => setOpen(true)}>
          <GoSettings />
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default SortBy;
