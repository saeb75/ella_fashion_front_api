import React, { useEffect } from "react";
import { useState } from "react";

const useUnique = (product, key) => {
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);

  let listColor = [];
  let listSize = [];
  let listBrand = [];
  let UniqueColor;
  let UniqueSize;
  let UniqueBrand;
  useEffect(() => {
    product.productsDetails.map((productDet) => {
      productDet.productDetails.map((item) => {
        listColor.push(item.color);
      });
    });

    UniqueColor = [
      ...new Map(listColor.map((item) => [item["prName"], item])).values(),
    ];

    setColors(UniqueColor);
  }, [product]);
  useEffect(() => {
    product.productsDetails.map((productDet) => {
      productDet.productDetails.map((item) => {
        listSize.push(item.size);
      });
    });

    UniqueSize = [...new Set(listSize)];

    setSizes(UniqueSize);
  }, [product]);

  useEffect(() => {
    product.productsDetails.map((productDet) => {
      listBrand.push(productDet.brand);
    });

    UniqueBrand = [...new Set(listBrand)];

    setBrands(UniqueBrand);
  }, [product]);
  return { colors, sizes, brands };
};

export default useUnique;
