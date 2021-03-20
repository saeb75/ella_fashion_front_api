import React from "react";
import { Container } from "react-bootstrap";
let data = [
  "CORDUROY",
  " PU LEATHER",
  "LONG SLEEVE",
  "TIE DYE",
  "HOODED",
  "PUFF SLEEVE",
  "CROP",
  "GRAPHIC",
  "RIB-KNIT",
  "RUFFLE",
];
const JumpTo = () => {
  return (
    <Container className="py-5">
      <div className="Jump_to ">
        <ul className="jump_to_list">
          <li className="jump_to_list_title">Jump To</li> :
          {data.map((item, index) => {
            return (
              <li key={index} className="jump_to_list_item line">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default JumpTo;
