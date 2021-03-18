import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AccordionMenu = () => {
  return (
    <div className="product_details_acoordion my-5">
      <FilterSection title="shipping and return">
        <Shipping />
      </FilterSection>
      <FilterSection title="custum tab">
        <p className="shipping_body ">
          Nam tempus turpis at metus scelerisque placerat nulla deumantos
          solicitud felis. Pellentesque diam dolor, elementum etos lobortis des
          mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
          commodo pharetras loremos.Donec pretium egestas sapien et mollis.
          Pellentesque diam dolor cosmopolis etos lobortis.
        </p>
      </FilterSection>
    </div>
  );
};

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("");
  let filterHeight = useRef();

  useEffect(() => {
    setHeight(filterHeight.current.offsetHeight);
  }, []);

  return (
    <div className="filter_section">
      <li onClick={() => setOpen(!open)}>
        <span>{open ? "-" : "+"}</span> {title}
      </li>
      <FilterBody height={height} active={open}>
        <div ref={filterHeight} className={`filter_section_children py-3`}>
          {children}
        </div>
      </FilterBody>
    </div>
  );
};
const FilterBody = styled.div`
  height: 0px;
  overflow: hidden;
  transition: 0.4s height;
  ${({ active, height }) => (active ? `height:${height}px` : "")}
`;
export default AccordionMenu;

const Shipping = () => {
  return (
    <div>
      <p className="shipping_title">RETURNS</p>
      <p className="shipping_body">
        POLICY Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
        blandit risus. Donec mollis nec tellus et rutrum. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut
        consequat quam a purus faucibus scelerisque. Mauris ac dui ante.
        Pellentesque congue porttitor tempus. Donec sodales dapibus urna sed
        dictum. Duis congue posuere libero, a aliquam est porta quis. Donec
        ullamcorper magna enim, vitae fermentum turpis elementum quis. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Curabitur vel sem
        mi. Proin in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum.
        Maecenas nunc nulla, placerat at eleifend in, viverra etos sem. Nam
        sagittis lacus metus, dignissim blandit magna euismod eget. Suspendisse
        a nisl lacus. Phasellus eget augue tincidunt, sollicitudin lectus sed,
        convallis desto. Pellentesque vitae dui lacinia, venenatis erat sit
        amet, fringilla felis. Nullam maximus nisi nec mi facilisis.
      </p>
      <p className="shipping_title">SHIPPING</p>
      <p className="shipping_body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
        blandit risus. Donec mollis nec tellus et rutrum. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut
        consequat quam a purus faucibus scelerisque. Mauris ac dui ante.
        Pellentesque congue porttitor tempus. Donec sodales dapibus urna sed
        dictum. Duis congue posuere libero, a aliquam est porta quis. Donec
        ullamcorper magna enim, vitae fermentum turpis elementum quis. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Curabitur vel sem
        mi. Proin in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum.
        Maecenas nunc nulla, placerat at eleifend in, viverra etos sem. Nam
        sagittis lacus metus, dignissim blandit magna euismod eget. Suspendisse
        a nisl lacus. Phasellus eget augue tincidunt, sollicitudin lectus sed,
        convallis desto. Pellentesque vitae dui lacinia, venenatis erat sit
        amet, fringilla felis. Nullam maximus nisi nec mi facilisis.
      </p>
    </div>
  );
};
