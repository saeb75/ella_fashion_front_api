import React, { useEffect } from "react";
import { useState } from "react";

const useUnique = (product, key) => {
  const [uniqueList, setUniqueList] = useState([]);
  let list = [];
  let Unique;
  useEffect(() => {
    product.productsDetails.map((productDet) => {
      if (key === "color") {
        productDet.productDetails.map((item) => {
          list.push(item.color);
        });
      } else if (key === "size") {
        productDet.productDetails.map((item) => {
          list.push(item.size);
        });
      } else if (key === "brand") {
        productDet.productDetails.map((item) => {
          list.push(item.brand);
        });
      }
    });
    if (key === "color") {
      Unique = [
        ...new Map(list.map((item) => [item["prName"], item])).values(),
      ];
    } else {
      Unique = [...new Set(list)];
    }

    setUniqueList(Unique);
  }, [product]);
  return uniqueList;
};

export default useUnique;
